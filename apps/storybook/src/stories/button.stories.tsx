import { Button } from "@openzirndorf/ui";
import type { Meta, StoryObj } from "@storybook/react";
import { Plus } from "lucide-react";

const meta = {
  title: "Foundation/Button",
  component: Button,
  args: {
    children: "Book a visit",
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "secondary",
        "outline",
        "destructive",
        "ghost",
        "link",
        "white",
        "outlineWhite",
      ],
    },
    size: {
      control: "select",
      options: ["default", "lg", "icon"],
    },
    asChild: {
      control: "boolean",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Secondary action",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "More details",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Delete request",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Get started",
  },
};

export const WithLeadingIcon: Story = {
  args: {
    children: (
      <>
        <Plus />
        New request
      </>
    ),
  },
};

export const IconOnly: Story = {
  args: {
    size: "icon",
    "aria-label": "Create request",
    children: <Plus />,
  },
};
