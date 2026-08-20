import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";
import { generateMeta } from "@/lib/seo";
import { LegalPageShell } from "@/components/shared/LegalPageShell";

export const metadata: Metadata = generateMeta({
  title: "Çerez Politikası",
  description:
    "Dentakim web sitesinde kullanılan çerezler, amaçları ve çerez tercihlerinizi yönetme yolları.",
  slug: "cerez-politikasi",
});

export default function CerezPolitikasiPage() {
  return (
    <LegalPageShell title="Çerez Politikası" slug="cerez-politikasi" updatedAt="19 Ağustos 2026">
      <p>
        Çerezler, ziyaret ettiğiniz siteler tarafından cihazınıza kaydedilen küçük metin
        dosyalarıdır. Bu metin, {BUSINESS.website} adresinde hangi çerezlerin kullanıldığını
        açıklar.
      </p>

      <h2>Kullandığımız çerezler</h2>
      <ul>
        <li>
          <strong>Zorunlu çerezler:</strong> sitenin çalışması için gereklidir; tercihlerinizi
          ve güvenlik ayarlarını hatırlar. Bu çerezler devre dışı bırakılamaz.
        </li>
        <li>
          <strong>Analitik çerezler:</strong> Google Analytics tarafından yerleştirilir. Kaç
          kişinin siteyi ziyaret ettiğini, hangi sayfaların okunduğunu ve ziyaretçilerin siteye
          nereden geldiğini anlamamızı sağlar. Yalnızca izniniz ile çalışır.
        </li>
      </ul>
      <p>
        Sitede reklam veya yeniden pazarlama çerezi kullanılmamaktadır. Google Haritalar gömülü
        içeriği, Google tarafından yerleştirilen kendi çerezlerini kullanabilir.
      </p>

      <h2>Çerezleri nasıl yönetirsiniz</h2>
      <p>
        Site ilk açıldığında görünen çerez bildirimi üzerinden analitik çerezleri kabul edebilir
        veya reddedebilirsiniz. Tercihinizi daha sonra tarayıcı ayarlarınızdan da
        değiştirebilirsiniz: Chrome, Safari, Firefox ve Edge tarayıcılarının ayarlar bölümünde
        &quot;Çerezler ve site verileri&quot; başlığı altında tüm çerezleri silebilir veya
        engelleyebilirsiniz.
      </p>
      <p>
        Zorunlu çerezleri engellemeniz halinde sitenin bazı bölümleri beklendiği gibi
        çalışmayabilir.
      </p>

      <h2>İlgili metinler</h2>
      <p>
        <Link href="/kvkk" className="font-medium text-brand-primary underline">
          KVKK Aydınlatma Metni
        </Link>{" "}
        ve{" "}
        <Link href="/gizlilik" className="font-medium text-brand-primary underline">
          Gizlilik Politikası
        </Link>
        .
      </p>
    </LegalPageShell>
  );
}
