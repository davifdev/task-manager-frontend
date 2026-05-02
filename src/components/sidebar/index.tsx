import { HouseIcon, ListChecksIcon, LogOutIcon } from "lucide-react";
import { Button } from "../button";
import SidebarButton from "../sidebar-button";
import { useNavigate } from "react-router-dom";
import { UserService } from "../../services/user-service";

export const Sidebar = () => {
  const navigate = useNavigate();

  const handleClickLogout = async () => {
    await UserService.logout();
    localStorage.clear();
    navigate("/");
  };

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
          <SidebarButton href="/dashboard">
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
        <Button className="w-full" variant="danger" onClick={handleClickLogout}>
          <LogOutIcon size={18} /> Sair
        </Button>
      </div>
    </aside>
  );
};
