# Quick Reference - Common Tasks

## 🚀 Development

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 📝 Adding a New Page

Create a new file in `app/[locale]/your-page/page.tsx`:

```tsx
import {useTranslations} from 'next-intl';

export default function YourPage() {
  const t = useTranslations('yourSection');
  
  return (
    <main className="p-24">
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </main>
  );
}
```

Add translations to `messages/en.json` and `messages/vi.json`:

```json
{
  "yourSection": {
    "title": "Your Title",
    "description": "Your description"
  }
}
```

## 🌍 Add New Language

1. Create `messages/fr.json` (for French example)
2. Update `middleware.ts`:
```typescript
locales: ['en', 'vi', 'fr']
```

## 📝 Sanity Content Type

Create new schema in `sanity/schemas/yourType.ts`:

```typescript
import { defineType } from 'sanity'

export default defineType({
  name: 'yourType',
  title: 'Your Type',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
  ],
})
```

Add to `sanity/schemas/index.ts`:
```typescript
import yourType from './yourType'
export const schemaTypes = [..., yourType]
```

## 🎨 Tailwind Custom Colors

Edit `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
    },
  },
}
```

## 🔧 Environment Variables

```env
# .env.local
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=skxxx
```

## 📱 Responsive Design

```tsx
<div className="
  p-4 md:p-8 lg:p-12
  text-sm md:text-base lg:text-lg
">
  Responsive content
</div>
```

## 🖼️ Images

```tsx
import Image from 'next/image'

<Image
  src="/image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority // for above-fold images
/>
```

## 🔗 Links

```tsx
import Link from 'next/link'

<Link href="/about">About Us</Link>

// Localized
<Link href="/vi/about">Vietnamese About</Link>
```

## 📊 Fetch Sanity Data

```tsx
import {client} from '@/lib/sanity'

async function getData() {
  const query = `*[_type == "post"] | order(publishedAt desc)`
  return await client.fetch(query)
}
```

## 🎯 SEO Metadata

```tsx
// In any page.tsx
export const metadata = {
  title: 'Page Title',
  description: 'Page description',
}
```

## 🌐 Access Locale in Component

```tsx
import {useLocale} from 'next-intl';

export default function Component() {
  const locale = useLocale();
  // 'en' or 'vi'
}
```

## 🎨 Dark Mode Classes

```tsx
<div className="
  bg-white dark:bg-gray-900
  text-black dark:text-white
">
  Auto dark mode
</div>
```

## 📦 Install New Package

```bash
npm install package-name

# Dev dependency
npm install -D package-name
```

## 🔥 Clear Cache

```bash
rm -rf .next
npm run build
```

## 📝 Git Commands

```bash
# Check status
git status

# Add files
git add .

# Commit
git commit -m "Your message"

# Push
git push

# Pull latest
git pull
```

## 🚀 Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

## 📊 Performance Check

```bash
# Build and analyze
npm run build

# Check bundle size
npx @next/bundle-analyzer
```

## 🐛 Debug

```tsx
// Add console log
console.log('Debug:', data)

// Use React DevTools browser extension
```

---

**Need more help? Check SETUP.md and README.md**
