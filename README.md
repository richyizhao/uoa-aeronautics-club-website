# UOA Aeronautics Club Website

Frontend codebase for the University of Auckland Aeronautics Club website. This project is a static React application used to showcase the club's mission, projects, sponsors, events, and contact pathways.

## Overview

The site is built as a lightweight client-side application with routed pages and locally managed content. It is designed for simple maintenance, with most editable copy and structured page data stored in a single data module.

Current site sections include:

- Home
- About
- Projects
- Sponsors
- Events
- Event detail pages
- Contacts

## Tech Stack

- TypeScript
- React
- Tailwind CSS
- Framer Motion
- Vite
- ESLint
- Prettier

## Getting Started

### Installation

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

### Create a Production Build

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

### Lint the Project

```bash
npm run lint
```

## Available Scripts

| Command           | Description                                                            |
| ----------------- | ---------------------------------------------------------------------- |
| `npm run dev`     | Starts the Vite development server                                     |
| `npm run build`   | Runs TypeScript project build checks and creates the production bundle |
| `npm run preview` | Serves the production build locally                                    |
| `npm run lint`    | Runs ESLint across the codebase                                        |

## Project Structure

```text
src/
  assets/             Static images and media used throughout the site
  components/         Reusable layout and UI components
  data/               Centralised site content and page configuration
  lib/                Shared helpers
  page/               Route-level page components
  utils/              Utility functions for media and content handling
public/               Publicly served static files
dist/                 Production build output
```

## Routing

Application routes are defined in `src/App.tsx`:

- `/`
- `/about`
- `/projects`
- `/sponsors`
- `/events`
- `/events/:id`
- `/contacts`

## Content Management

Most site content is maintained directly in `src/data/data.ts`. This includes:

- Navigation and footer links
- Home page cards and merchandise content
- About page text and committee profiles
- Project summaries
- Sponsor listings
- Event metadata
- Contact links and membership form URL

Media assets are stored under `src/assets` and are referenced by the slug-based lookups in data layer.

For more detail of data.ts [`README.md`](./src/data/README.md)

## Configuration Notes

Before production release, review the following placeholders in `src/data/data.ts`:

- `AeroCloud` links marked as `PLACEHOLDER`

## Maintenance Guidelines

- Keep structured content changes inside `src/data/data.ts` where possible.
- Store new images in the appropriate `src/assets` subfolders.  
  Use `events` for past event galleries. Use `media` for general page content.
- Run `npm run lint` and `npm run build` before shipping changes.
