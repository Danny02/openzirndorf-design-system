import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@openzirndorf/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Overlay/Dialog",
  component: DialogContent,
  args: {
    showCloseButton: true,
  },
  argTypes: {
    showCloseButton: {
      control: "boolean",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DialogContent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open dialog</Button>
      </DialogTrigger>
      <DialogContent {...args}>
        <DialogHeader>
          <DialogTitle>Confirm publication</DialogTitle>
          <DialogDescription>
            Review the final content before sending it to the public website.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Publish</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const WithoutCornerClose: Story = {
  args: {
    showCloseButton: false,
  },
  render: (args) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Open dialog</Button>
      </DialogTrigger>
      <DialogContent {...args}>
        <DialogHeader>
          <DialogTitle>Dialog without corner close</DialogTitle>
          <DialogDescription>
            Use this when you want footer-driven actions only.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter showCloseButton>
          <Button>Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
