# E-Commerce

Modern ve responsive bir e-ticaret ön yüz (front-end) şablonu. Saf **HTML, CSS ve JavaScript** ile geliştirilmiş, herhangi bir framework veya build aracı gerektirmeyen statik bir sitedir.

🔗 **Canlı Demo:** [ecommerce-esmanur.netlify.app](https://ecommerce-esmanur.netlify.app/)

## Özellikler

- 🖼️ **Slider / Hero alanı** – sezonluk kampanya görselleri için otomatik geçişli banner
- 🗂️ **Kategori listesi** – ikonlu/görselli ürün kategorileri
- 🛍️ **`data.json`'dan dinamik ürün listeleme** – ürün kartları sayfa yüklenirken `js/data.json`'dan fetch edilip DOM'a basılıyor
- 🛒 **Gerçek (localStorage tabanlı) sepet** – "Sepete Ekle" butonu ürünü `localStorage`'a yazıyor, header'daki sepet sayacı anlık güncelleniyor, sepet sayfasında ürün silme ve ara toplam/kargo hesaplaması yapılıyor
- 🔍 **Çalışan canlı arama** – arama kutusuna yazdıkça ürün adına göre anlık filtreleme yapılıyor, sonuç yoksa "Aradığınız Ürün Bulunamadı" mesajı gösteriliyor
- 🎠 **Ürün carousel'leri** – [Glide.js](https://glidejs.com/) ile öne çıkan ürünler, yeni gelenler ve ürün detay sayfası küçük görsel (thumbnail) carousel'i
- 🔎 **Ürün detay sayfası** – görsel yakınlaştırma (zoom), renk/beden seçimi, sekmeli açıklama-yorum alanı, yıldızlı puanlama ve yorum ekleme formu
- 📧 **Bülten (newsletter) popup'ı** – kapatılabilir kayıt formu
- 📱 **Tam responsive tasarım** – mobil menü (hamburger) desteği
- 🔤 **Bootstrap Icons** ile ikon seti

## Sayfalar

| Dosya | Açıklama |
|---|---|
| `index.html` | Ana sayfa – slider, kategoriler, öne çıkan/yeni ürünler, blog, marka logoları |
| `shop.html` | Mağaza / ürün listeleme sayfası |
| `single-product.html` | Ürün detay sayfası |
| `cart.html` | Sepet sayfası |
| `account.html` | Kullanıcı hesap sayfası |
| `blog.html` | Blog listeleme sayfası |
| `single-blog.html` | Blog yazısı detay sayfası |
| `contact.html` | İletişim sayfası |

## Proje Yapısı

```
e-commerce/
├── css/
│   └── main.css                     # Tüm sitenin tek stil dosyası
├── js/
│   ├── main.js                      # Giriş noktası: data.json'ı fetch'ler,
│   │                                 # localStorage'a "products" olarak yazar,
│   │                                 # header/products/search modüllerini başlatır
│   ├── header.js                    # Mobil menü (sidebar) aç/kapat + arama modalı aç/kapat
│   ├── products.js                  # Ürün kartlarını DOM'a basar, "Sepete Ekle" ve
│   │                                 # ürün detayına yönlendirme mantığını yönetir
│   ├── search.js                    # Arama kutusuna yazıldıkça ürünleri canlı filtreler
│   ├── slider.js                    # Ana sayfa hero slider'ının otomatik/manuel geçişi
│   ├── glide.js                     # Glide.js carousel konfigürasyonları (ürün listesi,
│   │                                 # ürün detay sayfası küçük görsel/thumbnail carousel'i)
│   ├── cart.js                      # Sepet sayfası: localStorage'daki "cart" verisini
│   │                                 # listeler, ürün siler, ara toplam/kargo hesaplar
│   ├── single-product.js            # Ürün detay sayfasını başlatan modül (aşağıdaki
│   │                                 # alt modülleri import eder)
│   ├── single-product/
│   │   ├── thumbsActive.js          # Küçük görsele tıklayınca ana görseli değiştirir
│   │   ├── zoom.js                  # Ürün görseline mouse ile yaklaşma/zoom efekti
│   │   ├── colors.js                # Renk seçeneği seçimi (aktif sınıf toggle)
│   │   ├── values.js                # Beden/varyant seçimi (aktif sınıf toggle)
│   │   ├── tabs.js                  # Açıklama / yorumlar sekmeleri arası geçiş
│   │   └── comments.js              # Yıldız puanlama + yeni yorum ekleme formu
│   └── data.json                    # Örnek ürün verisi (id, isim, fiyat, indirim, görseller)
├── img/
│   ├── products/                    # Ürün görselleri (product1, product2, ...)
│   ├── categories/                  # Kategori ikon/görselleri
│   ├── slider/                      # Ana sayfa slider görselleri
│   ├── blogs/                       # Blog kart görselleri
│   ├── brands/                      # Marka logoları
│   ├── footer/                      # App Store / Google Play rozetleri, kart ikonları
│   └── mega-menu.jpg, modal-dialog.jpg
├── index.html                       # Ana sayfa
├── shop.html                        # Mağaza / ürün listeleme
├── single-product.html              # Ürün detay sayfası
├── cart.html                        # Sepet sayfası
├── account.html                     # Hesap sayfası
├── blog.html                        # Blog listeleme
├── single-blog.html                 # Blog yazısı detayı
└── contact.html                     # İletişim sayfası
```

## Kullanılan Teknolojiler

- **HTML5 / CSS3**
- **Vanilla JavaScript (ES Modules)** – `type="module"` ile `import`/`export` kullanılarak modüler yapıda yazılmış
- **`localStorage`** – ürün verisi (`products`), sepet (`cart`) ve seçili ürün id'si (`productId`) tarayıcıda saklanıyor
- [**Glide.js**](https://glidejs.com/) – ürün carousel/slider bileşeni (CDN üzerinden)
- [**Bootstrap Icons**](https://icons.getbootstrap.com/) – ikon kütüphanesi (CDN üzerinden)
- [**Netlify**](https://www.netlify.com/) – statik site barındırma (deployment)

## Kurulum ve Çalıştırma

Herhangi bir bağımlılık veya build adımı gerekmez, çünkü proje tamamen statik dosyalardan oluşur.

```bash
# Depoyu klonlayın
git clone https://github.com/esmanur-ak/e-commerce.git
cd e-commerce

# index.html dosyasını doğrudan tarayıcıda açabilir
# veya basit bir local server ile çalıştırabilirsiniz:
npx serve .
# ya da
python -m http.server 5500
```

Ardından tarayıcıdan `http://localhost:5500` (veya kullandığınız portu) açarak siteyi görüntüleyebilirsiniz.

## Notlar

- Sepet ve arama gibi temel etkileşimler gerçekten çalışıyor; ancak **backend/API ve ödeme adımı yoktur** — tüm veri (`products`, `cart`) tarayıcının `localStorage`'ında tutuluyor.
- Menüdeki "Home Clean", "Home Collection" gibi alt sayfa bağlantılarının çoğu şablon içinde `#` olarak bırakılmıştır (henüz sayfası oluşturulmamış).
- `data.json` içindeki 5 ürün, tüm sayfalarda (ana sayfa, arama, ürün detay) tekrar kullanılan tek veri kaynağıdır.

## Geliştirme Notları

`index.html`'deki "New Arrivals" bölümü hâlâ HTML'e gömülü sabit kartlar içeriyor; oysa aynı bileşen `products.js` ile `data.json`'dan dinamik olarak da üretilebiliyor — iki farklı yaklaşım bir arada kullanılmış. Bülten (newsletter) formunun gönderim/doğrulama mantığı henüz eklenmemiş, ve ürün sayısı (`data.json`'da 5 kayıt) gerçek bir mağaza için oldukça sınırlı.

## Lisans

Bu proje eğitim/portföy amaçlı geliştirilmiştir. Lisans bilgisi belirtilmemiştir; kullanım öncesi proje sahibiyle iletişime geçmeniz önerilir.
