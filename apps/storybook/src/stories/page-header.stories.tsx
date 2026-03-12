import { PageHeader } from "@openzirndorf/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Patterns/PageHeader",
  component: PageHeader,
  args: {
    eyebrow: "Open Zirndorf",
    title: "A shared library for every civic touchpoint",
    description:
      "Use primitives for consistency and patterns for recurring sections across the OpenZirndorf apps.",
    actionLabel: "Explore components",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PageHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutAction: Story = {
  args: {
    actionLabel: undefined,
  },
};
