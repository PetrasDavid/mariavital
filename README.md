# Flavon – Affiliate / Lead Generation Website

Professional, modern landing page for a Flavon MLM distributor (Marcsi – Platinum Team).

## Stack

- React (Vite)
- Tailwind CSS v4
- Lucide React
- Framer Motion

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Configuration

Edit these files to customize content without touching components:

| File | Purpose |
|------|---------|
| `src/config/siteConfig.js` | Affiliate URL, contact info, social links, navigation, legal disclaimer |
| `src/config/productsData.js` | Product names, prices, descriptions, images, per-product affiliate links |
| `src/config/testimonialsData.js` | Quotes and before/after stories |
| `src/config/faqData.js` | FAQ accordion items |

### Affiliate links

Set your distributor ID in `siteConfig.js`:

```js
affiliateUrl: "https://www.flavon.hu/?ref=YOUR_AFFILIATE_ID",
```

### Contact form

By default, form submission opens the user's email client (`mailto:`). To use Formspree or another service, set:

```js
formEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
```

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── config/           # Editable data & site settings
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Page sections (Hero, About, Products, etc.)
│   └── ui/           # Reusable UI (Button, ProductCard, ContactForm)
├── App.jsx
└── main.jsx
```
