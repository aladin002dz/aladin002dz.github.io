This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deployment to GitHub Pages

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

### How it works

The deployment pipeline is defined in `.github/workflows/deploy.yml` and consists of two main jobs:

1.  **Build**:
    *   Detetcts the package manager (pnpm).
    *   Installs dependencies (`pnpm install`).
    *   Builds the Next.js project as a static site (`pnpm build`).
    *   Uploads the static build artifacts.

2.  **Deploy**:
    *   Takes the uploaded artifact.
    *   Deploys it to the `gh-pages` environment.

### Triggering a Deploy

The deployment is triggered automatically whenever you push changes to the `main` branch:

```bash
git push origin main
```

You can monitor the progress in the **Actions** tab of your GitHub repository.

### Configuration

The project uses `output: 'export'` in `next.config.ts` to generate a static HTML export suitable for GitHub Pages. Images are unoptimized (`unoptimized: true`) since Next.js Image Optimization requires a Node.js server (like Vercel).
