import type { Config } from 'tailwindcss';

/**
 * Lighting Source TX design tokens.
 * Brand identity palette (the website system): Navy ground, Burnt Orange accent,
 * Steel Grey supporting, Montserrat, 0px corners everywhere.
 * Mirrors the CSS variables in src/app/globals.css so utilities and the global
 * stylesheet stay in lock-step.
 */
const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    // 0px border-radius on ALL elements. Zero exceptions (the single most audited rule).
    borderRadius: {
      none: '0',
      sm: '0',
      DEFAULT: '0',
      md: '0',
      lg: '0',
      xl: '0',
      '2xl': '0',
      '3xl': '0',
      full: '0',
    },
    extend: {
      colors: {
        copper: {
          DEFAULT: '#CC5500', // Burnt Orange — the single accent, used sparingly
          hot: '#E2691A',
          deep: '#9F4300',
        },
        charcoal: '#1B2138', // page ground
        ink: '#161C30', // alternating section ground
        coal: '#11162A', // footer / deep inset (Tailwind reserves `black`)
        navy: '#2C3454', // primary brand navy (raised surfaces)
        'deep-navy': '#2F3554',
        steel: '#9599A8', // supporting grey
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        hero: '0.15em',
        heading: '0.12em',
        label: '0.18em',
      },
      maxWidth: {
        content: '1280px',
      },
      transitionTimingFunction: {
        modal: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
