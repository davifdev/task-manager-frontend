import { useState } from "react";
import { Button } from "../button";
import { PlusIcon, Trash2Icon } from "lucide-react";
import { AddTaskDialog } from "../add-task-dialog";
import { useDeleteManyTask } from "../../hooks/tasks/useTasks";

type HeaderProps = {
  title: string;
  subtitle: string;
};

export const Header = ({ title, subtitle }: HeaderProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const deleteManyTaskMutation = useDeleteManyTask();

  const handleToggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const handleDeleteManyTasks = async () => {
    await deleteManyTaskMutation.mutateAsync();
  };

  return (
    <header className="flex items-end justify-between">
      <div className="flex flex-col gap-1.5">
        <p className="text-primary text-sm font-semibold">{subtitle}</p>
        <h2 className="text-dark-blue text-2xl font-semibold">{title}</h2>
      </div>
      <div className="flex items-center gap-2.5">
        <Button
          variant="ghost"
          aria-label="Deletar todas as tarefas"
          title="Deletar todas as tarefas"
          onClick={handleDeleteManyTasks}
        >
          Limpar tarefas
          <Trash2Icon size={18} />
        </Button>
        <Button
          variant="default"
          aria-label="Criar uma nova tarefa"
          title="Criar uma nova tarefa"
          onClick={handleToggleDialog}
        >
          Nova tarefa
          <PlusIcon size={18} />
        </Button>
      </div>
      <AddTaskDialog
        isDialogOpen={isDialogOpen}
        handleToggleDialog={handleToggleDialog}
      />
    </header>
  );
};
