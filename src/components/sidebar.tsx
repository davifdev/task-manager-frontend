import { HouseIcon, ListChecksIcon, LogOutIcon } from "lucide-react";
import SidebarButton from "./sidebar-button";
import { Button } from "./button";

export const Sidebar = () => {
  return (
    <aside className="flex h-screen w-full max-w-68 flex-col justify-between bg-white">
      <div className="space-y-2">
        <div className="px-8 py-6">
          <h1 className="text-primary mb-4 text-2xl font-semibold">
            Task Manager
          </h1>
          <p className="text-sm font-semibold">
            Um simples{" "}
            <span className="text-primary">organizador de tarefas</span>
          </p>
        </div>
        <div className="flex flex-col gap-2 p-2">
          <SidebarButton href="/">
            <HouseIcon />
            Início
          </SidebarButton>
          <SidebarButton href="/tasks">
            <ListChecksIcon />
            Minhas Tarefas
          </SidebarButton>
        </div>
      </div>

      <div className="p-4">
        <Button className="w-full" variant="danger">
          <LogOutIcon size={18} /> Sair
        </Button>
      </div>
    </aside>
  );
};
