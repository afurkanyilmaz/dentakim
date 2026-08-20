import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";
import { generateMeta } from "@/lib/seo";
import { LegalPageShell } from "@/components/shared/LegalPageShell";

export const metadata: Metadata = generateMeta({
  title: "Gizlilik Politikası",
  description:
    "Dentakim web sitesinde toplanan bilgiler, kullanım amaçları ve ziyaretçi hakları.",
  slug: "gizlilik",
});

export default function GizlilikPage() {
  return (
    <LegalPageShell title="Gizlilik Politikası" slug="gizlilik" updatedAt="19 Ağustos 2026">
      <p>
        {BUSINESS.displayName} olarak ziyaretçilerimizin gizliliğine önem veriyoruz. Bu metin,{" "}
        {BUSINESS.website} adresinde hangi bilgilerin toplandığını ve nasıl kullanıldığını
        açıklar.
      </p>

      <h2>Topladığımız bilgiler</h2>
      <ul>
        <li>
          <strong>Sizin paylaştıklarınız:</strong> WhatsApp veya telefonla iletişime
          geçtiğinizde ilettiğiniz ad, numara ve mesaj içeriği.
        </li>
        <li>
          <strong>Otomatik toplananlar:</strong> sayfa görüntülemeleri, tarayıcı türü, cihaz
          bilgisi ve yaklaşık konum. Bu veriler Google Analytics aracılığıyla toplanır ve
          kimliğinizi doğrudan tanımlamaz.
        </li>
      </ul>
      <p>
        Sitede randevu formu, üyelik veya ödeme sistemi bulunmamaktadır. Kredi kartı ya da
        kimlik bilgisi hiçbir şekilde talep edilmez.
      </p>

      <h2>Bilgileri nasıl kullanıyoruz</h2>
      <ul>
        <li>Sorularınızı yanıtlamak ve randevunuzu planlamak</li>
        <li>Hangi içeriklerin faydalı olduğunu anlamak ve siteyi geliştirmek</li>
        <li>Teknik sorunları tespit etmek</li>
      </ul>
      <p>Verilerinizi satmıyor, kiralamıyor ve pazarlama amacıyla üçüncü kişilere aktarmıyoruz.</p>

      <h2>WhatsApp üzerinden iletişim</h2>
      <p>
        Sitedeki WhatsApp bağlantıları sizi WhatsApp uygulamasına yönlendirir. Bu noktadan
        sonra iletişiminiz WhatsApp&apos;ın kendi gizlilik koşullarına tabidir. Klinik olarak
        yalnızca bize ilettiğiniz mesajları görürüz.
      </p>

      <h2>Çerezler</h2>
      <p>
        Sitede kullanılan çerezler hakkında ayrıntılı bilgi için{" "}
        <Link href="/cerez-politikasi" className="font-medium text-brand-primary underline">
          Çerez Politikası
        </Link>{" "}
        sayfamıza bakabilirsiniz.
      </p>

      <h2>Üçüncü taraf bağlantıları</h2>
      <p>
        Sitemizde Google Haritalar gömülü içeriği ve harici bağlantılar bulunur. Bu
        hizmetlerin kendi gizlilik uygulamaları geçerlidir.
      </p>

      <h2>İletişim</h2>
      <p>
        Gizlilikle ilgili sorularınız için {BUSINESS.email} adresine yazabilir veya{" "}
        {BUSINESS.phone.display} numarasından bize ulaşabilirsiniz.
      </p>
    </LegalPageShell>
  );
}
