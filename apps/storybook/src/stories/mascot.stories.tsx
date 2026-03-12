import { Mascot } from "@openzirndorf/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Foundation/Mascot",
  component: Mascot,
  args: {
    name: "fynn",
    size: "md",
    decorative: false,
  },
  argTypes: {
    name: {
      control: "select",
      options: ["fynn", "kreiselix", "nico", "quirin", "tuxi"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
    },
    decorative: {
      control: "boolean",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Mascot>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Gallery: Story = {
  render: () => (
    <div className="grid gap-6 rounded-lg bg-secondary/35 p-8 sm:grid-cols-2 lg:grid-cols-3">
      {(["fynn", "kreiselix", "nico", "quirin", "tuxi"] as const).map(
        (name) => (
          <div
            key={name}
            className="flex flex-col items-center gap-4 rounded-(--radius) bg-background p-6 text-center [box-shadow:var(--shadow-sm)]"
          >
            <Mascot name={name} size="md" decorative={false} />
            <p className="text-sm font-semibold capitalize text-foreground">
              {name}
            </p>
          </div>
        ),
      )}
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-end gap-8 rounded-lg bg-secondary/35 p-8">
      {(["sm", "md", "lg", "xl"] as const).map((size) => (
        <div
          key={size}
          className="flex flex-col items-center gap-4 text-center"
        >
          <Mascot name="tuxi" size={size} decorative={false} />
          <p className="text-sm font-semibold uppercase tracking-[0.05em] text-muted-foreground">
            {size}
          </p>
        </div>
      ))}
    </div>
  ),
};
