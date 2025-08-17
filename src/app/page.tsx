import Image from "next/image";
import CloudBackground from "./CloudBackground";
import CityBackground from "./CityBackground";
import Header from "../components/Header";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-base relative">
      <CloudBackground />
      {/* <CityBackground /> */}
      <Header />

      <main className="px-8 md:px-12 py-16 max-w-7xl mx-auto relative z-10 mt-20">
        <section className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-fg-violet mb-6">
            Software Consultancy Excellence
          </h2>
          <p className="text-2xl text-fg-seafoam font-medium mb-4">
            Cloud, compassion, code.
          </p>
          <p className="text-xl text-fg-gray mb-8 max-w-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
          </p>
          <div className="flex gap-4">
            <button className="bg-bg-seafoam text-fg-seafoam px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
              Get Started
            </button>
            <button className="border-2 border-fg-violet-soft text-fg-violet-soft px-6 py-3 rounded-lg hover:bg-fg-violet-soft hover:text-fg-white transition-all">
              Learn More
            </button>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-bg-white p-8 rounded-xl shadow-sm">
            <Image 
              src="/siili.png" 
              alt="Custom Solutions" 
              width={48} 
              height={48}
              className="mb-4"
            />
            <h3 className="text-2xl font-semibold text-fg-violet mb-3">
              Custom Solutions
            </h3>
            <p className="text-fg-gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum tortor et mi lacinia.
            </p>
          </div>
          <div className="bg-bg-white p-8 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-bg-violet rounded-lg mb-4"></div>
            <h3 className="text-2xl font-semibold text-fg-violet mb-3">
              Expert Team
            </h3>
            <p className="text-fg-gray">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>
          <div className="bg-bg-white p-8 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-bg-gray rounded-lg mb-4"></div>
            <h3 className="text-2xl font-semibold text-fg-violet mb-3">
              Proven Results
            </h3>
            <p className="text-fg-gray">
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </section>

        <section className="bg-bg-seafoam p-12 rounded-2xl mb-20">
          <h2 className="text-4xl font-bold text-fg-violet mb-6">
            Why Choose Siilikuin?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-fg-gray mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Mauris quis tellus a turpis posuere maximus.
              </p>
              <p className="text-fg-gray">
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-fg-seafoam rounded-full"></div>
                <span className="text-fg-violet font-medium">10+ Years of Experience</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-fg-seafoam rounded-full"></div>
                <span className="text-fg-violet font-medium">100+ Successful Projects</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-fg-seafoam rounded-full"></div>
                <span className="text-fg-violet font-medium">24/7 Support</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-fg-seafoam rounded-full"></div>
                <span className="text-fg-violet font-medium">Global Clientele</span>
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