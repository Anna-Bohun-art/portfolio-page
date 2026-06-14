# Anna Kladova Bohun Portfolio

Premium one-page portfolio built with Next.js 16, TypeScript, Tailwind CSS 4, and Motion for React.

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Checks

```bash
npm run lint
npm run typecheck
npm test
npm run test:e2e
npm run build
```

Playwright requires Chromium once per machine:

```bash
npx playwright install chromium
```

## Content And Assets

Career content, links, project placeholders, and asset availability are centralized in `src/data/content.ts`.

- Add Anna's portrait under `public/`, then set `assets.portraitUrl`.
- Add the CV PDF under `public/`, then set `assets.cvUrl`.
- Set `NEXT_PUBLIC_SITE_URL` to the production origin for canonical, sitemap, and social metadata.

## Deploy

Deploy the repository to Vercel with the standard Next.js preset. No backend services or additional build steps are required.
