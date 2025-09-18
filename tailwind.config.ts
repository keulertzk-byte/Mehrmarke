import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#4B2A8A',
          purpleDark: '#3A1F6A',
          lilac: '#EDE7F7',
          lilacSoft: '#F4F0FA',
          lime: '#E9FF6A',
        },
        ink: '#201836',
        inkMuted: '#5C5570',
      },
      fontFamily: {
        anton: ['Anton', 'Impact', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '1rem',
        '2xl': '1rem',
      },
      boxShadow: {
        soft: '0 6px 24px rgba(32, 24, 54, 0.08)',
        float: '0 16px 36px rgba(75, 42, 138, 0.18)',
      },
    },
  },
  plugins: [],
}

export default config