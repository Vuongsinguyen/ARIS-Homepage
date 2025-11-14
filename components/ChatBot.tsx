"use client";

import {useState, useEffect, useRef} from 'react';
import {useTranslations} from 'next-intl';

type Message = {id: string; role: 'user' | 'bot'; text: string; time?: string};

export default function ChatBot() {
  const t = useTranslations('chat');
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // load persisted messages
    const stored = typeof window !== 'undefined' ? window.localStorage.getItem('aiChatMessages') : null;
    if (stored) setMessages(JSON.parse(stored));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('aiChatMessages', JSON.stringify(messages));
    // scroll to bottom
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages]);

  async function sendMessage() {
    if (!input.trim()) return;

    const text = input.trim();
    const userMsg: Message = {id: String(Date.now()) + '-u', role: 'user', text, time: new Date().toISOString()};
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({message: text, locale: navigator.language || 'en'}),
      });
      const data = await response.json();
      const botMsg: Message = {id: String(Date.now()) + '-b', role: 'bot', text: data.reply, time: new Date().toISOString()};
      setMessages(prev => [...prev, botMsg]);
    } catch (err) {
      const botMsg: Message = {id: String(Date.now()) + '-b', role: 'bot', text: t('error') || 'Sorry, I cannot respond right now.', time: new Date().toISOString()};
      setMessages(prev => [...prev, botMsg]);
    } finally {
      setIsTyping(false);
    }
  }

  function handleKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') sendMessage();
  }

  return (
    <div>
      {/* Floating Chat Button */}
      <button
        className="ml-2 px-3 py-1.5 rounded text-sm text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 animate-gradient-x bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 via-red-500 to-yellow-500"
        onClick={() => setOpen(true)}
        aria-label="Open AI Chat"
      >
        {t('chatWithAI')}
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />

          <div className="relative w-full sm:max-w-2xl mx-4 bg-white dark:bg-black rounded-t-lg sm:rounded-lg shadow-lg overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold">AI</div>
                <div>
                  <div className="font-semibold">{t('chatWithAI')}</div>
                  <div className="text-xs text-muted-foreground">{t('assistant')}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-xs text-gray-500 hover:text-gray-700" onClick={() => setMessages([])}>{t('clear')}</button>
                <button className="text-sm px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded" onClick={() => setOpen(false)}>{t('close')}</button>
              </div>
            </div>

            {/* Messages */}
            <div className="h-72 overflow-y-auto px-4 py-3 space-y-3" ref={listRef}>
              {messages.length === 0 && (
                <div className="text-sm text-gray-500">{t('intro')}</div>
              )}
              {messages.map((m) => (
                <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] px-3 py-2 rounded ${m.role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100'}`}>
                    <div className="text-sm">{m.text}</div>
                    <div className="text-xs text-muted-foreground mt-1">{new Date(m.time || '').toLocaleString()}</div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="px-3 py-2 rounded bg-gray-100 dark:bg-gray-800 text-sm">{t('typing')}</div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-800 bg-background">
              {/* Quick Message Suggestions */}
              {messages.length === 0 && (
                <div className="mb-3">
                  <div className="text-xs text-gray-500 mb-2">{t('suggestions') || 'Quick suggestions:'}</div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setInput('Tôi muốn làm ứng dụng Quản Lý!')}
                      className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                      Tôi muốn làm ứng dụng Quản Lý!
                    </button>
                    <button
                      onClick={() => setInput('Cần ứng dụng trên Mobile!')}
                      className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                      Cần ứng dụng trên Mobile!
                    </button>
                    <button
                      onClick={() => setInput('Chuyển đổi số là gì?')}
                      className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                      Chuyển đổi số là gì?
                    </button>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder={t('placeholder')}
                  className="flex-1 px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-white dark:bg-black text-sm outline-none"
                />
                <button className="px-3 py-2 rounded bg-blue-600 text-white hover:bg-blue-700" onClick={sendMessage}>{t('send')}</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
