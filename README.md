# Tedarikya TXT & Görsel Studio — React 2.0

React + Vite. Siyah tema, turuncu ve beyaz yazılı butonlar, responsive görünüm.

## GitHub → Vercel kurulumu

1. ZIP dosyasını çıkartın. `tedarikya-react` klasörünün **içindeki dosyaları** GitHub deponuzun köküne yükleyin. `package.json`, `package-lock.json`, `vercel.json`, `index.html` ve `src` aynı kökte olmalıdır. Sadece `src` klasörünü yüklemeyin.
2. Vercel → Add New → Project → Import Git Repository → GitHub deponuzu seçin.
3. Ayarlar:

| Ayar | Değer |
|---|---|
| Framework Preset | Vite |
| Root Directory | `./` (deponun kökü) |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm ci` |
| Node.js Version | `22.x` |
| Environment Variables | Gerekli değil |

4. Deploy düğmesine basın. Bundan sonraki GitHub güncellemeleri otomatik yeniden yayınlanır.

Klasörü GitHub'a `tedarikya-react` adlı üst klasörle yüklerseniz Root Directory değerini `tedarikya-react` seçin. Ayarların diğerleri aynıdır. `node_modules` ve `dist` yüklemeyin. `vercel.json` derleme ayarlarını içerir.

Resmî belgeler: https://vercel.com/docs/frameworks/frontend/vite ve https://vercel.com/docs/builds/configure-a-build

## Bilgisayarda çalıştırma

Node.js 22.12+ kurulu olmalıdır. Terminali `package.json` dosyasının bulunduğu klasörde açın:

```sh
npm ci
npm run dev
```

Terminaldeki yerel adresi açın. Üretim kontrolü:

```sh
npm run build
npm run preview
```

## Kullanım ve değişiklikler

- Birden fazla TXT yükleme, arama, ürün sekmeleri, kopyalama ve orijinal TXT indirme.
- SKU başlığın altında; marka ve kategori temel alanlardan sonra, açıklamalardan önce.
- Kategori ID, satış fiyatı, barkod, ürün kodu ve stok miktarı düzenli görünümde gösterilmez. Orijinal TXT indirmesi dosya içeriğini değiştirmez.
- Uzun açıklama ve HTML önizlemesi “Daha fazla göster” ile açılır. Açılan açıklama kendi içinde kaydırılmaz; sayfa uzar.
- Etiketler ve arama kelimeleri ilk 10 öğeyle sınırlı; daha fazla/daha az ile açılır ve kapanır.
- Ürün başına en fazla 7 görsel. PNG/JPG/WebP → beyaz fonlu, oranı korunmuş 1000×1000 JPG. 20–200 KB sınırı, görsel başına uygulanır.
- Küçük harf, tireli SEO dosya adları; `.jpg` dahil en fazla 36 karakter. Tekil JPG veya ürün/tüm ürün ZIP çıktısı.
- JSON şablon indirme, isim eşleştirme, toplu görsel dağıtma, yeniden adlandırma ve sıralama korunur.
- İşlemler tarayıcıda yapılır. Yenileme/kapatma öncesi dosyaları indirin; oturum otomatik kaydedilmez.
- HTML içerikleri betik çalıştırmayan ve harici kaynakları engelleyen sandbox önizlemesinde gösterilir.

Vercel hesabında yayınlama bu paketin hazırlanması kapsamında gerçekleştirilmedi; paket GitHub üzerinden dağıtım içindir.
