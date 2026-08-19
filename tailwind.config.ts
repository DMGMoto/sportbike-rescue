import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep garage navy
        ink: {
          DEFAULT: "#0B1B2E",
          900: "#081320",
          800: "#0E2238",
          700: "#143150",
          600: "#1C426B",
        },
        // Cream kennel-card paper
        paper: {
          DEFAULT: "#F4EFE3",
          edge: "#E5DCC6",
          shadow: "#D8CDB2",
        },
        // Warm racing yellow
        signal: {
          DEFAULT: "#F6C544",
          bright: "#FFD45E",
          deep: "#E0A82E",
        },
        rescue: {
          red: "#E4572E",
          green: "#5FA052",
          gold: "#E0A82E",
        },
      },
      fontFamily: {
        display: ["Anton", "Impact", "sans-serif"],
        hand: ['"Permanent Marker"', "cursive"],
        body: ['"Work Sans"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 18px 40px -20px rgba(0,0,0,0.55)",
        kennel: "0 22px 50px -24px rgba(0,0,0,0.7)",
        lift: "0 28px 60px -28px rgba(0,0,0,0.8)",
      },
      backgroundImage: {
        "noise-navy":
          "radial-gradient(circle at 20% 10%, rgba(28,66,107,0.35), transparent 45%), radial-gradient(circle at 85% 0%, rgba(20,49,80,0.4), transparent 40%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        wiggle: {
          "0%,100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        wiggle: "wiggle 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
