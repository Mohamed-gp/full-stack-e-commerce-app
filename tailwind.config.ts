import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: { center: true, padding: "2rem" },
      colors: {
        mainColor: "#8A33FD",
        bgColorWhite : "#ECEBEC",
        bgColorBlack : "#201F20",
        bgColorDanger : "#EA4B48",
        
        // #8A33FD
        // #00acff

      },
    },
  },
  plugins: [],
};
export default config;
