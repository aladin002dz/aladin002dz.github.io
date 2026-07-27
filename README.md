<div align="center">

# 🌐 Mahfoudh Arous — Personal Portfolio Website

[![Deployment Status](https://github.com/aladin002dz/aladin002dz.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/aladin002dz/aladin002dz.github.io/actions/workflows/deploy.yml)
[![SSG](https://img.shields.io/badge/SSG-Static_Export-blueviolet?style=flat&logo=nextdotjs)](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
[![Next.js](https://img.shields.io/badge/Next.js-16.2.11-black?style=flat&logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-61DAFB?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3-38B2AC?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![pnpm](https://img.shields.io/badge/pnpm-11.17-F69220?style=flat&logo=pnpm)](https://pnpm.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](https://github.com/aladin002dz/aladin002dz.github.io/pulls)

<p align="center">
  A high-performance, Static Site Generated (SSG) multilingual personal portfolio website built for <strong>Mahfoudh Arous</strong> (Senior Software Engineer & Full-Stack Developer).
  <br />
  Featuring dynamic internationalization (English, French, Arabic RTL), glassmorphism UI, dark/light themes, zero-server runtime, and automated GitHub Pages SSG deployment.
</p>

[**Explore Live Demo »**](https://aladin002dz.github.io/)

---

</div>

## 📑 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Architecture](#-project-architecture)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development Server](#development-server)
  - [Production Build (SSG)](#production-build-ssg)
- [Internationalization (i18n)](#-internationalization-i18n)
- [Deployment \& CI/CD](#-deployment--cicd)
- [Featured Portfolio Projects](#-featured-portfolio-projects)
- [Contributing](#-contributing)
- [License](#-license)
- [Author \& Contact](#-author--contact)

---

## 🌟 Overview

This repository hosts the official personal portfolio website of **Mahfoudh Arous** ([@aladin002dz](https://github.com/aladin002dz)). Designed with cutting-edge web development standards, the portfolio presents software projects, open-source contributions, technical skills, and professional experience in a responsive, accessible, and visual interface.

Built on **Next.js 16 (App Router)** and **React 19**, the site utilizes **Static Site Generation (SSG)** via Next.js Static Export (`output: "export"`) to deliver zero-latency static HTML/CSS/JS assets deployed automatically via **GitHub Pages**.

---

## ✨ Key Features

- ⚡ **Static Site Generation (SSG)**: Pre-rendered static pages exported via `output: "export"`. Zero server-side runtime requirement, yielding ultra-fast page load performance, maximum security, and instant global CDN edge serving.
- 🌍 **Native Multilingual Support (i18n)**: Out-of-the-box support for **English (`en`)**, **French (`fr`)**, and **Arabic (`ar`)** with complete Right-to-Left (RTL) layout adaptation and static param generation.
- 🎨 **Modern Glassmorphism Design System**: Aesthetic UI with interactive background animations, soft backdrops, custom badges, and micro-interactions powered by Tailwind CSS v4.
- 🌓 **Dynamic Light \& Dark Themes**: Smooth theme toggling with automatic system preference detection.
- 📱 **Mobile-First Responsiveness**: Tailored layout grids, mobile-optimized navigation headers, and floating contact triggers.
- 🤖 **Automated CI/CD Pipeline**: GitHub Actions workflow automatically builds, tests, and deploys production static bundles upon pushing to `main`.

---

## 🛠️ Tech Stack

| Category | Technology / Library | Purpose |
| :--- | :--- | :--- |
| **Architecture** | [Static Site Generation (SSG)](https://nextjs.org/docs/app/building-your-application/deploying/static-exports) | `output: "export"` for serverless, zero-latency static deployment |
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org/) | Core framework \& SSG static site exporter |
| **Library** | [React 19](https://react.dev/) | Component architecture \& UI rendering |
| **Language** | [TypeScript 5.8](https://www.typescriptlang.org/) | Type safety \& developer experience |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) \& PostCSS | Utility-first responsive styling |
| **Icons** | [Lucide React](https://lucide.dev/) | Modern SVG icons |
| **Package Manager** | [pnpm 11](https://pnpm.io/) | Fast, disk space efficient package management |
| **CI/CD \& Hosting** | [GitHub Actions](https://github.com/features/actions) \& [GitHub Pages](https://pages.github.com/) | Automated SSG static deployment |

---

## 📁 Project Architecture

```text
aladin002dz.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages automated CI/CD pipeline
├── app/
│   ├── (locales)/
│   │   └── [lang]/
│   │       ├── layout.tsx      # Language-aware layout wrapper & RTL support
│   │       └── page.tsx        # Main portfolio home page view
│   ├── (root)/
│   │   ├── layout.tsx          # Root HTML skeleton
│   │   └── page.tsx            # Locale redirect router
│   ├── components/
│   │   ├── Button.tsx          # Custom reusable button component
│   │   ├── Icons.tsx           # Custom brand SVG icons (GitHub, LinkedIn)
│   │   ├── InteractiveBackground.tsx # Canvas background particle animation
│   │   ├── LanguageSwitcher.tsx     # i18n locale picker toggle
│   │   ├── NavLink.tsx         # Responsive navigation link
│   │   ├── ProjectCard.tsx     # Portfolio project showcase card
│   │   └── ThemeToggle.tsx     # Light/Dark mode toggle button
│   ├── globals.css             # Tailwind imports, custom variables & fonts
│   ├── icon.tsx                # Dynamic favicons generator
│   └── opengraph-image.tsx     # Dynamic OpenGraph social preview card
├── dictionaries/               # i18n Translation dictionaries
│   ├── ar.ts                   # Arabic locale translations
│   ├── en.ts                   # English locale translations
│   └── fr.ts                   # French locale translations
├── lib/
│   └── dictionary.ts           # Server-side dictionary loader
├── public/                     # Static assets (images, profile avatars)
├── next.config.ts              # Next.js build & export configuration
├── package.json                # Project dependencies & scripts
├── pnpm-lock.yaml              # pnpm lockfile
└── tsconfig.json               # TypeScript compiler options
```

---

## 🚀 Getting Started

Follow these instructions to run the portfolio locally on your machine for development or custom modification.

### Prerequisites

Ensure you have the following installed on your system:
- **Node.js**: `v20.0.0` or higher (v22 recommended)
- **pnpm**: `v10.0.0` or higher (`npm i -g pnpm`)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/aladin002dz/aladin002dz.github.io.git
   cd aladin002dz.github.io
   ```

2. **Install dependencies using `pnpm`:**
   ```bash
   pnpm install
   ```

### Development Server

Start the local development server with hot-reloading:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

### Production Build

To test the production build locally and generate static export files (`./out` directory):

```bash
pnpm build
```

---

## 🌐 Internationalization (i18n)

Localization is implemented without heavy external runtime libraries by utilizing Next.js dynamic route parameters (`[lang]`) combined with typed translation dictionaries:

1. **Dictionaries**: Translation files are located under the [`dictionaries/`](file:///c:/Users/aladin002dz/Desktop/test/aladin002dz.github.io/dictionaries) directory (`en.ts`, `fr.ts`, `ar.ts`).
2. **Adding a New Language**:
   - Add a new dictionary file (e.g., `dictionaries/es.ts`).
   - Register the language code in [`lib/dictionary.ts`](file:///c:/Users/aladin002dz/Desktop/test/aladin002dz.github.io/lib/dictionary.ts).
   - Update [`LanguageSwitcher.tsx`](file:///c:/Users/aladin002dz/Desktop/test/aladin002dz.github.io/app/components/LanguageSwitcher.tsx) to display the new language selector.

---

## ⚙️ Deployment & CI/CD

Deployment is completely automated via GitHub Actions:

1. **Workflow**: [`.github/workflows/deploy.yml`](file:///c:/Users/aladin002dz/Desktop/test/aladin002dz.github.io/.github/workflows/deploy.yml) triggers on every push to the `main` branch.
2. **Steps**:
   - Checks out repository code.
   - Sets up Node.js `v22` and `pnpm`.
   - Runs `pnpm build` to compile the static output to `./out`.
   - Deploys static files directly to **GitHub Pages**.

---

## 📌 Featured Portfolio Projects

- 🩸 **[DonateBlood](https://github.com/aladin002dz/DonateBlood)** — A production React Native and Firebase mobile application actively utilized by a charitable association in Algeria to connect blood donors and streamline urgent life-saving donations.
- ⚛️ **[ar.reactjs.org](https://ar.reactjs.org/)** — Open-source contribution translating official React documentation into Arabic for the developer community.
- 📦 **[react-library-2025 (`aladin-ts-rc`)](https://www.npmjs.com/package/aladin-ts-rc)** — A modern CLI tool and React component library built with TypeScript to scaffold best-practice UI packages.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/aladin002dz/aladin002dz.github.io/issues).

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m "✨ feat: add amazing feature"`)
4. Push to the Branch (`git checkout -b feature/AmazingFeature` & `git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License.

---

## 👤 Author & Contact

**Mahfoudh Arous** (Senior Software Engineer & Full-stack Developer)

- 💼 **LinkedIn**: [Mahfoudh Arous](https://www.linkedin.com/in/mahfoudh-arous/)
- 🐙 **GitHub**: [@aladin002dz](https://github.com/aladin002dz)
- 🌐 **Website**: [aladin002dz.github.io](https://aladin002dz.github.io/)

<div align="center">
  <sub>Built with ❤️ using Next.js & React</sub>
</div>
