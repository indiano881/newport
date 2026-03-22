# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Davide Baldi, built with Nuxt 3 and Vue 3. Static site (SSG via `nuxt generate`) with no backend — form submissions go through Formspree. Deployed as pre-rendered HTML.

## Commands

- `npm run dev` — Start dev server at http://localhost:3000
- `npm run build` — Production build
- `npm run generate` — Static site generation (pre-renders all routes)
- `npm run preview` — Preview production build locally
- `npm run format` — Run Prettier

No linter or test runner is configured.

## Architecture

**Framework:** Nuxt 3 with file-based routing, Tailwind CSS, and Vue 3 Composition API (`<script setup>`).

**Routing:**

- `/` — Home page with hero, projects preview, about story
- `/projects` — Projects showcase grid
- `/projects/[slug]` — Dynamic project detail (slugs from `utils/data.js`)
- `/about` — Bio and certifications
- `/services` — Consulting, teaching, and mentoring offerings
- `/contact` — Contact form (Formspree)

**Data layer:** Content is driven by plain JS arrays in `utils/` — `data.js` (projects), `certification.js` (certs), `testimonials.js` (testimonials), `services.js` (service offerings). Update these files to add/edit content. Project objects have `tags` (array of strings for tab filtering), `featured` (boolean, shown in "Top" tab), and `hackathon` (object with `name`/`placement` or null, renders a badge on the card).

**Layout:** Single default layout (`layouts/default.vue`) renders `NavigationMenu` above every page.

**Components:** `components/` contains shared UI (NavigationMenu, ProjectsDisplay, ProjectC, ProjectTabs, MyStory, CertificationsC). Nuxt auto-imports them. `ProjectTabs` provides tag-based filtering on the projects page (All / Top / per-tag).

**Styling:** Mix of Tailwind utility classes and `<style scoped>` blocks. Font is "Outfit" from Google Fonts (imported in `assets/css/main.css`). Color palette uses inline Tailwind bracket notation (e.g., `bg-[#eacbd1]`). Nuxt modules: `@nuxt/image` (use `<NuxtImg>` for images), `@nuxtjs/tailwindcss`, `@nuxt/icon`.

**Icons:** Uses `@nuxt/icon` module with `@iconify-json/mdi` (Material Design Icons). Usage: `<Icon name="mdi:icon-name" />`.

**Key interactions:**

- Hero section eyes follow mouse position (desktop only, disabled < 768px)
- Scroll-based background color transitions on home page — each `.slide` section declares `data-background` (and optional `data-text`) attributes; a scroll handler in `pages/index.vue` reads these and applies them to `document.body`. Current palette: `#eacbd1` (pink), `#FCD9AE` (peach), `#94bde3` (blue). Body styles are cleaned up in `onBeforeRouteLeave`.
- Responsive hamburger menu (breakpoint at 1445px)

**Static assets:** All images in `public/` (hero SVGs, project screenshots, certifications, profile photos, resume PDF).

## Formatting

Prettier config (`.prettierrc`): no semicolons, single quotes, 2-space indent, trailing commas (es5), no parens on single arrow params.
