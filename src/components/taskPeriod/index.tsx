import type { ReactNode } from "react";

type TaskPeriodProps = {
  children: ReactNode;
};

const TaskPeriod = ({ children }: TaskPeriodProps) => {
  return (
    <div className="border-b-border-gray border-b">
      <div className="text-dark-gray mb-1.5 flex items-center gap-1.5 font-semibold">
        {children}
      </div>
    </div>
  );
};

export default TaskPeriod;
