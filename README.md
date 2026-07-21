# Wilhelm Gusztav Francia — Resume Website

A dark, modern single-page personal resume/portfolio site built with Next.js, Tailwind CSS, and Framer Motion.

## Editing your content

All resume content lives in one file: [`lib/data.ts`](lib/data.ts). Edit the
profile, experience, highlights, skills, education, and contact values there —
no need to touch the components. The layout updates automatically.

To swap the downloadable resume, replace [`public/resume.pdf`](public/resume.pdf).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
```

## Deploy to Vercel (free plan)

1. Push this folder to a new GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Vercel auto-detects Next.js — no configuration needed. Click **Deploy**.

Or, with the Vercel CLI: `npm i -g vercel` then run `vercel` in this folder.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion (scroll/entrance animations)
- lucide-react (icons)
