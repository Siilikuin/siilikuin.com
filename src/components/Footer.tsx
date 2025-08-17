import Image from "next/image";

export default function Footer() {
  return (
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
            <li><a href="/services" className="hover:text-bg-seafoam transition-colors">Web Development</a></li>
            <li><a href="/services" className="hover:text-bg-seafoam transition-colors">Mobile Apps</a></li>
            <li><a href="/services" className="hover:text-bg-seafoam transition-colors">Cloud Solutions</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-bg-gray">Company</h4>
          <ul className="space-y-2 text-bg-gray">
            <li><a href="/about" className="hover:text-bg-seafoam transition-colors">About Us</a></li>
            <li><a href="/about" className="hover:text-bg-seafoam transition-colors">Careers</a></li>
            <li><a href="/blog" className="hover:text-bg-seafoam transition-colors">Blog</a></li>
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
  );
}