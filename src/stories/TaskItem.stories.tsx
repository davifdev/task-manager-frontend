import type { Meta, StoryObj } from "@storybook/react-vite";
import TaskItem from "../components/task-item";

const meta = {
  title: "Components/Tasks/TaskItem",
  component: TaskItem,
  decorators: [
    (Story) => (
      <div className="max-w-9xl mx-auto p-12">
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
} satisfies Meta<typeof TaskItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const IsPending: Story = {
  args: {
    status: "isPending",
  },
};

export const IsProgress: Story = {
  args: {
    status: "isProgress",
  },
};

export const IsCompleted: Story = {
  args: {
    status: "isCompleted",
  },
};
