import {getTranslations} from 'next-intl/server';
import Navbar from '@/components/Navbar';

export default async function ProductsPage() {
  const t = await getTranslations('nav');

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('products')}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
              Discover our innovative product offerings designed to transform your business
            </p>
          </div>
        </div>
      </section>

      <main className="flex min-h-screen flex-col items-center p-24">
        <div className="max-w-5xl w-full">
          <section aria-labelledby="products-heading">
            <h2 id="products-heading" className="sr-only">Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <article className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">ARIS Platform</h3>
                <p className="text-gray-600 dark:text-gray-400">A comprehensive platform for enterprise applications.</p>
              </article>

              <article className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">ARIS Analytics</h3>
                <p className="text-gray-600 dark:text-gray-400">Powerful analytics and dashboards for actionable insights.</p>
              </article>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
