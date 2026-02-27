import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                play: ["Play", "sans-serif"],
            },
            colors: {
                primary: {
                    DEFAULT: "#FF3A44",
                    light: "#FFF3F3",
                    dark: "#C5161D",
                },
                secondary: {
                    DEFAULT: "#686262",
                    light: "#B9BFC3",
                    dark: "#000000",
                },
            },
        },
    },
    plugins: [],
};
export default config;
