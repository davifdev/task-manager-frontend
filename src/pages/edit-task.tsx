import { ArrowLeftIcon, ChevronRightIcon, Trash2Icon } from "lucide-react";
import { Button } from "../components/button";
import { Input } from "../components/input";
import { InputSelect } from "../components/input-select";
import { Sidebar } from "../components/sidebar";

import { useAppSelector } from "../hooks/redux/useAppSelector";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import {
  useDeleteTask,
  useGetUniqueTask,
  useUpdateTask,
} from "../hooks/tasks/useTasks";
import { useForm } from "react-hook-form";
import { type TasksSchemaType } from "../schemas/tasks/tasks.schema";

export const EditTask = () => {
  const user = useAppSelector((state) => state.AuthUser);
  const isAuth = user.email.length > 0;
  const navigate = useNavigate();
  const { id } = useParams();
  const task = useGetUniqueTask(id!);
  const deleteTaskMutation = useDeleteTask();
  const updateTaskMutation = useUpdateTask();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TasksSchemaType>();

  const handleDeleteClick = async () => {
    await deleteTaskMutation.mutateAsync(id!);
    navigate("/tasks");
  };

  const onSubmit = async (data: TasksSchemaType) => {
    const taskCreated = {
      title: data.title,
      time: data.time,
      description: data.description,
      status: task.data!.status,
    };
    await updateTaskMutation.mutateAsync({ taskId: id!, data: taskCreated });
    navigate("/tasks");
  };

  if (!isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <div className="flex w-full">
      <Sidebar />
      <section className="w-full space-y-6 px-8 pt-14">
        <div className="flex items-end justify-between">
          <div className="space-y-3">
            <div
              className="bg-primary flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-white"
              role="link"
              aria-label="Ir para página anterior"
              title="Ir para página anterior"
            >
              <ArrowLeftIcon size={18} />
            </div>
            <div className="text-dark-gray flex items-center">
              <span>Minhas Tarefas</span>
              <span>
                <ChevronRightIcon size={18} />
              </span>
              <span className="text-primary font-semibold">
                Ir para academia
              </span>
            </div>
            <h2 className="text-dark-blue text-2xl font-semibold">
              Ir para academia
            </h2>
          </div>
          <Button
            variant="danger"
            aria-label="Deletar tarefa"
            title="Deletar tarefa"
            onClick={handleDeleteClick}
          >
            <Trash2Icon size={18} />
            Deletar tarefa
          </Button>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4 rounded-lg bg-white p-6">
            <Input
              labelText="Título"
              placeholder="Título da tarefa"
              aria-label="Descrição da tarefa"
              defaultValue={task.data?.title}
              {...register("title")}
              errorMessage={errors.title?.message}
            />
            <InputSelect
              labelText="Horário"
              aria-label="Horário da tarefa"
              defaultValue={task.data?.time}
              {...register("time")}
              errorMessage={errors.time?.message}
            />
            <Input
              labelText="Descrição"
              placeholder="Descrição da tarefa"
              aria-label="Descrição da tarefa"
              defaultValue={task.data?.description}
              {...register("description")}
              errorMessage={errors.description?.message}
            />
          </div>
          <div className="flex items-center justify-end gap-2">
            <Button
              variant="cancel"
              size="lg"
              aria-label="Cancelar edição"
              title="Cancelar edição"
            >
              Cancelar
            </Button>
            <Button
              variant="default"
              size="lg"
              aria-label="Salvar edição"
              title="Salvar edição"
            >
              Salvar
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
};
