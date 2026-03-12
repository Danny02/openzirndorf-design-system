import {
  EventCard,
  FeatureCard,
  ParticipationCard,
  PillarCard,
  SectionHeader,
  SiteFooter,
  SiteHeader,
  SupportBanner,
} from "@openzirndorf/ui";
import type { Meta, StoryObj } from "@storybook/react";
import {
  CalendarDays,
  Github,
  Lightbulb,
  MessageSquare,
  Rocket,
  ScanSearch,
  Sparkles,
} from "lucide-react";

const meta = {
  title: "Patterns/OpenZirndorf Page",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Showcase: Story = {
  render: () => (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader
        items={[
          { label: "Was wir sind", href: "#about" },
          { label: "Tools", href: "#tools" },
          { label: "Termine", href: "#events" },
          { label: "Mitmachen", href: "#join" },
          { label: "Medien", href: "#media" },
        ]}
        cta={{ label: "Mitmachen", href: "#join" }}
      />

      <main className="mx-auto flex w-full max-w-(--container) flex-col gap-18 px-5 py-12 md:py-16">
        <section className="space-y-8 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[rgba(45,143,15,0.25)] bg-brand-green-light px-3.5 py-1.5 text-[0.83rem] font-semibold text-brand-green-dark">
            <Sparkles className="size-4" />
            Civic Tech aus Zirndorf
          </div>
          <div className="mx-auto max-w-3xl space-y-5">
            <h1 className="text-balance text-[clamp(2.3rem,5.5vw,3.6rem)] font-black leading-[1.05] tracking-[-0.045em]">
              Digitale Moeglichkeiten
              <br />
              <span className="text-primary">fuer Zirndorf</span>
            </h1>
            <p className="mx-auto max-w-[50ch] text-[1.1rem] leading-8 text-muted-foreground">
              Ein Storybook Showcase der aus dem bestehenden
              OpenZirndorf-Auftritt abgeleiteten Basiskomponenten und Muster.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1.5 text-[0.82rem] text-muted-foreground">
              Open Source
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1.5 text-[0.82rem] text-muted-foreground">
              Aus Zirndorf
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1.5 text-[0.82rem] text-muted-foreground">
              Ueberparteilich
            </span>
          </div>
        </section>

        <section
          id="about"
          className="space-y-8 rounded-4xl bg-secondary px-6 py-10 md:px-10"
        >
          <SectionHeader
            align="center"
            title="Was ist OpenZirndorf?"
            description="Ein kurzer Ueberblick fuer alle, die die Initiative zum ersten Mal sehen."
          />
          <div className="grid gap-5 md:grid-cols-3">
            <PillarCard
              icon="DEV"
              title="Wir machen digitales nutzbar"
              description="Werkzeuge, Anwendungen und Erklaerungen werden so gestaltet, dass sie vor Ort wirklich verwendet werden koennen."
            />
            <PillarCard
              icon="OFFEN"
              title="Wir arbeiten offen"
              description="Methoden, Ergebnisse und Entscheidungen bleiben nachvollziehbar statt in geschlossenen Prozessen zu verschwinden."
            />
            <PillarCard
              icon="LOKAL"
              title="Wir sind lokal verwurzelt"
              description="Die Muster orientieren sich am kommunalen Kontext: sachlich, zugaenglich und buergernah."
            />
          </div>
        </section>

        <section id="tools" className="space-y-8">
          <SectionHeader
            title="Unsere bisherigen Tools"
            description="Hervorgehobene Karten fuer Produkte, Inhalte und Beteiligungsformate."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            <FeatureCard
              href="#"
              icon={<Rocket className="size-7" />}
              label="KI-Analyse"
              title="Wahlanalyse Zirndorf 2026"
              description="Ein prominentes Tool-Teaser-Muster mit Farbton, Icon-Flaeche und starker Hover-Hierarchie."
              tone="blue"
            />
            <FeatureCard
              href="#"
              icon={<Lightbulb className="size-7" />}
              label="Buergerbeteiligung"
              title="Ideenboerse fuer Zirndorf"
              description="Die orange Variante nutzt dieselbe Struktur, aber einen anderen semantischen Farbton fuer Beteiligungsformate."
              tone="orange"
            />
          </div>
        </section>

        <section
          id="events"
          className="space-y-8 rounded-4xl bg-secondary px-6 py-10 md:px-10"
        >
          <SectionHeader
            title="Naechste Termine"
            description="Listeneintraege fuer Veranstaltungen mit Datumsblock, Meta-Info und klarer Interaktionskante."
          />
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
              href="#"
            />
          </div>
        </section>

        <section id="join" className="space-y-8">
          <SectionHeader
            align="center"
            title="Einstieg leicht gemacht"
            description="Kontakt- und Community-Karten fuer unterschiedliche Zielgruppen, ohne zusaetzliche Seitentypen zu bauen."
          />
          <div className="grid gap-5 md:grid-cols-3">
            <ParticipationCard
              href="#"
              icon={<MessageSquare className="size-6" />}
              label="Empfohlen fuer den Start"
              title="Slack beitreten"
              description="Fragen stellen, mitlesen und erste Kontakte knuepfen, ohne technisches Vorwissen."
              tone="violet"
            />
            <ParticipationCard
              href="#"
              icon={<Lightbulb className="size-6" />}
              label="Du hast Ideen?"
              title="Ideenboerse"
              description="Vorschlaege einreichen, diskutieren und gemeinsam weiterentwickeln."
              tone="orange"
            />
            <ParticipationCard
              href="#"
              icon={<Github className="size-6" />}
              label="Fuer Entwickler und Neugierige"
              title="Code auf GitHub"
              description="Alle Projekte, Werkzeuge und Datengrundlagen offen zugaenglich."
              tone="neutral"
            />
          </div>
          <SupportBanner
            title="Du willst uns unterstuetzen?"
            description="Jede Hilfe zaehlt, ob Ideen, Kontakte, Faehigkeiten oder einfach ein guter Hinweis."
            actionLabel="Melde dich bei uns"
            actionHref="mailto:root@openzirndorf.de"
          />
        </section>

        <section id="media" className="space-y-8">
          <SectionHeader
            title="Medien und Assets"
            description="Kartenmuster fuer Downloads, Asset-Sammlungen oder kleine Dokumentationsmodule."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              href="#"
              icon={<CalendarDays className="size-7" />}
              label="Dokumentation"
              title="Veranstaltungsformate"
              description="Dasselbe Kartenmuster kann auch fuer redaktionelle oder dokumentierende Inhalte eingesetzt werden."
              tone="neutral"
            />
            <FeatureCard
              href="#"
              icon={<ScanSearch className="size-7" />}
              label="Open Data"
              title="Recherche-Bausteine"
              description="Tonale Varianten helfen dabei, unterschiedliche Inhaltsgruppen visuell zu clustern."
              tone="blue"
            />
          </div>
        </section>
      </main>

      <SiteFooter
        description="Digitale Moeglichkeiten fuer Zirndorf."
        copyright="Copyright 2026 OpenZirndorf | Entwickelt in Zirndorf"
        columns={[
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
        ]}
      />
    </div>
  ),
};
