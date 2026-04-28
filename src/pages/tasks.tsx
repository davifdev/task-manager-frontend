import { ListChecksIcon } from "lucide-react";
import SidebarButton from "../components/sidebar-button";

const Tasks = () => {
  return (
    <>
      <h2>Tasks Page</h2>
      <SidebarButton href="/tasks">
        <ListChecksIcon />
        Minhas Tarefas
      </SidebarButton>
    </>
  );
};

export default Tasks;
