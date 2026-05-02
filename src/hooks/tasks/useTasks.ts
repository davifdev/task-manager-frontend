import { useQuery } from "@tanstack/react-query";
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
