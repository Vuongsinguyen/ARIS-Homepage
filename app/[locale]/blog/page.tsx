'use client';

import {useTranslations} from 'next-intl';
import Link from 'next/link';
import {useParams} from 'next/navigation';
import {useState, useEffect} from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function BlogPage() {
  const params = useParams();
  const locale = params.locale as string;
  const t = useTranslations('nav');

  const [posts, setPosts] = useState<any[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [sortBy, setSortBy] = useState<'date' | 'likes'>('date');
  const [loading, setLoading] = useState(true);

  // Get all unique categories and tech tags
  const allCategories = Array.from(new Set(posts.flatMap(post => post.categories || [])));
  const allTechTags = Array.from(new Set(posts.flatMap(post => post.tech || [])));

  // Filter and sort posts
  const filteredAndSortedPosts = posts
    .filter(post => {
      // Category filter
      if (selectedCategories.length > 0 && !selectedCategories.some(cat => post.categories?.includes(cat))) {
        return false;
      }

      // Tech filter
      if (selectedTech.length > 0 && !selectedTech.some(tech => post.tech?.includes(tech))) {
        return false;
      }

      // Date range filter
      if (dateRange.start || dateRange.end) {
        const postDate = new Date(post.publishedAt);
        if (dateRange.start && postDate < new Date(dateRange.start)) return false;
        if (dateRange.end && postDate > new Date(dateRange.end)) return false;
      }

      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'likes') {
        return (b.likes || 0) - (a.likes || 0);
      }
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    });

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const response = await fetch(`/api/blog?locale=${locale}`);
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const postsData = await response.json();
        setPosts(postsData);
      } catch (error) {
        console.error('Error loading posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, [locale]);

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleTech = (tech: string) => {
    setSelectedTech(prev =>
      prev.includes(tech)
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedTech([]);
    setDateRange({ start: '', end: '' });
  };

  const activeFiltersCount = selectedCategories.length + selectedTech.length +
    (dateRange.start || dateRange.end ? 1 : 0);

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {t('blog')}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Explore our latest insights, tutorials, and industry perspectives on technology and innovation
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
                <span className="text-gray-900 dark:text-white font-medium">Blog</span>
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
                  <p className="text-gray-600 dark:text-gray-400 mt-4">Loading blog posts...</p>
                </div>
              ) : (
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Blog Posts - Left Side */}
                  <div className="flex-1">
                    {/* Sort Controls */}
                    <div className="flex items-center justify-between mb-8">
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {sortBy === 'likes' ? 'Most Liked Posts' : 'Recent Posts'}
                      </h2>
                      <div className="flex items-center gap-4">
                        <label className="text-sm text-gray-600 dark:text-gray-400">Sort by:</label>
                        <select
                          value={sortBy}
                          onChange={(e) => setSortBy(e.target.value as 'date' | 'likes')}
                          className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm"
                        >
                          <option value="date">Date</option>
                          <option value="likes">Most Liked</option>
                        </select>
                      </div>
                    </div>

                    {filteredAndSortedPosts.length === 0 ? (
                      <div className="text-center py-12">
                        <p className="text-gray-600 dark:text-gray-400 text-lg">
                          No blog posts found with the selected filters.
                        </p>
                        <button
                          onClick={clearAllFilters}
                          className="mt-4 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                        >
                          Clear all filters
                        </button>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {filteredAndSortedPosts.map((post: any) => (
                          <article
                            key={post.slug}
                            className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-colors hover:shadow-lg"
                          >
                            {/* Featured Image */}
                            {post.image && (
                              <div className="mb-4 -m-6 rounded-t-lg overflow-hidden">
                                <Image
                                  src={post.image}
                                  alt={post.imageAlt || `${post.title} - Featured Image`}
                                  width={600}
                                  height={300}
                                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                                  priority={filteredAndSortedPosts.indexOf(post) < 3} // Prioritize first 3 images
                                  placeholder="blur"
                                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+IRjWjBqO6O2mhP//Z"
                                />
                              </div>
                            )}

                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span>{post.likes || 0} likes</span>
                              </div>
                              {post.publishedAt && (
                                <time dateTime={post.publishedAt} className="text-sm text-gray-500 dark:text-gray-400">
                                  {new Date(post.publishedAt).toLocaleDateString()}
                                </time>
                              )}
                            </div>

                            <h3 className="text-2xl font-semibold mb-3">
                              <Link
                                href={`/${locale}/blog/${post.slug}`}
                                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                              >
                                {post.title}
                              </Link>
                            </h3>

                            {post.excerpt && (
                              <p className="text-gray-600 dark:text-gray-400 mb-4">
                                {post.excerpt}
                              </p>
                            )}

                            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                              {post.author && (
                                <span>By {post.author}</span>
                              )}
                            </div>

                            {/* Categories */}
                            {post.categories && post.categories.length > 0 && (
                              <div className="flex flex-wrap gap-2 mb-3">
                                {post.categories.map((cat: any, idx: number) => (
                                  <span
                                    key={idx}
                                    className="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                                  >
                                    {cat}
                                  </span>
                                ))}
                              </div>
                            )}

                            {/* Tech Tags */}
                            {post.tech && post.tech.length > 0 && (
                              <div className="flex flex-wrap gap-2">
                                {post.tech.map((tech: any, idx: number) => (
                                  <span
                                    key={idx}
                                    className="text-xs px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full"
                                  >
                                    {tech}
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
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Filters
                          </h3>
                          {activeFiltersCount > 0 && (
                            <button
                              onClick={clearAllFilters}
                              className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                            >
                              Clear all ({activeFiltersCount})
                            </button>
                          )}
                        </div>

                        {/* Date Range Filter */}
                        <div className="mb-6">
                          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                            Date Range
                          </h4>
                          <div className="space-y-3">
                            <div>
                              <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">
                                From
                              </label>
                              <input
                                type="date"
                                value={dateRange.start}
                                onChange={(e) => setDateRange(prev => ({ ...prev, start: e.target.value }))}
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm"
                              />
                            </div>
                            <div>
                              <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">
                                To
                              </label>
                              <input
                                type="date"
                                value={dateRange.end}
                                onChange={(e) => setDateRange(prev => ({ ...prev, end: e.target.value }))}
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Category Filter */}
                        <div className="mb-6">
                          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                            Categories
                          </h4>
                          <div className="space-y-2 max-h-40 overflow-y-auto">
                            {allCategories.map(category => (
                              <button
                                key={category}
                                onClick={() => toggleCategory(category)}
                                className={`w-full text-left px-4 py-2 rounded-lg border transition-colors text-sm ${
                                  selectedCategories.includes(category)
                                    ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200'
                                    : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <span>{category}</span>
                                  <span className="text-xs text-gray-500 dark:text-gray-400">
                                    ({posts.filter(post => post.categories?.includes(category)).length})
                                  </span>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Tech Filter */}
                        <div className="mb-6">
                          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                            Technology
                          </h4>
                          <div className="space-y-2 max-h-40 overflow-y-auto">
                            {allTechTags.map(tech => (
                              <button
                                key={tech}
                                onClick={() => toggleTech(tech)}
                                className={`w-full text-left px-4 py-2 rounded-lg border transition-colors text-sm ${
                                  selectedTech.includes(tech)
                                    ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200'
                                    : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <span>{tech}</span>
                                  <span className="text-xs text-gray-500 dark:text-gray-400">
                                    ({posts.filter(post => post.tech?.includes(tech)).length})
                                  </span>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Filter Summary */}
                      <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Showing {filteredAndSortedPosts.length} of {posts.length} posts
                        </div>
                        {activeFiltersCount > 0 && (
                          <div className="mt-2 text-xs text-gray-500 dark:text-gray-500">
                            {selectedCategories.length > 0 && (
                              <div>Categories: {selectedCategories.join(', ')}</div>
                            )}
                            {selectedTech.length > 0 && (
                              <div>Tech: {selectedTech.join(', ')}</div>
                            )}
                            {(dateRange.start || dateRange.end) && (
                              <div>Date: {dateRange.start || 'Any'} to {dateRange.end || 'Any'}</div>
                            )}
                          </div>
                        )}
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
