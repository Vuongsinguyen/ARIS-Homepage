import {useTranslations} from 'next-intl';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with ARIS team',
};

export default function ContactPage() {
  const t = useTranslations('nav');
  
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center p-24">
        <div className="max-w-2xl w-full">
          <header className="mb-12 text-center">
            <h1 className="text-5xl font-bold mb-4">{t('contact')}</h1>
            <p className="text-xl text-muted-foreground">
              We'd love to hear from you
            </p>
          </header>

          <div className="bg-card border border-border rounded-lg p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Tell us what's on your mind..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="text-lg font-semibold mb-4">Other ways to reach us</h3>
              <div className="space-y-3 text-muted-foreground">
                <p className="flex items-center gap-3">
                  <span>📧</span>
                  <a href="mailto:info@aris-homepage.com" className="hover:text-primary transition-colors">
                    info@aris-homepage.com
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <span>🐙</span>
                  <a href="https://github.com/Vuongsinguyen/ARIS-Homepage" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    GitHub
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
