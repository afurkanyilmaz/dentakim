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
        /* Cormorant Garamond — başlıklar; Manrope — gövde ve arayüz */
        heading: ["var(--font-heading)", "Georgia", "Times New Roman", "serif"],
        sans: ["var(--font-body)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      borderRadius: {
        card: "20px",
        panel: "16px",
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
        /* Claude Design görsel kimliği — Dentakim Anasayfa.dc.html'den alındı */
        brand: {
          primary: "#16242F",        /* mürekkep lacivert — başlık, marka, bağlantı */
          "primary-light": "#F3EFE7", /* sıcak krem — bölüm zemini */
          accent: "#B99358",          /* altın — vurgu, üst başlık, hover */
          "accent-dark": "#8A6A32",
          deep: "#0E2A3D",            /* koyu lacivert — CTA blokları, footer */
          dark: "#16242F",
          mid: "#5B6B77",             /* gövde metni */
          faint: "#8A97A1",           /* ikincil metin */
          line: "#ECE7DD",            /* çizgi */
          "line-strong": "#D8CFBE",
          link: "#1D5C86",            /* bağlantı mavisi — tasarımdaki kart bağlantıları */
          "on-deep": "#8FA6B5",       /* koyu zemin üzerindeki ikincil metin */
          surface: "#FCFBF9",         /* sayfa zemini */
          whatsapp: "#1DA851",
          "whatsapp-dark": "#179145",
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
