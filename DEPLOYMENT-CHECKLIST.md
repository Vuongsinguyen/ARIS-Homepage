# 🚀 Pre-Deployment Checklist

Use this checklist before deploying to production.

## ✅ Content & Configuration

- [ ] Set up Sanity CMS account
- [ ] Create `.env.local` with Sanity credentials
- [ ] Create at least one Author in Sanity
- [ ] Create at least one Category in Sanity
- [ ] Create at least 2-3 blog posts in Sanity
- [ ] Test content appears on `/en/blog` and `/vi/blog`

## ✅ Branding & Customization

- [ ] Update site name in `app/[locale]/layout.tsx` metadata
- [ ] Update site description in metadata
- [ ] Customize colors in `tailwind.config.ts`
- [ ] Update translations in `messages/en.json` and `messages/vi.json`
- [ ] Replace homepage content in `app/[locale]/page.tsx`
- [ ] Add your logo/favicon to `public/` folder

## ✅ SEO Setup

- [ ] Update domain in `app/sitemap.ts`
- [ ] Update domain in `app/robots.ts`
- [ ] Add `metadataBase` to layout.tsx (your production URL)
- [ ] Update Open Graph image in `app/opengraph-image.tsx`
- [ ] Add Google verification code (optional)
- [ ] Verify all metadata is correct

## ✅ Environment Variables

Create `.env.production` or add to your hosting platform:

- [ ] `NEXT_PUBLIC_SANITY_PROJECT_ID`
- [ ] `NEXT_PUBLIC_SANITY_DATASET`
- [ ] `SANITY_API_TOKEN` (with read permissions)
- [ ] Any other custom env variables

## ✅ Testing

- [ ] Run `npm run build` successfully
- [ ] Test production build: `npm run build && npm start`
- [ ] Test English version (`/en`)
- [ ] Test Vietnamese version (`/vi`)
- [ ] Test blog listing page
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Test dark mode
- [ ] Run `npm run lint` with no errors
- [ ] Check all images load correctly
- [ ] Test all navigation links work

## ✅ Performance

- [ ] Optimize all images (compress before uploading to Sanity)
- [ ] Remove unused dependencies
- [ ] Check bundle size after build
- [ ] Test Core Web Vitals (use PageSpeed Insights)
- [ ] Ensure no console errors in browser

## ✅ Git & Repository

- [ ] Commit all changes
- [ ] Add `.env.local` to `.gitignore` (already done)
- [ ] Push to GitHub/GitLab
- [ ] Ensure repository is public or accessible to deployment platform

## ✅ Deployment Platform (Vercel)

- [ ] Create Vercel account
- [ ] Import GitHub repository
- [ ] Add environment variables in Vercel dashboard:
  - `NEXT_PUBLIC_SANITY_PROJECT_ID`
  - `NEXT_PUBLIC_SANITY_DATASET`
  - `SANITY_API_TOKEN`
- [ ] Deploy!
- [ ] Test production URL
- [ ] Set up custom domain (optional)

## ✅ Post-Deployment

- [ ] Test all pages on production URL
- [ ] Verify sitemap: `https://your-domain.com/sitemap.xml`
- [ ] Verify robots.txt: `https://your-domain.com/robots.txt`
- [ ] Submit sitemap to Google Search Console
- [ ] Test Open Graph preview (use opengraph.xyz)
- [ ] Set up analytics (Google Analytics, Vercel Analytics, etc.)
- [ ] Monitor performance with Vercel Analytics or similar

## ✅ Optional Enhancements

- [ ] Set up custom domain
- [ ] Add Google Analytics
- [ ] Set up newsletter subscription
- [ ] Add contact form
- [ ] Set up automated backups for Sanity data
- [ ] Configure CDN caching
- [ ] Set up monitoring/alerting
- [ ] Add more languages
- [ ] Create additional content types in Sanity

## 🔧 Common Deployment Issues

### Build Fails
1. Delete `.next` folder
2. Run `npm run build` locally
3. Fix any TypeScript errors
4. Push changes and redeploy

### Environment Variables Not Working
1. Check variable names match exactly
2. Restart deployment after adding variables
3. Ensure variables don't have quotes in Vercel dashboard

### Images Not Loading
1. Verify Sanity domain in `next.config.js` `remotePatterns`
2. Check image URLs are correct
3. Ensure images are published in Sanity

### 404 Errors
1. Check middleware.ts locale configuration
2. Verify file names are correct
3. Clear build cache and redeploy

### Slow Performance
1. Enable image optimization in Sanity
2. Use Next.js `<Image>` component everywhere
3. Check bundle size and remove unused packages
4. Enable Vercel Analytics to identify bottlenecks

## 📊 Performance Targets

Aim for these metrics (check with PageSpeed Insights):

- **Performance**: > 90
- **Accessibility**: > 95
- **Best Practices**: > 95
- **SEO**: > 95

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

## 🎯 Launch Day Checklist

- [ ] Final production build test
- [ ] All content reviewed and published
- [ ] Analytics tracking verified
- [ ] Social media sharing working
- [ ] Error monitoring setup
- [ ] Team notified of launch
- [ ] Announce on social media! 🎉

---

## 🚀 Ready to Deploy?

Once you've checked all the boxes above, you're ready to deploy!

### Quick Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Or deploy to production
vercel --prod
```

---

**Good luck with your launch! 🚀**
