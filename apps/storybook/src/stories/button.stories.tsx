import { Button, PageHeader } from "@openzirndorf/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Foundation/Button",
  component: Button,
  args: {
    children: "Book a visit",
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

export const WithPattern: Story = {
  render: () => (
    <div className="w-[720px] space-y-6">
      <PageHeader
        eyebrow="Open Zirndorf"
        title="A shared library for every civic touchpoint"
        description="Use primitives for consistency and patterns for the recurring sections your apps share."
        actionLabel="Explore components"
      />
      <div className="flex gap-4">
        <Button>Primary action</Button>
        <Button variant="secondary">Secondary action</Button>
      </div>
    </div>
  ),
};
