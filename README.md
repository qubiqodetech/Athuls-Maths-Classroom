# Athul's Maths Classroom - Official Website

Welcome to the official repository for the Athul's Maths Classroom website. This project is built using modern web technologies to deliver a premium, fast, and accessible experience for students, parents, and educators.

## Features

- **Next.js 15 (App Router)**: Utilizing the latest features including Server Components, streaming, and optimized data fetching.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development and consistent design tokens.
- **Framer Motion**: High-performance, physics-based animations that provide an "Apple-like" premium feel.
- **SEO & Accessibility**: Fully compliant with WCAG 2.2 AA standards, robust structured data (Schema.org), dynamic Open Graph tags, and excellent Lighthouse scores.
- **Performance First**: Optimized bundles with `@next/bundle-analyzer`, dynamic imports, `next/image`, and `next/font`.
- **CMS Ready Architecture**: Clean data layers decoupled from UI components, ready for seamless integration with headless CMS platforms like Sanity or Payload.

## Project Structure

```
├── docs/                 # Documentation (Design System, CMS Integration, etc.)
├── src/
│   ├── animations/       # Shared Framer Motion variants and utilities
│   ├── app/              # Next.js App Router (pages, layouts, global CSS)
│   ├── components/
│   │   ├── courses/      # Course-specific components
│   │   ├── faculty/      # Faculty-specific components
│   │   ├── layout/       # Global structural components (Navbar, Footer, etc.)
│   │   ├── performance/  # Performance optimization wrappers
│   │   ├── scroll/       # Advanced scroll behaviors and indicators
│   │   ├── sections/     # High-level section components used across pages
│   │   ├── seo/          # Structured data and meta components
│   │   ├── transitions/  # Global page transitions
│   │   └── ui/           # Atomic UI components (Buttons, Inputs, etc.)
│   ├── config/           # Site configuration and global constants
│   ├── data/             # Static data models (to be replaced by CMS)
│   ├── lib/              # Utility functions (cn, etc.)
│   └── types/            # TypeScript interfaces
└── public/               # Static assets
```

## Documentation

For a deeper dive into the engineering decisions and workflows, please review the documentation:

- [Development Guide](docs/DEVELOPMENT.md)
- [Design System](docs/DESIGN_SYSTEM.md)
- [CMS Integration Guide](docs/CMS_INTEGRATION.md)

## Commands

- `npm run dev`: Start local development server.
- `npm run build`: Build for production.
- `npm run analyze`: Run bundle analyzer.
- `npm run lint`: Run ESLint.

## Brand Guidelines

The visual identity is driven by a clean, modern, minimal, and professional aesthetic:
- **Primary Navy**: `#0D1B2A`
- **Primary Red**: `#E31E24`
- **Typography**: Sora (Headings) & Inter (Body)
