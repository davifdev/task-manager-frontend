import type { Meta, StoryObj } from "@storybook/react-vite";

import { Input } from "../components/input";

const meta = {
  title: "Components/Forms/Input",
  component: Input,
  decorators: [
    (Story) => (
      <div className="mx-auto flex max-w-3xl items-center justify-center p-12">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {},

  args: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    labelText: "Título",
    placeholder: "Título da tarefa",
  },
};

export const Error: Story = {
  args: {
    labelText: "Título",
    placeholder: "Título da tarefa",
    errorMessage: "O título é obrigatório",
  },
};
