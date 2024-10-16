import type { Meta, StoryObj } from "@storybook/react";

import Paper from "./Paper";

const meta = {
  component: Paper,
} satisfies Meta<typeof Paper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div>Test</div>,
  },
};
