import { authApi } from "../lib/axios";

type Task = {
  title: string;
  time: string;
  status: string;
  description: string;
};

type TaskDTO = {
  morning: Task[];
  afternoon: Task[];
  evening: Task[];
};

export const TasksService = {
  getTasks: async (): Promise<TaskDTO> => {
    const response = await authApi.get("/tasks");
    return {
      morning: response.data.morning,
      afternoon: response.data.afternonn,
      evening: response.data.evening,
    };
  },

  create: async () => {},
  update: async () => {},
  updateStatus: async () => {},
  delete: async () => {},
  deleteMany: async () => {},
};
