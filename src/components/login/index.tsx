import { useForm } from "react-hook-form";
import { Button } from "../button";
import { Input } from "../input";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  loginUserSchema,
  type LoginUserSchemaType,
} from "../../schemas/user/login.schema";

export const Login = () => {
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

  const onSubmit = (data: LoginUserSchemaType) => {
    console.log(data);
  };

  console.log(errors);

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
