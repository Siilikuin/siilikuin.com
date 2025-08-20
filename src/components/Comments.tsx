'use client'

import Giscus from '@giscus/react'
import { useEffect, useState } from 'react'

export default function Comments() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    // Check if user prefers dark mode
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setTheme(mediaQuery.matches ? 'dark' : 'light')

    // Listen for changes
    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? 'dark' : 'light')
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return (
    <div className="mt-16 pt-8 border-t border-bg-gray">
      <h2 className="text-2xl font-bold text-fg-violet mb-6">Comments</h2>
      <Giscus
        id="comments"
        repo="Siilikuin/siilikuin.com"
        repoId="R_kgDOPVN_gA"
        category="General"
        categoryId="DIC_kwDOPVN_gM4CuYX_"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme={theme === 'dark' ? 'catppuccin_macchiato' : 'light'}
        lang="en"
        loading="lazy"
      />
    </div>
  )
}