/** @type {import('next').NextConfig} */
const nextConfig = {
  /*
   * Temel güvenlik başlıkları. Sıkı bir Content-Security-Policy bilinçli olarak
   * eklenmedi: Instagram gömmeleri ve Google Haritalar iframe'i için ayrıntılı
   * izin listesi gerekir; hatalı bir politika bunları sessizce bozar.
   */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), payment=(), usb=()" },
        ],
      },
    ];
  },
  async redirects() {
    return [

      // Yazım hatası düzeltilen bölge slug'ları.
      // Eski adresler indekste olabileceği için kalıcı yönlendirme veriliyor.
      {
        source: "/sevakoy-dis-klinigi",
        destination: "/sefakoy-dis-klinigi",
        permanent: true,
      },
      {
        source: "/guneshli-dis-klinigi",
        destination: "/gunesli-dis-klinigi",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
