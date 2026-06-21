import { defineField, defineType } from 'sanity';

// A single "project" type backs both the Projects gallery and the Case Studies
// index (case studies are projects with `isCaseStudy` enabled + a metric).
// Mirrors src/lib/types.ts → Project so seed and CMS content render identically.
export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'category',
      type: 'string',
      options: { list: ['commercial', 'residential', 'landscape', 'architectural', 'civic'] },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'badge', title: 'Badge label', type: 'string' }),
    defineField({ name: 'location', type: 'string' }),
    defineField({ name: 'locationMeta', title: 'Location meta (card suffix)', type: 'string' }),
    defineField({ name: 'projectType', title: 'Project type (display)', type: 'string' }),
    defineField({ name: 'system', type: 'string', description: 'e.g. RGBW · Colorscaping®' }),
    defineField({
      name: 'detailBase',
      title: 'Detail URL base',
      type: 'string',
      options: { list: ['projects', 'case-studies'] },
      initialValue: 'projects',
    }),
    defineField({ name: 'excerpt', title: 'Excerpt (listing copy)', type: 'text', rows: 3 }),
    defineField({ name: 'heroImage', title: 'Hero image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'lead', title: 'Lead paragraph', type: 'text', rows: 3 }),
    defineField({
      name: 'intro',
      title: 'Intro block',
      type: 'object',
      fields: [
        { name: 'heading', type: 'string' },
        { name: 'body', type: 'text', rows: 4 },
      ],
    }),
    defineField({
      name: 'mediaLayout',
      type: 'string',
      options: { list: ['gallery', 'stack'] },
      initialValue: 'gallery',
    }),
    defineField({
      name: 'media',
      title: 'Media cells',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string' },
            { name: 'image', type: 'image', options: { hotspot: true } },
          ],
        },
      ],
    }),
    defineField({
      name: 'specs',
      title: 'Spec row',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', type: 'string' },
            { name: 'label', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'body',
      title: 'Body blocks',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'heading', type: 'string' },
            { name: 'body', type: 'text', rows: 4 },
          ],
        },
      ],
    }),
    defineField({
      name: 'quote',
      type: 'object',
      fields: [
        { name: 'text', type: 'text', rows: 3 },
        { name: 'source', type: 'string' },
      ],
    }),
    defineField({ name: 'note', type: 'string' }),
    defineField({ name: 'capabilities', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'partners', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'isCaseStudy', title: 'Show in Case Studies', type: 'boolean', initialValue: false }),
    defineField({
      name: 'metric',
      title: 'Case study metric',
      type: 'object',
      fields: [
        { name: 'big', type: 'string' },
        { name: 'label', type: 'string' },
      ],
    }),
    defineField({ name: 'featured', title: 'Feature on homepage', type: 'boolean', initialValue: false }),
    defineField({ name: 'featuredOrder', type: 'number' }),
    defineField({ name: 'featuredBlurb', type: 'text', rows: 2 }),
    defineField({ name: 'order', type: 'number' }),
    defineField({
      name: 'cta',
      type: 'object',
      fields: [
        { name: 'eyebrow', type: 'string' },
        { name: 'heading', type: 'string' },
        { name: 'body', type: 'text', rows: 2 },
        { name: 'estimatorType', type: 'string', options: { list: ['commercial', 'residential', 'landscape'] } },
      ],
    }),
    defineField({ name: 'date', type: 'date' }),
  ],
  orderings: [{ title: 'Manual order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'title', subtitle: 'category', media: 'heroImage' },
  },
});
