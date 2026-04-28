import { render, screen } from "@testing-library/react";
import TaskItem, { type TaskVariants } from "./task-item";

const makeTaskItem = (status: TaskVariants) => {
  return <TaskItem status={status} />;
};

const renderTaskItem = (status: TaskVariants) => {
  const renderResult = render(makeTaskItem(status));
  const taskItem = screen.getByRole("task-item");
  return { renderResult, taskItem };
};

const taskItem = (status: TaskVariants) => renderTaskItem(status).taskItem;

const props = {
  COLOR_IS_PENDING: "bg-dark-blue-opacity text-dark-blue",
  COLOR_IS_PROGRESS: "bg-process-opacity text-process",
  COLOR_IS_COMPLETED: "bg-primary-opacity text-primary",
};

describe("<TaskItem />", () => {
  it("deve renderizar taskItem com status isPending", async () => {
    const element = taskItem("isPending");

    expect(element).toBeInTheDocument();
    expect(element).toHaveClass(props.COLOR_IS_PENDING);
  });
  it("deve renderizar taskItem com status isProgress", async () => {
    const element = taskItem("isProgress");

    expect(element).toBeInTheDocument();
    expect(element).toHaveClass(props.COLOR_IS_PROGRESS);
  });
  it("deve renderizar taskItem com status isCompleted", async () => {
    const element = taskItem("isCompleted");

    expect(element).toBeInTheDocument();
    expect(element).toHaveClass(props.COLOR_IS_COMPLETED);
  });
});
