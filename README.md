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

## GitHub Actions

- `CI` validates lint, typecheck, tests, package builds, and Storybook builds on pull requests and `main`.
- `Publish Packages` uses Changesets to open or update a release PR and publishes scoped packages to GitHub Packages from `main`.
- `Deploy Storybook` builds Storybook with a repository-aware base path and deploys it to GitHub Pages.

### GitHub Packages prerequisite

GitHub Packages npm publishing is namespace-based. The package scope and the GitHub namespace must match, so `@openzirndorf/*` publishing requires the repository to live under the `openzirndorf` user or organization, or the package scope to be renamed accordingly.

Consumers installing from GitHub Packages also need an `.npmrc` entry for the package scope:

```ini
@openzirndorf:registry=https://npm.pkg.github.com
```

## shadcn workflow

Add or update components from inside the UI package:

```bash
pnpm --filter @openzirndorf/ui exec shadcn add button
```

Keep generated primitives in `packages/ui/src/components/ui` and build branded compositions in `packages/ui/src/components/patterns`.
