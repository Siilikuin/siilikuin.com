import Image from "next/image";
import Link from "next/link";
import CloudBackground from "../CloudBackground";
import Header from "../../components/Header";
import CTASection from "../../components/CTASection";
import Footer from "../../components/Footer";

export default function SoftwarePage() {
  return (
    <div className="min-h-screen bg-bg-base relative">
      <CloudBackground />
      <Header />

      <main className="px-8 md:px-12 py-16 max-w-7xl mx-auto relative z-10 mt-20">
        <section className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-fg-violet mb-6">
            Software
          </h1>
          <p className="text-xl text-fg-gray max-w-3xl">
            Commercial products built and maintained by Siilikuin.
          </p>
        </section>

        <section className="space-y-12 mb-20">
          {/* Taskusanakirja */}
          <div className="bg-bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="p-10">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-fg-violet mb-2">
                    Taskusanakirja
                  </h2>
                  <p className="text-fg-seafoam font-medium">Finnish-English Dictionary for the Command Line</p>
                </div>
                <Link
                  href="https://taskusanakirja.com"
                  className="bg-bg-seafoam text-fg-seafoam px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Site →
                </Link>
              </div>

              <p className="text-fg-gray mb-6">
                A modern, fast Finnish-English dictionary that searches keystroke-by-keystroke. Built because existing options were either slow, cluttered with ads, or required a constant internet connection. Taskusanakirja works offline, loads instantly, and runs entirely in the user's terminal for a distraction-free, cross-platform experience.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-fg-violet mb-2">Features</h3>
                  <ul className="text-fg-gray space-y-1">
                    <li className="flex items-start">
                      <span className="text-fg-seafoam mr-2">•</span>
                      <span>Interactive Terminal UI</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-fg-seafoam mr-2">•</span>
                      <span>Command-line word lookup</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-fg-seafoam mr-2">•</span>
                      <span>Reverse find (EN → FI)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-fg-seafoam mr-2">•</span>
                      <span>Pro feature: Inflection search (lemmatizer)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-fg-violet mb-2">Tech Stack</h3>
                  <ul className="text-fg-gray space-y-1">
                    <li className="flex items-start">
                      <span className="text-fg-seafoam mr-2">•</span>
                      <span>Go</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-fg-seafoam mr-2">•</span>
                      <span>Cobra & Viper</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-fg-seafoam mr-2">•</span>
                      <span>tview (for TUI)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-fg-seafoam mr-2">•</span>
                      <span>SQLite (for databases)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-fg-seafoam mr-2">•</span>
                      <span>Cloudflare Workers (for license validation)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-fg-violet mb-2">Status</h3>
                  <p className="text-fg-gray">
                    <span className="inline-block px-3 py-1 bg-bg-seafoam text-fg-seafoam rounded-full text-sm font-medium">
                      Active Development
                    </span>
                  </p>
                  <p className="text-fg-gray mt-2 text-sm">
                    Regular updates with new features
                  </p>
                </div>
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
