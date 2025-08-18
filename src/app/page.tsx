import Link from "next/link";
import CloudBackground from "./CloudBackground";
import Header from "../components/Header";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-base relative">
      <CloudBackground />
      <Header />

      <main className="relative z-10">
        <section className="min-h-screen flex items-center justify-center px-8 md:px-12">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-fg-violet mb-6">
              I build useful, no-nonsense software.
            </h2>
            <p className="text-xl text-fg-gray mb-8 max-w-3xl mx-auto">
              Hi, I&apos;m <Link href="https://andrew-quinn.me/" className="underline hover:text-fg-violet transition-colors">Andrew Quinn</Link>. Siilikuin (pronounced SEELIE-Quinn) is where I build software.
              <br /><br />
              I build tools and apps that solve real problems - focusing on reliable, low-maintenance software, be it 100% local, 100% cloud-native, or anything in between.
            </p>
            <p className="text-2xl text-fg-seafoam font-medium mb-8 max-w-3xl mx-auto">
              Preferred tools: Go, Python, TypeScript, or <Link href="https://mcfunley.com/choose-boring-technology" className="underline hover:text-fg-violet transition-colors">whatever you&apos;re already using</Link>.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="https://calendly.com/andrew-siilikuin" className="bg-bg-seafoam text-fg-seafoam px-6 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block">
                Let&apos;s talk
              </Link>
              <Link href="/software" className="border-2 border-fg-violet-soft text-fg-violet-soft px-6 py-3 rounded-lg hover:bg-fg-violet-soft hover:text-fg-white transition-all inline-block">
                What I&apos;ve built
              </Link>
            </div>
            <p className="text-lg text-fg-gray mt-12">
              <span className="text-fg-violet font-medium">Latest shipped:</span>{" "}
              <Link href="https://taskusanakirja.com/" className="underline hover:text-fg-violet transition-colors">
                Taskusanakirja: The Finnish-English dictionary you didn&apos;t know you needed
              </Link>
            </p>
          </div>
        </section>


        <div className="px-8 md:px-12 max-w-7xl mx-auto">
          <CTASection />
        </div>
      </main>

      <Footer />
    </div>
  );
}