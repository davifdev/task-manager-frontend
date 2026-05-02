import { useForm } from "react-hook-form";
import { Button } from "../button";
import { Input } from "../input";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registerUserSchema,
  type RegisterUserSchemaType,
} from "../../schemas/user/register.schema";
import { useSignUp } from "../../hooks/user/useAuth";
import { useDispatch } from "react-redux";
import { signUp } from "../../store/reducers/auth/auth.slice";
import { useAppSelector } from "../../hooks/redux/useAppSelector";

export const Register = () => {
  const user = useAppSelector((state) => state.AuthUser);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerUserSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const signUpMutation = useSignUp();

  const onSubmit = async (data: RegisterUserSchemaType) => {
    const response = await signUpMutation.mutateAsync(data);
    localStorage.setItem("accessToken", response.accessToken);

    dispatch(
      signUp({
        email: response.email,
        username: response.username,
      })
    );
  };

  console.log(user);
  return (
    <form
      className="w-full max-w-2xl space-y-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        labelText="Nome do usuário"
        placeholder="Digite seu usuário"
        {...register("username")}
        errorMessage={errors.username?.message}
      />
      <Input
        labelText="Email"
        placeholder="Digite seu e-mail"
        {...register("email")}
        errorMessage={errors.email?.message}
      />
      <Input
        type="password"
        labelText="Senha"
        placeholder="Digite sua senha"
        {...register("password")}
        errorMessage={errors.password?.message}
      />
      <Input
        type="password"
        labelText="Confirmar Senha"
        placeholder="Digite sua confirmação senha"
        {...register("confirmPassword")}
        errorMessage={errors.confirmPassword?.message}
      />

      <Button size="lg" className="w-full">
        Registrar
      </Button>
    </form>
  );
};
