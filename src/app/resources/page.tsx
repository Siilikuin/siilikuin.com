import type { Metadata } from "next";
import CloudBackground from "../CloudBackground";
import Header from "../../components/Header";
import CTASection from "../../components/CTASection";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Resources",
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-bg-base relative">
      <CloudBackground />
      <Header />
      
      <main className="px-8 md:px-12 py-16 max-w-7xl mx-auto relative z-10 mt-20">
        <section className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-fg-violet mb-6">
            Resources
          </h1>
          <p className="text-lg md:text-xl text-fg-gray max-w-3xl">
            Comprehensive guides, documentation, and tools to help you succeed with modern cloud technologies.
          </p>
        </section>

        {/* Documentation Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-fg-violet mb-8">Documentation</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-bg-violet rounded-lg mb-4"></div>
              <h3 className="text-lg md:text-xl font-bold text-fg-violet mb-2">Getting Started Guide</h3>
              <p className="text-sm md:text-base text-fg-gray mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quick start tutorials and setup guides.
              </p>
              <a href="#" className="text-fg-seafoam hover:text-fg-violet transition-colors font-medium">
                View Documentation →
              </a>
            </div>

            <div className="bg-bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-bg-seafoam rounded-lg mb-4"></div>
              <h3 className="text-lg md:text-xl font-bold text-fg-violet mb-2">API Reference</h3>
              <p className="text-sm md:text-base text-fg-gray mb-4">
                Detailed API documentation with examples and best practices for integration.
              </p>
              <a href="#" className="text-fg-seafoam hover:text-fg-violet transition-colors font-medium">
                Explore APIs →
              </a>
            </div>

            <div className="bg-bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-bg-gray rounded-lg mb-4"></div>
              <h3 className="text-lg md:text-xl font-bold text-fg-violet mb-2">Architecture Patterns</h3>
              <p className="text-sm md:text-base text-fg-gray mb-4">
                Proven architectural patterns for scalable and resilient cloud applications.
              </p>
              <a href="#" className="text-fg-seafoam hover:text-fg-violet transition-colors font-medium">
                Learn More →
              </a>
            </div>
          </div>
        </section>

        {/* Whitepapers Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-fg-violet mb-8">Whitepapers</h2>
          <div className="space-y-4">
            <div className="bg-bg-white p-6 rounded-xl flex justify-between items-center">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-fg-violet mb-2">
                  Cloud Migration Strategies for Enterprise
                </h3>
                <p className="text-sm md:text-base text-fg-gray mb-2">
                  Comprehensive guide to planning and executing large-scale cloud migrations.
                </p>
                <p className="text-sm text-fg-gray">Published: December 2024 | 45 pages</p>
              </div>
              <button className="bg-bg-seafoam text-fg-seafoam px-6 py-3 rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap">
                Download PDF
              </button>
            </div>

            <div className="bg-bg-white p-6 rounded-xl flex justify-between items-center">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-fg-violet mb-2">
                  Microservices Security Best Practices
                </h3>
                <p className="text-sm md:text-base text-fg-gray mb-2">
                  Essential security patterns for distributed microservices architectures.
                </p>
                <p className="text-sm text-fg-gray">Published: November 2024 | 32 pages</p>
              </div>
              <button className="bg-bg-seafoam text-fg-seafoam px-6 py-3 rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap">
                Download PDF
              </button>
            </div>

            <div className="bg-bg-white p-6 rounded-xl flex justify-between items-center">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-fg-violet mb-2">
                  Cost Optimization in Multi-Cloud Environments
                </h3>
                <p className="text-sm md:text-base text-fg-gray mb-2">
                  Strategies for managing and reducing costs across multiple cloud providers.
                </p>
                <p className="text-sm text-fg-gray">Published: October 2024 | 28 pages</p>
              </div>
              <button className="bg-bg-seafoam text-fg-seafoam px-6 py-3 rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap">
                Download PDF
              </button>
            </div>
          </div>
        </section>

        {/* Tools & Downloads Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-fg-violet mb-8">Tools & Downloads</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-bg-violet p-8 rounded-xl">
              <h3 className="text-xl md:text-2xl font-bold text-fg-violet mb-4">Cloud Cost Calculator</h3>
              <p className="text-sm md:text-base text-fg-gray mb-6">
                Estimate and compare costs across different cloud providers with our interactive calculator.
              </p>
              <button className="bg-bg-seafoam text-fg-seafoam px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
                Launch Calculator
              </button>
            </div>

            <div className="bg-bg-seafoam p-8 rounded-xl">
              <h3 className="text-xl md:text-2xl font-bold text-fg-violet mb-4">Migration Assessment Tool</h3>
              <p className="text-sm md:text-base text-fg-gray mb-6">
                Analyze your current infrastructure and get personalized migration recommendations.
              </p>
              <button className="bg-bg-seafoam text-fg-seafoam px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
                Start Assessment
              </button>
            </div>

            <div className="bg-bg-gray p-8 rounded-xl">
              <h3 className="text-xl md:text-2xl font-bold text-fg-violet mb-4">DevOps Starter Kit</h3>
              <p className="text-sm md:text-base text-fg-gray mb-6">
                Pre-configured CI/CD templates, monitoring configs, and automation scripts.
              </p>
              <button className="bg-bg-seafoam text-fg-seafoam px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
                Download Kit
              </button>
            </div>

            <div className="bg-bg-white border-2 border-fg-violet/20 p-8 rounded-xl">
              <h3 className="text-xl md:text-2xl font-bold text-fg-violet mb-4">Code Templates</h3>
              <p className="text-sm md:text-base text-fg-gray mb-6">
                Production-ready templates for common architectural patterns and services.
              </p>
              <button className="bg-bg-seafoam text-fg-seafoam px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
                Browse Templates
              </button>
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
}