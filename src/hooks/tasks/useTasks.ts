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
