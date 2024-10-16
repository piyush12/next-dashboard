import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    children: "Button",
    fullwidth: false,
    disabled: false,
  },
};

export const Label: Story = {
  args: {
    variant: "label",
    children: "Button",
    fullwidth: false,
    disabled: false,
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Button",
    fullwidth: false,
    disabled: false,
  },
};

export const Text: Story = {
  args: {
    variant: "text",
    children: "Button",
    fullwidth: false,
    disabled: false,
  },
};
