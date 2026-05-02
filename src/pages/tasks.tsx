import { CloudSunIcon, MoonIcon, SunIcon } from "lucide-react";

import TaskItem from "../components/task-item";
import TaskPeriod from "../components/taskPeriod";
import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";
import { useAppSelector } from "../hooks/redux/useAppSelector";
import { Navigate } from "react-router-dom";
import { useGetTasks } from "../hooks/tasks/useTasks";

export const Tasks = () => {
  const user = useAppSelector((state) => state.AuthUser);
  const isAuth = user.email.length > 0;

  const tasks = useGetTasks();

  if (!isAuth) {
    return <Navigate to="/" />;
  }

  const tasksMorning = tasks.data?.morning;
  const tasksAfternoon = tasks.data?.afternoon;
  const tasksEvening = tasks.data?.evening;

  console.log(tasksMorning);
  console.log(tasksAfternoon);
  console.log(tasksEvening);

  return (
    <div className="flex w-full">
      <Sidebar />
      <section className="w-full space-y-6 px-8 pt-14">
        <Header title="Minhas Tarefas" subtitle="Minhas Tarefas" />
        <div className="space-y-4 rounded-lg bg-white p-6">
          <div className="space-y-3">
            <TaskPeriod>
              <SunIcon />
              Manhã
            </TaskPeriod>
            <div className="space-y-3">
              <TaskItem status="isCompleted" />
              <TaskItem status="isCompleted" />
              <TaskItem status="isCompleted" />
            </div>
          </div>
          <div className="space-y-3">
            <TaskPeriod>
              <CloudSunIcon />
              Tarde
            </TaskPeriod>
            <div className="space-y-3">
              <TaskItem status="isProgress" />
              <TaskItem status="isProgress" />
              <TaskItem status="isProgress" />
            </div>
          </div>
          <div className="space-y-3">
            <TaskPeriod>
              <MoonIcon />
              Noite
            </TaskPeriod>
            <div className="space-y-3">
              <TaskItem status="isPending" />
              <TaskItem status="isPending" />
              <TaskItem status="isPending" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
