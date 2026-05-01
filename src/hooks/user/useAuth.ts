import { useMutation } from "@tanstack/react-query";
import { UserService } from "../../services/user-service";
import type { RegisterUserSchemaType } from "../../schemas/user/register.schema";
import type { LoginUserSchemaType } from "../../schemas/user/login.schema";

export const signUpMutationKey = ["signup"];
export const signInMutationKey = ["signin"];

export const useSignUp = () => {
  return useMutation({
    mutationKey: signUpMutationKey,
    mutationFn: async (data: RegisterUserSchemaType) => {
      const response = await UserService.register(data);
      return response;
    },
  });
};

export const useSignIn = () => {
  return useMutation({
    mutationKey: signInMutationKey,
    mutationFn: async (data: LoginUserSchemaType) => {
      const response = await UserService.login(data);
      return response;
    },
  });
};
