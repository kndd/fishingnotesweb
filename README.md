# Wędkarski Dziennik — strona

Astro site z opisem aplikacji i polityką prywatności (dla weryfikacji w Play Console).

## Dev

```
npm install
npm run dev
```

Serwer: `http://localhost:4321/fishingnotesweb/`.

## Build

```
npm run build
npm run preview
```

Output: `dist/`.

## Konfiguracja GitHub Pages

`astro.config.mjs` używa zmiennych `SITE_URL` i `BASE_PATH`. Workflow
`.github/workflows/deploy.yml` wypełnia je automatycznie z
`actions/configure-pages`. Wystarczy w ustawieniach repo: **Settings → Pages →
Source = GitHub Actions**.

Lokalnie dla innego hostingu (np. domena własna) nadpisz:

```
SITE_URL=https://example.com BASE_PATH=/ npm run build
```

## Treść

- `src/pages/index.astro` — opis aplikacji
- `src/pages/privacy.astro` — polityka prywatności (link do wklejenia w Play Console)
- Kontakt: `kondzio6@gmail.com`
