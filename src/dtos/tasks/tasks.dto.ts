import type { Task } from "../../services/tasks-service";

export type TaskDTO = {
  morning: Task[];
  afternoon: Task[];
  evening: Task[];
};
