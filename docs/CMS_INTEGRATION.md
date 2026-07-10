# Headless CMS Integration Architecture

The Athul's Maths Classroom website is built with a decoupled architecture, preparing it for a future Headless CMS integration (e.g., Sanity or Payload CMS).

## Data Fetching Strategy

Currently, data is fetched via placeholder functions in `/src/data/`. To integrate a CMS:

1. Replace the static arrays in `src/data/*.ts` with asynchronous fetch calls to the CMS API.
2. Use Next.js `fetch` with `next: { revalidate: 3600 }` or `cache: 'force-cache'` to statically generate pages during build time.
3. Utilize Next.js On-Demand Revalidation to trigger rebuilds when content is updated in the CMS via webhooks.

## Components to Map

- **Courses**: `CourseDetailHero`, `OutcomeCards`, etc., can take props directly from the CMS course schema.
- **Faculty**: Map the CMS faculty schema to `FacultyCard` and `FacultyDetailHero` components.
- **Gallery**: Fetch media assets directly from the CMS CDN, using `next/image` remote patterns.
- **Announcements**: Map blog/news entries to the `AnnouncementCard` component.

## Required Next.js Config Changes
When integrating the CMS, add the CMS image domains to `next.config.ts` under `images.remotePatterns`.
