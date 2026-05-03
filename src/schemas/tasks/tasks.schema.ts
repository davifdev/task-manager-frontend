import z from "zod";

const TASK_ROLES = ["morning", "afternoon", "evening"] as const;

export const tasksSchema = z.object({
  title: z.string().min(1, "O título da tarefa é obrigatório"),
  time: z.enum(TASK_ROLES),
  description: z.string().min(1, "A descrição da tarefa é obrigatória"),
});

export type TasksSchemaType = z.infer<typeof tasksSchema>;
