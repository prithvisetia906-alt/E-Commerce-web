# NOVA — Premium Tech Store

A production-oriented Next.js App Router portfolio project for a premium electronics storefront. The UI uses fictional NOVA catalogue data and local SVG/data-image artwork so the demo renders without broken remote image dependencies.

## Stack

Next.js 16, React 19, TypeScript strict mode, Tailwind CSS 4, Lucide React, Framer Motion dependency, Prisma 6, PostgreSQL, Zod, Razorpay adapter utilities, Vitest, and Playwright dependency.

## Local setup

```bash
npm install
copy .env.example .env
npm run db:generate
npm run db:migrate
npm run db:seed
npm run dev
```

`DATABASE_URL` must point to a real PostgreSQL database. This environment did not have PostgreSQL credentials, so migration and seed execution remain unverified.

## Payments

The intended provider is Razorpay Standard Checkout in test mode. Add `RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET`, and `RAZORPAY_WEBHOOK_SECRET` to `.env`. Create provider orders server-side, verify returned signatures with `verifyRazorpaySignature`, and independently verify the raw webhook body before marking an order paid. Never store card numbers or CVVs.

The UI avoids claiming a successful payment when credentials are absent. Configure the provider and webhook endpoint before using the success route in a real sandbox.

## Verification

```bash
npm run typecheck
npm run lint
npm test
npm run db:generate
npm run build -- --webpack
```

Verified in this workspace: TypeScript, unit tests, Prisma client generation, and production build. Lint passes with non-blocking image optimization warnings. Database migration, seed, live authentication, live payment, and browser E2E require external services/credentials and were not claimed as complete.

## Notes

- Demo product/category data is in `lib/catalog.ts` for a reliable first render; `prisma/schema.prisma` and `prisma/seed.ts` define the persistent PostgreSQL model and seed path.
- Primary shopping paths are functional: home, shop, URL search/filtering, category pages, product details, wishlist, cart, checkout, account, policies, and payment result states.
- Add Auth.js server actions and protected admin actions before deployment. Never trust a browser-supplied role or ownership claim.
