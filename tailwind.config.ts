import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        // Deep evergreen primary palette
        forest: {
          50: "#f1f5f1",
          100: "#dde7dd",
          200: "#bccfbc",
          300: "#92b094",
          400: "#658e6a",
          500: "#467150",
          600: "#345a3e",
          700: "#284733",
          800: "#1f3828",
          900: "#162a1d",
          950: "#0c1a12",
        },
        // Warm bark / earth neutrals
        bark: {
          50: "#faf7f2",
          100: "#f1ebe0",
          200: "#e1d4be",
          300: "#cdb795",
          400: "#b89970",
          500: "#a48156",
          600: "#8a6a45",
          700: "#6e5338",
          800: "#503c2a",
          900: "#3b2c20",
        },
        // Muted moss/gold accent
        moss: {
          50: "#f6f5ea",
          100: "#ebe9cc",
          200: "#d6d199",
          300: "#bcb464",
          400: "#a39b44",
          500: "#857d34",
          600: "#665f27",
        },
        // Off-white / cream backgrounds
        cream: {
          50: "#fbf9f3",
          100: "#f5f1e6",
          200: "#ebe4d1",
        },
        ink: "#1a1f1a",
      },
      fontFamily: {
        // Wired up in app/layout.tsx via next/font
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Slightly larger editorial scale
        "display-2xl": ["clamp(3rem, 6vw, 5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-xl": ["clamp(2.25rem, 4.5vw, 3.75rem)", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(1.875rem, 3.5vw, 2.75rem)", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
      },
      maxWidth: {
        prose: "68ch",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(20,30,20,0.04), 0 8px 24px -8px rgba(20,30,20,0.08)",
        ring: "0 0 0 1px rgba(40,71,51,0.08)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 700ms cubic-bezier(0.2, 0.7, 0.2, 1) both",
        "fade-in": "fade-in 700ms ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
