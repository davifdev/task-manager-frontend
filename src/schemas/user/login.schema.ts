import z from "zod";

export const loginUserSchema = z.object({
  email: z.email("Email inválido").min(1, "O email é obrigatório"),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
});

export type loginUserSchemaType = z.infer<typeof loginUserSchema>;
