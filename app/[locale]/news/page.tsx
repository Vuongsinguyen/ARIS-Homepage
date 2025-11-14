'use client';

import {useTranslations} from 'next-intl';
import Link from 'next/link';
import {useParams} from 'next/navigation';
import {useState, useEffect} from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

async function getNews(locale: string) {
  // This function will be called from the client side
  // For now, we'll use a simpler approach and define the news data directly
  // In a real app, you might want to create an API route for this
  const news = [
    {
      _id: 'digital-transformation-trends',
      title: 'Digital Transformation Trends 2025',
      slug: { current: 'digital-transformation-trends' },
      publishedAt: '2024-12-15',
      author: 'ARIS Technology Team',
      categories: ['Technology', 'Digital Transformation', 'Innovation'],
      excerpt: 'Explore the latest trends shaping digital transformation in businesses worldwide.',
      image: '/images/blog/blog-1.jpg',
      imageAlt: 'Digital Transformation Trends 2025 - Featured Image',
    },
    {
      _id: 'mastering-react-development',
      title: 'Mastering React Development: A Comprehensive Guide',
      slug: { current: 'mastering-react-development' },
      publishedAt: '2024-11-14',
      author: 'ARIS Team',
      categories: ['React', 'JavaScript', 'Web Development', 'Frontend'],
      excerpt: 'Master the fundamentals and advanced concepts of React development with this comprehensive guide covering hooks, state management, performance optimization, and best practices.',
      image: '/images/blog/blog-2.jpg',
      imageAlt: 'Mastering React Development - Featured Image',
    },
    {
      _id: 'sample-news-article',
      title: 'Sample News Article',
      slug: { current: 'sample-news-article' },
      publishedAt: '2023-10-01',
      author: 'ARIS Team',
      categories: ['Product Updates', 'Tech Insights'],
      excerpt: 'This is a sample news article to demonstrate the MD file structure.',
      image: '/images/blog/blog-3.jpg',
      imageAlt: 'Sample News Article - Featured Image',
    },
  ];

  return news.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export default function NewsPage() {
  const params = useParams();
  const locale = params.locale as string;
  const t = useTranslations('nav');

  const [news, setNews] = useState<any[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  // Get all unique categories
  const allCategories = Array.from(new Set(news.flatMap(article => article.categories || [])));

  // Filter news based on selected filters
  const filteredNews = news.filter(article => {
    if (selectedFilters.length === 0) return true;
    return selectedFilters.some(filter => article.categories?.includes(filter));
  });

  useEffect(() => {
    const loadNews = async () => {
      try {
        const response = await fetch(`/api/news?locale=${locale}`);
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const newsData = await response.json();
        setNews(newsData);
      } catch (error) {
        console.error('Error loading news:', error);
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, [locale]);

  const toggleFilter = (category: string) => {
    setSelectedFilters(prev =>
      prev.includes(category)
        ? prev.filter(f => f !== category)
        : [...prev, category]
    );
  };

  const clearFilters = () => {
    setSelectedFilters([]);
  };

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900 py-16">
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
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
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
            <div className="max-w-7xl mx-auto">
              {loading ? (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                  <p className="text-gray-600 dark:text-gray-400 mt-4">Loading news...</p>
                </div>
              ) : (
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* News Articles - Left Side */}
                  <div className="flex-1">
                    <h2 id="news-heading" className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                      Latest News
                    </h2>

                    {filteredNews.length === 0 ? (
                      <div className="text-center py-12">
                        <p className="text-gray-600 dark:text-gray-400 text-lg">
                          No news articles found with the selected filters.
                        </p>
                        <button
                          onClick={clearFilters}
                          className="mt-4 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                        >
                          Clear filters
                        </button>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {filteredNews.map((article: any) => (
                          <article
                            key={article._id}
                            className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-colors hover:shadow-lg"
                          >
                            {/* Featured Image */}
                            {article.image && (
                              <div className="mb-4 -m-6 rounded-t-lg overflow-hidden">
                                <Image
                                  src={article.image}
                                  alt={article.imageAlt || `${article.title} - Featured Image`}
                                  width={600}
                                  height={300}
                                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                                  priority={filteredNews.indexOf(article) < 3} // Prioritize first 3 images
                                  placeholder="blur"
                                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+IRjWjBqO6O2mhP//Z"
                                />
                              </div>
                            )}

                            <h3 className="text-2xl font-semibold mb-3">
                              <Link
                                href={`/${locale}/news/${article.slug.current}`}
                                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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
                                    className="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                                  >
                                    {cat}
                                  </span>
                                ))}
                              </div>
                            )}
                          </article>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Filter Sidebar - Right Side */}
                  <div className="lg:w-80">
                    <div className="sticky top-8">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        Filter by Category
                      </h3>

                      {/* Active Filters */}
                      {selectedFilters.length > 0 && (
                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              Active Filters ({selectedFilters.length})
                            </span>
                            <button
                              onClick={clearFilters}
                              className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                            >
                              Clear all
                            </button>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {selectedFilters.map(category => (
                              <span
                                key={category}
                                className="inline-flex items-center px-3 py-1 bg-blue-600 text-white text-sm rounded-full"
                              >
                                {category}
                                <button
                                  onClick={() => toggleFilter(category)}
                                  className="ml-2 hover:bg-blue-700 rounded-full p-0.5"
                                >
                                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                                </button>
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* All Categories */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                          All Categories
                        </h4>
                        {allCategories.map(category => (
                          <button
                            key={category}
                            onClick={() => toggleFilter(category)}
                            className={`w-full text-left px-4 py-3 rounded-lg border transition-colors ${
                              selectedFilters.includes(category)
                                ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200'
                                : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-medium">{category}</span>
                              <span className="text-sm text-gray-500 dark:text-gray-400">
                                ({news.filter(article => article.categories?.includes(category)).length})
                              </span>
                            </div>
                          </button>
                        ))}
                      </div>

                      {/* Filter Summary */}
                      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Showing {filteredNews.length} of {news.length} articles
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
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