import { type Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--color-background) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
        primary: {
          50: 'rgb(var(--color-primary-50) / <alpha-value>)',
          100: 'rgb(var(--color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--color-primary-200) / <alpha-value>)',
          300: 'rgb(var(--color-primary-300) / <alpha-value>)',
          400: 'rgb(var(--color-primary-400) / <alpha-value>)',
          500: 'rgb(var(--color-primary) / <alpha-value>)',
        },
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        contrast: 'rgb(var(--color-contrast) / <alpha-value>)',
        highlight: 'rgb(var(--color-highlight) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['"Inter"', '"IBM Plex Sans"', ...defaultTheme.fontFamily.sans],
        mono: ['"IBM Plex Mono"', ...defaultTheme.fontFamily.mono],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      boxShadow: {
        glow: '0 22px 50px -30px rgba(61, 122, 255, 0.35)',
        card: '0 18px 40px -30px rgba(20, 29, 47, 0.22)',
      },
      backgroundImage: {
        'hero-grid':
          'radial-gradient(circle at 20% 20%, rgba(61,122,255,0.08), transparent 40%), radial-gradient(circle at 80% 0%, rgba(44,201,198,0.08), transparent 45%), radial-gradient(circle at 50% 80%, rgba(132,168,255,0.08), transparent 45%)',
        mesh:
          'radial-gradient(140% 120% at 0% 10%, rgba(61,122,255,0.12) 0%, transparent 60%), radial-gradient(120% 120% at 100% 0%, rgba(44,201,198,0.12) 0%, transparent 60%), radial-gradient(120% 140% at 50% 120%, rgba(88,140,255,0.1) 0%, transparent 70%)',
      },
      borderRadius: {
        inherit: 'inherit',
      },
      transitionTimingFunction: {
        'snappy': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
