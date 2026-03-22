Next.js provides built-in SSR and static generation for better SEO and performance, file-based routing, API routes for backend logic, automatic code splitting, and image optimization — all of which require additional setup in plain React.

# 1️⃣ Server-Side Rendering (SSR)

## In React
- rendering happens only in the browser (CSR).

## Next.js supports:

1. Server-Side Rendering (SSR)

2. Static Site Generation (SSG)

## Benefit:
- Better SEO
- Faster first contentful paint
- Better performance for users with slow devices

# 2️⃣ Built-in File-Based Routing

## In React
- we use React Router and manually define routes.

## In Next.js:

- Routing is automatic

Each file inside /pages becomes a route

Example:

pages/about.js → /about
Benefit:
- Cleaner structure
- Less boilerplate
- Easier scalability

# 3️⃣ Better SEO Optimization

# React 
- react CSR apps often struggle with SEO unless additional setup is done.

# next.js
- Since Next.js can pre-render pages:
- Search engines can crawl content easily
- Metadata can be dynamically injected

# 5️⃣ Automatic Code Splitting & Performance Optimization

Next.js automatically:
- Splits code per page
- Optimizes images
- Minimizes bundle size

React requires manual setup for many of these optimizations.

