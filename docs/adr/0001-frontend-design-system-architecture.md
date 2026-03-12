# ADR-0001: Frontend Design System & Monorepo Architecture

**Status:** Proposed
**Date:** 2026-03-12
**Authors:** Daniel Heinrich
**Deciders:** OpenZirndorf Technical Team

## Context

OpenZirndorf is building multiple web applications that need a consistent corporate identity. The team discussed architecture approaches during the first Stammtisch (2026-03-11) and follow-up conversations in #dev-arc-talk and #logo-homepage-ci.

### Requirements (from Stammtisch & #dev-arc-talk)

- Multiple frontend apps under one domain (openzirndorf.de)
- Consistent Corporate Identity across all apps (colors, typography, components)
- Accessibility support (Barrierefreiheit) built in from the start
- Open-source friendly, no SaaS lock-in
- Easy for non-frontend developers to contribute
- Scalable as more apps and contributors join
- Versioned design artifacts (tokens, components)

### Key Constraints

- Most team members are **not primarily frontend developers**
- The project is volunteer-driven with limited time budgets
- We need reliable, well-known technologies that AI coding tools understand well
- Backend services remain in separate repositories (microservice approach)

## Decision

We adopt a **frontend monorepo** using the following stack:

| Concern | Tool | Purpose |
|---|---|---|
| Monorepo orchestration | **Turborepo** | Task running, caching, incremental builds |
| Package management | **pnpm** | Fast installs, strict deps, workspace support |
| Component library | **shadcn/ui** | Accessible, customizable React components |
| Styling | **Tailwind CSS** | Utility-first CSS, integrates with shadcn/ui |
| Design tooling | **Pencil.dev** | Git-based design, AI-assisted UI generation |
| Documentation | **Storybook** | Component playground and living docs |
| Code quality | **Biome** | Linting and formatting |
| Versioning | **Changesets** | Versioned releases for the UI package |

### Repository Structure

```
openzirndorf-apps/
  apps/
    storybook/          # Component documentation & playground
  packages/
    brand/              # Logos, assets, brand guidelines
    ui/                 # Shared components, patterns, design tokens
      components/       # shadcn/ui based components
      patterns/         # Higher-level UI compositions
      tokens/           # Design tokens (colors, typography, spacing)
  docs/
    adr/                # Architecture Decision Records
```

### Design Token Flow

```
Pencil.dev design  -->  AI-generated tokens  -->  packages/ui/tokens
                                                      |
                                                      v
                                              Tailwind CSS config
                                                      |
                                                      v
                                              Components & Patterns
                                                      |
                                                      v
                                              Storybook (docs)
                                                      |
                                                      v
                                              Applications
```

### Corporate Identity Tokens

Based on current CI decisions (#logo-homepage-ci):

- **Font:** Montserrat (bold)
- **Colors:** #009A00 (Zirndorf green), #1F2937 (dark gray), #FF0000 (accent red)

These are defined as design tokens in `packages/ui` and consumed via Tailwind CSS configuration.

## Alternatives Considered

### Alternative A: Multi-Repo with Shared CSS File

Proposed by Andy in #dev-arc-talk: Each app in its own repo, shared `tokens.css` loaded at runtime via `<link>` tag from a central URL.

**Pros:**
- Complete tech-stack freedom per app
- Independent deployments
- Simple initial setup

**Rejected because:**
- Multiple CI pipelines to maintain, prone to drift
- No shared components, only shared variables
- Each app reimplements buttons, forms, navigation etc.
- Hard to enforce consistency beyond colors
- Fabian noted: "Ich sehe den Vorteil EINES Repos mit EINER Pipeline [...] Nicht x Merge Requests, x Pipelines, x Anpassungen, die driften konnten."

### Alternative B: Microfrontend Runtime

Shell app embedding frontend apps at runtime.

**Rejected because:**
- High complexity for the team's frontend experience level
- Overkill for current project scope
- Runtime dependencies between apps

## Rationale

### Why Monorepo?

1. **One pipeline, one set of rules.** Linting, testing, accessibility checks, and CI run once, not per-repo. No drift.
2. **Shared components, not just shared CSS.** Teams reuse actual React components with built-in accessibility, not just color variables.
3. **AI-friendly.** shadcn/ui and Tailwind CSS are among the most widely understood technologies by AI coding assistants. Since the team has few dedicated frontend developers, this matters.
4. **Atomic changes.** A design token change and the component update happen in the same PR.

### Why shadcn/ui?

- Components are **copied into the codebase** (no dependency lock-in)
- Built on **Radix UI** with strong accessibility defaults (aria labels, keyboard navigation)
- Widely adopted, well-documented, excellent AI support
- Addresses the accessibility requirement raised by Fabian without extra effort

### Why not enforce stack freedom?

Andy noted that "bei kleineren Microservices bin ich da emotionslos, come as you are." This ADR specifically covers the **frontend** scope. Backend services remain free to choose any technology. Within the frontend monorepo, standardizing on one stack reduces the maintenance burden for a volunteer team.

As Andy also noted: "Da wir kaum echte Frontendler haben, sollten wir zumindest verlassliche KI Technologien verwenden bzw. uns am Markt orientieren."

## Consequences

### Positive

- Single source of truth for all UI components, tokens, and patterns
- Accessibility comes built-in via shadcn/ui (Radix primitives)
- Changes to the design system propagate to all apps in one PR
- Storybook serves as living documentation for the whole team
- New apps get the full design system for free

### Negative

- All frontend developers must use React and Tailwind CSS
- Monorepo tooling (Turborepo, pnpm workspaces) has a learning curve
- Repository grows as more apps are added

### Neutral

- Backend services remain fully independent (separate repos, any language/framework)
- The design system can export plain CSS tokens for non-React consumers if needed later

## Links

- Storybook preview: https://openzirndorf.github.io/openzirndorf-apps/
- Current tokens.css: https://openzirndorf.de/static/tokens.css
- Homepage repo: https://github.com/openzirndorf/openzirndorf_page
