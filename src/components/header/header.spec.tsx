import { fireEvent, render, screen } from "@testing-library/react";
import { Header } from ".";

/* eslint-disable @typescript-eslint/no-explicit-any */
vi.mock("../add-task-dialog", () => ({
  AddTaskDialog: ({ isDialogOpen, handleToggleDialog }: any) =>
    isDialogOpen ? (
      <div data-testid="mock-dialog">
        <button onClick={handleToggleDialog}>Fechar Dialog</button>
      </div>
    ) : null,
}));

describe("<Header />", () => {
  const defaultProps = {
    title: "Minhas Tarefas",
    subtitle: "Gestão de projetos",
  };

  it("deve renderizar o título e subtítulo corretamente", () => {
    render(<Header {...defaultProps} />);

    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.subtitle)).toBeInTheDocument();
  });
  it("deve renderizar os botões com os labels corretos", () => {
    render(<Header {...defaultProps} />);

    const deleteBtn = screen.getByRole("button", {
      name: /deletar todas as tarefas/i,
    });
    const addBtn = screen.getByRole("button", {
      name: /criar uma nova tarefa/i,
    });

    expect(deleteBtn).toBeInTheDocument();
    expect(addBtn).toBeInTheDocument();
  });
  it("deve abrir o AddTaskDialog ao clicar no botão 'Nova tarefa'", () => {
    render(<Header {...defaultProps} />);

    const openButton = screen.getByRole("button", { name: /nova tarefa/i });
    expect(screen.queryByTestId("mock-dialog")).not.toBeInTheDocument();

    fireEvent.click(openButton);

    expect(screen.getByTestId("mock-dialog")).toBeInTheDocument();
  });
  it("deve fechar o AddTaskDialog quando a função de toggle for chamada", () => {
    render(<Header {...defaultProps} />);

    const openButton = screen.getByRole("button", { name: /nova tarefa/i });
    fireEvent.click(openButton);

    expect(screen.queryByTestId("mock-dialog")).toBeInTheDocument();

    const closeButton = screen.getByText("Fechar Dialog");
    fireEvent.click(closeButton);

    expect(screen.queryByTestId("mock-dialog")).not.toBeInTheDocument();
  });
  it("deve ter os atributos de accessibilidade (title e aria-label)", () => {
    render(<Header {...defaultProps} />);

    const deleteBtn = screen.getByRole("button", {
      name: /deletar todas as tarefas/i,
    });
    const addBtn = screen.getByRole("button", {
      name: /criar uma nova tarefa/i,
    });

    expect(deleteBtn).toHaveAttribute("title", "Deletar todas as tarefas");
    expect(addBtn).toHaveAttribute("title", "Criar uma nova tarefa");
  });
});
