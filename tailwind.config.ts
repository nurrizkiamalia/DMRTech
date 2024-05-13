import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-gradient': 'radial-gradient(169.40% 89.55% at 94.76% 6.29%, rgba(64, 69, 193, 0.30) 0%, rgba(255, 255, 255, 0.00) 100%)',
        underlineBg: "linear-gradient(180deg,rgba(255,255,255,0) 70%, #4045C1 30%)",
        'imgDivider1': "url('/assets/img-divider1.webp')",
        'imgDivider2': "url('/assets/img-divider2.webp')",
        'imgDivider3': "url('/assets/img-divider3.webp')",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      fontFamily: {
        dmSans: ["var(--font-dm-sans)"],
        dmBricolage: ["var(--font-bricolage)"],
        raleway: ["var(--font-raleway)"]
      },
      fontSize: {
        heading1: "80px",
        heading2: "60px",
        heading3: "45px",
        pXXL: "25px",
        pXL: "20px",
        pLg: "18px",
        pMd: "16px",
        pSm: "14px"
      },
      colors: {
        dspBlack: "#0F0F0F",
        dspWhite: "#FFFFFF",
        dspPurple: "#4045C1",
        dspGreen: "#90C140",
        dspLimeGreen:"#C3FF62",
        dspLightGray: "#C8C8C8",
        dspGray: "#1A1A1A"
      },
      boxShadow: {
        blurShdw: "shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]",
        cardShdw: "shadow-card"
      },
      dropShadow: {
        light: "drop-shadow([0.5px, 0.5px,  1px] rgba(255, 255, 255, 0.5))",
        dark: "drop-shadow([0.5px, 0.5px,  1px] rgba(0, 0, 0, 0.5))"
      }
    },
  },
  plugins: [],
};
export default config;
