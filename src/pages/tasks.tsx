import {
  CloudSunIcon,
  MoonIcon,
  PlusIcon,
  SunIcon,
  Trash2Icon,
} from "lucide-react";

import TaskItem from "../components/task-item";
import TaskPeriod from "../components/taskPeriod";
import {
  Header,
  HeaderLeft,
  HeaderRight,
  HeaderTitle,
  HeaderSubtitle,
} from "../components/header";
import { Button } from "../components/button";

const Tasks = () => {
  return (
    <section className="w-full space-y-6 px-8 pt-14">
      <Header>
        <HeaderLeft>
          <HeaderSubtitle>Minhas Tarefas</HeaderSubtitle>
          <HeaderTitle>Minhas Tarefas</HeaderTitle>
        </HeaderLeft>
        <HeaderRight>
          <Button
            variant="ghost"
            aria-label="Deletar todas as tarefas"
            title="Deletar todas as tarefas"
          >
            Limpar tarefas
            <Trash2Icon size={18} />
          </Button>
          <Button
            variant="default"
            aria-label="Criar uma nova tarefa"
            title="Criar uma nova tarefa"
          >
            Nova tarefa
            <PlusIcon size={18} />
          </Button>
        </HeaderRight>
      </Header>
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
    </section>
  );
};

export default Tasks;
