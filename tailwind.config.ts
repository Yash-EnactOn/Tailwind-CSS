import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    // spacing: {
    //   '1': '8px',
    //   '2': '12px',
    //   '3': '16px',
    //   '4': '24px',
    //   '5': '32px',
    //   '6': '48px',
    //   '7': '64px',
    //   '8': '96px',
    //   '9': '128px',
    //   '10': '192px',
    //   '11': '256px',
    //   '12': '384px',
    //   '13': '512px',
    // },
    extend: {
      fontSize: {
        xs: "12px",
        sm: "15px",
        base: "18px",
        lg: "20px",
      },
      colors: {
        vuejs: {
          100: "#49e659",
          932: "#41b883",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
