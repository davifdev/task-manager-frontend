import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  withRouter,
  reactRouterParameters,
} from "storybook-addon-remix-react-router";
import SidebarButton from "../components/sidebar-button";

import { HouseIcon, ListChecksIcon } from "lucide-react";

const meta = {
  title: "Components/Routers/SidebarButton",
  component: SidebarButton,
  decorators: [withRouter],
  parameters: {
    layout: "centered",
    reactRouter: reactRouterParameters({
      routing: { path: "/tasks" },
    }),
  },

  tags: ["autodocs"],

  argTypes: {},

  args: {},
} satisfies Meta<typeof SidebarButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const RouterDefault: Story = {
  args: {
    children: (
      <>
        <HouseIcon /> Início
      </>
    ),
    href: "/",
  },
};

export const RouterActive: Story = {
  args: {
    children: (
      <>
        <ListChecksIcon /> Minhas tarefas
      </>
    ),
    href: "/tasks",
  },
};
