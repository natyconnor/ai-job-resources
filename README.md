# AI Job Enhance Resources

Static Astro site for hosting prompts and resources from a talk on using AI to improve a job search.

## Run locally

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
pnpm preview
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the repo into Vercel.
3. Vercel should detect Astro automatically.
4. Use the default build settings:
   - Install command: `pnpm install`
   - Build command: `pnpm build`
   - Output directory: `dist`

## Content to update next

- `src/data/site.ts` for the page title, prompt content, and resource links
- `src/pages/index.astro` if you want to change layout or add sections
- `src/styles/global.css` for the visual design
