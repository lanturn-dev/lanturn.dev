# Lanturn.dev Marketing Site

A SaaS landing page for the Lanturn.dev platform, built with [Astro](https://astro.build/) and styled using Tailwind CSS design tokens. The site introduces Lanturn.dev's suite of developer productivity tools with an initial focus on "Incident Response".

## 🧰 Tech stack

- [Astro](https://astro.build/) for static site generation
- [Tailwind CSS](https://tailwindcss.com/) with custom design tokens for consistent styling
- GitHub Actions + Cloudflare Pages for automated deployments

## 🚀 Getting started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Astro serves the site on [http://localhost:4321](http://localhost:4321) by default.

### Building for production

```bash
npm run build
```

The compiled site is output to the `dist/` directory.

## ☁️ Deploying to Cloudflare Pages

This repository includes a GitHub Actions workflow that builds the site and publishes it to Cloudflare Pages on every push to `main` (or when triggered manually).

To enable deployments:

1. Create a Cloudflare Pages project configured for a static site.
2. Add the following GitHub repository secrets:
   - `CLOUDFLARE_API_TOKEN` – Pages Deployments token with "Edit Cloudflare Pages" permissions.
   - `CLOUDFLARE_ACCOUNT_ID` – Your Cloudflare account ID.
   - `CLOUDFLARE_PROJECT_NAME` – The Cloudflare Pages project name.
3. Push to `main` or trigger the **Deploy to Cloudflare Pages** workflow via the Actions tab.

The workflow builds the Astro site and uploads the `dist/` directory to Cloudflare Pages.

## 📄 License

© 2025 Bit Zesty Ltd. Trading as Lanturn.dev. All rights reserved.
