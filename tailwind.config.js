/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        moby: {
          navy: '#111216',
          blue: '#DC143C',
          accent: '#DC143C',
          accentDark: '#B30F30',
          accentWash: '#FDECEF',
          ink: '#111216',
          inkDeep: '#14161C',
          inkMuted: '#5F6270',
          inkFaint: '#8B8E9A',
          bg: '#F2F3F7',
          surface: '#FFFFFF',
          ghostHover: '#E9EBF0',
          stepper: '#C9CCD6',
          plate: '#0B3FA8',
          accentSoft: '#FF8DA3',
          success: '#2E7D32',
          successWash: '#E9F5EA',
          warning: '#9A5A00',
          warningWash: '#FFF3DF',
          danger: '#B30F30',
          dangerWash: '#FDECEF',
          text: '#111216',
          textMuted: '#5F6270',
          textFaint: '#8B8E9A',
          border: '#E3E5EB',
          hair: '#E3E5EB',
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'SF Pro Text',
          'Inter',
          'system-ui',
          'sans-serif',
        ],
      },
      boxShadow: {
        card: '0 1px 2px rgba(15,25,60,0.06)',
        lift: '0 10px 30px -10px rgba(15,25,60,0.22)',
      },
      keyframes: {
        fade: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'none' },
        },
        rise: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        fade: 'fade 260ms cubic-bezier(.22,.9,.24,1)',
        rise: 'rise 320ms cubic-bezier(.22,.9,.24,1)',
      },
    },
  },
  plugins: [],
};
