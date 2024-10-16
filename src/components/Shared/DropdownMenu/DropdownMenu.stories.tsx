import type { Meta, StoryObj } from "@storybook/react";

import DropdownMenu from "./DropdownMenu";
import Button from "@/components/Shared/Button";

const meta = {
  component: DropdownMenu,
} satisfies Meta<typeof DropdownMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <DropdownMenu.Trigger>
          <Button>Options</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item>Light</DropdownMenu.Item>
          <DropdownMenu.Item active>Dark</DropdownMenu.Item>
          <DropdownMenu.Item>System</DropdownMenu.Item>
        </DropdownMenu.Content>
      </>
    ),
  },
};