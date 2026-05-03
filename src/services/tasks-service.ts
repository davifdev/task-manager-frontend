import type { TaskDTO } from "../dtos/tasks/tasks.dto";
import { authApi } from "../lib/axios";

export type Task = {
  title: string;
  time: string;
  status: string;
  description: string;
};

export const TasksService = {
  getTasks: async (): Promise<TaskDTO> => {
    const response = await authApi.get("/tasks");

    return {
      morning: response.data.morning,
      afternoon: response.data.afternoon,
      evening: response.data.evening,
    };
  },

  create: async (data: Task) => {
    const response = await authApi.post("/tasks", data);
    return response.data;
  },

  update: async () => {},

  updateStatus: async () => {},

  delete: async () => {},

  deleteMany: async () => {},
};
