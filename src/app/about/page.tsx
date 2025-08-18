import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CloudBackground from "../CloudBackground";
import Header from "../../components/Header";
import CTASection from "../../components/CTASection";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bg-base relative">
      <CloudBackground />
      <Header />

      <main className="px-8 md:px-12 py-16 max-w-7xl mx-auto relative z-10 mt-20">
        <section className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-fg-violet mb-6">
            About
          </h1>
          <p className="text-lg md:text-xl text-fg-gray max-w-3xl mb-4">
            Hi, I&apos;m <Link href="https://andrew-quinn.me/" className="underline hover:text-fg-violet transition-colors">Andrew Quinn</Link>. Siilikuin (pronounced SEELIE-Quinn) is where I build software.
          </p>
          <p className="text-base md:text-lg text-fg-gray max-w-3xl">
            Siilikuin is my one-man software development company, and it comes in two flavors: Siilikuin LLC for US clients, and Siilikuin toiminimi for Finnish clients. 
            (I myself am a dual US-EU citizen, currently living in Finland.)
          </p>
        </section>

        {/* Background Section */}
        <section className="mb-20">
          <div className="md:flex gap-12 items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-fg-violet mb-6">Background</h2>
              <p className="text-sm md:text-base text-fg-gray mb-4">
                I&apos;ve worked across <Link href="https://www.nomentia.com/" className="underline hover:text-fg-violet transition-colors">fintech</Link>, <Link href="https://www.epic.com/" className="underline hover:text-fg-violet transition-colors">healthcare</Link>, and <Link href="https://www.teleste.com/" className="underline hover:text-fg-violet transition-colors">transportation</Link> - highly regulated industries where the cost of a single software bug can be catastrophic. This experience shaped my approach: build things that are maintainable, understandable, and actually solve the problem at hand.
              </p>
              <p className="text-sm md:text-base text-fg-gray mb-4">
                I work with Go, Python, and TypeScript primarily, but I&apos;m tool-agnostic. The right tool is the one that 
                gets the job done and doesn&apos;t create headaches six months later.
              </p>
              <p className="text-sm md:text-base text-fg-gray">
                Whether it&apos;s a completely local application, a cloud-native service, or something in between, 
                I focus on shipping working software that does what it&apos;s supposed to do.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-bg-violet rounded-2xl p-12">
                <div className="flex flex-col items-center">
                  <Image
                    src="/siili.png"
                    alt="Siilikuin mascot"
                    width={200}
                    height={200}
                    className="mb-4"
                  />
                  <p className="text-sm text-fg-gray text-center italic">
                    Siilikuin - like &apos;<Link href="https://en.wikipedia.org/wiki/Seelie" className="underline hover:text-fg-violet transition-colors">The Seelie Court</Link>&apos; plus my last name Quinn, 
                    it means &apos;<Link href="https://longnow.org/talks/02007-tetlock/" className="underline hover:text-fg-violet transition-colors">hedgehog</Link>-like&apos; in Finnish.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What I Build Section */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-fg-violet mb-12">What I Build</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-bg-white p-8 rounded-xl">
              <h3 className="text-xl md:text-2xl font-bold text-fg-violet mb-3">Software That Works</h3>
              <p className="text-sm md:text-base text-fg-gray">
                I&apos;ve built, deployed, and maintained systems for <Link href="https://www.nomentia.com/" className="underline hover:text-fg-violet transition-colors">fintech</Link>, <Link href="https://www.epic.com/" className="underline hover:text-fg-violet transition-colors">healthcare</Link>, and <Link href="https://www.teleste.com/" className="underline hover:text-fg-violet transition-colors">transportation</Link> companies. Complex problems, 
                practical solutions. No PowerPoints, just code that ships.
              </p>
            </div>
            <div className="bg-bg-white p-8 rounded-xl">
              <h3 className="text-xl md:text-2xl font-bold text-fg-violet mb-3">Tools That Matter</h3>
              <p className="text-sm md:text-base text-fg-gray">
                Sometimes I build things because they should exist. Like <Link href="https://taskusanakirja.com/" className="underline hover:text-fg-violet transition-colors">Taskusanakirja</Link> - a Finnish-English dictionary 
                that actually works the way language learners need it to.
              </p>
            </div>
          </div>
        </section>

        {/* My Approach Section */}
        <section className="bg-bg-seafoam rounded-2xl p-12 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-fg-violet mb-6">My Approach</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-fg-seafoam rounded-full flex-shrink-0 mt-1"></div>
              <p className="text-sm md:text-base text-fg-gray">
                <span className="font-medium text-fg-violet">Clear thinking:</span> Technical work doesn&apos;t have to be opaque. 
                Good code explains itself.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-fg-seafoam rounded-full flex-shrink-0 mt-1"></div>
              <p className="text-sm md:text-base text-fg-gray">
                <span className="font-medium text-fg-violet">Practical solutions:</span> I don&apos;t over-engineer. 
                The best solution is usually the simplest one that actually works.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-fg-seafoam rounded-full flex-shrink-0 mt-1"></div>
              <p className="text-sm md:text-base text-fg-gray">
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