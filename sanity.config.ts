/**
 * Sanity Studio config for Lighting Source TX.
 *
 * This file is intentionally OUTSIDE the Next.js build (see tsconfig "exclude").
 * The marketing site reads content through @sanity/client and falls back to
 * local seed data, so it builds and runs with zero Sanity setup.
 *
 * To stand up the editing Studio once you have a Sanity project:
 *   1. npm i sanity @sanity/vision
 *   2. set NEXT_PUBLIC_SANITY_PROJECT_ID (and dataset) in .env.local
 *   3. npx sanity dev          # local Studio at http://localhost:3333
 *      npx sanity deploy       # or host it at <name>.sanity.studio
 *   4. npx sanity dataset import seed.ndjson production   # optional: load seed
 */
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './src/sanity/schemaTypes';

export default defineConfig({
  name: 'lightingsourcetx',
  title: 'Lighting Source TX',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
});
