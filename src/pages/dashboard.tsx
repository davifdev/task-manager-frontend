import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";

import { SummaryItems } from "../components/summary-card-items";
import TaskItem from "../components/task-item";

export const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <section className="w-full space-y-6 px-8 pt-14">
        <Header title="Início" subtitle="Início" />
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
    </div>
  );
};
