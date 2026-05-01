import { useState } from "react";
import { Button } from "../components/button";
import { Input } from "../components/input";

export const Auth = () => {
  const [loginOrRegister, setLoginOrRegister] = useState(false);

  const handleToggleLoginOrRegister = () => {
    setLoginOrRegister(!loginOrRegister);
  };

  return (
    <div className="flex h-screen w-screen gap-8">
      <div className="flex w-full max-w-4xl flex-col items-center justify-center">
        <form className="w-full max-w-2xl space-y-4">
          {loginOrRegister && (
            <Input
              labelText="Nome do usuário"
              placeholder="Digite seu usuário"
            />
          )}
          <Input labelText="Email" placeholder="Digite seu e-mail" />
          <Input labelText="Senha" placeholder="Digite sua senha" />
          {loginOrRegister && (
            <Input
              labelText="Confirmar Senha"
              placeholder="Digite sua confirmação senha"
            />
          )}
          <Button size="lg" className="w-full">
            {loginOrRegister ? "Registrar" : "Entrar"}
          </Button>
        </form>
        {loginOrRegister ? (
          <p className="mt-4 text-center">
            Já possui uma conta?{" "}
            <span
              className="text-primary cursor-pointer hover:underline"
              onClick={handleToggleLoginOrRegister}
            >
              Fazer login
            </span>
          </p>
        ) : (
          <p className="mt-4 text-center">
            Ainda não possui uma conta?{" "}
            <span
              className="text-primary cursor-pointer hover:underline"
              onClick={handleToggleLoginOrRegister}
            >
              Criar conta
            </span>
          </p>
        )}
      </div>
      <div className="h-full w-full">
        <img
          src="/auth-image.png"
          alt=""
          className="optimize h-full object-cover object-center"
        />
      </div>
    </div>
  );
};
