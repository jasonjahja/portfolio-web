# Jason Jahja — Product Design Portfolio

Portfolio pribadi Jason Jahja yang menampilkan pilihan proyek product design, UX case study, pengalaman profesional, dan pencapaian. Website ini dibangun sebagai single-page application yang responsif dengan animasi berbasis scroll.

## Tech Stack

- React 19
- React Router 7
- Vite 7
- Tailwind CSS 4
- Lottie React
- Vercel

## Fitur Utama

- Homepage berisi overview, featured projects, posts, dan informasi kontak.
- Halaman case study untuk setiap proyek dengan konteks, proses desain, solusi, outcome, dan reflection.
- Navigasi internal menggunakan React Router.
- Layout responsif untuk mobile, tablet, dan desktop.
- Reveal animation dan ekspansi hero image berbasis posisi scroll.
- Lazy-loaded images dan video yang baru dimuat ketika terlihat di viewport.
- SEO dasar, Open Graph metadata, dan structured data.

## Route

| Route | Halaman |
| --- | --- |
| `/` | Homepage |
| `/multi-toys-website` | Multi Toys Website Redesign |
| `/multi-toys-wholesale` | Multi Toys B2B Wholesale Platform |
| `/makmur-intern` | Makmur Design Systems & Responsive Experiences |
| `/cpm-wayfinding-system` | Centre Point Medan Wayfinding & Directory System |
| `/kjp-website` | PT. Kencana Jaya Persada Corporate Website |

## Struktur Proyek

```text
portfolio_web/
├── public/                 # Font, favicon, preview image, dan aset publik
├── src/
│   ├── assets/             # Image, icon, video, dan Lottie animation
│   ├── components/         # Komponen reusable dan UI case study
│   ├── data/               # Data terstruktur untuk konten proyek tertentu
│   ├── hooks/              # Custom hooks untuk animasi scroll
│   ├── pages/              # Homepage dan halaman detail proyek
│   ├── sections/           # Section penyusun homepage
│   ├── styles/             # Konfigurasi font tambahan
│   ├── App.jsx             # Router dan application shell
│   └── main.jsx            # Entry point React
├── index.html              # HTML shell dan metadata global
├── tailwind.config.js      # Design tokens dan animation definitions
├── vercel.json             # SPA rewrite untuk deployment Vercel
└── vite.config.js          # Konfigurasi Vite
```

## Menjalankan Secara Lokal

Pastikan Node.js dan npm sudah terpasang, kemudian jalankan:

```bash
npm install
npm run dev
```

Vite akan menampilkan alamat development server di terminal, biasanya `http://localhost:5173`.

## Script

```bash
npm run dev      # Menjalankan development server
npm run build    # Membuat production build ke folder dist
npm run preview  # Menjalankan production build secara lokal
npm run lint     # Memeriksa source code dengan ESLint
```

## Menambahkan Proyek

1. Tambahkan aset proyek ke `src/assets/images`.
2. Buat halaman case study baru di `src/pages` menggunakan komponen bersama dari `src/components/ui` dan `src/components/project`.
3. Daftarkan route baru di `src/App.jsx`.
4. Tambahkan data project card ke array `works` di `src/sections/Work.jsx`.
5. Tentukan tujuan next project melalui komponen `ProjectNav` pada halaman case study.

## Deployment

Project dikonfigurasi untuk Vercel. Seluruh request diarahkan ke `/` melalui `vercel.json` agar route client-side React Router tetap dapat dibuka atau di-refresh secara langsung.

### Konfigurasi Resume Admin

Link Resume dapat diperbarui melalui `/admin/resume` setelah Supabase dikonfigurasi:

1. Buat project Supabase dan akun admin melalui Authentication.
2. Buka `supabase/setup.sql`, ganti `YOUR_ADMIN_EMAIL`, lalu jalankan isinya melalui Supabase SQL Editor.
3. Salin `.env.example` menjadi `.env.local` dan isi URL serta anon key Supabase.
4. Tambahkan environment variable yang sama di pengaturan project Vercel.
5. Lakukan deployment awal. Setelah itu, perubahan URL melalui halaman admin tidak membutuhkan deployment ulang.

Jangan menaruh Supabase service-role key atau password admin di environment variable frontend.

Production site: [jasonjahja.site](https://jasonjahja.site)

## Author

Jason Jahja — Product Designer based in Jakarta, Indonesia.

- [LinkedIn](https://www.linkedin.com/in/jason-jahja/)
- [Behance](https://www.behance.net/jasonjahja1)
