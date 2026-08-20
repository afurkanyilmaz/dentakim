import type { Metadata } from "next";
import { BUSINESS } from "@/lib/business";
import { generateMeta } from "@/lib/seo";
import { LegalPageShell } from "@/components/shared/LegalPageShell";

export const metadata: Metadata = {
  ...generateMeta({
    title: "KVKK Aydınlatma Metni",
    description:
      "Dentakim Ağız ve Diş Sağlığı Polikliniği kişisel verilerin korunması aydınlatma metni.",
    slug: "kvkk",
  }),
  robots: { index: true, follow: true },
};

export default function KvkkPage() {
  return (
    <LegalPageShell title="KVKK Aydınlatma Metni" slug="kvkk" updatedAt="19 Ağustos 2026">
      <p>
        6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) uyarınca, veri
        sorumlusu sıfatıyla {BUSINESS.legalName} tarafından kişisel verilerinizin nasıl
        işlendiği aşağıda açıklanmıştır.
      </p>

      <h2>Veri sorumlusu</h2>
      <p>
        {BUSINESS.legalName}
        <br />
        {BUSINESS.address.full}
        <br />
        Telefon: {BUSINESS.phone.display} · E-posta: {BUSINESS.email}
      </p>

      <h2>İşlenen kişisel veriler</h2>
      <p>Bu web sitesi üzerinden şu veriler işlenmektedir:</p>
      <ul>
        <li>
          <strong>İletişim verileri:</strong> WhatsApp veya telefon üzerinden bizimle
          iletişime geçtiğinizde paylaştığınız ad, telefon numarası ve mesaj içeriği.
        </li>
        <li>
          <strong>Kullanım verileri:</strong> ziyaret edilen sayfalar, tarayıcı ve cihaz
          bilgisi, yaklaşık konum ve site içi gezinme hareketleri (Google Analytics).
        </li>
      </ul>
      <p>
        Sitede randevu formu bulunmamaktadır; site üzerinden doğrudan sağlık verisi
        toplanmamaktadır. Tedavi sürecine ilişkin sağlık verileri yalnızca klinik içinde,
        ilgili sağlık mevzuatı kapsamında işlenir.
      </p>

      <h2>İşleme amaçları</h2>
      <ul>
        <li>Randevu ve bilgi taleplerinizin karşılanması</li>
        <li>Tedavi öncesi soruların yanıtlanması ve yönlendirme yapılması</li>
        <li>Web sitesinin performansının ölçülmesi ve iyileştirilmesi</li>
        <li>Yasal yükümlülüklerin yerine getirilmesi</li>
      </ul>

      <h2>Hukuki sebep</h2>
      <p>
        İletişim verileri, KVKK m.5/2-(c) uyarınca bir sözleşmenin kurulması veya ifasıyla
        doğrudan ilgili olması ve m.5/2-(f) uyarınca meşru menfaat kapsamında; analitik
        veriler ise açık rızanız (KVKK m.5/1) kapsamında işlenmektedir.
      </p>

      <h2>Aktarım</h2>
      <p>
        Analitik veriler, hizmet sağlayıcı Google tarafından yurt dışında bulunan sunucularda
        işlenebilir. Bunun dışında kişisel verileriniz, yasal olarak yetkili kamu kurumları
        haricinde üçüncü kişilerle paylaşılmaz.
      </p>

      <h2>Saklama süresi</h2>
      <p>
        İletişim kayıtları, talebin karşılanması ve olası uyuşmazlıklar için gerekli süre
        boyunca; analitik veriler ise Google Analytics saklama ayarında belirlenen süre
        boyunca saklanır. Süre sonunda veriler silinir veya anonim hale getirilir.
      </p>

      <h2>Haklarınız</h2>
      <p>KVKK m.11 uyarınca kişisel verilerinizle ilgili olarak şu haklara sahipsiniz:</p>
      <ul>
        <li>Kişisel verinizin işlenip işlenmediğini öğrenme ve buna ilişkin bilgi talep etme</li>
        <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
        <li>Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme</li>
        <li>Silinmesini veya yok edilmesini isteme</li>
        <li>İşlemenin sonucuna itiraz etme ve zararın giderilmesini talep etme</li>
      </ul>
      <p>
        Taleplerinizi {BUSINESS.email} adresine veya yukarıdaki klinik adresine yazılı olarak
        iletebilirsiniz. Başvurunuz en geç 30 gün içinde sonuçlandırılır.
      </p>
    </LegalPageShell>
  );
}
