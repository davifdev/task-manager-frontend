import { render, screen } from "@testing-library/react";
import { Input, type InputProps } from "./input";
import userEvent from "@testing-library/user-event";

type Props = Partial<InputProps>;
const makeInput = (props: Props = {}) => {
  return (
    <Input
      labelText="label"
      placeholder="placeholder"
      type="text"
      disabled={false}
      required={true}
      readOnly={false}
      {...props}
    />
  );
};

const props = {
  ERROR_MESSAGE: "ring-red-400 focus:ring-red-500 placeholder-red-400",
};

const renderInput = (props?: Props) => {
  const renderResult = render(makeInput(props));
  const input = screen.getByRole("textbox");
  return { input, renderResult };
};

const input = (props?: Props) => renderInput(props).input;

describe("<Input />", () => {
  describe("Comportamento padrão", () => {
    it("renderiza o componente com uma label", async () => {
      const element = input({ labelText: "any_label" });
      const label = screen.getByText("any_label");

      expect(element).toBeInTheDocument();
      expect(label).toBeInTheDocument();
    });
    it("renderiza o componente com placeholder", async () => {
      const element = input({ placeholder: "any_placeholder" });

      expect(element).toHaveAttribute("placeholder", "any_placeholder");
    });
    it("renderiza o componente sem label", async () => {
      const element = input({ labelText: undefined });
      const notLabel = screen.queryByRole("any_label");

      expect(element).toBeInTheDocument();
      expect(notLabel).not.toBeInTheDocument();
    });
    it("renderiza o componente sem placeholder", async () => {
      const element = input({ placeholder: undefined });

      expect(element).not.toHaveAttribute("placeholder");
    });
    it("usa labelText como aria-label quando possível", async () => {
      const element = input({ labelText: "any_label", placeholder: undefined });

      expect(element).toHaveAttribute("aria-label", "any_label");
    });
    it("usa placeholder como fallback de aria-label", async () => {
      const element = input({
        labelText: undefined,
        placeholder: "any_placeholder",
      });

      expect(element).toHaveAttribute("aria-label", "any_placeholder");
    });
    it("exibe o valor default corretamente", async () => {
      const element = input({ defaultValue: "default_value" });

      expect(element).toHaveValue("default_value");
    });
    it("aceita outras props do JSX ex: (name, maxLength)", async () => {
      const element = input({ name: "any_name", maxLength: 10 });

      expect(element).toHaveAttribute("name", "any_name");
      expect(element).toHaveAttribute("maxLength", "10");
    });
  });

  describe("Acessibilidade", () => {
    it("não exibe mensagem de erro por padrão", async () => {
      const element = input();
      const errorMessage = screen.queryByRole("alert");

      expect(element).toHaveAttribute("aria-invalid", "false");
      expect(element).not.toHaveAttribute("aria-describedby");
      expect(errorMessage).not.toBeInTheDocument();
    });
    it("não marca o input como inválido por padrão", async () => {
      const element = input();

      expect(element).toHaveAttribute("aria-invalid", "false");
    });
    it("renderiza mensagem de erro quando 'errorMessage' é passada", async () => {
      const element = input({ errorMessage: "any_error" });
      const error = screen.getByRole("alert");
      const errorId = error.getAttribute("id");
      const errorMessage = screen.queryByRole("alert");

      expect(errorMessage).toBeInTheDocument();
      expect(element).toHaveAttribute("aria-invalid", "true");
      expect(element).toHaveAttribute("aria-describedby", errorId);
    });
  });
  describe("Comportamento interativo", () => {
    it("atualiza o valor conforme o usuário digita", async () => {
      const user = userEvent.setup();
      const element = input();
      await user.type(element, "text");

      expect(element).toHaveValue("text");
    });
  });
  describe("Estados visuais", () => {
    it("adiciona classe de erro quando inválido", async () => {
      const element = input({ errorMessage: "any_error" });
      expect(element).toHaveClass(props.ERROR_MESSAGE);
    });
    it("mantém classes personalizadas do usuário", async () => {
      const element = input({ className: "custom_class" });

      expect(element).toHaveClass("custom_class");
    });
  });
});
