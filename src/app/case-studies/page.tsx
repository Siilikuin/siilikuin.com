import Image from "next/image";
import CloudBackground from "../CloudBackground";
import Header from "../../components/Header";
import CTASection from "../../components/CTASection";
import Footer from "../../components/Footer";

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-bg-base relative">
      <CloudBackground />
      <Header />
      
      <main className="px-8 md:px-12 py-16 max-w-7xl mx-auto relative z-10 mt-20">
        <section className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-fg-violet mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-fg-gray max-w-3xl">
            Discover how we&apos;ve helped organizations transform their digital infrastructure and achieve remarkable results.
          </p>
        </section>

        <section className="space-y-12 mb-20">
          {/* Enterprise Solutions */}
          <div className="bg-bg-white rounded-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/3 p-10">
                <span className="text-sm text-fg-seafoam font-medium">ENTERPRISE SOLUTIONS</span>
                <h2 className="text-3xl font-bold text-fg-violet mt-2 mb-4">
                  Global Finance Corp Migration
                </h2>
                <p className="text-fg-gray mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-fg-violet">85%</h3>
                    <p className="text-sm text-fg-gray">Cost Reduction</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-fg-violet">3x</h3>
                    <p className="text-sm text-fg-gray">Performance Increase</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-fg-violet">99.99%</h3>
                    <p className="text-sm text-fg-gray">Uptime Achieved</p>
                  </div>
                </div>
                <button className="text-fg-seafoam hover:text-fg-violet transition-colors font-medium">
                  Read Full Case Study →
                </button>
              </div>
              <div className="md:w-1/3 bg-bg-violet p-10 flex items-center justify-center">
                <div className="w-32 h-32 bg-bg-gray rounded-lg opacity-50"></div>
              </div>
            </div>
          </div>

          {/* Startup Success Stories */}
          <div className="bg-bg-white rounded-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/3 p-10">
                <span className="text-sm text-fg-seafoam font-medium">STARTUP SUCCESS</span>
                <h2 className="text-3xl font-bold text-fg-violet mt-2 mb-4">
                  TechStart Rapid Scaling Platform
                </h2>
                <p className="text-fg-gray mb-6">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-fg-violet">0→1M</h3>
                    <p className="text-sm text-fg-gray">Users in 6 months</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-fg-violet">50ms</h3>
                    <p className="text-sm text-fg-gray">Response Time</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-fg-violet">Auto</h3>
                    <p className="text-sm text-fg-gray">Scaling Enabled</p>
                  </div>
                </div>
                <button className="text-fg-seafoam hover:text-fg-violet transition-colors font-medium">
                  Read Full Case Study →
                </button>
              </div>
              <div className="md:w-1/3 bg-bg-seafoam p-10 flex items-center justify-center">
                <div className="w-32 h-32 bg-bg-gray rounded-lg opacity-50"></div>
              </div>
            </div>
          </div>

          {/* Digital Transformation */}
          <div className="bg-bg-white rounded-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/3 p-10">
                <span className="text-sm text-fg-seafoam font-medium">DIGITAL TRANSFORMATION</span>
                <h2 className="text-3xl font-bold text-fg-violet mt-2 mb-4">
                  RetailChain Omnichannel Platform
                </h2>
                <p className="text-fg-gray mb-6">
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-fg-violet">200%</h3>
                    <p className="text-sm text-fg-gray">Online Sales Growth</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-fg-violet">24/7</h3>
                    <p className="text-sm text-fg-gray">Availability</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-fg-violet">5</h3>
                    <p className="text-sm text-fg-gray">Channels Integrated</p>
                  </div>
                </div>
                <button className="text-fg-seafoam hover:text-fg-violet transition-colors font-medium">
                  Read Full Case Study →
                </button>
              </div>
              <div className="md:w-1/3 bg-bg-gray p-10 flex items-center justify-center">
                <div className="w-32 h-32 bg-bg-violet rounded-lg opacity-50"></div>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
}