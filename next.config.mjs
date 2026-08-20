/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Randevu formu kaldırıldı — talepler WhatsApp ve telefona yönlendiriliyor.
      { source: "/randevu", destination: "/iletisim", permanent: true },

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
