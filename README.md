# 🏍️ Sportbike Rescue

A playful (premium) marketing site for a fictional shelter that rescues, fosters,
restores, and rehomes abandoned 1980s–early-2000s sportbikes.

Built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build && npm start   # production
```

## Pages
- `/` — Home (hero, featured kennel cards, rescue timeline, process)
- `/adopt` — Available for Adoption (filterable grid)
- `/bikes/[slug]` — Bike profile (story, restoration progress, journey)
- `/rescue-stories` — Before/during/after restoration journeys
- `/forever-garages` — Adopter testimonials
- `/surrender` — Surrender-a-bike intake form
- `/contact` — Contact & support

## Reusable components
`Header` · `Hero` · `BikeCard` · `AdoptionCard` · `RescueTimeline` ·
`StatusBadge` · `Footer` (plus `BikeSketch`, `Logo`, `Section`, form helpers).

## Notes on assets
Bikes use an on-brand, hand-drawn **`BikeSketch`** SVG placeholder (recolored per
bike) instead of stock photos — no external image dependencies. To use real
photos, swap `BikeSketch` for an `<Image>` and add an `imageUrl` to each entry in
`lib/bikes.ts`.

Fonts (Anton, Permanent Marker, Work Sans) load from Google Fonts via `<link>`
in `app/layout.tsx`.

All sample bike data lives in `lib/bikes.ts`.
