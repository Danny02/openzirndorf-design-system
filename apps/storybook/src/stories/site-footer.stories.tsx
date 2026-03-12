import { SiteFooter } from "@openzirndorf/ui";
import type { Meta, StoryObj } from "@storybook/react";

const columns = [
  {
    title: "Tools",
    links: [
      { label: "Wahlanalyse 2026", href: "#" },
      { label: "Ideenboerse", href: "#" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Slack", href: "#" },
      { label: "GitHub", href: "#" },
      { label: "Instagram", href: "#" },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      { label: "Impressum", href: "#" },
      { label: "Datenschutz", href: "#" },
    ],
  },
];

const meta = {
  title: "Patterns/SiteFooter",
  component: SiteFooter,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    description: "Digitale Moeglichkeiten fuer Zirndorf.",
    columns,
    copyright: "Copyright 2026 OpenZirndorf | Entwickelt in Zirndorf",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SiteFooter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <SiteFooter {...args} />,
};

export const CustomBrand: Story = {
  args: {
    brand: (
      <>
        <span className="text-brand-orange">community</span>
        <span className="text-white">hub</span>
      </>
    ),
  },
  render: Default.render,
};
