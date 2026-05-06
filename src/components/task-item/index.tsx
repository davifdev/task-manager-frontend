import clsx from "clsx";
import {
  CheckIcon,
  ExternalLinkIcon,
  LoaderCircle,
  Trash2Icon,
} from "lucide-react";
import { useId } from "react";
import { useDeleteTask, useUpdateStatusTask } from "../../hooks/tasks/useTasks";
import { verifyStatus } from "../../helpers/verify-status";
import { Link } from "react-router-dom";

type TaskType = {
  id?: string;
  title: string;
  time: string;
  status: string;
};

type TaskItemProps = {
  tasks: TaskType;
};

const TaskItem = ({ tasks }: TaskItemProps) => {
  const tasksVariants: Record<string, string> = {
    pending: "bg-dark-blue-opacity text-dark-blue",
    in_progress: "bg-process-opacity text-process",
    completed: "bg-primary-opacity text-primary",
  };

  const checkedVariants: Record<string, string> = {
    pending: "bg-dark-blue",
    in_progress: "bg-process",
    completed: "bg-primary",
  };

  const taskItemClass = clsx(
    tasksVariants[tasks?.status],
    "flex items-center justify-between rounded-lg p-3"
  );

  const id = useId();
  const checkId = `${id}-checked`;

  const deleteTaskMutation = useDeleteTask();
  const updateStatusTaskMutation = useUpdateStatusTask();
  const status = verifyStatus(tasks.status);

  const handleDeleteClick = async () => {
    await deleteTaskMutation.mutateAsync(tasks.id!);
  };

  const handleUpdateStatusClick = async () => {
    await updateStatusTaskMutation.mutateAsync({ taskId: tasks.id!, status });
  };

  return (
    <div className={taskItemClass} role="task-item">
      <div className="flex items-center gap-3">
        <div
          className={`${checkedVariants[tasks?.status]} flex h-6 w-6 cursor-pointer items-center justify-center rounded-md`}
          onClick={handleUpdateStatusClick}
        >
          <input
            id={checkId}
            type="checkbox"
            className="absolute top-0 left-0 z-10 h-6 w-6 cursor-pointer rounded-md opacity-0"
          />
          {tasks.status === "completed" && (
            <CheckIcon className="text-white" size={18} />
          )}
          {tasks.status === "in_progress" && (
            <LoaderCircle className="animate-spin text-white" size={18} />
          )}
        </div>
        <p role={checkId}>{tasks?.title}</p>
      </div>
      <div className="flex items-center gap-2">
        <Link to={`/tasks/${tasks?.id}`}>
          <ExternalLinkIcon size={18} />
        </Link>
        <button className="cursor-pointer" onClick={handleDeleteClick}>
          <Trash2Icon size={18} />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
