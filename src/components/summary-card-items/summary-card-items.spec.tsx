import { render, screen } from "@testing-library/react";
import { SummaryItems } from ".";

vi.mock("lucide-react", () => ({
  LayoutListIcon: () => <div data-testid="icon-layout" />,
  ListCheckIcon: () => <div data-testid="icon-check" />,
  LoaderCircleIcon: () => <div data-testid="icon-loader" />,
}));

describe("<SummaryCardItems />", () => {
  it("deve renderizar SummaryCardItem com a estrutura de grid", () => {
    render(<SummaryItems />);

    const summaryCard = screen.getByRole("summary-card");

    expect(summaryCard).toBeInTheDocument();
    expect(summaryCard).toHaveClass("grid grid-cols-4 gap-8");
  });
  it("deve renderizar os quarto cards de sumário", () => {
    render(<SummaryItems />);

    expect(screen.getByText("Tarefas disponíveis")).toBeInTheDocument();
    expect(screen.getByText("Tarefas concluídas")).toBeInTheDocument();
    expect(screen.getByText("Tarefas em andamento")).toBeInTheDocument();
    expect(screen.getByText("Tarefas não iniciadas")).toBeInTheDocument();
  });
  it("deve exibir os valores númericos corretos para cada categoria", () => {
    render(<SummaryItems />);

    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("0")).toBeInTheDocument();
  });
  it("deve conter os ícones correspondentes em cada card", () => {
    render(<SummaryItems />);

    expect(screen.getByTestId("icon-layout")).toBeInTheDocument();
    expect(screen.getByTestId("icon-check")).toBeInTheDocument();

    const loaders = screen.getAllByTestId("icon-loader");

    expect(loaders).toHaveLength(2);
  });
});
