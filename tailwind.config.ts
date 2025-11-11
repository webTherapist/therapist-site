import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{md,mdx}", "./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5f7fb",
          500: "#1f2937"
        }
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: { textDecoration: "none" }
          }
        }
      })
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
export default config;
