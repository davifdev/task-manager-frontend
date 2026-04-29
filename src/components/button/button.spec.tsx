import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { userEvent } from "@testing-library/user-event";
import { Button } from ".";

const props = {
  VARIANT_DEFAULT: "bg-primary text-white",
  VARIANT_GHOST: "bg-transparent text-dark-gray",
  VARIANT_DANGER: "bg-danger text-white",
  VARIANT_CANCEL: "bg-light-gray text-dark-blue",
  SIZE_SM: "text-sm px-3 py-1",
  SIZE_MD: "text-base px-4 py-2",
  SIZE_LG: "text-base px-9 py-2",
  DISABLED: "disabled:cursor-not-allowed disabled:opacity-35",
};

describe("<Button />", () => {
  describe("props padrão e JSX", () => {
    it("deve renderizar o botão com props padrão (apenas com children)", async () => {
      render(<Button>Criar tarefa</Button>);

      const button = screen.getByRole("button", {
        name: /criar tarefa/i,
      });

      expect(button).toBeInTheDocument();
      expect(button).toHaveClass(props.VARIANT_DEFAULT);
      expect(button).toHaveClass(props.SIZE_SM);
    });
    it("verifica se a propiedade padrãod do JSX funciona corretamente", async () => {
      const handleClick = vi.fn();

      render(
        <Button aria-label="criar tarefa" type="submit" onClick={handleClick}>
          Criar tarefa
        </Button>
      );

      const button = screen.getByRole("button", {
        name: /criar tarefa/i,
      });

      await userEvent.click(button);

      expect(handleClick).toHaveBeenCalledTimes(1);
      expect(button).toHaveAttribute("aria-label", "criar tarefa");
      expect(button).toHaveAttribute("type", "submit");
    });
  });
  describe("variants (colors)", () => {
    it("verifica se default aplica a cor correta", async () => {
      render(<Button>Criar Tarefa</Button>);

      const button = screen.getByRole("button", {
        name: /criar tarefa/i,
      });

      expect(button).toHaveClass(props.VARIANT_DEFAULT);
    });
    it("verifica se ghost aplica a cor correta", async () => {
      render(<Button variant="ghost">Criar Tarefa</Button>);

      const button = screen.getByRole("button", {
        name: /criar tarefa/i,
      });

      expect(button).toHaveClass(props.VARIANT_GHOST);
    });
    it("verifica se danger aplica a cor correta", async () => {
      render(<Button variant="danger">Criar tarefa</Button>);

      const button = screen.getByRole("button", {
        name: /criar tarefa/i,
      });

      expect(button).toHaveClass(props.VARIANT_DANGER);
    });
    it("verifica se cancel aplica a cor correta", async () => {
      render(<Button variant="cancel">Criar tarefa</Button>);

      const button = screen.getByRole("button", {
        name: /criar tarefa/i,
      });

      expect(button).toHaveClass(props.VARIANT_CANCEL);
    });
  });
  describe("size (tamanho)", () => {
    it("tamanho sm deve ser menor", async () => {
      render(<Button size="sm">Criar tarefa</Button>);

      const button = screen.getByRole("button", {
        name: /criar tarefa/i,
      });

      expect(button).toHaveClass(props.SIZE_SM);
    });
    it("tamanho md deve ser médio", async () => {
      render(<Button size="md">Criar tarefa</Button>);

      const button = screen.getByRole("button", {
        name: /criar tarefa/i,
      });

      expect(button).toHaveClass(props.SIZE_MD);
    });
    it("tamanho lg deve ser grande", async () => {
      render(<Button size="lg">Criar tarefa</Button>);

      const button = screen.getByRole("button", {
        name: /criar tarefa/i,
      });

      expect(button).toHaveClass(props.SIZE_LG);
    });
  });
});
