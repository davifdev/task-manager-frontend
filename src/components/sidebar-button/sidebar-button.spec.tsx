import { render, screen } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
import SidebarButton from ".";

const makeSidebarButton = () => {
  return (
    <MemoryRouter initialEntries={["/"]}>
      <SidebarButton href="/">Início</SidebarButton>
      <SidebarButton href="/tasks">Minhas tarefas</SidebarButton>
    </MemoryRouter>
  );
};

const renderButton = () => {
  const renderResult = render(makeSidebarButton());
  const allLinks = screen.getAllByRole("link");
  return { renderResult, allLinks };
};

const allLink = () => renderButton().allLinks;

const props = {
  VARIANT_DEFAULT: "bg-primary-opacity text-primary",
  VARIANT_GHOST: "bg-transparent text-dark-blue",
};

describe("<SidebarButton />", () => {
  it("deve verificar se os links foram renderizados", async () => {
    const element = allLink();

    expect(element[0]).toBeInTheDocument();
    expect(element[1]).toBeInTheDocument();
  });
  it("deve checar se os links estão com as cores corretas", async () => {
    const elementHome = allLink();

    expect(elementHome[0]).toHaveClass(props.VARIANT_DEFAULT);
    expect(elementHome[1]).toHaveClass(props.VARIANT_GHOST);
  });
});
