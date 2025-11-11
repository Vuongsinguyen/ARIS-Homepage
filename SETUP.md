# ARIS Homepage - Setup & Configuration Guide

## ✅ What Has Been Installed

### 1. Git Tools
- **Git LFS** (Large File Storage) - For managing large files efficiently
- Initialized in the repository

### 2. Core Framework
- **Next.js 16.0.1** - Latest version with App Router and Turbopack
- **React 19** - Latest React with automatic runtime
- **TypeScript** - For type-safe development

### 3. Styling
- **Tailwind CSS v4** - With @tailwindcss/postcss for Next.js 16 compatibility
- **PostCSS** - For CSS processing
- **Autoprefixer** - For browser compatibility

### 4. Internationalization (i18n)
- **next-intl** - For multilingual support
- Configured languages:
  - English (en)
  - Vietnamese (vi)
- Translation files in `messages/` directory

### 5. CMS (Content Management System)
- **Sanity CMS** - Headless CMS for blog and news
- **@sanity/client** - Sanity client for data fetching
- **@sanity/image-url** - Image URL builder
- **next-sanity** - Next.js integration
- **@sanity/vision** - Query tool for Sanity Studio

### 6. SEO Features
- Auto-generated sitemap (`/sitemap.xml`)
- Robots.txt configuration
- Open Graph images
- Comprehensive metadata setup
- Structured data ready

## 📁 Project Structure

```
ARIS-Homepage/
├── app/
│   ├── [locale]/           # Internationalized routes
│   │   ├── layout.tsx      # Root layout with i18n
│   │   ├── page.tsx        # Home page
│   │   └── blog/           # Blog pages
│   │       └── page.tsx    # Blog listing
│   ├── api/
│   │   └── posts/          # API endpoints
│   │       └── route.ts    # Posts API
│   ├── globals.css         # Global styles
│   ├── sitemap.ts          # Sitemap generator
│   ├── robots.ts           # Robots.txt generator
│   └── opengraph-image.tsx # OG image generator
├── lib/
│   └── sanity.ts           # Sanity client configuration
├── messages/               # Translation files
│   ├── en.json            # English translations
│   └── vi.json            # Vietnamese translations
├── sanity/
│   └── schemas/           # Sanity content schemas
│       ├── index.ts       # Schema exports
│       ├── post.ts        # Blog post schema
│       ├── author.ts      # Author schema
│       ├── category.ts    # Category schema
│       └── blockContent.ts # Rich text schema
├── middleware.ts          # i18n middleware
├── i18n.ts               # i18n configuration
├── next.config.js        # Next.js configuration
├── sanity.config.ts      # Sanity Studio config
├── sanity.cli.ts         # Sanity CLI config
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript config
└── package.json          # Dependencies

```

## 🚀 Quick Start

### 1. Install Dependencies (Already Done)
```bash
npm install
```

### 2. Set Up Environment Variables

Create `.env.local` file:
```bash
cp .env.local.example .env.local
```

Then edit `.env.local` and add your Sanity credentials:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token
```

### 3. Create Sanity Account & Project

1. Visit [sanity.io](https://www.sanity.io/) and create an account
2. Create a new project
3. Copy the Project ID to your `.env.local`
4. Generate an API token in project settings
5. Update `.env.local` with your credentials

### 4. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) or [http://localhost:3000/en](http://localhost:3000/en)

### 5. Access Sanity Studio

Go to [Sanity.io Dashboard](https://www.sanity.io/manage) to manage your content.

## 🌐 Available Routes

- `/` - Redirects to `/en` (default locale)
- `/en` - English homepage
- `/vi` - Vietnamese homepage
- `/en/blog` - English blog listing
- `/vi/blog` - Vietnamese blog listing
- `/api/posts` - Posts API endpoint
- `/sitemap.xml` - Site sitemap
- `/robots.txt` - Robots file

## 📝 Content Types in Sanity

### Blog Post
- Title (English & Vietnamese)
- Slug
- Author (reference)
- Main Image
- Categories (references)
- Published Date
- Body (English & Vietnamese rich text)

### Author
- Name
- Slug
- Image
- Bio (English & Vietnamese)

### Category
- Title (English & Vietnamese)
- Slug
- Description (English & Vietnamese)

## 🎨 Styling Guide

The project uses Tailwind CSS. Key features:

- Dark mode support (automatic based on system preference)
- Responsive design (mobile-first)
- Custom color variables in `globals.css`
- Typography with Inter font

## 🔧 Available Scripts

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 📊 Performance Features

✅ Automatic image optimization (AVIF, WebP)
✅ Code splitting
✅ Route prefetching
✅ Turbopack for faster builds
✅ Optimized package imports
✅ Compressed assets
✅ Server-side rendering (SSR)
✅ Static generation where possible

## 🎯 SEO Features

✅ Metadata API for all pages
✅ Automatic sitemap generation
✅ Robots.txt configuration
✅ Open Graph images
✅ Twitter Card support
✅ Canonical URLs
✅ Schema.org markup ready
✅ Google verification tag support

## 🌍 Adding More Languages

1. Create translation file: `messages/[locale].json`
2. Update `middleware.ts`:
   ```typescript
   locales: ['en', 'vi', 'your-new-locale']
   ```
3. Update sitemap in `app/sitemap.ts`

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables
5. Deploy!

### Other Platforms

The project supports:
- Netlify
- AWS Amplify
- Digital Ocean App Platform
- Self-hosted with Node.js

## 📚 Documentation Links

- [Next.js Docs](https://nextjs.org/docs)
- [Sanity Docs](https://www.sanity.io/docs)
- [next-intl Docs](https://next-intl-docs.vercel.app/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

## 🐛 Troubleshooting

### Build Errors

If you see TypeScript errors:
```bash
rm -rf .next
npm run build
```

### Sanity Connection Issues

1. Verify your `.env.local` has correct credentials
2. Check that your Sanity project exists
3. Ensure API token has correct permissions

### i18n Issues

1. Check that translation files exist for all locales
2. Verify middleware.ts includes all locales
3. Ensure messages keys match in all translation files

## 🎉 Next Steps

1. **Set up Sanity**: Create your Sanity account and add credentials to `.env.local`
2. **Create content**: Add blog posts, authors, and categories in Sanity Studio
3. **Customize design**: Modify colors and styling in `tailwind.config.ts` and `globals.css`
4. **Add pages**: Create new pages in `app/[locale]/` directory
5. **Deploy**: Push to GitHub and deploy on Vercel

## 💡 Tips

- The site uses Server Components by default for better performance
- Use `'use client'` directive only when needed for client-side interactivity
- Images are automatically optimized - use Next.js `<Image>` component
- All routes are automatically internationalized via `[locale]` segment

## ⚠️ Known Warnings (Can be ignored)

- Middleware deprecation warning (Next.js 16 migration - will be updated in future releases)
- metadataBase warning (add `metadataBase: 'https://your-domain.com'` to layout.tsx metadata when deploying)

---

**Built with ❤️ using Next.js, Sanity, and Tailwind CSS**
