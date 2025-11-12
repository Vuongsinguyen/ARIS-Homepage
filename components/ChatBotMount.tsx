"use client";
import React from 'react';
import ChatBot from './ChatBot';
import {createRoot} from 'react-dom/client';
import {NextIntlClientProvider} from 'next-intl';
import {usePathname} from 'next/navigation';

export default function ChatBotMount() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';
  const [messages, setMessages] = React.useState<any>(null);

  React.useEffect(() => {
    // Load messages for the current locale
    import(`../messages/${locale}.json`)
      .then((mod) => setMessages(mod.default))
      .catch(() => import('../messages/en.json').then((mod) => setMessages(mod.default)));
  }, [locale]);

  React.useEffect(() => {
    if (!messages) return;

    const rootEl = document.getElementById('chatbot-root');
    if (rootEl && !rootEl.hasChildNodes()) {
      const root = createRoot(rootEl);
      root.render(
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ChatBot />
        </NextIntlClientProvider>
      );
    }
    const rootMobile = document.getElementById('chatbot-root-mobile');
    if (rootMobile && !rootMobile.hasChildNodes()) {
      const root = createRoot(rootMobile);
      root.render(
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ChatBot />
        </NextIntlClientProvider>
      );
    }
  }, [messages, locale]);

  return null;
}
