# Blog Images Setup

This directory contains optimized images for blog posts and news articles.

## 📁 **Directory Structure**
```
public/images/blog/
├── blog-1.jpg      # First blog post image
├── blog-2.jpg      # Second blog post image
├── blog-3.jpg      # Third blog post image
└── ...            # Additional images
```

## 🚀 **Performance Optimizations**

### Next.js Image Component Features:
- ✅ **Automatic Optimization**: Images are automatically converted to WebP/AVIF
- ✅ **Responsive Images**: Multiple sizes generated automatically
- ✅ **Lazy Loading**: Images load only when entering viewport
- ✅ **Priority Loading**: Above-the-fold images load first
- ✅ **Blur Placeholder**: Smooth loading experience

### Image Specifications:
- **Format**: JPG, PNG, WebP (automatically optimized)
- **Size**: 1200x600px recommended (2:1 aspect ratio)
- **Quality**: 80-90% quality for web
- **File Size**: Under 500KB per image

## 📝 **Adding New Images**

1. **Save images** in this directory: `public/images/blog/`
2. **Name format**: `blog-{number}.jpg` (e.g., `blog-1.jpg`, `blog-2.jpg`)
3. **Update API routes** to reference new images
4. **Test loading** on different devices

## 🔧 **Image Optimization Tips**

### For Best Performance:
```jsx
<Image
  src="/images/blog/blog-1.jpg"
  alt="Blog post title"
  width={600}
  height={300}
  priority={true} // For above-the-fold images
  placeholder="blur"
/>
```

### CDN Integration (Production):
- Use services like Cloudflare Images, Vercel Blob, or AWS CloudFront
- Automatic format conversion and resizing
- Global CDN distribution

### Local Development:
- Images served from `public/` folder
- Hot reload works automatically
- No build step required

## 📊 **Performance Metrics**

Monitor these metrics:
- **Largest Contentful Paint (LCP)**: < 2.5s
- **First Contentful Paint (FCP)**: < 1.8s
- **Cumulative Layout Shift (CLS)**: < 0.1

## 🛠 **Troubleshooting**

### Common Issues:
1. **Images not loading**: Check file paths and names
2. **Slow loading**: Enable compression, use WebP format
3. **Layout shift**: Set explicit width/height or use `fill` prop

### Debug Commands:
```bash
# Check image file sizes
ls -lh public/images/blog/

# Test image URLs
curl -I http://localhost:3000/images/blog/blog-1.jpg
```