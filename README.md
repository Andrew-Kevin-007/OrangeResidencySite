# Orange Residency

Official website for **Orange Residency** — a premium hotel located near Thiruporur, Chennai, offering comfortable accommodations and excellent hospitality.

🌐 **Live Site:** [orangeresidency.in](https://orangeresidency.in)

## Features

- 🏨 Modern, elegant design with smooth animations
- 📱 Fully responsive across all devices (mobile, tablet, desktop)
- 🛏️ Room showcase with detailed amenities
- 📍 Nearby attractions guide (Mahabalipuram, ECR Beach, Crocodile Bank, etc.)
- 📞 Contact form with integrated Google Maps
- 📸 Photo gallery with lightbox viewer
- 🎯 Online booking inquiry system

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | UI Framework |
| TypeScript | Type Safety |
| Vite | Build Tool |
| Tailwind CSS | Styling |
| shadcn/ui | UI Components |
| React Router | Navigation |
| Lucide React | Icons |

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── assets/          # Images (room photos, attractions, logo)
├── components/
│   ├── layout/      # Navbar, Footer
│   └── ui/          # Reusable UI components
├── pages/           # Route pages
│   ├── Index.tsx    # Homepage
│   ├── Rooms.tsx    # Room listings
│   ├── Services.tsx # Hotel services
│   ├── Gallery.tsx  # Photo gallery
│   ├── Nearby.tsx   # Nearby attractions
│   ├── About.tsx    # About page
│   ├── Contact.tsx  # Contact form
│   └── Booking.tsx  # Booking inquiry
├── hooks/           # Custom hooks
├── lib/             # Utilities
└── index.css        # Global styles
```

## Deployment

```bash
npm run build
```

Deploy the `dist/` folder to any static host:
- Vercel
- Netlify
- Cloudflare Pages
- Firebase Hosting
- AWS S3 + CloudFront

## Environment

- Node.js 18+
- npm or bun

## Browser Support

Chrome, Firefox, Safari, Edge (latest versions)

---

© 2026 Orange Residency. All rights reserved.
