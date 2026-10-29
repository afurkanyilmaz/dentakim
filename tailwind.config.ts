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
         * Koyu klinik kimliği — referans düzenin (ozbeydent.com) ölçülen
         * paletine göre. Token adları korunarak tüm sayfalar tek yerden
         * dönüştürüldü: "dark" artık başlık rengi (açık), "surface" sayfa zemini.
         */
        brand: {
          primary: "#F6F8FF",        /* başlık / vurgu metni */
          "primary-light": "#101521", /* ikincil bölüm ve kart zemini */
          accent: "#BCA188",          /* bronz — üst başlık, CTA */
          "accent-dark": "#D2BBA3",   /* koyu zeminde okunur bronz metin */
          deep: "#07101F",            /* footer, koyu bant */
          navy: "#06152C",            /* lacivert bant */
          ink: "#071328",             /* koyu düğme */
          dark: "#F6F8FF",            /* başlık metni */
          light: "#F6F8FF",           /* koyu zemin üstü metin */
          mid: "#9AA7BC",             /* gövde metni */
          faint: "#6E7B91",           /* ikincil metin */
          line: "rgba(255,255,255,0.12)",
          "line-strong": "rgba(255,255,255,0.24)",
          link: "#D2BBA3",
          "on-deep": "#9AA7BC",
          surface: "#080B12",         /* sayfa zemini */
          card: "#101521",            /* kart zemini */
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
