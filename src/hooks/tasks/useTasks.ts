import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { TasksService } from "../../services/tasks-service";

export const useGetTasks = () => {
  return useQuery({
    queryKey: ["get-tasks"],
    queryFn: async () => {
      const response = await TasksService.getTasks();
      return response;
    },
  });
};

export const useGetAllTasks = () => {
  return useQuery({
    queryKey: ["get-all-tasks"],
    queryFn: async () => {
      const response = await TasksService.getAllTasks();
      return response;
    },
  });
};

export const useCreateTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["create-task"],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mutationFn: async (data: any) => {
      const response = TasksService.create(data);

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-tasks"] });
    },
  });
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["delete-task"],
    mutationFn: async (taskId: string) => {
      const response = TasksService.delete(taskId);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-tasks"] });
    },
  });
};

export const useUpdateStatusTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["update-status-task"],
    mutationFn: async (params: { taskId: string; status: string }) => {
      const response = await TasksService.updateStatus(
        params.taskId,
        params.status
      );
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-tasks"] });
      queryClient.invalidateQueries({ queryKey: ["get-all-tasks"] });
    },
  });
};
