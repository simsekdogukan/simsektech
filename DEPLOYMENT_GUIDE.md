# Şimşek Tech Web Sitesi - Deployment Rehberi

## 📦 Paket İçeriği

ZIP dosyası içinde şunlar bulunmaktadır:
- Tüm kaynak kodlar (src/)
- Production build dosyaları (dist/)
- Konfigürasyon dosyaları
- README.md dokümantasyonu

## 🚀 Vercel ile GitHub Üzerinden Deployment

### Adım 1: GitHub Repository Oluşturma

1. GitHub'da yeni bir repository oluşturun (örn: `simsek-tech-website`)
2. Repository'yi **public** veya **private** olarak ayarlayabilirsiniz

### Adım 2: Kodu GitHub'a Yükleme

ZIP dosyasını açın ve terminal/komut satırında şu komutları çalıştırın:

```bash
cd simsek-tech
git init
git add .
git commit -m "Initial commit: Şimşek Tech website"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADINIZ/simsek-tech-website.git
git push -u origin main
```

### Adım 3: Vercel'e Deploy Etme

1. [Vercel](https://vercel.com) sitesine gidin
2. "Sign Up" veya "Log In" ile GitHub hesabınızla giriş yapın
3. Dashboard'da **"Add New Project"** butonuna tıklayın
4. GitHub repository'nizi seçin (`simsek-tech-website`)
5. Ayarları şu şekilde yapın:
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (varsayılan)
   - **Build Command**: `pnpm run build` (otomatik algılanır)
   - **Output Directory**: `dist` (otomatik algılanır)
6. **"Deploy"** butonuna tıklayın

### Adım 4: Domain Ayarlama (Opsiyonel)

1. Vercel dashboard'da projenize gidin
2. **"Settings"** > **"Domains"** sekmesine tıklayın
3. Kendi domain'inizi ekleyin (örn: `simsektech.com`)
4. DNS ayarlarınızı Vercel'in verdiği bilgilere göre güncelleyin

## 🔧 Alternatif Deployment Yöntemleri

### Netlify ile Deployment

1. [Netlify](https://netlify.com) sitesine gidin
2. "Add new site" > "Import an existing project"
3. GitHub repository'nizi bağlayın
4. Build ayarları:
   - Build command: `pnpm run build`
   - Publish directory: `dist`
5. Deploy butonuna tıklayın

### Manuel Static Hosting

Eğer başka bir hosting servisi kullanmak isterseniz:

1. `dist/` klasöründeki tüm dosyaları hosting servisinize yükleyin
2. Web sunucunuzun root dizinine kopyalayın
3. Domain'inizi bu dizine yönlendirin

Uyumlu hosting servisleri:
- Cloudflare Pages
- GitHub Pages
- Firebase Hosting
- AWS S3 + CloudFront
- DigitalOcean App Platform

## 🔄 Güncelleme Yapmak

Kod üzerinde değişiklik yaptıktan sonra:

```bash
git add .
git commit -m "Güncelleme açıklaması"
git push
```

Vercel otomatik olarak yeni versiyonu deploy edecektir.

## 📝 Önemli Notlar

- **Node.js Versiyonu**: Vercel'de Node.js 18 veya üzeri kullanıldığından emin olun
- **Environment Variables**: Eğer API key gibi hassas bilgiler eklerseniz, Vercel dashboard'dan Environment Variables bölümünden ekleyin
- **Custom Domain**: SSL sertifikası Vercel tarafından otomatik olarak sağlanır

## 🆘 Sorun Giderme

### Build Hatası Alıyorsanız:

1. Vercel dashboard'da "Deployments" sekmesine gidin
2. Başarısız deployment'a tıklayın
3. "Build Logs" bölümünü inceleyin
4. Hata mesajına göre düzeltme yapın

### Yaygın Hatalar:

- **"Module not found"**: `package.json` dosyasının doğru olduğundan emin olun
- **"Build failed"**: Node.js versiyonunu kontrol edin
- **"404 on refresh"**: Vercel otomatik olarak SPA routing'i destekler, sorun olmamalı

## 📧 Destek

Sorularınız için: info@simsektech.com

---

**Hazırlayan**: Manus AI
**Tarih**: 15 Ekim 2025

