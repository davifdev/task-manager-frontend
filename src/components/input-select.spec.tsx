import { render, screen } from "@testing-library/react";
import { InputSelect, type InputSelectProps } from "./input-select";
import userEvent from "@testing-library/user-event";

type Props = Partial<InputSelectProps>;

const makeInputSelect = (props: Props = {}) => {
  return (
    <InputSelect
      labelText="label"
      required={true}
      disabled={false}
      {...props}
    />
  );
};

const props = {
  ERROR_MESSAGE: "ring-red-400 focus:ring-red-500 placeholder-red-400",
  ERROR_LABEL: "text-red-500",
};

const renderInput = (props?: Props) => {
  const renderResult = render(makeInputSelect(props));
  const inputSelect = screen.getByRole("combobox");
  return { renderResult, inputSelect };
};

const inputSelect = (props?: Props) => renderInput(props).inputSelect;

describe("<InputSelect />", () => {
  describe("Comportamento padrão", () => {
    it("renderiza o componente com uma label", async () => {
      const element = inputSelect({ labelText: "any_label" });
      const label = screen.getByText("any_label");

      expect(element).toBeInTheDocument();
      expect(label).toBeInTheDocument();
    });
    it("renderiza o componente sem uma label", async () => {
      const element = inputSelect({ labelText: undefined });
      const notLabel = screen.queryByText("any_label");

      expect(element).toBeInTheDocument();
      expect(notLabel).not.toBeInTheDocument();
    });
    it("utiliza labelText como aria-label", async () => {
      const element = inputSelect({ labelText: "any_label" });

      expect(element).toHaveAttribute("aria-label", "any_label");
    });
    it("o valor default deve ser morning", async () => {
      const element = inputSelect();

      expect(element).toHaveValue("morning");
    });
  });
  describe("Acessibilidade", () => {
    it("não exibe mensagem de erro por padrão", async () => {
      const element = inputSelect();
      const errorMessage = screen.queryByRole("alert");

      expect(element).toBeInTheDocument();
      expect(errorMessage).not.toBeInTheDocument();
    });
    it("não marca o input como inválido por padrão", async () => {
      const element = inputSelect();

      expect(element).toHaveAttribute("aria-invalid", "false");
    });
    it("renderiza uma mensagem de erro se 'errorMessage' existir", async () => {
      const element = inputSelect({ errorMessage: "any_message" });
      const error = screen.getByRole("alert");
      const errorId = error.getAttribute("id");
      const errorMessage = screen.queryByRole("alert");

      expect(element).toBeInTheDocument();
      expect(errorMessage).toBeInTheDocument();
      expect(element).toHaveAttribute("aria-invalid", "true");
      expect(element).toHaveAttribute("aria-describedby", errorId);
    });
  });
  describe("Comportamento interativo", () => {
    it("atualiza o valor quando o usuário selecionar o horário da noite", async () => {
      const user = userEvent.setup();
      const element = inputSelect();
      await user.selectOptions(element, "Noite");

      expect(element).toHaveValue("evening");
    });
    it("atualiza o valor quando o usuário selecionar o horário da tarde", async () => {
      const user = userEvent.setup();
      const element = inputSelect();
      await user.selectOptions(element, "Tarde");

      expect(element).toHaveValue("afternoon");
    });
    it("atualiza o valor quando o usuário selecionar o horário da manhã", async () => {
      const user = userEvent.setup();
      const element = inputSelect();
      await user.selectOptions(element, "Manhã");

      expect(element).toHaveValue("morning");
    });
  });
  describe("Estados visuais", () => {
    it("adiciona classe de erro no input quando inválido", () => {
      const element = inputSelect({ errorMessage: "any_message " });

      expect(element).toHaveClass(props.ERROR_MESSAGE);
    });
    it("adiciona classe de erro na label quando inválido", async () => {
      const element = inputSelect({
        errorMessage: "any_message",
        labelText: "any_label",
      });

      const label = screen.getByText("any_label");

      expect(element).toBeInTheDocument();
      expect(label).toHaveClass(props.ERROR_LABEL);
    });
  });
});
