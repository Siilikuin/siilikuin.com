import Image from "next/image";
import CloudBackground from "../CloudBackground";
import Header from "../../components/Header";
import CTASection from "../../components/CTASection";
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
            Insights, tutorials, and thoughts on cloud architecture, software development, and digital transformation.
          </p>
        </section>

        <div className="md:flex gap-12">
          {/* Blog Posts */}
          <section className="md:w-2/3 space-y-8 mb-12">
            {/* Featured Post */}
            <article className="bg-bg-white rounded-xl overflow-hidden">
              <div className="h-48 bg-bg-violet"></div>
              <div className="p-8">
                <div className="flex gap-4 text-sm text-fg-gray mb-3">
                  <span>December 15, 2024</span>
                  <span>•</span>
                  <span>Cloud Architecture</span>
                </div>
                <h2 className="text-3xl font-bold text-fg-violet mb-3">
                  The Future of Serverless: Beyond Functions
                </h2>
                <p className="text-fg-gray mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <a href="#" className="text-fg-seafoam hover:text-fg-violet transition-colors font-medium">
                  Read More →
                </a>
              </div>
            </article>

            {/* Regular Posts */}
            <article className="bg-bg-white rounded-xl p-8">
              <div className="flex gap-4 text-sm text-fg-gray mb-3">
                <span>December 10, 2024</span>
                <span>•</span>
                <span>DevOps</span>
              </div>
              <h2 className="text-2xl font-bold text-fg-violet mb-3">
                Implementing Zero-Downtime Deployments
              </h2>
              <p className="text-fg-gray mb-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
              <a href="#" className="text-fg-seafoam hover:text-fg-violet transition-colors font-medium">
                Read More →
              </a>
            </article>

            <article className="bg-bg-white rounded-xl p-8">
              <div className="flex gap-4 text-sm text-fg-gray mb-3">
                <span>December 5, 2024</span>
                <span>•</span>
                <span>Best Practices</span>
              </div>
              <h2 className="text-2xl font-bold text-fg-violet mb-3">
                Microservices Communication Patterns
              </h2>
              <p className="text-fg-gray mb-4">
                Sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </p>
              <a href="#" className="text-fg-seafoam hover:text-fg-violet transition-colors font-medium">
                Read More →
              </a>
            </article>

            <article className="bg-bg-white rounded-xl p-8">
              <div className="flex gap-4 text-sm text-fg-gray mb-3">
                <span>November 28, 2024</span>
                <span>•</span>
                <span>Tutorial</span>
              </div>
              <h2 className="text-2xl font-bold text-fg-violet mb-3">
                Building Resilient APIs with Circuit Breakers
              </h2>
              <p className="text-fg-gray mb-4">
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
              </p>
              <a href="#" className="text-fg-seafoam hover:text-fg-violet transition-colors font-medium">
                Read More →
              </a>
            </article>

            <article className="bg-bg-white rounded-xl p-8">
              <div className="flex gap-4 text-sm text-fg-gray mb-3">
                <span>November 20, 2024</span>
                <span>•</span>
                <span>Cloud Migration</span>
              </div>
              <h2 className="text-2xl font-bold text-fg-violet mb-3">
                Cost Optimization in Multi-Cloud Environments
              </h2>
              <p className="text-fg-gray mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras porttitor metus justo.
              </p>
              <a href="#" className="text-fg-seafoam hover:text-fg-violet transition-colors font-medium">
                Read More →
              </a>
            </article>

            {/* Pagination */}
            <div className="flex justify-center gap-2 pt-8">
              <button className="px-4 py-2 bg-bg-violet text-fg-violet rounded-lg">1</button>
              <button className="px-4 py-2 text-fg-gray hover:bg-bg-violet rounded-lg transition-colors">2</button>
              <button className="px-4 py-2 text-fg-gray hover:bg-bg-violet rounded-lg transition-colors">3</button>
              <button className="px-4 py-2 text-fg-gray hover:bg-bg-violet rounded-lg transition-colors">→</button>
            </div>
          </section>

          {/* Sidebar */}
          <aside className="md:w-1/3 space-y-8">
            {/* Categories */}
            <div className="bg-bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-fg-violet mb-4">Categories</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-fg-gray hover:text-fg-seafoam transition-colors">Cloud Architecture (12)</a></li>
                <li><a href="#" className="text-fg-gray hover:text-fg-seafoam transition-colors">DevOps (8)</a></li>
                <li><a href="#" className="text-fg-gray hover:text-fg-seafoam transition-colors">Best Practices (15)</a></li>
                <li><a href="#" className="text-fg-gray hover:text-fg-seafoam transition-colors">Tutorials (10)</a></li>
                <li><a href="#" className="text-fg-gray hover:text-fg-seafoam transition-colors">Case Studies (6)</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="bg-bg-seafoam rounded-xl p-6">
              <h3 className="text-xl font-bold text-fg-violet mb-4">Stay Updated</h3>
              <p className="text-fg-gray mb-4">
                Get the latest insights delivered to your inbox.
              </p>
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="w-full px-4 py-2 rounded-lg mb-3 bg-bg-white text-fg-gray"
              />
              <button className="w-full bg-bg-seafoam text-fg-seafoam py-2 rounded-lg hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>

            {/* Popular Posts */}
            <div className="bg-bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-fg-violet mb-4">Popular Posts</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-fg-gray hover:text-fg-seafoam transition-colors">
                    <h4 className="font-medium">Understanding Kubernetes Networking</h4>
                    <p className="text-sm opacity-70">November 15, 2024</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-fg-gray hover:text-fg-seafoam transition-colors">
                    <h4 className="font-medium">Database Sharding Strategies</h4>
                    <p className="text-sm opacity-70">November 10, 2024</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-fg-gray hover:text-fg-seafoam transition-colors">
                    <h4 className="font-medium">CI/CD Pipeline Best Practices</h4>
                    <p className="text-sm opacity-70">October 28, 2024</p>
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
}