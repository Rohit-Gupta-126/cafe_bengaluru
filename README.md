# ☕ Cafe Bengaluru

> A modern, elegant web application for Cafe Bengaluru — showcasing our carefully curated menu, vibrant atmosphere, and delightful offerings. Built with cutting-edge web technologies for an exceptional user experience.

---

## ✨ Features

- **🎨 Modern Design** — Clean, responsive interface with a beautiful custom cursor for enhanced interactivity
- **📱 Fully Responsive** — Optimized for desktop, tablet, and mobile devices
- **⚡ High Performance** — Built with Next.js 15+ for blazing-fast page loads
- **🔍 SEO Optimized** — Automatic sitemap generation and robots.txt configuration
- **🎭 Interactive Components** — Smooth animations and engaging user interactions
- **📍 Multi-Page Navigation** — Organized sections including Home, About, Menu, Contact, Visit, and Vibe
- **🎪 Page Loader** — Elegant loading states for seamless navigation
- **📸 Image Optimization** — Automatic image optimization for web performance

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 15+** | React framework with App Router |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Utility-first styling |
| **PostCSS** | CSS processing |
| **pnpm** | Fast package manager |
| **ESLint** | Code quality |

---

## 📋 Project Structure

```
cafe_bengaluru/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # Home page
│   │   ├── layout.tsx         # Root layout
│   │   ├── error.tsx          # Error boundary
│   │   ├── not-found.tsx      # 404 page
│   │   ├── robots.ts          # SEO robots.txt
│   │   ├── sitemap.ts         # SEO sitemap
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── menu/              # Menu page
│   │   ├── order/             # Order page
│   │   ├── vibe/              # Vibe/Atmosphere page
│   │   └── visit/             # Visit info page
│   ├── components/            # Reusable React components
│   │   ├── Navbar.tsx         # Navigation bar
│   │   ├── Footer.tsx         # Footer component
│   │   ├── KolamLogo.tsx      # Logo component
│   │   ├── CustomCursor.tsx   # Custom cursor effect
│   │   ├── PageLoader.tsx     # Loading animation
│   │   └── LoadMoreButton.tsx # Load more button
│   ├── data/                  # Static data files
│   │   ├── home.ts           # Home page content
│   │   ├── menu.ts           # Menu data
│   │   ├── about.ts          # About page content
│   │   └── vibe.ts           # Vibe/atmosphere content
│   └── globals.css            # Global styles
├── public/                    # Static assets
│   └── images/               # Image files
├── next.config.ts            # Next.js configuration
├── tsconfig.json             # TypeScript configuration
├── postcss.config.mjs        # PostCSS configuration
├── eslint.config.mjs         # ESLint configuration
└── pnpm-workspace.yaml       # pnpm workspace config
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.17+ or later
- **pnpm** 8+ (or npm/yarn/bun as alternative)

### Installation

1. **Clone and navigate to the project:**
```bash
cd cafe_bengaluru
```

2. **Install dependencies:**
```bash
pnpm install
# or
npm install
# or
yarn install
```

3. **Run the development server:**
```bash
pnpm dev
# or
npm run dev
```

4. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000) to see the cafe website

The app will automatically reload as you make changes — just save and refresh!

---

## 📄 Available Pages

| Page | Route | Description |
|------|-------|---|
| **Home** | `/` | Landing page with featured content |
| **About** | `/about` | Cafe story and background |
| **Menu** | `/menu` | Complete menu with offerings |
| **Vibe** | `/vibe` | Atmosphere and ambiance showcase |
| **Visit** | `/visit` | Location and visit information |
| **Contact** | `/contact` | Contact form and information |
| **Order** | `/order` | Online ordering interface |

---

## 📦 Available Scripts

```bash
# Development server with hot reload
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Run ESLint
pnpm lint

# Type checking
pnpm type-check
```

---

## 🎨 Key Components

### CustomCursor
Provides a unique, interactive cursor experience throughout the site.

### Navbar
Responsive navigation with smooth transitions and active state indicators.

### Footer
Contains links, information, and additional resources.

### PageLoader
Smooth loading animation that displays during page transitions.

### KolamLogo
Custom logo component representing the cafe brand.

---

## 📱 Responsive Design

The website is fully responsive and optimized for:
- 📱 Mobile devices (320px and up)
- 📱 Tablets (768px and up)
- 💻 Desktops (1024px and up)
- 🖥️ Large screens (1440px and up)

---

## ⚙️ Configuration

### Next.js Configuration
See [next.config.ts](next.config.ts) for build and optimization settings.

### TypeScript
Configured in [tsconfig.json](tsconfig.json) for strict type checking.

### Styling
Uses Tailwind CSS for utility-first styling with PostCSS processing.

### Code Quality
ESLint configured in [eslint.config.mjs](eslint.config.mjs) to maintain code standards.

---

## 🚀 Deployment

### Vercel (Recommended)
The easiest way to deploy your Next.js app:

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy

[View Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying)

### Other Platforms
- **Netlify** — Supports Next.js deployments
- **Docker** — Containerize and deploy anywhere
- **Self-hosted** — Full control with your own server

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs) — Features and API reference
- [React Documentation](https://react.dev) — Component patterns
- [Tailwind CSS](https://tailwindcss.com/docs) — Styling guide
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) — Type system

---

## 📝 Development Notes

- Use TypeScript for all new components — strict typing ensures fewer bugs
- Follow the existing component structure for consistency
- Data is organized in `src/data/` for easy content updates
- Page-specific components are colocated with their pages for clarity
- Global styles are in `src/app/globals.css`

---

## 🤝 Contributing

Contributions are welcome! Please feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is proprietary software for Cafe Bengaluru.

---

## 📞 Support & Contact

For questions, feedback, or support, please contact:
- **Email** — info@cafebengaluru.com
- **Website** — [www.cafebengaluru.com](https://cafebengaluru.com)
- **Social Media** — Follow us on social platforms

---

**Made with ☕ and ❤️ for Cafe Bengaluru**
