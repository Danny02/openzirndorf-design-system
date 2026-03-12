import { BrandLogo } from "@openzirndorf/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Foundation/BrandLogo",
  component: BrandLogo,
  args: {
    size: "nav",
    alt: "Open Zirndorf logo",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["compact", "header", "nav", "footerMark", "footer", "hero"],
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BrandLogo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Presets: Story = {
  render: () => (
    <div className="flex flex-col gap-8 rounded-(--radius-lg) bg-secondary/35 p-8">
      <div className="space-y-3">
        <p className="text-sm font-semibold text-muted-foreground">Compact</p>
        <BrandLogo size="compact" />
      </div>
      <div className="space-y-3">
        <p className="text-sm font-semibold text-muted-foreground">Header</p>
        <BrandLogo size="header" />
      </div>
      <div className="space-y-3">
        <p className="text-sm font-semibold text-muted-foreground">Navigation</p>
        <BrandLogo size="nav" />
      </div>
      <div className="space-y-3">
        <p className="text-sm font-semibold text-muted-foreground">Footer mark</p>
        <BrandLogo size="footerMark" />
      </div>
      <div className="space-y-3">
        <p className="text-sm font-semibold text-muted-foreground">Footer</p>
        <BrandLogo size="footer" />
      </div>
      <div className="space-y-3">
        <p className="text-sm font-semibold text-muted-foreground">Hero</p>
        <BrandLogo size="hero" />
      </div>
    </div>
  ),
};