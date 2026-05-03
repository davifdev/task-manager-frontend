import { useState } from "react";

import { Register } from "../components/register";
import { Login } from "../components/login";
import { useAppSelector } from "../hooks/redux/useAppSelector";
import { Navigate } from "react-router-dom";

export const Auth = () => {
  const [loginOrRegister, setLoginOrRegister] = useState(false);
  const user = useAppSelector((state) => state.AuthUser);
  const isAuth = user.email.length > 0;

  const handleToggleLoginOrRegister = () => {
    setLoginOrRegister(!loginOrRegister);
  };

  if (isAuth) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="flex h-screen w-screen gap-8">
      <div className="flex w-full max-w-4xl flex-col items-center justify-center">
        {loginOrRegister ? <Register /> : <Login />}
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
        <img src="/auth-image.png" alt="" className="h-full object-cover" />
      </div>
    </div>
  );
};
