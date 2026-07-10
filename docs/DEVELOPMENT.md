# Athul's Maths Classroom - Development Guide

## Technology Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod

## Project Structure
- `/src/app`: Next.js App Router pages and layouts.
- `/src/components/ui`: Reusable atomic UI components (shadcn-like).
- `/src/components/layout`: Global layout components (Navbar, Footer, Container).
- `/src/components/sections`: Reusable page sections (Hero, Features, Testimonials).
- `/src/components/transitions`: Page transition and loading animations.
- `/src/components/performance`: Performance optimization wrappers (Lazy load, images).
- `/src/components/scroll`: Scroll-driven animations and spy components.
- `/src/components/seo`: Schema.org and structured data components.

## Scripts
- `npm run dev`: Start local development server.
- `npm run build`: Build for production.
- `npm run analyze`: Run production build with bundle analyzer.
- `npm run lint`: Run ESLint.

## Best Practices
1. **Server Components by Default**: Only add `'use client'` when React hooks, interactivity, or browser APIs are needed.
2. **Accessible Code**: Ensure proper semantic HTML, ARIA labels, and keyboard navigation.
3. **Performance First**: Utilize `next/image` for images, `next/font` for typography, and dynamic imports for heavy components.
4. **Code Consistency**: Follow strict typing rules. Avoid `any`.

## Deployment
This project is configured for seamless deployment on Vercel. Connect the GitHub repository and Vercel will automatically detect the Next.js settings and install dependencies.
