import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1c1c1c",
        surface: "#262626",
        "surface-elevated": "#2f2f2f",
        "surface-border": "#3a3a3a",
        ink: {
          DEFAULT: "#f1f1ef",
          muted: "#9a9b96",
          dim: "#6b6c68",
        },
        sage: {
          DEFAULT: "#8fa68e",
          hover: "#a4bba3",
          muted: "#475446",
          subtle: "rgba(143, 166, 142, 0.12)",
        },
        concrete: "#c8c5ba",
      },
      fontFamily: {
        serif: ["Erode", "Georgia", "Cambria", "Times New Roman", "serif"],
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
