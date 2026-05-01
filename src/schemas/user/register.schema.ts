import z from "zod";

export const registerUserSchema = z
  .object({
    username: z
      .string()
      .min(3, "O nome do usuário deve ter no mínimo 3 caracteres")
      .trim(),
    email: z.email("Email inválido").min(1, "O email é obrigatório").trim(),
    password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
    confirmPassword: z
      .string()
      .min(6, "A senha deve ter no mínimo 6 caracteres"),
  })
  .refine(
    (data) => data.confirmPassword === data.password,
    "As senhas não se coencidem"
  );
