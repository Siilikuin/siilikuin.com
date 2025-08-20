import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { MdxContent } from './mdx-content'
import CloudBackground from "../../CloudBackground"
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import Comments from "../../../components/Comments"

interface PostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = allPosts.find((post) => post.slug === slug)
  
  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = allPosts.find((post) => post.slug === slug)

  if (!post || post.draft) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-bg-base relative">
      <CloudBackground />
      <Header />
      
      <main className="px-8 md:px-12 py-16 max-w-4xl mx-auto relative z-10 mt-20">
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 mb-8 text-fg-seafoam hover:text-fg-violet transition-colors text-sm md:text-base"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to blog
        </Link>

        <article className="bg-bg-white rounded-xl overflow-hidden shadow-sm p-8 md:p-12">
          <header className="mb-10 pb-8 border-b border-bg-gray">
            <h1 className="text-3xl md:text-5xl font-bold text-fg-violet mb-4">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-4 text-fg-gray text-sm md:text-base">
              <time>
                {format(parseISO(post.date), 'MMMM d, yyyy')}
              </time>
              <span>•</span>
              <span className="text-fg-seafoam">{post.readingTime.text}</span>
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-bg-seafoam text-fg-seafoam"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <MdxContent code={post.body.code} />
          
          <Comments />
        </article>
      </main>

      <Footer />
    </div>
  )
}