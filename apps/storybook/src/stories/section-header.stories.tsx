import { Button, SectionHeader } from "@openzirndorf/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Patterns/SectionHeader",
  component: SectionHeader,
  args: {
    eyebrow: "Open Zirndorf",
    title: "Unsere bisherigen Tools",
    description:
      "Hervorgehobene Karten fuer Produkte, Inhalte und Beteiligungsformate.",
    align: "left",
  },
  argTypes: {
    align: {
      control: "select",
      options: ["left", "center"],
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SectionHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Centered: Story = {
  args: {
    align: "center",
  },
};

export const WithAction: Story = {
  render: (args) => (
    <SectionHeader
      {...args}
      action={<Button variant="outline">See all tools</Button>}
    />
  ),
};
