---

### 4. `TASKS.md`

```markdown
# Implementation Roadmap & Task Checklist

## Phase 1: Setup & UI Foundation
- [x] Inisialisasi Astro project dengan template dasar.
- [x] Konfigurasi Tailwind CSS v4 `@tailwindcss/vite`.
- [x] Hubungkan `src/styles/global.css` ke `Layout.astro`.
- [ ] Buat layout dasar `Layout.astro` lengkap dengan SEO tags & OpenGraph metadata.
- [ ] Susun `Navbar.astro` (logo personal, tombol navigasi tab, link WhatsApp).
- [ ] Susun `Hero.astro` (headline, bio koding & editing, status badge *Available for Work*).

## Phase 2: Content Architecture & Mock Data
- [ ] Konfigurasi `src/content/config.ts` dengan skema Zod.
- [ ] Buat file Markdown untuk 5 project coding:
  - [ ] `stock-warehouse.md` (C# Desktop)
  - [ ] `choi-atk.md` (Laravel + Tailwind)
  - [ ] `tap-to-billionaire.md` (Kotlin)
  - [ ] `sarpras-php.md` (PHP)
  - [ ] `blender-animation.md` (Blender 3D)
- [ ] Buat file `shorts.json` untuk daftar video vertikal editing.

## Phase 3: Interactive Showcase & Modal Component
- [ ] Buat komponen tab filter (`ShowcaseTabs.astro`) untuk beralih antara "Coding" dan "Editing".
- [ ] Bangun `ProjectCard.astro` dengan efek hover dan link repo/demo.
- [ ] Bangun `VideoCard.astro` rasio 9:16 untuk video vertikal.
- [ ] Pasang komponen modal pop-up video (`VideoModal.astro`) dengan player responsif.

## Phase 4: Contact Section & Deployment
- [ ] Buat formulir kontak di `ContactSection.astro` beserta tombol direct WhatsApp.
- [ ] Buat endpoint API `src/pages/api/contact.ts`.
- [ ] Hubungkan repositori ke GitHub.
- [ ] Deploy ke Vercel dan pastikan semua aset gambar tampil sempurna.