# Placeholder Assets — Project Images

This folder contains placeholder SVGs used during development.

## How to Replace with Real Images

1. **Create a project folder**: `/public/projects/<slug>/`
2. **Add images**:
   - `cover.jpg` — 1200×800 main cover
   - `1.jpg` through `N.jpg` — gallery images (1200×900 recommended)
3. **Update** `/src/data/projects.ts`:
   - Set `coverImage` to `/projects/<slug>/cover.jpg`
   - Set `images` array to `/projects/<slug>/1.jpg`, etc.
4. **Alternatively**, update `/src/lib/assets.ts` helper functions to auto-resolve from the new folder structure.

## Current Placeholder Structure

```
/public/placeholders/
  project-cover-1.svg ... project-cover-6.svg    (1200×800)
  project-gallery-1.svg ... project-gallery-12.svg (1200×900)
  hero-poster.svg                                  (1920×1080)
```
