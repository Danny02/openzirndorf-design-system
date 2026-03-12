import {
  EventCard,
  FeatureCard,
  ParticipationCard,
  PillarCard,
  SupportBanner,
} from "@openzirndorf/ui";
import type { Meta, StoryObj } from "@storybook/react";
import {
  CalendarDays,
  Github,
  Lightbulb,
  MessageSquare,
  Rocket,
} from "lucide-react";

const meta = {
  title: "Patterns/Cards And CTA",
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const FeatureCardTones: Story = {
  render: () => (
    <div className="grid gap-5 lg:grid-cols-3">
      <FeatureCard
        href="#"
        icon={<Rocket className="size-7" />}
        label="KI-Analyse"
        title="Wahlanalyse Zirndorf 2026"
        description="Prominent teaser card for flagship products."
        tone="blue"
      />
      <FeatureCard
        href="#"
        icon={<Lightbulb className="size-7" />}
        label="Beteiligung"
        title="Ideenboerse"
        description="Orange tone for citizen participation formats."
        tone="orange"
      />
      <FeatureCard
        href="#"
        icon={<CalendarDays className="size-7" />}
        label="Dokumentation"
        title="Veranstaltungsformate"
        description="Neutral tone for supporting content."
        tone="neutral"
      />
    </div>
  ),
};

export const PillarCards: Story = {
  render: () => (
    <div className="grid gap-5 md:grid-cols-3">
      <PillarCard
        icon="DEV"
        title="Wir machen digitales nutzbar"
        description="Tools and explanations designed for practical civic use."
      />
      <PillarCard
        icon="OFFEN"
        title="Wir arbeiten offen"
        description="Results and methods stay understandable and visible."
      />
      <PillarCard
        icon="LOKAL"
        title="Wir sind lokal verwurzelt"
        description="The visual language stays grounded in the local context."
      />
    </div>
  ),
};

export const EventCardStates: Story = {
  render: () => (
    <div className="grid gap-4">
      <EventCard
        day="24."
        monthLabel="Do"
        title="Offenes Treffen im Rathausumfeld"
        meta="Zirndorf | 18:30 Uhr"
        href="#"
      />
      <EventCard
        day="12."
        monthLabel="Mo"
        title="Werkstatt zu digitalen Beteiligungsformaten"
        meta="Buergerzentrum | 19:00 Uhr"
        actionLabel="Ansehen"
      />
    </div>
  ),
};

export const ParticipationCardTones: Story = {
  render: () => (
    <div className="grid gap-5 md:grid-cols-3">
      <ParticipationCard
        href="#"
        icon={<MessageSquare className="size-6" />}
        label="Empfohlen fuer den Start"
        title="Slack beitreten"
        description="Fragen stellen, mitlesen und erste Kontakte knuepfen."
        tone="violet"
      />
      <ParticipationCard
        href="#"
        icon={<Lightbulb className="size-6" />}
        label="Du hast Ideen?"
        title="Ideenboerse"
        description="Vorschlaege einreichen und gemeinsam weiterentwickeln."
        tone="orange"
      />
      <ParticipationCard
        href="#"
        icon={<Github className="size-6" />}
        label="Fuer Entwickler und Neugierige"
        title="Code auf GitHub"
        description="Alle Projekte und Datengrundlagen offen zugaenglich."
        tone="neutral"
      />
    </div>
  ),
};

export const SupportBannerDefault: Story = {
  render: () => (
    <SupportBanner
      title="Du willst uns unterstuetzen?"
      description="Jede Hilfe zaehlt, ob Ideen, Kontakte, Faehigkeiten oder ein guter Hinweis."
      actionLabel="Melde dich bei uns"
      actionHref="mailto:root@openzirndorf.de"
    />
  ),
};
