import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="text-center mb-20">
      <Image 
        src="/siili.png" 
        alt="Siilikuin mascot" 
        width={120} 
        height={120}
        className="mx-auto mb-6"
      />
      <h2 className="text-3xl md:text-4xl font-bold text-fg-violet mb-4">
        Got a project in mind?
      </h2>
      <p className="text-lg md:text-xl text-fg-gray mb-8 max-w-2xl mx-auto">
        Let&apos;s discuss how I can help you build something that actually works.
      </p>
      <Link href="https://calendly.com/andrew-siilikuin" className="bg-bg-seafoam text-fg-seafoam px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg hover:opacity-90 transition-opacity inline-block">
        Let&apos;s talk
      </Link>
    </section>
  );
}