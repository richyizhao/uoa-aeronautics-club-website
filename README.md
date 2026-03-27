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

- React 19
- TypeScript
- Vite
- React Router
- Tailwind CSS 4
- ESLint
- Prettier

## Getting Started

### Prerequisites

- Node.js 20+ recommended
- npm

### Installation

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

The app will start in local development mode through Vite.

### Create a Production Build

```bash
npm run build
```

Build output is generated in `dist/`.

### Preview the Production Build

```bash
npm run preview
```

### Lint the Project

```bash
npm run lint
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Runs TypeScript project build checks and creates the production bundle |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Runs ESLint across the codebase |

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

## Content Management

Most site content is maintained directly in [`src/data/data.ts`](C:\Users\richa\OneDrive\Documents\GitHub\uoa-aeronautics-club-website\src\data\data.ts). This includes:

- Navigation and footer links
- Home page cards and merchandise content
- About page text and committee profiles
- Project summaries
- Sponsor listings
- Event metadata
- Contact links and membership form URL

Media assets are stored under [`src/assets`](C:\Users\richa\OneDrive\Documents\GitHub\uoa-aeronautics-club-website\src\assets) and are referenced by the data layer or page components.

## Routing

Application routes are defined in [`src/App.tsx`](C:\Users\richa\OneDrive\Documents\GitHub\uoa-aeronautics-club-website\src\App.tsx):

- `/`
- `/about`
- `/projects`
- `/sponsors`
- `/events`
- `/events/:id`
- `/contacts`

## Configuration Notes

This project currently uses hard-coded content and does not require environment variables for local development.

Before production release, review the following placeholders in [`src/data/data.ts`](C:\Users\richa\OneDrive\Documents\GitHub\uoa-aeronautics-club-website\src\data\data.ts):

- `AeroCloud` links marked as `PLACEHOLDER`
- Google Calendar embed source containing `YOUR_CALENDAR_ID`

## Maintenance Guidelines

- Keep structured content changes inside `src/data/data.ts` where possible.
- Add new images to the relevant folder under `src/assets`.
- Reuse shared UI components before introducing page-specific markup duplication.
- Run `npm run lint` and `npm run build` before shipping changes.

## License

This repository does not currently define a license. Add one if the project is intended for broader reuse or distribution.
