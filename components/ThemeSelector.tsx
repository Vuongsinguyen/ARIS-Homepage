'use client';

import {useState, useEffect} from 'react';
import {useTheme} from 'next-themes';

export default function ThemeSelector() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const {theme, setTheme, systemTheme} = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === 'system' ? systemTheme : theme;

  const themes = [
    {value: 'light', label: 'Light', icon: '☀️'},
    {value: 'dark', label: 'Dark', icon: '🌙'},
    {value: 'system', label: 'System', icon: '💻'},
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-accent transition-colors"
        aria-label="Select theme"
      >
        <span className="text-xl">
          {theme === 'light' && '☀️'}
          {theme === 'dark' && '🌙'}
          {theme === 'system' && '💻'}
        </span>
        <span className="text-sm font-medium">
          {theme === 'light' && 'Light'}
          {theme === 'dark' && 'Dark'}
          {theme === 'system' && 'System'}
        </span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 rounded-lg border border-border bg-popover shadow-lg z-50">
            <div className="p-1">
              {themes.map((themeOption) => (
                <button
                  key={themeOption.value}
                  onClick={() => {
                    setTheme(themeOption.value);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent transition-colors ${
                    theme === themeOption.value ? 'bg-accent font-medium' : ''
                  }`}
                >
                  <span className="text-xl">{themeOption.icon}</span>
                  <span className="flex-1 text-left">{themeOption.label}</span>
                  {theme === themeOption.value && (
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
            <div className="border-t border-border p-2">
              <p className="text-xs text-muted-foreground px-3">
                Current: <span className="font-medium">{currentTheme}</span>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
