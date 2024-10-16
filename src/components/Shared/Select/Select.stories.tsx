import type { Meta, StoryObj } from "@storybook/react";

import Select from "./Select";

const meta = {
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onChange: () => {},
    value: "light",
    children: (
      <>
        <Select.Trigger>Light</Select.Trigger>
        <Select.Content>
          <Select.Item value="light">Light</Select.Item>
          <Select.Item active value="dark">
            Dark
          </Select.Item>
          <Select.Item value="system">System</Select.Item>
        </Select.Content>
      </>
    ),
  },
};
