# @openzirndorf/brand

Shared brand assets for Open Zirndorf.

## Structure

- `src/assets/logos/` for logo source files used by apps and the design system
- `src/assets/favicons/` for favicon files
- `src/assets/mascots/` for mascot artwork used by Open Zirndorf properties

## Usage

Import concrete assets by path from the package export map.

Examples:

- `@openzirndorf/brand/logos/logo.png`
- `@openzirndorf/brand/logos/logo-mark.png`
- `@openzirndorf/brand/logos/logo-64.webp`
- `@openzirndorf/brand/logos/logo-mark-64.webp`
- `@openzirndorf/brand/logos/logo-128.png`
- `@openzirndorf/brand/favicons/favicon.svg`
- `@openzirndorf/brand/mascots/<file>`

## Optimized Variants

PNG source assets in `logos/` and `mascots/` are trimmed and can be regenerated with:

- `corepack pnpm --filter @openzirndorf/brand optimize-assets`

Generated delivery assets follow this naming scheme:

- logos: `<name>-64.{png,webp}`, `<name>-128.{png,webp}`, `<name>-256.{png,webp}`
- mark-only logo: `logo-mark.png` plus `logo-mark-64.{png,webp}`, `logo-mark-128.{png,webp}`, `logo-mark-256.{png,webp}`
- mark-only mascots: `<name>-mark.png` plus `<name>-mark-256.{png,webp}`, `<name>-mark-512.{png,webp}`, `<name>-mark-800.webp`
- mascots: `<name>-256.{png,webp}`, `<name>-512.{png,webp}`, `<name>-800.webp`

Use `webp` by default for web delivery. Keep the original `.png` files as the transparent source assets.

## Current Source Of Truth

The design source in `open-zirndorf.pen` currently uses the bitmap logo asset.
The homepage rebuild frame header and footer should reference the same shared logo asset path as this package.