import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-fg-violet text-fg-white p-8 md:p-12 relative z-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
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
          <p className="text-bg-gray">
            Cloud, compassion, code
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-bg-gray">Links</h4>
          <ul className="space-y-2 text-bg-gray">
            <li><Link href="/about" className="hover:text-bg-seafoam transition-colors">About</Link></li>
            <li><Link href="/software" className="hover:text-bg-seafoam transition-colors">Software</Link></li>
            <li><Link href="/case-studies" className="hover:text-bg-seafoam transition-colors">Case Studies</Link></li>
            <li><Link href="/process" className="hover:text-bg-seafoam transition-colors">Process</Link></li>
            <li><Link href="/blog" className="hover:text-bg-seafoam transition-colors">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-bg-gray">Contact</h4>
          <ul className="space-y-2 text-bg-gray">
            <li><Link href="https://calendly.com/andrew-siilikuin" className="hover:text-bg-seafoam transition-colors">Schedule a call</Link></li>
            <li>andrew@siilikuin.com</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-bg-gray/20">
        <p className="text-center text-bg-gray">
          © 2022-2025 Siilikuin. All rights reserved.
        </p>
      </div>
    </footer>
  );
}