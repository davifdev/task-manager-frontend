import type { TaskDTO } from "../dtos/tasks/tasks.dto";
import { authApi } from "../lib/axios";

export type Task = {
  id: string;
  title: string;
  time: string;
  status: string;
  description: string;
};

export const TasksService = {
  getTasks: async (): Promise<TaskDTO> => {
    const response = await authApi.get("/tasks");
    console.log(response.data);
    return {
      morning: response.data.morning,
      afternoon: response.data.afternoon,
      evening: response.data.evening,
    };
  },

  getAllTasks: async (): Promise<Task[]> => {
    const response = await authApi.get("/all-tasks");
    return response.data;
  },

  create: async (data: Task) => {
    const response = await authApi.post("/tasks", data);
    return response.data;
  },

  update: async (taskId: string) => {
    const response = await authApi.put(`/tasks/${taskId}`);
    return response.data;
  },

  updateStatus: async (taskId: string, status: string) => {
    const response = await authApi.patch(`/tasks/status/${taskId}`, { status });
    return response.data;
  },

  delete: async (taskId: string) => {
    const response = await authApi.delete(`/tasks/${taskId}`);
    console.log(response);
    return response.data;
  },

  deleteMany: async () => {
    const response = await authApi.delete("/tasks");
    return response.data;
  },
};
