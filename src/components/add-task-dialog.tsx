import { Button } from "./button";
import { Input } from "./input";
import { InputSelect } from "./input-select";

type AddTaskDialogProps = {
  isDialogOpen: boolean;
  handleToggleDialog: () => void;
};

export const AddTaskDialog = ({
  isDialogOpen,
  handleToggleDialog,
}: AddTaskDialogProps) => {
  if (!isDialogOpen) return;

  return (
    <dialog className="fixed top-0 left-0 flex h-screen w-screen items-center justify-center bg-black/20">
      <div className="w-full max-w-93 space-y-4 rounded-lg bg-white p-5">
        <div className="flex flex-col gap-1 text-center">
          <h2 className="text-dark-blue text-2xl font-semibold">Nova Tarefa</h2>
          <p className="text-dark-gray text-sm">Insira as informações abaixo</p>
        </div>
        <Input
          labelText="Título"
          placeholder="Título da tarefa"
          aria-label="Título da tarefa"
        />
        <InputSelect labelText="Horário" aria-label="Título da tarefa" />
        <Input
          labelText="Descrição"
          placeholder="Descrição da tarefa"
          aria-label="Descrição da tarefa"
        />
        <div className="flex items-center gap-3">
          <Button
            variant="cancel"
            size="lg"
            className="w-full"
            onClick={handleToggleDialog}
            aria-label="Cancelar"
            title="Cancelar"
          >
            Cancelar
          </Button>
          <Button
            variant="default"
            size="lg"
            className="w-full"
            aria-label="Criar tarefa"
            title="Criar tarefa"
          >
            Salvar
          </Button>
        </div>
      </div>
    </dialog>
  );
};
