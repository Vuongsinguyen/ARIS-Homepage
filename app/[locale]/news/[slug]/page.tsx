import Link from 'next/link';
import {notFound} from 'next/navigation';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {remark} from 'remark';
import html from 'remark-html';
import Navbar from '@/components/Navbar';

async function getNewsArticle(slug: string) {
  const newsDirectory = path.join(process.cwd(), 'content/news');
  const fileNames = fs.readdirSync(newsDirectory);

  const fileName = fileNames.find(file => file.replace('.md', '') === slug || matter(fs.readFileSync(path.join(newsDirectory, file), 'utf8')).data.slug === slug);

  if (!fileName) {
    return null;
  }

  const fullPath = path.join(newsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    _id: fileName.replace('.md', ''),
    title: data.title,
    slug: { current: data.slug },
    publishedAt: data.publishedAt,
    author: data.author,
    categories: data.categories,
    excerpt: data.excerpt,
    content: contentHtml,
  };
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{locale: string; slug: string}>;
}) {
  const {locale, slug} = await params;

  const article = await getNewsArticle(slug);

  if (!article) {
    notFound();
  }

  const title = article.title;
  const body = article.content;

  return (
    <>
      <Navbar />
      <article className="flex min-h-screen flex-col items-center p-6 md:p-12 lg:p-24">
      <div className="max-w-4xl w-full">
        {/* Breadcrumb navigation */}
        <nav className="mb-8 text-sm" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <li>
              <Link href={`/${locale}`} className="hover:text-gray-900 dark:hover:text-gray-100">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href={`/${locale}/news`} className="hover:text-gray-900 dark:hover:text-gray-100">
                News
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 dark:text-gray-100" aria-current="page">
              {title}
            </li>
          </ol>
        </nav>

        {/* Article header */}
        <header className="mb-12">
          {/* H1 - Main article title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance leading-tight">
            {title}
          </h1>

          {/* Article metadata */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 mb-6">
            {article.author && (
              <span className="font-medium">By {article.author}</span>
            )}

            {article.publishedAt && (
              <time dateTime={article.publishedAt} className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {new Date(article.publishedAt).toLocaleDateString(locale, {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            )}
          </div>

          {/* Categories */}
          {article.categories && article.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {article.categories.map((cat: any, idx: number) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full"
                >
                  {cat}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Article content */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          {body && <div dangerouslySetInnerHTML={{ __html: body }} />}
        </div>

        {/* Back to news link */}
        <nav className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <Link
            href={`/${locale}/news`}
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to News
          </Link>
        </nav>
      </div>
    </article>
    </>
  );
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string; slug: string}>;
}) {
  const {slug} = await params;
  const article = await getNewsArticle(slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  const title = article.title;

  return {
    title: title,
    description: `Read ${title} in our news section`,
    openGraph: {
      title: title,
      type: 'article',
      publishedTime: article.publishedAt,
      authors: article.author ? [article.author] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
    },
  };
}