import {getTranslations} from 'next-intl/server';
import Link from 'next/link';
import {headers} from 'next/headers';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Navbar from '@/components/Navbar';

async function getNews() {
  const newsDirectory = path.join(process.cwd(), 'content/news');
  const fileNames = fs.readdirSync(newsDirectory);

  const news = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const fullPath = path.join(newsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        _id: fileName.replace('.md', ''),
        title: data.title,
        slug: { current: data.slug },
        publishedAt: data.publishedAt,
        author: data.author,
        categories: data.categories,
        excerpt: data.excerpt,
        content: content,
      };
    })
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 10);

  return news;
}

export async function generateMetadata() {
  return {
    title: 'News & Updates | ARIS',
    description: 'Stay updated with the latest company news, industry insights, and announcements from ARIS.',
  };
}

export default async function NewsPage() {
  const news = await getNews();
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '/en/news';
  const locale = pathname.split('/')[1] || 'en';

  const t = await getTranslations('nav');

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {t('news')}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Stay updated with the latest company news, industry insights, and announcements
              </p>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors"
              >
                Subscribe to Updates
              </Link>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <nav className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link
                  href={`/${locale}`}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li className="flex items-center">
                <span className="text-gray-400 mx-2">/</span>
                <span className="text-gray-900 dark:text-white font-medium">News</span>
              </li>
            </ol>
          </div>
        </nav>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              {/* News Articles */}
              {news.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    No news articles yet. Create some MD files in content/news/!
                  </p>
                </div>
              ) : (
                <section aria-labelledby="news-heading">
                  <h2 id="news-heading" className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                    Recent Articles
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {news.map((article: any) => (
                      <article
                        key={article._id}
                        className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
                      >
                        <h3 className="text-2xl font-semibold mb-3">
                          <Link
                            href={`/${locale}/news/${article.slug.current}`}
                            className="hover:text-green-600 dark:hover:text-green-400 transition-colors"
                          >
                            {article.title}
                          </Link>
                        </h3>

                        {article.excerpt && (
                          <p className="text-gray-600 dark:text-gray-400 mb-4">
                            {article.excerpt}
                          </p>
                        )}

                        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                          {article.author && (
                            <span>By {article.author}</span>
                          )}
                          {article.publishedAt && (
                            <time dateTime={article.publishedAt}>
                              {new Date(article.publishedAt).toLocaleDateString()}
                            </time>
                          )}
                        </div>

                        {article.categories && article.categories.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {article.categories.map((cat: any, idx: number) => (
                              <span
                                key={idx}
                                className="text-xs px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full"
                              >
                                {cat}
                              </span>
                            ))}
                          </div>
                        )}
                      </article>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </section>

        {/* Back to Home */}
        <section className="py-8 border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Link
                href={`/${locale}`}
                className="inline-flex items-center text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300 transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}