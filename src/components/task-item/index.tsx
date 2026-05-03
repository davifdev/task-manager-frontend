import clsx from "clsx";
import { ExternalLinkIcon, Trash2Icon } from "lucide-react";
import { useId } from "react";

type TaskType = {
  id: string;
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

  return (
    <div className={taskItemClass} role="task-item">
      <div className="flex items-center gap-3">
        <div
          className={`${checkedVariants[tasks?.status]} flex h-6 w-6 cursor-pointer items-center justify-center rounded-md`}
        >
          <input
            id={checkId}
            type="checkbox"
            className="z-10 h-6 w-6 cursor-pointer rounded-md opacity-0"
          />
        </div>
        <p role={checkId}>{tasks?.title}</p>
      </div>
      <div className="flex items-center gap-2">
        <ExternalLinkIcon size={18} />
        <Trash2Icon size={18} />
      </div>
    </div>
  );
};

export default TaskItem;
