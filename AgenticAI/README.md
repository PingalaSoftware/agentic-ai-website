# Agentic AI Show 2026 Website

A modern, production-ready conference website built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **UI Components**: Custom reusable components with class-variance-authority

## 📁 Project Structure

```
agentic-ai-show/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout with Header and Footer
│   ├── page.tsx             # Home page with all sections
│   └── globals.css          # Global styles and Tailwind imports
├── components/
│   ├── ui/                  # Reusable UI components
│   │   ├── button.tsx       # Button component with variants
│   │   ├── card.tsx         # Card components
│   │   ├── input.tsx        # Input component
│   │   ├── textarea.tsx     # Textarea component
│   │   └── badge.tsx        # Badge component
│   ├── layout/              # Layout components
│   │   ├── header.tsx       # Header with navigation
│   │   └── footer.tsx       # Footer with links and social icons
│   └── sections/            # Page sections
│       ├── hero.tsx         # Hero section
│       ├── conference-overview.tsx  # Conference overview card
│       ├── what-youll-explore.tsx   # Explore categories grid
│       └── contact.tsx      # Contact form section
├── lib/
│   └── utils.ts             # Utility functions (cn helper)
├── types/
│   └── index.ts             # TypeScript type definitions
└── data/
    └── constants.ts         # Data constants (links, categories, etc.)
```

## 🎨 Design Features

- **Dark Theme**: Modern navy/dark color scheme
- **Responsive**: Mobile-first design with breakpoints
- **Smooth Animations**: Fade-in and slide-in effects
- **Accessibility**: ARIA labels, keyboard navigation
- **Performance**: Optimized images, lazy loading
- **SEO**: Meta tags, semantic HTML

## 🛠️ Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Color Palette

- **Primary**: Blue (#3B82F6) - Accent color
- **Background**: Navy (#0A192F, #1a2332) - Dark theme
- **Secondary**: White/transparent backgrounds with glass effect
- **Text**: White (#ffffff) - Primary text
- **Muted**: Gray (#64748b, #94a3b8) - Secondary text

## 🧩 Components

### Button Component
Multiple variants: `default`, `primary`, `secondary`, `outline`, `ghost`, `link`
Sizes: `sm`, `default`, `lg`, `icon`

```tsx
<Button variant="primary" size="lg">Register Now</Button>
```

### Card Component
Flexible card components with header, content, and footer sections.

```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    Content goes here
  </CardContent>
</Card>
```

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: 1024px - 1280px
- Large: > 1280px

## 🚀 Deployment

### GitHub Pages
The site is set up to deploy to GitHub Pages via Actions:

1. **Enable GitHub Pages** in repo **Settings → Pages**:
   - Source: **GitHub Actions** (not "Deploy from a branch").
2. **Push to `main`**: Changes under `AgenticAI/` trigger the workflow; the static export is built and deployed.
3. **Custom domain** (optional): `AgenticAI/public/CNAME` is set to `agenticaishow.in`. In **Settings → Pages** add the same custom domain and configure DNS (CNAME record pointing to `<user>.github.io`).

Workflow file: `.github/workflows/deploy-agenticai.yml`.

### Vercel
```bash
vercel deploy
```

### Docker
```bash
docker build -t agentic-ai-show .
docker run -p 3000:3000 agentic-ai-show
```

### Static export (local)
```bash
npm run build
# Static site output in `out/`
```

## 🔧 Configuration

### Tailwind CSS
Custom theme extensions in `tailwind.config.ts`:
- Custom colors (navy, dark)
- Custom animations (fade-in, slide-in)
- Custom spacing

### TypeScript
Strict mode enabled with path aliases:
- `@/*` maps to project root

## 📄 Sections

1. **Hero Section**: Main title, tagline, event details, CTAs
2. **Conference Overview**: AI visualization, checklist, ticket CTA
3. **What You'll Explore**: 6 category cards with icons
4. **Contact Section**: Contact form with validation

## 🎯 Key Features

- ✅ Pixel-accurate design implementation
- ✅ Fully responsive across all devices
- ✅ Smooth scroll animations
- ✅ Mobile hamburger menu
- ✅ Form validation
- ✅ SEO optimized
- ✅ Accessibility compliant (WCAG 2.1)
- ✅ Type-safe with TypeScript
- ✅ Reusable component architecture
- ✅ Custom scrollbar styling
- ✅ Glass morphism effects
- ✅ Hover animations on cards

## 📝 License

Copyright © 2025 Agentic AI Show. All Rights Reserved.
Design by @Sanmeet_Bamane

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📧 Contact

For questions or support, please use the contact form on the website.
