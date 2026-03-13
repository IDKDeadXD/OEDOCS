import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0a0a0a',
          secondary: '#111111',
          tertiary: '#1a1a1a',
          hover: '#1e1e1e',
        },
        border: {
          DEFAULT: '#222222',
          light: '#2a2a2a',
        },
        purple: {
          DEFAULT: '#7c3aed',
          light: '#a78bfa',
          dim: '#4c1d95',
          subtle: '#1e1333',
        },
        text: {
          primary: '#f5f5f5',
          secondary: '#a1a1aa',
          muted: '#52525b',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#d4d4d8',
            '--tw-prose-headings': '#f5f5f5',
            '--tw-prose-lead': '#a1a1aa',
            '--tw-prose-links': '#a78bfa',
            '--tw-prose-bold': '#f5f5f5',
            '--tw-prose-counters': '#71717a',
            '--tw-prose-bullets': '#52525b',
            '--tw-prose-hr': '#222222',
            '--tw-prose-quotes': '#d4d4d8',
            '--tw-prose-quote-borders': '#7c3aed',
            '--tw-prose-captions': '#71717a',
            '--tw-prose-code': '#e879f9',
            '--tw-prose-pre-code': '#d4d4d8',
            '--tw-prose-pre-bg': '#111111',
            '--tw-prose-th-borders': '#333333',
            '--tw-prose-td-borders': '#222222',
            maxWidth: 'none',
            a: {
              textDecoration: 'none',
              '&:hover': {
                color: '#c4b5fd',
              },
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            code: {
              backgroundColor: '#1a1a2e',
              padding: '0.2em 0.4em',
              borderRadius: '4px',
              fontSize: '0.875em',
            },
            pre: {
              backgroundColor: '#111111',
              border: '1px solid #222222',
              borderRadius: '8px',
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
            },
            h1: { color: '#f5f5f5' },
            h2: {
              color: '#f5f5f5',
              borderBottom: '1px solid #222222',
              paddingBottom: '0.5rem',
            },
            h3: { color: '#f5f5f5' },
            h4: { color: '#f5f5f5' },
            hr: { borderColor: '#222222' },
            table: {
              width: '100%',
            },
            thead: {
              borderBottomColor: '#333333',
            },
            'thead th': {
              color: '#f5f5f5',
            },
            'tbody tr': {
              borderBottomColor: '#1e1e1e',
            },
            blockquote: {
              borderLeftColor: '#7c3aed',
              color: '#a1a1aa',
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
