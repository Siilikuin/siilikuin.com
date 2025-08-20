'use client'

import { useMDXComponent } from 'next-contentlayer2/hooks'

interface MdxContentProps {
  code: string
}

export function MdxContent({ code }: MdxContentProps) {
  const Component = useMDXComponent(code)
  
  return (
    <div className="prose prose-lg max-w-none 
      prose-headings:text-fg-violet prose-headings:font-bold
      prose-h1:text-3xl prose-h1:md:text-4xl prose-h1:mb-6
      prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mb-4 prose-h2:mt-8
      prose-h3:text-xl prose-h3:md:text-2xl prose-h3:mb-3 prose-h3:mt-6
      prose-p:text-fg-gray prose-p:text-sm prose-p:md:text-base prose-p:leading-relaxed prose-p:mb-4
      prose-strong:text-fg-violet prose-strong:font-semibold
      prose-code:text-fg-seafoam prose-code:bg-bg-seafoam prose-code:px-2 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
      prose-pre:bg-bg-gray prose-pre:text-fg-violet prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto
      prose-blockquote:border-l-4 prose-blockquote:border-fg-seafoam prose-blockquote:pl-4 prose-blockquote:text-fg-gray prose-blockquote:italic
      prose-a:text-fg-seafoam prose-a:underline hover:prose-a:text-fg-violet hover:prose-a:no-underline
      prose-li:text-fg-gray prose-li:text-sm prose-li:md:text-base
      prose-ul:list-disc prose-ul:pl-6
      prose-ol:list-decimal prose-ol:pl-6
      prose-hr:border-bg-gray prose-hr:my-8"
    >
      <Component />
    </div>
  )
}