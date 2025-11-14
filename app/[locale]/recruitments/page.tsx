import {useTranslations} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import Navbar from '@/components/Navbar';

type Props = {
  params: {locale: string};
};

export default function RecruitmentsPage({params: {locale}}: Props) {
  // Ensure that the incoming `locale` is valid
  if (!locale || !['en', 'vi', 'ja'].includes(locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations('recruitments');

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {t('title')}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                {t('subtitle')}
              </p>
            </div>

            {/* Current Openings */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t('currentOpenings')}</h2>

              {/* Job Card 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {t('seniorFullStack.title')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      {t('seniorFullStack.description')}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">
                        React
                      </span>
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded">
                        Node.js
                      </span>
                      <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">
                        TypeScript
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      📍 {t('seniorFullStack.location')} • {t('seniorFullStack.type')} • {t('seniorFullStack.salary')}
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <button className="w-full md:w-auto px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                      {t('applyNow')}
                    </button>
                  </div>
                </div>
              </div>

              {/* Job Card 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {t('uiUxDesigner.title')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      {t('uiUxDesigner.description')}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-2 py-1 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 text-xs rounded">
                        Figma
                      </span>
                      <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs rounded">
                        Adobe XD
                      </span>
                      <span className="px-2 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 text-xs rounded">
                        Sketch
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      📍 {t('uiUxDesigner.location')} • {t('uiUxDesigner.type')} • {t('uiUxDesigner.salary')}
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <button className="w-full md:w-auto px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                      {t('applyNow')}
                    </button>
                  </div>
                </div>
              </div>

              {/* Job Card 3 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {t('devOpsEngineer.title')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      {t('devOpsEngineer.description')}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-xs rounded">
                        AWS
                      </span>
                      <span className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 text-xs rounded">
                        Docker
                      </span>
                      <span className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-xs rounded">
                        Kubernetes
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      📍 {t('devOpsEngineer.location')} • {t('devOpsEngineer.type')} • {t('devOpsEngineer.salary')}
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <button className="w-full md:w-auto px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                      {t('applyNow')}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Join Us */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t('whyJoinUs')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {t('innovation.title')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {t('innovation.description')}
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">👥</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {t('teamCulture.title')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {t('teamCulture.description')}
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">📈</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {t('growth.title')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {t('growth.description')}
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">⚖️</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {t('workLifeBalance.title')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {t('workLifeBalance.description')}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  {t('contactCTA.title')}
                </h3>
                <p className="text-blue-100 mb-6">
                  {t('contactCTA.description')}
                </p>
                <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                  {t('contactCTA.button')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}