# Jason Jahja — Product Design Portfolio (Next.js)

Versi Next.js dari portfolio Jason Jahja.

## Tech Stack

- Next.js 16 dengan App Router
- React 19
- Tailwind CSS 4
- Supabase Auth dan Database
- Lottie React

## Menjalankan Project

Pastikan Node.js 20.9 atau lebih baru tersedia, lalu jalankan:

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Script

```bash
npm run dev    # Development server
npm run build  # Production build
npm run start  # Menjalankan production build
npm run lint   # ESLint dan Next.js rules
```

## Routes

| Route | Halaman |
| --- | --- |
| `/` | Homepage |
| `/multi-toys-website` | Multi Toys Website Redesign |
| `/multi-toys-wholesale` | Multi Toys B2B Wholesale Platform |
| `/makmur-intern` | Makmur Product Design Internship |
| `/cpm-wayfinding-system` | Centre Point Medan Wayfinding System |
| `/kjp-website` | KJP Corporate Website |
| `/admin` | Redirect ke portfolio analytics |
| `/admin/analytics` | First-party portfolio analytics |
| `/admin/resume` | Resume URL administration |

## Struktur

```text
portfolio_web_next/
├── public/                  # Font, favicon, preview, dan video publik
├── src/
│   ├── app/                 # App Router, layouts, metadata, dan route pages
│   ├── assets/              # Image, icon, dan Lottie assets
│   ├── components/          # Shared portfolio components
│   ├── data/                # Project content data
│   ├── hooks/               # Scroll dan Resume hooks
│   ├── lib/                 # Supabase client dan asset helpers
│   ├── sections/            # Homepage sections
│   └── views/               # Homepage dan case-study views
├── supabase/setup.sql       # Table, initial Resume URL, dan RLS policies
└── tailwind.config.js       # Existing design tokens dan animations
```

## Supabase

Salin `.env.example` menjadi `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_PUBLISHABLE_KEY
SUPABASE_SERVICE_ROLE_KEY=YOUR_SUPABASE_SERVICE_ROLE_KEY
ANALYTICS_ADMIN_EMAIL=jasonjahja@gmail.com
```

Variable dengan prefix `NEXT_PUBLIC_` dibaca oleh Supabase client di browser. `SUPABASE_SERVICE_ROLE_KEY` hanya digunakan oleh Route Handler di server; jangan pernah menambahkan prefix `NEXT_PUBLIC_` atau mengirim nilainya ke browser.

Jalankan `supabase/setup.sql` melalui Supabase SQL Editor setelah mengganti `YOUR_ADMIN_EMAIL` dengan email akun admin. Jangan memasukkan secret key atau service-role key ke environment variable frontend.

Setelah Supabase dikonfigurasi, Resume URL dapat diperbarui melalui `/admin/resume` tanpa deployment ulang.

## Deployment

Project dapat langsung di-import sebagai project baru di Vercel. Tambahkan kedua environment variable Supabase untuk Production dan Preview sebelum deployment.

Next.js menangani file-based routes secara native, sehingga project ini tidak memerlukan rewrite SPA dari `vercel.json` milik versi Vite.

## Analytics

Portfolio menggunakan first-party analytics yang disimpan di Supabase dan ditampilkan melalui `/admin/analytics`. Tidak ada IP, user-agent mentah, fingerprint, nama, atau email pengunjung yang disimpan. Visitor dihitung sebagai sesi anonim per tab browser.

Pengumpulan data hanya aktif pada domain production `jasonjahja.site`/`www.jasonjahja.site`; localhost, preview deployment, bot umum, dan route `/admin` dikecualikan. Browser mengirim data ke `/api/analytics`, kemudian Route Handler memvalidasi event dan menyimpannya menggunakan service-role key yang hanya tersedia di server.

Custom events yang tersedia:

- `home_section_view` dan `case_section_view`
- `project_card_click` dan `continue_project_click`
- `case_scroll_depth` pada 25%, 50%, 75%, dan 90%
- `engaged_case_study` setelah 30 detik aktif dan minimal 25% scroll
- `resume_click`, `social_click`, dan `outbound_click`
- `navigation_click`, `project_navigation_click`, dan `back_home_click`
- `mobile_menu_open` dan `mobile_menu_close`

Core Web Vitals `TTFB`, `FCP`, `LCP`, `FID`, `CLS`, dan `INP` juga dikumpulkan menggunakan API Web Vitals bawaan Next.js.

### Mengaktifkan analytics

1. Jalankan seluruh isi `supabase/setup.sql` di Supabase SQL Editor.
2. Tambahkan `SUPABASE_SERVICE_ROLE_KEY` ke environment production hosting. Key ini harus tetap server-only.
3. Pastikan akun Supabase Auth untuk `ANALYTICS_ADMIN_EMAIL` sudah tersedia.
4. Deploy ulang, kunjungi domain production, lalu buka `/admin/analytics`.

Dashboard menyediakan pilihan 7/30/90 hari, period-over-period comparison, page dan project performance, section visibility, scroll depth, acquisition, device/browser/country, click breakdown, recent events, serta P75 Web Vitals per route.

## Author

Jason Jahja — Product Designer based in Jakarta, Indonesia.

- [Portfolio](https://jasonjahja.site)
- [LinkedIn](https://www.linkedin.com/in/jason-jahja/)
- [Behance](https://www.behance.net/jasonjahja1)
