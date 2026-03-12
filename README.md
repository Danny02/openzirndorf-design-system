# Open Zirndorf Design System

Shared React component library for Open Zirndorf apps.

## Workspace

- `packages/ui`: shared components, hooks, utilities, and shadcn configuration.
- `apps/storybook`: Storybook docs and visual review surface for the library.
- `.github/workflows`: CI and release automation.

## Commands

```bash
pnpm install
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm storybook
pnpm build-storybook
```

## shadcn workflow

Add or update components from inside the UI package:

```bash
pnpm --filter @openzirndorf/ui exec shadcn add button
```

Keep generated primitives in `packages/ui/src/components/ui` and build branded compositions in `packages/ui/src/components/patterns`.
