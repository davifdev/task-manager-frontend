import {
  CloudSunIcon,
  MoonIcon,
  PlusIcon,
  SunIcon,
  Trash2Icon,
} from "lucide-react";
import { Button } from "../components/button";
import TaskItem from "../components/task-item";
import TaskPeriod from "../components/taskPeriod";

const Tasks = () => {
  return (
    <div className="w-full space-y-6 px-8 pt-14">
      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-1.5">
          <p className="text-primary text-sm font-semibold">Minhas Tarefas</p>
          <h2 className="text-dark-blue text-2xl font-semibold">
            Minhas Tarefas
          </h2>
        </div>
        <div className="flex items-center gap-2.5">
          <Button variant="ghost">
            Limpar tarefas
            <Trash2Icon size={18} />
          </Button>
          <Button variant="default">
            Nova tarefa
            <PlusIcon size={18} />
          </Button>
        </div>
      </div>
      <div className="space-y-4 rounded-lg bg-white p-6">
        <div className="space-y-3">
          <TaskPeriod>
            <SunIcon />
            Manhã
          </TaskPeriod>
          <div className="space-y-3">
            <TaskItem status="isCompleted" />
            <TaskItem status="isCompleted" />
            <TaskItem status="isCompleted" />
          </div>
        </div>
        <div className="space-y-3">
          <TaskPeriod>
            <CloudSunIcon />
            Tarde
          </TaskPeriod>
          <div className="space-y-3">
            <TaskItem status="isProgress" />
            <TaskItem status="isProgress" />
            <TaskItem status="isProgress" />
          </div>
        </div>
        <div className="space-y-3">
          <TaskPeriod>
            <MoonIcon />
            Noite
          </TaskPeriod>
          <div className="space-y-3">
            <TaskItem status="isPending" />
            <TaskItem status="isPending" />
            <TaskItem status="isPending" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
