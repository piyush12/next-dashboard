import type { Meta, StoryObj } from "@storybook/react";

import Flex from "./Flex";

const meta = {
  component: Flex,
} satisfies Meta<typeof Flex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div>Test</div>,
  },
};
