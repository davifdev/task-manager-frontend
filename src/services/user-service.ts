import type { UserDTO } from "../dtos/user/user.dto";
import { api, authApi } from "../lib/axios";
import type { LoginUserSchemaType } from "../schemas/user/login.schema";
import type { RegisterUserSchemaType } from "../schemas/user/register.schema";

export const UserService = {
  register: async (data: RegisterUserSchemaType): Promise<UserDTO> => {
    const response = await api.post("/register", data);

    return {
      username: response.data.username,
      email: response.data.email,
      accessToken: response.data.accessToken,
    };
  },
  login: async (data: LoginUserSchemaType): Promise<UserDTO> => {
    const response = await api.post("/login", data);

    return {
      username: response.data.username,
      email: response.data.email,
      accessToken: response.data.accessToken,
    };
  },

  getUser: async () => {
    const response = await authApi.get("/get-user");
    return response;
  },

  logout: async () => {
    const response = await authApi.post("/logout");
    return response;
  },
};
