import type { Metadata } from "next";
import CloudBackground from "../CloudBackground";
import Header from "../../components/Header";
import CTASection from "../../components/CTASection";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-bg-base relative">
      <CloudBackground />
      <Header />
      
      <main className="px-8 md:px-12 py-16 max-w-7xl mx-auto relative z-10 mt-20">
        <section className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-fg-violet mb-6">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-fg-gray max-w-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-bg-white p-10 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-fg-violet mb-4">Cloud Migration</h2>
            <p className="text-sm md:text-base text-fg-gray mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
            <ul className="space-y-3 text-sm md:text-base text-fg-gray">
              <li className="flex items-start gap-2">
                <span className="text-fg-seafoam mt-1">•</span>
                <span>Infrastructure assessment and planning</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-fg-seafoam mt-1">•</span>
                <span>Seamless data migration strategies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-fg-seafoam mt-1">•</span>
                <span>Post-migration optimization</span>
              </li>
            </ul>
          </div>

          <div className="bg-bg-white p-10 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-fg-violet mb-4">Custom Development</h2>
            <p className="text-sm md:text-base text-fg-gray mb-6">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <ul className="space-y-3 text-sm md:text-base text-fg-gray">
              <li className="flex items-start gap-2">
                <span className="text-fg-seafoam mt-1">•</span>
                <span>Full-stack application development</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-fg-seafoam mt-1">•</span>
                <span>API design and integration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-fg-seafoam mt-1">•</span>
                <span>Microservices architecture</span>
              </li>
            </ul>
          </div>

          <div className="bg-bg-white p-10 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-fg-violet mb-4">DevOps & CI/CD</h2>
            <p className="text-sm md:text-base text-fg-gray mb-6">
              Sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <ul className="space-y-3 text-sm md:text-base text-fg-gray">
              <li className="flex items-start gap-2">
                <span className="text-fg-seafoam mt-1">•</span>
                <span>Automated deployment pipelines</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-fg-seafoam mt-1">•</span>
                <span>Infrastructure as Code</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-fg-seafoam mt-1">•</span>
                <span>Monitoring and alerting systems</span>
              </li>
            </ul>
          </div>

          <div className="bg-bg-white p-10 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-fg-violet mb-4">Architecture Consulting</h2>
            <p className="text-sm md:text-base text-fg-gray mb-6">
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
            </p>
            <ul className="space-y-3 text-sm md:text-base text-fg-gray">
              <li className="flex items-start gap-2">
                <span className="text-fg-seafoam mt-1">•</span>
                <span>System design and review</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-fg-seafoam mt-1">•</span>
                <span>Scalability planning</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-fg-seafoam mt-1">•</span>
                <span>Technology stack selection</span>
              </li>
            </ul>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
}