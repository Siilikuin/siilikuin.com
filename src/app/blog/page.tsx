import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import { Metadata } from 'next'
import CloudBackground from "../CloudBackground"
import Header from "../../components/Header"
import CTASection from "../../components/CTASection"
import Footer from "../../components/Footer"

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts on software, technology, and consulting',
}

export default function BlogPage() {
  const posts = allPosts
    .filter((post) => !post.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="min-h-screen bg-bg-base relative">
      <CloudBackground />
      <Header />
      
      <main className="px-8 md:px-12 py-16 max-w-7xl mx-auto relative z-10 mt-20">
        <section className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-fg-violet mb-6">
            Blog
          </h1>
          <p className="text-lg md:text-xl text-fg-gray max-w-3xl">
            Thoughts on software development, cloud architecture, and building modern applications.
          </p>
        </section>

        <section className="space-y-6 mb-20">
          {posts.length === 0 ? (
            <div className="bg-bg-white rounded-xl p-10 text-center">
              <p className="text-fg-gray">No posts yet. Check back soon!</p>
            </div>
          ) : (
            posts.map((post) => (
              <article key={post._id} className="bg-bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <Link href={post.url} className="block p-8 md:p-10">
                  <div className="flex items-start justify-between mb-3">
                    <time className="text-sm text-fg-gray">
                      {format(parseISO(post.date), 'MMMM d, yyyy')}
                    </time>
                    <span className="text-sm text-fg-seafoam">
                      {post.readingTime.text}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-fg-violet mb-3 hover:text-fg-seafoam transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-fg-gray mb-4 text-sm md:text-base">
                    {post.description}
                  </p>
                  
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
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
                </Link>
              </article>
            ))
          )}
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  )
}