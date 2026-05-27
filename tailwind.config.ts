import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        terminal: {
          bg: "#0d1210",
          surface: "#1c2521",
          accent: "#78ff6f",
          amber: "#d7a548",
          rust: "#b35f2f",
          text: "#e6f2de",
          muted: "#8ca48f"
        }
      }
    }
  },
  plugins: []
} satisfies Config;
