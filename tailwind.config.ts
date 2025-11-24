import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: "class",
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				// Backgrounds
				bg: {
					primary: "#0a0a0f", // Deep space
					secondary: "#1a1a2e", // Dark navy
					card: "#16213e", // Midnight blue
					hover: "#0f3460", // Electric blue hover
				},

				// Border colors
				border: {
					primary: "#00d4ff", // Cyber blue
					secondary: "#9d4edd", // Purple
					muted: "#334155",
				},

				// Text
				text: {
					primary: "#f8f9fa", // Almost white
					secondary: "#adb5bd", // Light gray
					muted: "#9d9d9e", // Medium gray
					accent: "#00d4ff", // Cyber accent
					warning: "#ff9500",
				},

				// Utilities
				terminal: {
					green: "#00ff41", // Matrix green
					blue: "#00d4ff", // Cyber blue
					purple: "#c77dff", // Light purple
					orange: "#ff9500", // Warning orange
				},
			},
		},
	},
	plugins: [],
};

export default config;
