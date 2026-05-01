# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### Nodern — Web Development Agency (`artifacts/nodern`)
- **Type**: Next.js 15 (App Router)
- **Preview path**: `/` (root)
- **Port**: 19411
- **Stack**: Next.js 15, React 19, Tailwind CSS v4, Framer Motion
- **Dev command**: `pnpm --filter @workspace/nodern run dev`
- **Sections**: Hero, Services, Why Choose Us, Portfolio, Testimonials, Process, Final CTA, Contact, Footer

### API Server (`artifacts/api-server`)
- Express 5 backend
- Port: 8080

### Canvas (`artifacts/mockup-sandbox`)
- Design sandbox
- Port: 8081

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally
- `pnpm --filter @workspace/nodern run dev` — run Next.js site locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
