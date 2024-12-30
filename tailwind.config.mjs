export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        snow: 'snow 10s linear infinite',
      },
      keyframes: {
        snow: {
          '0%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(50vh) translateX(25px)' }, 
          '100%': { transform: 'translateY(100vh) translateX(50px)' }, 
        },
      },
    },
  },
  plugins: [],
} ;
