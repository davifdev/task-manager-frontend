import { render, screen } from "@testing-library/react";
import {
  SummaryCard,
  SummaryContent,
  SummaryHeader,
  SummaryIcon,
  SummarySubtitle,
  SummaryTitle,
} from ".";

const props = {
  SUMMARY_CARD_CLASS: "rounded-lg bg-white p-10",
  SUMMARY_CONTENT_CLASS: "flex flex-col items-center justify-center gap-1",
  SUMMARY_HEADER_CLASS: "flex items-center gap-2",
  SUMMARY_TITLE_CLASS: "text-dark-blue text-base",
  SUMMARY_SUBTITLE_CLASS: "text-3xl font-semibold",
  SUMMARY_ICON_CLASS: "text-primary",
};

describe("Summary Components", () => {
  it("deve renderizar o SummaryCard com seus filhos", () => {
    render(
      <SummaryCard>
        <span data-testid="child">Conteúdo do Card</span>
      </SummaryCard>
    );

    const child = screen.getByTestId("child");
    expect(child).toBeInTheDocument();
    expect(child.parentElement).toHaveClass(props.SUMMARY_CARD_CLASS);
  });
  it("deve renderizar SummaryContent com a estrutura de flexbox", () => {
    render(
      <SummaryContent>
        <p data-testid="content">Conteúdo Central</p>
      </SummaryContent>
    );

    const content = screen.getByTestId("content");
    expect(content.parentElement).toHaveClass(props.SUMMARY_CONTENT_CLASS);
  });
  it("deve renderizar SummaryHeader e alinhar os itens", () => {
    render(
      <SummaryHeader>
        <p data-testid="icon">Icon</p>
        <p data-testid="title">Title</p>
      </SummaryHeader>
    );

    const header = screen.getByTestId("icon");
    expect(header.parentElement).toHaveClass(props.SUMMARY_HEADER_CLASS);
  });
  it("deve renderizar SummaryTitle e SummarySubtitle com as classes de texto correta", () => {
    render(
      <>
        <SummaryTitle>Título de teste</SummaryTitle>
        <SummarySubtitle>Subtítulo de teste</SummarySubtitle>
      </>
    );

    const title = screen.getByText("Título de teste");
    const subtitle = screen.getByText("Subtítulo de teste");

    expect(title).toHaveClass(props.SUMMARY_TITLE_CLASS);
    expect(subtitle).toHaveClass(props.SUMMARY_SUBTITLE_CLASS);
  });
  it("deve renderizar o SummaryIcon aplicando a cor primária", () => {
    render(
      <SummaryIcon>
        <svg data-testid="svg-icon" />
      </SummaryIcon>
    );

    const iconWrapper = screen.getByTestId("svg-icon");
    expect(iconWrapper.parentElement).toHaveClass(props.SUMMARY_ICON_CLASS);
  });
  it("deve garantir a composição completa do componente", () => {
    render(
      <SummaryCard>
        <SummaryContent>
          <SummaryHeader>
            <SummarySubtitle>Subtítulo</SummarySubtitle>
            <SummaryIcon>Icon</SummaryIcon>
          </SummaryHeader>
          <SummaryTitle>Título</SummaryTitle>
        </SummaryContent>
      </SummaryCard>
    );

    const icon = screen.getByText("Icon");
    const title = screen.getByText("Título");
    const subtitulo = screen.getByText("Subtítulo");

    expect(icon).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(subtitulo).toBeInTheDocument();
  });
});
