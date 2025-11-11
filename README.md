# ARIS Homepage

High-performance, multilingual website with SEO optimization and CMS capabilities.

## 🚀 Features

- **⚡ Performance**: Built with Next.js 15 App Router for optimal speed and Core Web Vitals
- **🌍 Multilingual**: Full internationalization support with next-intl (English & Vietnamese)
- **📝 CMS**: Integrated Sanity CMS for blog and news management
- **🎯 SEO Optimized**: Built-in SEO with metadata, sitemap, robots.txt, and Open Graph images
- **🎨 Modern Design**: Beautiful UI with Tailwind CSS and responsive design
- **🔒 Type Safe**: Full TypeScript support for better development experience

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Sanity
- **i18n**: next-intl
- **Git**: Git LFS for large file management

## 📦 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git with Git LFS installed

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Vuongsinguyen/ARIS-Homepage.git
cd ARIS-Homepage
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your Sanity credentials:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`: Your Sanity project ID
- `NEXT_PUBLIC_SANITY_DATASET`: Your dataset name (usually "production")
- `SANITY_API_TOKEN`: Your Sanity API token (for write operations)

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Setting Up Sanity Studio

1. Create a Sanity account at [sanity.io](https://www.sanity.io/)

2. Initialize a new Sanity project:
```bash
npx sanity init
```

3. Update your `.env.local` with the project ID and dataset

4. The Sanity Studio is configured in `sanity.config.ts` with the following content types:
   - **Blog Posts**: Multilingual blog content
   - **Authors**: Author profiles
   - **Categories**: Content categories
   - **Block Content**: Rich text content with images

5. You can manage content directly through Sanity's web interface

## 🌐 Internationalization

The site supports multiple languages out of the box:

- English (`/en`)
- Vietnamese (`/vi`)

Translation files are located in:
- `messages/en.json`
- `messages/vi.json`

To add a new language:
1. Create a new translation file in `messages/`
2. Update `middleware.ts` to include the new locale
3. Update `i18n.ts` if needed

## 📝 Content Management

### Creating Blog Posts

1. Access your Sanity Studio (via sanity.io dashboard)
2. Navigate to "Blog Post"
3. Fill in the multilingual fields (English & Vietnamese)
4. Add images, categories, and author information
5. Publish your post

### Blog Structure

- Blog listing page: `/[locale]/blog`
- Individual posts: `/[locale]/blog/[slug]`

## 🎯 SEO Features

- **Metadata**: Comprehensive meta tags for each page
- **Sitemap**: Auto-generated sitemap at `/sitemap.xml`
- **Robots.txt**: Configured at `/robots.txt`
- **Open Graph**: Social media preview images
- **Structured Data**: Ready for schema.org markup
- **Performance**: Optimized images with AVIF/WebP support

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Self-hosted

## 📊 Performance Optimizations

- Image optimization with Next.js Image component
- Automatic code splitting
- Route prefetching
- Static generation where possible
- Dynamic imports for heavy components
- Compressed assets with Brotli/Gzip

## 🔧 Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm start`: Start production server
- `npm run lint`: Run ESLint

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the ISC License.

## 👥 Authors

- ARIS Team

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Sanity team for the headless CMS
- Vercel for hosting and deployment platform
