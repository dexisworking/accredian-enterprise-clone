# Accredian Enterprise Partial Clone

Partial clone of the [Accredian Enterprise](https://enterprise.accredian.com/) landing page built with Next.js App Router and Tailwind CSS.

## Submission Links

- Live deployed link: https://accredian-enterprise-clone-five.vercel.app
- GitHub repository: https://github.com/dexisworking/accredian-enterprise-clone

## What I Built

- Responsive enterprise landing page
- Sticky navigation with mobile menu
- Reusable section-driven layout
- Lead capture form
- Mock API integration using a Next.js API route
- FAQ accordion and smooth in-page navigation

## Tech Stack

- Next.js 16 App Router
- React functional components with hooks
- Tailwind CSS v4
- TypeScript

## Project Structure

```text
app/
  api/leads/route.ts
  globals.css
  layout.tsx
  page.tsx
components/
  faq-accordion.tsx
  lead-form.tsx
  site-header.tsx
lib/
  site-data.ts
```

## Setup Instructions

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

4. Create a production build:

```bash
npm run build
```

## Approach Taken

The page was rebuilt from scratch in a blank workspace using a reusable section pattern instead of a template-first approach. I used the reference site mainly for information architecture and tone, then reinterpreted the layout with:

- a full-bleed hero with stronger visual hierarchy
- reusable data-driven sections for programs, metrics, testimonials, and FAQs
- a clean responsive header/footer system
- a mock lead form backed by `app/api/leads/route.ts`

The implementation favors maintainability: most content is centralized in `lib/site-data.ts`, while interaction-heavy pieces live in focused client components.

## AI Usage Explanation

### Where AI helped

- Planning the page structure from the assignment brief and reference site
- Speeding up the initial section architecture and content framing
- Drafting reusable component structure and Tailwind-first layout patterns
- Generating and refining placeholder enterprise copy for sections, FAQs, and testimonials
- Helping shape the README and submission notes

### What I modified or improved manually

- Reworked the visual direction to avoid a generic SaaS template feel
- Adjusted spacing, hierarchy, and responsive behavior section by section
- Built the hero composition, orbit visuals, and motion details manually
- Added a mock API-backed lead capture flow instead of leaving the page static
- Cleaned the code structure into reusable components and centralized content data

## Functional Notes

- The lead form sends a `POST` request to `/api/leads`
- The API route validates required fields and returns a mock success response
- The page is fully navigable through anchored sections
- The layout is optimized for mobile and desktop

## Verification

Production build completed successfully with:

```bash
npm run build
```

## Improvements With More Time

- Match the original site more closely using a full visual audit of spacing, imagery, and typography
- Add real CMS or database-backed content instead of static data
- Persist leads to a backend or CRM
- Add richer micro-interactions and scroll-linked motion
- Add automated tests for form behavior and section rendering
- Add visual regression checks for future iterations

## Notes

This is a partial clone intended for evaluation of execution, structure, responsiveness, and engineering choices rather than a pixel-perfect copy.
