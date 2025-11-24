import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mono: ["JetBrains Mono", "Fira Code", "Source Code Pro", "monospace"],
      },
      colors: {
        // Deep space background colors
        space: {
          950: "#0a0a0f", // Deepest black
          900: "#0f0f23", // Terminal black
          800: "#1a1a2e", // Dark navy
          700: "#16213e", // Midnight blue
          600: "#0f3460", // Electric blue
        },

        // Cyber/tech accents
        cyber: {
          400: "#00d4ff", // Electric blue
          500: "#00b4d8", // Bright cyan
          600: "#0096c7", // Ocean blue
        },

        // Neon green for tech vibe
        neon: {
          400: "#39ff14", // Classic hacker green
          500: "#32cd32", // Lime green
          600: "#228b22", // Forest green
        },

        // Electric purple
        electric: {
          400: "#9d4edd", // Purple
          500: "#7b2cbf", // Deep purple
          600: "#5a189a", // Dark purple
        },

        // Terminal colors
        terminal: {
          green: "#00ff41", // Matrix green
          blue: "#00d4ff",  // Cyber blue
          purple: "#c77dff", // Light purple
          orange: "#ff9500", // Warning orange
        },

        // Text colors for good contrast
        text: {
          primary: "#f8f9fa",   // Almost white
          secondary: "#adb5bd", // Light gray
          muted: "#6c757d",     // Medium gray
          accent: "#00d4ff",    // Cyber accent
        },

        // UI backgrounds
        bg: {
          primary: "#0a0a0f",   // Deep space
          secondary: "#1a1a2e", // Dark navy
          card: "#16213e",      // Midnight blue
          hover: "#0f3460",     // Electric blue hover
        },

        // Border colors
        border: {
          primary: "#00d4ff",   // Cyber blue
          secondary: "#9d4edd", // Purple
          muted: "#334155",     // Slate
        },
      },
    },
  },
};

export default config;
