import {
  Button,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@openzirndorf/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Overlay/Sheet",
  component: SheetContent,
  args: {
    side: "right",
    showCloseButton: true,
  },
  argTypes: {
    side: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
    },
    showCloseButton: {
      control: "boolean",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SheetContent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Open sheet</Button>
      </SheetTrigger>
      <SheetContent {...args}>
        <SheetHeader>
          <SheetTitle>Navigation panel</SheetTitle>
          <SheetDescription>
            The sheet is used by the site header for the mobile menu.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-1 flex-col gap-2 px-6 text-sm">
          <a href="/about" className="rounded-md px-3 py-2 hover:bg-accent">
            Was wir sind
          </a>
          <a href="/tools" className="rounded-md px-3 py-2 hover:bg-accent">
            Tools
          </a>
          <a href="/events" className="rounded-md px-3 py-2 hover:bg-accent">
            Termine
          </a>
        </div>
        <SheetFooter>
          <Button className="w-full">Mitmachen</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

export const Left: Story = {
  args: {
    side: "left",
  },
  render: Default.render,
};

export const BottomWithoutClose: Story = {
  args: {
    side: "bottom",
    showCloseButton: false,
  },
  render: Default.render,
};
