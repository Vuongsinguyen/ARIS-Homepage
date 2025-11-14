import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  author: string;
  categories: string[];
  content: string;
  contentHtml: string;
  locale: string;
}

export interface LocalizedBlogPost {
  slug: string;
  title: {
    en: string;
    vi: string;
    ja: string;
  };
  excerpt: {
    en: string;
    vi: string;
    ja: string;
  };
  publishedAt: string;
  author: string;
  categories: string[];
  content: {
    en: string;
    vi: string;
    ja: string;
  };
  availableLocales: string[];
}

// Get all blog posts for a specific locale
export async function getBlogPosts(locale: string = 'en'): Promise<BlogPost[]> {
  const posts: BlogPost[] = [];
  const contentDir = path.join(process.cwd(), 'content/news', locale);

  try {
    const files = fs.readdirSync(contentDir)
      .filter(file => file.endsWith('.md'))
      .sort((a, b) => {
        // Sort by publishedAt date (newest first)
        const aPath = path.join(contentDir, a);
        const bPath = path.join(contentDir, b);
        const aContent = fs.readFileSync(aPath, 'utf8');
        const bContent = fs.readFileSync(bPath, 'utf8');

        const aFrontmatter = matter(aContent).data;
        const bFrontmatter = matter(bContent).data;

        return new Date(bFrontmatter.publishedAt).getTime() - new Date(aFrontmatter.publishedAt).getTime();
      });

    for (const file of files) {
      const filePath = path.join(contentDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContent);
      
      // Process markdown to HTML
      const processedContent = await remark()
        .use(remarkHtml)
        .process(content);
      const contentHtml = processedContent.toString();

      posts.push({
        slug: data.slug || file.replace('.md', ''),
        title: data.title || 'Untitled',
        excerpt: data.excerpt || '',
        publishedAt: data.publishedAt || new Date().toISOString(),
        author: data.author || 'ARIS Team',
        categories: data.categories || [],
        content: content,
        contentHtml: contentHtml,
        locale: locale
      });
    }
  } catch (error) {
    console.warn(`No blog posts found for locale: ${locale}`);
  }

  return posts;
}

// Get a single blog post by slug and locale
export async function getBlogPost(slug: string, locale: string = 'en'): Promise<BlogPost | null> {
  try {
    const posts = await getBlogPosts(locale);
    return posts.find(post => post.slug === slug) || null;
  } catch (error) {
    console.warn(`Blog post not found: ${slug} (${locale})`);
    return null;
  }
}

// Get localized blog post (with all language versions)
export async function getLocalizedBlogPost(slug: string): Promise<LocalizedBlogPost | null> {
  const locales = ['en', 'vi', 'ja'];
  const localizedContent: any = {
    slug,
    title: {},
    excerpt: {},
    content: {},
    availableLocales: []
  };

  let basePost: BlogPost | null = null;

  for (const locale of locales) {
    const post = await getBlogPost(slug, locale);
    if (post) {
      localizedContent.availableLocales.push(locale);
      localizedContent.title[locale] = post.title;
      localizedContent.excerpt[locale] = post.excerpt;
      localizedContent.content[locale] = post.content;

      // Use first available post for shared metadata
      if (!basePost) {
        basePost = post;
        localizedContent.publishedAt = post.publishedAt;
        localizedContent.author = post.author;
        localizedContent.categories = post.categories;
      }
    }
  }

  return basePost ? localizedContent : null;
}

// Get all localized blog posts (for blog listing)
export async function getAllLocalizedBlogPosts(): Promise<LocalizedBlogPost[]> {
  const allPosts = new Map<string, LocalizedBlogPost>();

  // Get all English posts as base
  const enPosts = await getBlogPosts('en');

  for (const enPost of enPosts) {
    const localizedPost = await getLocalizedBlogPost(enPost.slug);
    if (localizedPost) {
      allPosts.set(enPost.slug, localizedPost);
    }
  }

  return Array.from(allPosts.values()).sort((a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}