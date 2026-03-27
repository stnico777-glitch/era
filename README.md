# Era Solutions marketing site

Next.js (App Router) marketing site for Era Solutions: leadflow, conversion solutions, and software for service-based businesses.

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production

```bash
npm run build
npm start
```

## Configuration

Update company details in [`lib/site.ts`](lib/site.ts) (phone, email, address line, social URLs).

Set `NEXT_PUBLIC_CALENDLY_URL` to your live booking link to power inline scheduling on the contact page (falls back to the default value in `lib/site.ts` if unset).

Stock photography URLs live in [`lib/visuals.ts`](lib/visuals.ts); replace with your own assets and keep [`next.config.ts`](next.config.ts) `images.remotePatterns` in sync if you use a new host.

The hero rotates background videos (see `heroVideos` in [`lib/visuals.ts`](lib/visuals.ts)) with a poster still fallback (`visuals.hero`). Edit clip list/timing in [`components/HeroBackground.tsx`](components/HeroBackground.tsx) (`DEFAULT_DISPLAY_MS` and per-clip `displayMs`).

Wordmark is rendered from inline SVG in [`components/Logo.tsx`](components/Logo.tsx).
