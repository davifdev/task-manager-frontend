import { PlusIcon, Trash2Icon } from "lucide-react";
import { Button } from "../components/button";
import {
  Header,
  HeaderLeft,
  HeaderRight,
  HeaderSubtitle,
  HeaderTitle,
} from "../components/header";

import { SummaryItems } from "../components/summary-items";
import TaskItem from "../components/task-item";

const Dashboard = () => {
  return (
    <section className="w-full space-y-6 px-8 pt-14">
      <Header>
        <HeaderLeft>
          <HeaderSubtitle>Início</HeaderSubtitle>
          <HeaderTitle>Início</HeaderTitle>
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
      <SummaryItems />
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-4 rounded-lg bg-white p-6">
          <div className="flex flex-col gap-1">
            <h2 className="text-dark-blue text-2xl font-semibold">Tarefas</h2>
            <p className="text-dark-gray text-sm">
              Resumo das tarefas disponíveis
            </p>
          </div>
          <div className="space-y-3">
            <TaskItem status="isPending" />
            <TaskItem status="isPending" />
            <TaskItem status="isPending" />
            <TaskItem status="isPending" />
            <TaskItem status="isPending" />
          </div>
        </div>
        <div className="flex items-center justify-center rounded-lg bg-white p-6">
          <p className="text-dark-gray text-center">
            Cada pequena ação de hoje te aproxima das grandes conquistas de
            amanhã. Faça o que precisa ser feito!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
