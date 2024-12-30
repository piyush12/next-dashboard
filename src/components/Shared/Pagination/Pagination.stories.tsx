import type { Meta, StoryObj } from "@storybook/react";

import Pagination from "./Pagination";

const meta = {
  component: Pagination,
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    page: 10,
    total: 20,
    onChange: () => {},
  },
};
