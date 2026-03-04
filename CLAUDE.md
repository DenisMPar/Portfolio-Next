# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev       # Start development server
yarn build     # Build for production
yarn start     # Start production server
yarn lint      # Run Next.js ESLint
```

No test suite is configured in this project.

## Environment Variables

Required in `.env.local`:
- `NEXT_PUBLIC_CONTENTFUL_SPACE_ID` — Contentful space ID
- `NEXT_PUBLIC_CONTENTFUL_TOKEN` — Contentful delivery API token
- `NEXT_PUBLIC_FORMSPREE_ID` — Formspree form ID for the contact form

## Architecture

Single-page portfolio using Next.js 12 (Pages Router). All sections live on `pages/index.tsx` as a vertical scroll layout.

**Data flow:**
- Content (projects, services, about me) is fetched from **Contentful CMS** at build time via `getStaticProps` in `pages/index.tsx`
- `lib/contentful.ts` creates the Contentful client; `lib/api.ts` fetches all entries
- Data is seeded into **SWR** via `SWRConfig fallback` so client components can use `useSWRImmutable("/api/content", ...)` without re-fetching
- `hooks/index.ts` contains all custom hooks that read from SWR state and transform the raw Contentful entries into typed shapes for each section

**Global state:** Recoil (`RecoilRoot` wraps the app in `_app.tsx`) is available but minimal usage.

**Styling:** Styled-components throughout. Each component folder contains an `elements.ts` (or `*Elements.ts`) file with all its styled components. The Next.js compiler plugin `styledComponents: true` is enabled in `next.config.js` for SSR support.

**Component structure:**
- `components/` — Page section components (Hero, AboutMe, Proyects, Services, Contact, Footer, Header, NavBar, SideBar, InfoGrid, ContactForm)
- `ui/` — Reusable primitives: `button/`, `icons/`, `loader/`, `servicesCard/`, `text-field/`
- `hooks/index.ts` — Data-fetching and UI hooks (`useGetDataFromCms`, `useGetProyectsData`, `useGetServicesData`, `useGetAboutMeData`, `useGetWidth`, `useShowPage`)

**Navigation:** `react-scroll` is used for smooth in-page scroll; nav links target section `id` attributes (`#proyects`, `#contact`, etc.). Mobile nav uses a `SideBar` toggled by state in `Header`.

**Contact form:** Handled via `@formspree/react` — submissions go directly to Formspree (no API route needed).

**Images:** Served from Cloudinary (`res.cloudinary.com`) and Contentful assets (`images.ctfassets.net`), both whitelisted in `next.config.js`.
