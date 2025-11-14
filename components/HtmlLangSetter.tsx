'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export function HtmlLangSetter() {
  const pathname = usePathname()

  useEffect(() => {
    const locale = pathname?.split('/')[1] || 'en'
    const lang = locale === 'vi' ? 'vi' : locale === 'ja' ? 'ja' : 'en'
    document.documentElement.lang = lang
  }, [pathname])

  return null
}