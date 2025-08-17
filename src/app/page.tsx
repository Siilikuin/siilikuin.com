import Image from "next/image";
import CloudBackground from "./CloudBackground";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-base relative">
      <CloudBackground />
      <header className="p-8 md:p-12 relative z-10">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <Image 
              src="/siili.png" 
              alt="Siilikuin mascot" 
              width={48} 
              height={48}
              className="rounded-lg"
            />
            <div>
              <h1 className="text-3xl font-bold text-fg-violet">Siilikuin</h1>
              <p className="text-sm text-fg-gray">Cloud, compassion, code.</p>
            </div>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-fg-gray hover:text-fg-seafoam transition-colors">Services</a>
            <a href="#" className="text-fg-gray hover:text-fg-seafoam transition-colors">About</a>
            <a href="#" className="text-fg-gray hover:text-fg-seafoam transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      <main className="px-8 md:px-12 py-16 max-w-7xl mx-auto relative z-10">
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
            <button className="bg-bg-seafoam text-fg-violet px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
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
              className="mb-4 opacity-30"
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

        <section className="text-center mb-20">
          <Image 
            src="/siili.png" 
            alt="Siilikuin mascot" 
            width={120} 
            height={120}
            className="mx-auto mb-6 opacity-20"
          />
          <h2 className="text-4xl font-bold text-fg-violet mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-fg-gray mb-8 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
          </p>
          <button className="bg-bg-seafoam text-fg-seafoam px-8 py-4 rounded-lg text-lg hover:opacity-90 transition-opacity">
            Contact Us Today
          </button>
        </section>
      </main>

      <footer className="bg-fg-violet text-fg-white p-8 md:p-12 relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image 
                src="/siili.png" 
                alt="Siilikuin mascot" 
                width={32} 
                height={32}
                className="rounded"
              />
              <h3 className="text-2xl font-bold text-bg-gray">Siilikuin</h3>
            </div>
            <p className="text-bg-gray mb-2">
              Excellence in software consultancy.
            </p>
            <p className="text-sm text-bg-seafoam italic">
              Cloud, compassion, code.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-bg-gray">Services</h4>
            <ul className="space-y-2 text-bg-gray">
              <li><a href="#" className="hover:text-bg-seafoam transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-bg-seafoam transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-bg-seafoam transition-colors">Cloud Solutions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-bg-gray">Company</h4>
            <ul className="space-y-2 text-bg-gray">
              <li><a href="#" className="hover:text-bg-seafoam transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-bg-seafoam transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-bg-seafoam transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-bg-gray">Contact</h4>
            <ul className="space-y-2 text-bg-gray">
              <li>info@siilikuin.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Business Ave, Suite 100</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-bg-gray/20">
          <p className="text-center text-bg-gray">
            © 2024 Siilikuin. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}