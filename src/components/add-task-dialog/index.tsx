import { useForm } from "react-hook-form";
import { Button } from "../button";
import { Input } from "../input";
import { InputSelect } from "../input-select";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  tasksSchema,
  type TasksSchemaType,
} from "../../schemas/tasks/tasks.schema";
import { useCreateTask } from "../../hooks/tasks/useTasks";

type AddTaskDialogProps = {
  isDialogOpen: boolean;
  handleToggleDialog: () => void;
};

export const AddTaskDialog = ({
  isDialogOpen,
  handleToggleDialog,
}: AddTaskDialogProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<TasksSchemaType>({
    resolver: zodResolver(tasksSchema),
  });

  const createTaskMutation = useCreateTask();

  const handleResetFields = () => {
    handleToggleDialog();
    reset({
      title: "",
      time: "morning",
      description: "",
    });
  };

  const onSubmit = async (data: TasksSchemaType) => {
    const taskCreated = {
      title: data.title,
      time: data.time,
      description: data.description,
      status: "pending",
    };

    await createTaskMutation.mutateAsync(taskCreated);
    handleResetFields();
  };

  if (!isDialogOpen) return;
  return (
    <dialog className="fixed top-0 left-0 flex h-screen w-screen items-center justify-center bg-black/20">
      <div className="w-full max-w-93 space-y-4 rounded-lg bg-white p-5">
        <div className="flex flex-col gap-1 text-center">
          <h2 className="text-dark-blue text-2xl font-semibold">Nova Tarefa</h2>
          <p className="text-dark-gray text-sm">Insira as informações abaixo</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            labelText="Título"
            placeholder="Título da tarefa"
            aria-label="Título da tarefa"
            {...register("title")}
            errorMessage={errors.title?.message}
          />
          <InputSelect
            labelText="Horário"
            aria-label="Título da tarefa"
            {...register("time")}
            errorMessage={errors.time?.message}
          />
          <Input
            labelText="Descrição"
            placeholder="Descrição da tarefa"
            aria-label="Descrição da tarefa"
            {...register("description")}
            errorMessage={errors.description?.message}
          />
          <div className="flex items-center gap-3">
            <Button
              variant="cancel"
              size="lg"
              className="w-full"
              onClick={handleResetFields}
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
        </form>
      </div>
    </dialog>
  );
};
