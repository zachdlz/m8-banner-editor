/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
        },
        foreground: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          accent: 'var(--text-accent)',
        },
        border: 'var(--border-color)',
      },
      fontFamily: {
        cal: ['Cal Sans', 'sans-serif'],
        figtree: ['Figtree', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
