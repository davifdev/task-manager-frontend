import clsx from "clsx";
import { ExternalLinkIcon, Trash2Icon } from "lucide-react";
import { useId } from "react";

type TaskVariants = "isPending" | "isProgress" | "isCompleted";
type TaskItemProps = {
  title?: string;
  time?: string;
  status: TaskVariants;
};

const TaskItem = ({ status = "isPending" }: TaskItemProps) => {
  const tasksVariants: Record<TaskVariants, string> = {
    isPending: "bg-dark-blue-opacity text-dark-blue",
    isProgress: "bg-process-opacity text-process",
    isCompleted: "bg-primary-opacity text-primary",
  };

  const checkedVariants: Record<TaskVariants, string> = {
    isPending: "bg-dark-blue",
    isProgress: "bg-process",
    isCompleted: "bg-primary",
  };

  const taskItemClass = clsx(
    tasksVariants[status],
    "flex items-center justify-between rounded-lg p-3"
  );

  const id = useId();
  const checkId = `${id}-checked`;

  return (
    <div className={taskItemClass}>
      <div className="flex items-center gap-3">
        <div
          className={`${checkedVariants[status]} flex h-6 w-6 cursor-pointer items-center justify-center rounded-md`}
        >
          <input
            id={checkId}
            type="checkbox"
            className="z-10 h-6 w-6 cursor-pointer rounded-md opacity-0"
          />
        </div>
        <p role={checkId}>Ir para academia</p>
      </div>
      <div className="flex items-center gap-2">
        <ExternalLinkIcon size={18} />
        <Trash2Icon size={18} />
      </div>
    </div>
  );
};

export default TaskItem;
