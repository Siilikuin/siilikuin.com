import Image from "next/image";
import Link from "next/link";
import CloudBackground from "../CloudBackground";
import Header from "../../components/Header";
import CTASection from "../../components/CTASection";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bg-base relative">
      <CloudBackground />
      <Header />

      <main className="px-8 md:px-12 py-16 max-w-7xl mx-auto relative z-10 mt-20">
        <section className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-fg-violet mb-6">
            About
          </h1>
          <p className="text-xl text-fg-gray max-w-3xl">
            I&apos;m <Link href="https://andrew-quinn.me/" className="underline hover:text-fg-violet transition-colors">Andrew Quinn</Link>, a software engineer who builds practical solutions to real problems.
          </p>
        </section>

        {/* Background Section */}
        <section className="mb-20">
          <div className="md:flex gap-12 items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-4xl font-bold text-fg-violet mb-6">Background</h2>
              <p className="text-fg-gray mb-4">
                I&apos;ve worked across fintech, healthcare, and transportation - industries where software has to work reliably, 
                every time. This experience shaped my approach: build things that are maintainable, understandable, and actually solve the problem at hand.
              </p>
              <p className="text-fg-gray mb-4">
                I work with Go, Python, and TypeScript primarily, but I&apos;m tool-agnostic. The right tool is the one that 
                gets the job done and doesn&apos;t create headaches six months later.
              </p>
              <p className="text-fg-gray">
                Whether it&apos;s a completely local application, a cloud-native service, or something in between, 
                I focus on shipping working software that does what it&apos;s supposed to do.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-bg-violet rounded-2xl p-12 flex items-center justify-center">
                <Image
                  src="/siili.png"
                  alt="Siilikuin mascot"
                  width={200}
                  height={200}
                  className=""
                />
              </div>
            </div>
          </div>
        </section>

        {/* What I Build Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-fg-violet mb-12">What I Build</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-bg-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-fg-violet mb-3">Software That Works</h3>
              <p className="text-fg-gray">
                I've built systems for fintech, healthcare, and transportation companies. Complex problems, 
                practical solutions. No PowerPoints, just code that ships.
              </p>
            </div>
            <div className="bg-bg-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-fg-violet mb-3">Tools That Matter</h3>
              <p className="text-fg-gray">
                Sometimes I build things because they should exist. Like <Link href="https://taskusanakirja.com/" className="underline hover:text-fg-violet transition-colors">Taskusanakirja</Link> - a Finnish-English dictionary 
                that actually works the way language learners need it to.
              </p>
            </div>
          </div>
        </section>

        {/* My Approach Section */}
        <section className="bg-bg-seafoam rounded-2xl p-12 mb-20">
          <h2 className="text-4xl font-bold text-fg-violet mb-6">My Approach</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-fg-seafoam rounded-full flex-shrink-0 mt-1"></div>
              <p className="text-fg-gray">
                <span className="font-medium text-fg-violet">Clear thinking:</span> Technical work doesn&apos;t have to be opaque. 
                Good code explains itself.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-fg-seafoam rounded-full flex-shrink-0 mt-1"></div>
              <p className="text-fg-gray">
                <span className="font-medium text-fg-violet">Practical solutions:</span> I don&apos;t over-engineer. 
                The best solution is usually the simplest one that actually works.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-fg-seafoam rounded-full flex-shrink-0 mt-1"></div>
              <p className="text-fg-gray">
                <span className="font-medium text-fg-violet">Long-term thinking:</span> Code should be maintainable. 
                The person maintaining it six months from now might be you (or me).
              </p>
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
}