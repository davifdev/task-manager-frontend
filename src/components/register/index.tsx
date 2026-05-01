import { useForm } from "react-hook-form";
import { Button } from "../button";
import { Input } from "../input";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registerUserSchema,
  type RegisterUserSchemaType,
} from "../../schemas/user/register.schema";

export const Register = () => {
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

  const onSubmit = (data: RegisterUserSchemaType) => {
    console.log(data);
  };

  console.log(errors);
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
        labelText="Senha"
        placeholder="Digite sua senha"
        {...register("password")}
        errorMessage={errors.password?.message}
      />
      <Input
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
