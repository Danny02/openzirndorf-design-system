import {
  Badge,
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@openzirndorf/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Foundation/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[360px]">
      <CardHeader>
        <CardTitle>Card title</CardTitle>
        <CardDescription>
          A neutral content container for summaries, actions, and grouped UI.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Card content sits between header and footer and inherits the shared
          spacing contract.
        </p>
      </CardContent>
      <CardFooter>
        <Button>Primary action</Button>
      </CardFooter>
    </Card>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Card className="w-[360px]">
      <CardHeader>
        <CardTitle>Usage analytics</CardTitle>
        <CardDescription>
          Weekly activity and recent change summary.
        </CardDescription>
        <CardAction>
          <Badge variant="success">Live</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">Requests</p>
            <p className="text-2xl font-bold text-foreground">1,248</p>
          </div>
          <div>
            <p className="text-muted-foreground">Completion</p>
            <p className="text-2xl font-bold text-foreground">92%</p>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
};

export const AsLink: Story = {
  render: () => (
    <Card
      asChild
      className="w-[360px] transition-transform hover:-translate-y-1 hover:[box-shadow:var(--shadow)]"
    >
      <a href="/linked-card">
        <CardHeader>
          <CardTitle>Linked card</CardTitle>
          <CardDescription>
            The base card supports asChild for pattern components that render as
            links.
          </CardDescription>
        </CardHeader>
      </a>
    </Card>
  ),
};
