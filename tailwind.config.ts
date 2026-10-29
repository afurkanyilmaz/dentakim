import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        /* Plus Jakarta Sans — başlıklar; Manrope — gövde ve arayüz */
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      borderRadius: {
        card: "26px",
        panel: "14px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        popover: "var(--popover)",
        "popover-foreground": "var(--popover-foreground)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        secondary: "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",
        destructive: "var(--destructive)",
        /*
         * Tema renkleri CSS değişkenlerinden okunur (app/globals.css):
         * varsayılan koyu tema, [data-theme="light"] açık tema. ".theme-dark"
         * sınıflı alanlar (fotoğraflı hero, klinik bandı, footer) her temada koyudur.
         */
        /** Tema rengine göre tersine dönen ön plan rengi (kenarlık, yarı saydam yüzey). */
        fg: "rgb(var(--c-fg) / <alpha-value>)",
        brand: {
          primary: "rgb(var(--c-text) / <alpha-value>)",       /* başlık / vurgu metni */
          "primary-light": "rgb(var(--c-card) / <alpha-value>)", /* ikincil bölüm ve kart zemini */
          accent: "#BCA188",                                     /* bronz — üst başlık, CTA */
          "accent-dark": "rgb(var(--c-accent-text) / <alpha-value>)", /* zemine göre okunur bronz metin */
          deep: "#07101F",                                       /* footer, koyu bant (her temada koyu) */
          navy: "#06152C",                                       /* lacivert bant (her temada koyu) */
          ink: "#071328",                                        /* koyu düğme */
          dark: "rgb(var(--c-text) / <alpha-value>)",            /* başlık metni */
          light: "rgb(var(--c-text) / <alpha-value>)",           /* ana metin rengi */
          mid: "rgb(var(--c-mid) / <alpha-value>)",              /* gövde metni */
          faint: "rgb(var(--c-faint) / <alpha-value>)",          /* ikincil metin */
          line: "rgb(var(--c-fg) / 0.12)",
          "line-strong": "rgb(var(--c-fg) / 0.24)",
          link: "rgb(var(--c-accent-text) / <alpha-value>)",
          "on-deep": "rgb(var(--c-mid) / <alpha-value>)",
          surface: "rgb(var(--c-surface) / <alpha-value>)",      /* sayfa zemini */
          card: "rgb(var(--c-card) / <alpha-value>)",            /* kart zemini */
          whatsapp: "#25D366",
          "whatsapp-dark": "#1DA851",
        },
      },
      keyframes: {
        "pulse-ring": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(29, 168, 81, 0.42)" },
          "70%": { boxShadow: "0 0 0 18px rgba(29, 168, 81, 0)" },
        },
      },
      animation: {
        "pulse-ring": "pulse-ring 2.4s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
