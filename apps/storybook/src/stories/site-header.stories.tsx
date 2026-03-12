import { SiteHeader } from "@openzirndorf/ui";
import type { Meta, StoryObj } from "@storybook/react";

const defaultItems = [
  { label: "Was wir sind", href: "#about" },
  { label: "Tools", href: "#tools" },
  { label: "Termine", href: "#events" },
  { label: "Mitmachen", href: "#join" },
  { label: "Medien", href: "#media" },
];

const meta = {
  title: "Patterns/SiteHeader",
  component: SiteHeader,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    items: defaultItems,
    cta: { label: "Mitmachen", href: "#join" },
    homeHref: "/",
    mobileTitle: "Navigation",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SiteHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="min-h-55 bg-background">
      <SiteHeader {...args} />
    </div>
  ),
};

export const WithoutCta: Story = {
  args: {
    cta: undefined,
  },
  render: Default.render,
};

export const CustomBrand: Story = {
  args: {
    brand: (
      <>
        <span className="text-brand-blue">stadt</span>
        <span>portal</span>
      </>
    ),
  },
  render: Default.render,
};
