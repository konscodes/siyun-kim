# Siyun Kim — Portfolio

Minimal producer portfolio website for Siyun Kim.  
Built with Next.js (App Router), TypeScript, and CSS Modules.

## Stack

- **Next.js 16** — App Router, static site generation
- **TypeScript** — type-safe throughout
- **CSS Modules** — scoped, zero-runtime styles
- **next/font** — self-hosted Inter via Google Fonts
- **next/image** — optimized image delivery

## Development

```bash
npm install
npm run dev
```

Opens at [http://localhost:3000](http://localhost:3000).

## Content

All work entries live in [`data/works.ts`](data/works.ts). Each entry contains:

```ts
{
  slug: string          // URL path: /work/[slug]
  title: string
  year: number
  client: string
  role: string
  description: string
  thumbnailUrl: string  // replace with real image path or URL
  thumbnailAspect: "landscape" | "portrait" | "square"
  vimeoId: string       // Vimeo video ID (digits only)
  stillImages: string[] // 2–3 still image URLs
}
```

To add real content, update the entries in `data/works.ts` and place images in `public/` (or use absolute URLs). Update the contact email in `app/contact/page.tsx` and replace the profile photo URL.

## Deployment (Vercel)

This repo is ready for [Vercel](https://vercel.com): Next.js is auto-detected; no `vercel.json` is required.

1. Push this repository to GitHub (see below).
2. In Vercel: **Add New Project** → **Import** `konscodes/siyun-kim`.
3. Leave defaults: **Framework Preset** Next.js, **Build Command** `next build`, **Output Directory** (managed by Vercel).
4. **Deploy**. After the first deploy, connect a **custom domain** under Project → **Settings** → **Domains**.

Optional: enable **Production Branch** `main` and **Preview** deployments for other branches in Project → **Settings** → **Git**.

```bash
npm run build   # verify production build locally before pushing
```

No environment variables are required for the mock-data version. Add secrets in Vercel **Settings** → **Environment Variables** if you later introduce API keys or private URLs.
