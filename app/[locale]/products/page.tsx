'use client';

import {useTranslations} from 'next-intl';
import Link from 'next/link';
import {useParams} from 'next/navigation';
import {useState, useEffect} from 'react';
import Navbar from '@/components/Navbar';

export default function ProductsPage() {
  const params = useParams();
  const locale = params.locale as string;
  const t = useTranslations('nav');

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  // Product data
  const products = [
    {
      id: 'aris-platform',
      title: 'ARIS Platform',
      description: 'A comprehensive enterprise platform that integrates all your business applications into a unified, intelligent system. Streamline operations, improve collaboration, and drive digital transformation across your organization.',
      icon: '🏢',
      categories: ['Enterprise', 'Integration', 'Analytics'],
      color: 'blue'
    },
    {
      id: 'aris-analytics',
      title: 'ARIS Analytics',
      description: 'Powerful business intelligence and analytics platform that transforms your data into actionable insights. Create stunning dashboards, generate comprehensive reports, and make data-driven decisions with confidence.',
      icon: '📊',
      categories: ['BI Tools', 'Dashboards', 'Reporting'],
      color: 'green'
    },
    {
      id: 'aris-mobile',
      title: 'ARIS Mobile Suite',
      description: 'Complete mobile application development platform with cross-platform capabilities. Build native-quality mobile apps for iOS and Android with a single codebase.',
      icon: '📱',
      categories: ['Mobile', 'Cross-platform', 'Development'],
      color: 'purple'
    },
    {
      id: 'aris-cloud',
      title: 'ARIS Cloud Services',
      description: 'Scalable cloud infrastructure and services designed for modern businesses. Deploy, manage, and scale your applications with enterprise-grade security and reliability.',
      icon: '☁️',
      categories: ['Cloud', 'Infrastructure', 'Security'],
      color: 'cyan'
    },
    {
      id: 'aris-ai',
      title: 'ARIS AI Solutions',
      description: 'Artificial Intelligence and Machine Learning solutions to automate processes, predict trends, and enhance decision-making capabilities across your organization.',
      icon: '🤖',
      categories: ['AI', 'Machine Learning', 'Automation'],
      color: 'orange'
    },
    {
      id: 'aris-security',
      title: 'ARIS Security Suite',
      description: 'Comprehensive cybersecurity platform protecting your digital assets with advanced threat detection, encryption, and compliance management tools.',
      icon: '🔒',
      categories: ['Security', 'Compliance', 'Encryption'],
      color: 'red'
    }
  ];

  // Get all unique categories
  const allCategories = Array.from(new Set(products.flatMap(product => product.categories)));

  // Filter products based on search and selected filters
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.categories.some(cat => cat.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesFilters = selectedFilters.length === 0 ||
                          selectedFilters.some(filter => product.categories.includes(filter));

    return matchesSearch && matchesFilters;
  });

  const toggleFilter = (category: string) => {
    setSelectedFilters(prev =>
      prev.includes(category)
        ? prev.filter(f => f !== category)
        : [...prev, category]
    );
  };

  const clearFilters = () => {
    setSelectedFilters([]);
    setSearchQuery('');
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
                {t('products')}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Discover our innovative product offerings designed to transform your business operations
              </p>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Request Demo
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
                <span className="text-gray-900 dark:text-white font-medium">Products</span>
              </li>
            </ol>
          </div>
        </nav>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">

              {/* Search and Filters */}
              <div className="mb-8">
                {/* Search Bar */}
                <div className="relative mb-6">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <button
                    onClick={clearFilters}
                    className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    All Products
                  </button>
                  {allCategories.map(category => (
                    <button
                      key={category}
                      onClick={() => toggleFilter(category)}
                      className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                        selectedFilters.includes(category)
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                {/* Active Filters Display */}
                {(searchQuery || selectedFilters.length > 0) && (
                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>
                      {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
                      {searchQuery && ` for "${searchQuery}"`}
                      {selectedFilters.length > 0 && ` in ${selectedFilters.join(', ')}`}
                    </span>
                    {(searchQuery || selectedFilters.length > 0) && (
                      <button
                        onClick={clearFilters}
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                      >
                        Clear all
                      </button>
                    )}
                  </div>
                )}
              </div>

              {/* Products Grid */}
              <section aria-labelledby="products-heading">
                <h2 id="products-heading" className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                  Our Products
                </h2>

                {filteredProducts.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="h-8 w-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No products found</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Try adjusting your search or filters to find what you're looking for.
                    </p>
                    <button
                      onClick={clearFilters}
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                    >
                      Clear filters
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product) => (
                      <article
                        key={product.id}
                        className="p-8 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-colors hover:shadow-lg"
                      >
                        <div className={`w-16 h-16 bg-${product.color}-100 dark:bg-${product.color}-900 rounded-lg flex items-center justify-center mb-6`}>
                          <span className="text-3xl">{product.icon}</span>
                        </div>
                        <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{product.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                          {product.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {product.categories.map((category, index) => (
                            <span
                              key={index}
                              className={`text-xs px-3 py-1 bg-${product.color}-100 dark:bg-${product.color}-900 text-${product.color}-800 dark:text-${product.color}-200 rounded-full`}
                            >
                              {category}
                            </span>
                          ))}
                        </div>
                        <Link
                          href={`/${locale}/contact`}
                          className={`inline-flex items-center text-${product.color}-600 hover:text-${product.color}-800 dark:text-${product.color}-400 dark:hover:text-${product.color}-300 transition-colors font-medium`}
                        >
                          Learn more →
                        </Link>
                      </article>
                    ))}
                  </div>
                )}
              </section>
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
