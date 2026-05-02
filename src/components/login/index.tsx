import { useForm } from "react-hook-form";
import { Button } from "../button";
import { Input } from "../input";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  loginUserSchema,
  type LoginUserSchemaType,
} from "../../schemas/user/login.schema";
import { useSignIn } from "../../hooks/user/useAuth";
import { useDispatch } from "react-redux";
import { signIn } from "../../store/reducers/auth/auth.slice";

export const Login = () => {
  const dispatch = useDispatch();
  const signInMutation = useSignIn();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginUserSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginUserSchemaType) => {
    const response = await signInMutation.mutateAsync(data);
    localStorage.setItem("accessToken", response.accessToken);

    dispatch(
      signIn({
        email: response.email,
        username: response.username,
      })
    );
  };

  return (
    <form
      className="w-full max-w-2xl space-y-4"
      onSubmit={handleSubmit(onSubmit)}
    >
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

      <Button size="lg" className="w-full">
        Entrar
      </Button>
    </form>
  );
};
