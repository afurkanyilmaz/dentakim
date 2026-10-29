This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Instagram videolarının haftalık otomatik güncellenmesi

Anasayfa, blog yazıları, tedavi ve hekim sayfalarındaki Instagram videoları
`lib/instagram.ts` (elle düzenlenen liste) ve `lib/instagram-feed.ts`
(haftalık otomatik güncelleme) ile yönetilir. Videolar indirilmez; Instagram'ın
resmi gömme koduyla oynatılır.

Otomatik güncelleme için Vercel → Project → Settings → Environment Variables
altına iki değişken eklenir (Production):

| Değişken | Açıklama |
|---|---|
| `INSTAGRAM_USER_ID` | Instagram işletme hesabının kimliği (Graph API) |
| `INSTAGRAM_ACCESS_TOKEN` | Süresiz Meta "System User" erişim anahtarı (`instagram_basic`, `pages_show_list` izinleri) |

Kurulum özeti:
1. Instagram hesabını **İşletme** hesabına çevirin ve bir Facebook sayfasına bağlayın.
2. [Meta Business Suite](https://business.facebook.com) → Ayarlar → Kullanıcılar → **Sistem Kullanıcıları**'ndan bir sistem kullanıcısı oluşturun.
3. [developers.facebook.com](https://developers.facebook.com)'ta bir uygulama oluşturup sistem kullanıcısına atayın; "Süresiz" seçeneğiyle `instagram_basic` ve `pages_show_list` izinli bir erişim anahtarı üretin.
4. Graph API Explorer'da `me/accounts?fields=instagram_business_account` ile `INSTAGRAM_USER_ID` değerini alın.
5. İki değişkeni Vercel'e ekleyip yeniden dağıtın.

Değişkenler tanımlı değilse veya Instagram yanıt vermezse site `lib/instagram.ts`
listesini kullanmaya devam eder. Yeni reel'ler açıklamalarındaki anahtar
kelimelere göre ilgili blog ve tedavi sayfalarına otomatik eklenir; bir
videoyu belirli bir hekime veya sayfaya bağlamak için `lib/instagram.ts`'e
eklemek yeterlidir.
