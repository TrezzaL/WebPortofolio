# Product Requirement Document (PRD)
**Project Name:** Choirul Rizal — Portfolio Hub  
**Platform:** Web (Responsive Desktop & Mobile)  
**Deployment:** Vercel  
**Status:** In Development  

---

## 1. Executive Summary & Problem Statement
Website portofolio berkinerja tinggi berbasis Astro untuk memamerkan keahlian teknis (*software engineering*) dan karya visual (*video editing & 3D animation*). Portofolio ini mengadopsi model *dual-focus showcase* (Coding & Editing) dengan sistem tab interaktif, video modal player responsif, dan formulir kontak otomatis tanpa reload halaman.

## 2. Target Persona & User Journey
* **Tech Recruiter / Engineering Lead:** Memeriksa bukti kapabilitas koding lintas platform (C#, Laravel, Kotlin, PHP), repositori GitHub, serta demonstrasi aplikasi nyata.
* **Klien Freelance / Bisnis:** Memeriksa portofolio sistem manajemen stok, website e-commerce, atau aset visual sebelum mengajukan proyek kerja sama.
* **Content Partner / Brand:** Mengevaluasi visual editing (Shorts, TikTok, IG Reels) dan animasi 3D untuk kebutuhan kolaborasi media.

## 3. Fitur Utama & Matriks Prioritas (MoSCoW)
* **[P0] Hero Section:** Identitas diri, peran (*Software Engineer & Video Editor*), badge status ketersediaan (*Available for Work*), dan tautan cepat.
* **[P0] Dual Tab Showcase (Coding & Editing):**
  * **Tab Coding:** Grid kartu proyek (*Choi-ATK, Warehouse C#, Tap To Billionaire, Sarpras PHP, Blender 3D*) lengkap dengan badge tech stack, screenshot, link repo, dan live demo.
  * **Tab Editing:** Visual vertical grid (rasio 9:16) untuk video YouTube Shorts, TikTok, dan IG Reels.
* **[P0] Video Player Modal:** Menonton video tanpa redirect keluar dari portofolio.
* **[P1] Interactive Contact Form:** Pengiriman pesan instan via email service terintegrasi anti-spam.
* **[P1] Direct Action CTA:** Tombol alternatif langsung menuju WhatsApp dan email.
* **[P2] Dark Mode Glassmorphism Theme:** Estetika modern latar gelap (`zinc-950`) dengan kartu transparan dan aksen *cyan/indigo*.

## 4. Kriteria Non-Fungsional
* **Performa:** Skor Google Lighthouse > 95 pada Performance, Accessibility, Best Practices, dan SEO.
* **Responsivitas:** Optimal di breakpoint mobile (360px+), tablet, hingga desktop lebar.
* **SEO & OpenGraph:** Preview gambar (OG Image) muncul otomatis saat tautan dibagikan di media sosial.