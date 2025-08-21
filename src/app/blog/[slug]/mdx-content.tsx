'use client'

import { useMDXComponent } from 'next-contentlayer2/hooks'
import './mdx-styles.css'

interface MdxContentProps {
  code: string
}

export function MdxContent({ code }: MdxContentProps) {
  const Component = useMDXComponent(code)
  
  return (
    <div className="mdx-content">
      <Component />
    </div>
  )
}