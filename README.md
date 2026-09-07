# 1Fi Marketplace

A shop-in-shop built inside the existing 1Fi **Shop** experience. Shop now
has three options — **Top Brands**, **Nearby Stores**, and **1Fi
Marketplace** — with the Marketplace fully designed and implemented per
the assignment brief.

## Project overview

Users open Shop, pick 1Fi Marketplace, browse a catalog of products,
open a product to pick a variant and an EMI plan, and proceed with their
selection. Top Brands and Nearby Stores are present as routes but
intentionally blank, as specified in the assignment.

## Features

- **Product listing** — filterable grid of products with image, brand,
  name, price and starting EMI.
- **Product details** — image gallery, variant selector, computed EMI
  plans, specs and description.
- **EMI selection** — plans are generated from each variant's price
  (3/6/9/12-month tenures, with a no-cost 3-month option) and can be
  selected like a radio group.
- **Proceed CTA** — sticky bottom bar that stays disabled until both a
  variant and an EMI plan are selected, then shows a confirmation summary.
- **Loading & error states** — skeleton cards while the catalog loads, a
  spinner on the product page, and a retryable error screen if the mock
  API call fails.
- **Responsive layout** — 2-column grid on mobile up to 4-column on
  desktop; product details stacks on mobile and goes two-column on
  larger screens.

## Design reference

Styling (colors, buttons, type, section labels) is matched to
screenshots of the real 1Fi web app: violet brand color, pill-shaped
buttons with a diagonal arrow icon, a gradient accent word in headlines,
uppercase tracked section labels (the real app uses these throughout its
calculator — "PURCHASE DETAILS", "FINANCIAL SUMMARY"), black-active
toggle pills (matches the real EMI tenure selector), and green used for
savings/positive financial information. The top navigation bar mirrors
the real site's header (logo, nav links, "Shop Now" CTA); only Home and
Shop are wired up since the assignment scopes this build to the
Marketplace inside Shop.

## Tech stack

- **React 18** + **Vite** — fast dev server, small production build.
- **React Router 6** — client-side routing between Shop, Marketplace,
  and Product Details.
- **Plain CSS with design tokens** (`src/styles/global.css`) — no UI
  framework, so every visual choice (color, spacing, type) is explicit
  and easy to align with the real 1Fi app's design system later.
- **Nginx** — serves the production build inside Docker.

## Folder structure

```
1fi-marketplace/
├── src/
│   ├── api/
│   │   └── productApi.js        # Service layer — the only thing pages talk to
│   ├── data/
│   │   └── products.js          # Mock data source (never imported by UI directly)
│   ├── components/
│   │   ├── TopNav.jsx
│   │   ├── Breadcrumb.jsx
│   │   ├── ProductCard.jsx
│   │   ├── EmiPlanCard.jsx
│   │   ├── VariantSelector.jsx
│   │   ├── ProceedModal.jsx
│   │   ├── Loading.jsx
│   │   └── ErrorState.jsx
│   ├── pages/
│   │   ├── Shop.jsx
│   │   ├── TopBrands.jsx
│   │   ├── NearbyStores.jsx
│   │   ├── Marketplace.jsx
│   │   └── ProductDetails.jsx
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── public/
├── Dockerfile
├── nginx.conf
├── docker-compose.yml
├── .dockerignore
├── package.json
└── README.md
```

**Data flow:** `UI components → api/productApi.js → data/products.js`.
Product and EMI data is never hardcoded in a component — swapping the
mock data source for real HTTP calls only means editing
`productApi.js`.

## Local setup

Requires Node.js 18+.

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

To build and preview the production bundle locally:

```bash
npm run build
npm run preview
```

## Docker setup

Build the image:

```bash
docker build -t 1fi-marketplace .
```

Run the container:

```bash
docker run --name 1fi-marketplace -p 8080:80 1fi-marketplace
```

Open `http://localhost:8080` in your browser.

**Or with Docker Compose:**

```bash
docker compose up --build
```

This also serves the app at `http://localhost:8080`.

The image is a multi-stage build: a Node stage installs dependencies and
runs `vite build`, then only the compiled static files are copied into a
small `nginx:alpine` image. `nginx.conf` adds a fallback so client-side
routes (e.g. `/marketplace/product/p1`) work on a hard refresh, not just
via in-app navigation.

## Available routes

| Route | Description |
| --- | --- |
| `/shop` | Shop hub with the three options |
| `/shop/top-brands` | Placeholder page (no implementation, per spec) |
| `/shop/nearby-stores` | Placeholder page (no implementation, per spec) |
| `/marketplace` | Product listing with category filters |
| `/marketplace/product/:id` | Product details, variant + EMI selection, Proceed |

## Mock API / data explanation

`src/api/productApi.js` simulates a real backend:

- `getCategories()` — returns filter chips for the listing page.
- `getProducts({ category })` — returns product summaries, optionally
  filtered by category, after an artificial network delay.
- `getProductById(id)` — returns full product detail, including
  per-variant pricing.
- `computeEmiPlans(principal)` — pure function that turns a price into a
  set of EMI plans (3/6/9/12 months); used by both the listing page,
  which needs a "from ₹X/mo" figure, and the details page, which needs
  the full plan list.

There's also a `SIMULATE_ERROR_RATE` constant in `productApi.js` you can
set above `0` to exercise the error state during development without
touching component code.

## Screenshots

Not included in this repository — run the app locally or in Docker to
view the Shop, Marketplace, and Product Details screens.

## Future improvements

- Wire `productApi.js` to a real 1Fi backend / EMI provider once
  available, replacing `data/products.js`.
- Persist the selected variant/EMI plan across a real checkout flow
  instead of the local confirmation summary.
- Add search and sort to the Marketplace listing.
- Add automated tests (component tests for `ProductCard`/`EmiPlanCard`,
  an integration test for the full browse → select → proceed flow).
- Introduce a design-token bridge (e.g. CSS custom properties exported
  from a shared config) if the Marketplace needs to consume the real
  1Fi design system directly instead of an approximation of it.
