import Image from "next/image";
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
            About Siilikuin
          </h1>
          <p className="text-2xl text-fg-seafoam font-medium mb-4">
            Cloud, compassion, code.
          </p>
          <p className="text-xl text-fg-gray max-w-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. 
            Cras porttitor metus justo, in neque.
          </p>
        </section>

        {/* Our Story Section */}
        <section className="mb-20">
          <div className="md:flex gap-12 items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-4xl font-bold text-fg-violet mb-6">Our Story</h2>
              <p className="text-fg-gray mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-fg-gray mb-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="text-fg-gray">
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci.
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

        {/* Values Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-fg-violet mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-bg-seafoam rounded-full mx-auto mb-4"></div>
              <h3 className="text-2xl font-bold text-fg-violet mb-3">Innovation</h3>
              <p className="text-fg-gray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-bg-violet rounded-full mx-auto mb-4"></div>
              <h3 className="text-2xl font-bold text-fg-violet mb-3">Compassion</h3>
              <p className="text-fg-gray">
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-bg-gray rounded-full mx-auto mb-4"></div>
              <h3 className="text-2xl font-bold text-fg-violet mb-3">Excellence</h3>
              <p className="text-fg-gray">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-fg-violet mb-12 text-center">Our Team</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-bg-white rounded-xl p-6 text-center">
                <div className="w-24 h-24 bg-bg-gray rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-bold text-fg-violet mb-1">Team Member</h3>
                <p className="text-sm text-fg-seafoam mb-2">Position Title</p>
                <p className="text-sm text-fg-gray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-bg-seafoam rounded-2xl p-12 mb-20">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-fg-violet mb-2">10+</h3>
              <p className="text-fg-gray">Years of Experience</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-fg-violet mb-2">100+</h3>
              <p className="text-fg-gray">Projects Delivered</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-fg-violet mb-2">50+</h3>
              <p className="text-fg-gray">Happy Clients</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-fg-violet mb-2">24/7</h3>
              <p className="text-fg-gray">Support Available</p>
            </div>
          </div>
        </section>

        {/* Careers Section */}
        <section className="mb-20">
          <div className="bg-bg-white rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-fg-violet mb-6">Join Our Team</h2>
            <p className="text-xl text-fg-gray mb-8">
              We're always looking for talented individuals who share our passion for technology and innovation.
            </p>
            <div className="space-y-4 mb-8">
              <div className="border-b border-bg-gray pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-fg-violet mb-2">Senior Cloud Architect</h3>
                    <p className="text-fg-gray">Remote • Full-time</p>
                  </div>
                  <button className="text-fg-seafoam hover:text-fg-violet transition-colors font-medium">
                    View Details →
                  </button>
                </div>
              </div>
              <div className="border-b border-bg-gray pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-fg-violet mb-2">DevOps Engineer</h3>
                    <p className="text-fg-gray">Helsinki • Full-time</p>
                  </div>
                  <button className="text-fg-seafoam hover:text-fg-violet transition-colors font-medium">
                    View Details →
                  </button>
                </div>
              </div>
              <div className="border-b border-bg-gray pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-fg-violet mb-2">Full Stack Developer</h3>
                    <p className="text-fg-gray">Remote • Full-time</p>
                  </div>
                  <button className="text-fg-seafoam hover:text-fg-violet transition-colors font-medium">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
            <button className="bg-bg-seafoam text-fg-seafoam px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
              View All Positions
            </button>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
}