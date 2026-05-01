import { authApi } from "../lib/axios";

export const TasksService = {
  getTasks: async () => {
    const response = await authApi.get("/tasks");
    const tasks = await response.data;
    console.log(tasks);
  },

  create: async () => {},
  update: async () => {},
  updateStatus: async () => {},
  delete: async () => {},
  deleteMany: async () => {},
};
