# Hekim Fotoğrafları

Bu klasöre fotoğraf koymanız yeterlidir. **Kod düzenlemeniz gerekmez** —
`npm run build` sırasında klasör otomatik taranır ve fotoğraflar hekim
profillerine bağlanır.

## Dosya adı kuralı

Dosya adı, hekimin site adresindeki slug'ı ile birebir aynı olmalıdır:

| Hekim | Dosya adı |
|---|---|
| Dr. Musa Burak Sakar | `dr-musa-burak-sakar.jpg` |
| Dr. Ahmet Emin Kırıktaş | `dr-ahmet-emin-kiriktas.jpg` |
| Dr. Berna Kalkan Yardım | `dr-berna-kalkan-yardim.jpg` |

Slug'ları `lib/doctors.ts` dosyasındaki `slug:` alanından da görebilirsiniz.
Yeni bir hekim eklenirse önce `lib/doctors.ts` içine kaydı girilir, sonra
fotoğrafı bu klasöre aynı adla konur.

## Kabul edilen biçimler

`.jpg` · `.jpeg` · `.png` · `.webp`

Aynı hekim için birden fazla biçim varsa sıra şudur: jpg → jpeg → png → webp

## Önerilen ölçüler

- **En/boy oranı:** 4:5 (dikey portre). Site kartlarda ve profil sayfasında
  bu oranla kırpar.
- **Boyut:** en az 800 × 1000 piksel, ideal 1200 × 1500
- **Dosya boyutu:** 500 KB altı. Daha büyük dosyalar da çalışır; Next.js
  yayınlarken otomatik olarak WebP'ye çevirip küçültür.
- **Çerçeveleme:** yüz üst tarafta olsun. Site fotoğrafı üstten hizalar
  (`object-position: top`), böylece kırpma yüzü kesmez.

## Fotoğrafı büyükse küçültmek için

Terminalde (macOS'ta hazır gelir):

```
sips -Z 1500 -s format jpeg -s formatOptions 85 buyuk-dosya.png --out dr-berna-kalkan-yardim.jpg
```

## Fotoğraf koymazsanız ne olur?

Sorun olmaz. Fotoğrafı olmayan hekim için sitede stetoskop simgeli nötr bir
yer tutucu görünür, sayfa düzeni bozulmaz.

## Hasta fotoğrafı KOYMAYIN

Bu klasör yalnızca hekim portreleri içindir. Hasta görselleri (öncesi/sonrası
vb.) yazılı hasta onayı olmadan sitede yayınlanamaz.
