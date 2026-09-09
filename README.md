# BLACKMARK V2

**BLACKMARK** is a premium, mobile-first prompt vault and local prompt compiler for creative AI workflows. It is a completely static application built with semantic HTML, modular CSS, vanilla ES modules-style JavaScript, JSON data files, and browser storage. No backend, database, API key, or paid service is required.

## Features

The application includes a luxury dark-and-gold interface, responsive desktop navigation, mobile bottom navigation, swipeable featured prompt cards, searchable vault views, category routes, persistent favorites, a local reference-image picker, and a Prompt Agent that compiles selected commands into a structured final instruction. Face & Identity Lock inserts a highest-priority preservation layer at the beginning of the compiled prompt. All local image selection remains in the browser; images are never uploaded by BLACKMARK.

The legacy command archive was migrated into JSON and preserved as a browsable catalog of more than 5,600 slash-style directives. These directives are custom shorthand conventions, not official commands from OpenAI or another model provider.

## Folder structure

| Path | Purpose |
|---|---|
| `index.html` | Homepage and product landing view |
| `vault/`, `agent/`, `favorites/` | Main product routes |
| `categories/*/` | Static GitHub Pages-compatible category routes |
| `data/categories.json` | Category metadata and counts |
| `data/prompts/*.json` | Prompt records grouped by category |
| `data/featured.json` | Curated featured records |
| `data/combinations.json` | Reusable command stacks |
| `js/config.js` | Repository base-path detection and configuration |
| `js/data-loader.js` | JSON loading, caching, storage, clipboard, and utilities |
| `js/app.js` | Shared route rendering and interaction orchestration |
| `css/global.css` | Design system and responsive product UI |
| `css/*.css` | Modular extension points for future CSS separation |
| `assets/` | Branding and future image/icon assets |

## Prompt data

Prompt content is intentionally kept out of JavaScript. Each category JSON file contains a category object with `subcategories`, and each subcategory contains `prompts`. A prompt record uses this shape:

```json
{
  "id": "face-identity-0",
  "command": "/faceidentity",
  "name": "Faceidentity",
  "description": "Preserve recognizable identity.",
  "instruction": "Maintain the original facial identity...",
  "tags": ["identity", "face"],
  "priority": 90,
  "compatibleWith": ["/relight"],
  "conflictsWith": [],
  "featured": true,
  "version": "2.0"
}
```

### Adding a prompt

Add a new object to the relevant subcategory in `data/prompts/<slug>.json`. Give it a unique `id`, a slash-style `command`, a short `description`, an actionable `instruction`, relevant `tags`, a priority from 10 to 100, and compatibility or conflict arrays. The Vault loads records dynamically, so no application code change is required.

### Adding a category

Create `data/prompts/<slug>.json`, add matching metadata to `data/categories.json`, create `categories/<slug>/index.html` using the same relative script paths as the other category routes, and add any category-specific visual treatment only if it is genuinely necessary. The shared renderer will automatically load the route based on its pathname.

## Prompt Agent and Identity Lock

The Agent persists its selected commands, subject, role, aspect ratio, and identity-lock state under `blackmark_agent_state`. When Identity Lock is active, the compiler places the protection layer before role, subject, creative direction, selected command instructions, and output format. This ordering makes identity preservation the highest-priority instruction without deleting user-selected commands.

Favorites are stored under `blackmark_favorites`. Both systems degrade gracefully when browser storage or clipboard access is unavailable.

## GitHub Pages deployment

1. Push the repository to GitHub.
2. In **Settings → Pages**, choose **Deploy from a branch**.
3. Select `main` and the repository root (`/`).
4. Save and wait for GitHub Pages to publish the site.

`js/config.js` derives the repository base path from the loaded script URL. This allows the same files to work at both `http://localhost/` and `https://username.github.io/repository-name/` without hardcoded repository paths. All internal links, JSON requests, and asset URLs pass through the shared `BLACKMARK.url()` helper.

## Local preview

Because browsers restrict `fetch()` for local files, serve the repository with any static server. For example:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080/`.

## License and scope

BLACKMARK is a static, client-side prompt organization interface. It does not claim to send prompts to an AI provider, upload reference images, or provide model execution. It compiles instructions locally so users can copy them into the tool of their choice.

## V2.1 monochrome system

The interface uses a strict pure monochrome palette: black backgrounds, white primary type, grayscale surfaces, grayscale borders, and grayscale secondary text. There are no gold, yellow, bronze, blue, purple, or neon accents. Premium character comes from typography, spacing, contrast, editorial composition, and restrained interaction states.

Prompt data is now organized for scale under nested paths such as `data/prompts/face/identity.json` and `data/prompts/quality/restoration.json`. Each category has an `index.json` manifest that lists its subcategory files. The loader reads manifests and subcategory files on demand, allowing the library to grow without one oversized category payload. Existing migrated commands and metadata remain preserved in the source category files and nested records.
