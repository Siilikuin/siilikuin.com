import Link from "next/link";
import CloudBackground from "../CloudBackground";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-bg-base relative">
      <CloudBackground />
      <Header />
      
      <main className="px-8 md:px-12 py-16 max-w-7xl mx-auto relative z-10 mt-20">
        <section className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-fg-violet mb-6">
            Blog
          </h1>
          <p className="text-xl text-fg-gray max-w-3xl">
            Thoughts on software, building products, and the business of technology.
          </p>
        </section>

        {/* Coming Soon State */}
        <section className="bg-bg-white rounded-xl p-12 text-center mb-20">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-fg-violet mb-4">
              Coming Soon
            </h2>
            <p className="text-fg-gray mb-8">
              I&apos;m working on some articles about building software products, working with clients, 
              and lessons learned from years in the trenches. Check back soon, or better yet, 
              subscribe to get notified when new posts go live.
            </p>
            
            {/* Placeholder for future email subscription */}
            <div className="bg-bg-base p-6 rounded-lg">
              <p className="text-fg-gray text-sm">
                Email notifications coming soon. For now, check back periodically or follow the RSS feed.
              </p>
            </div>
          </div>
        </section>

        {/* Topics Preview */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-fg-violet mb-8">
            What I&apos;ll Write About
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-fg-violet mb-3">
                Building Products
              </h3>
              <p className="text-fg-gray">
                From idea to launch - the messy reality of shipping software that people actually use.
              </p>
            </div>
            
            <div className="bg-bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-fg-violet mb-3">
                Technical Deep Dives
              </h3>
              <p className="text-fg-gray">
                Exploring interesting technical challenges and the solutions that actually worked.
              </p>
            </div>
            
            <div className="bg-bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-fg-violet mb-3">
                Business of Software
              </h3>
              <p className="text-fg-gray">
                Lessons from consulting, pricing, and the art of saying no to the wrong projects.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-bg-violet p-8 rounded-xl text-center">
          <h3 className="text-3xl font-bold text-fg-white mb-4">
            Want to discuss something?
          </h3>
          <p className="text-fg-white mb-6">
            I&apos;m always interested in talking about software and technology.
          </p>
          <Link 
            href="mailto:andrew@siilikuin.com"
            className="bg-bg-seafoam text-fg-seafoam px-8 py-4 rounded-lg hover:opacity-90 transition-opacity inline-block font-medium text-lg"
          >
            Send me an email
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}