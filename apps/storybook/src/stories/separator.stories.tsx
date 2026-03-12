import { Separator } from "@openzirndorf/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Foundation/Separator",
  component: Separator,
  args: {
    orientation: "horizontal",
    decorative: true,
  },
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    decorative: {
      control: "boolean",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Separator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: (args) => (
    <div className="w-[360px] space-y-4">
      <p className="text-sm text-muted-foreground">Top section</p>
      <Separator {...args} />
      <p className="text-sm text-muted-foreground">Bottom section</p>
    </div>
  ),
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
  render: (args) => (
    <div className="flex h-20 items-center gap-4">
      <span className="text-sm text-muted-foreground">Left</span>
      <Separator {...args} />
      <span className="text-sm text-muted-foreground">Right</span>
    </div>
  ),
};
