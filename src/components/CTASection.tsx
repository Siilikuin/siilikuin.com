import Image from "next/image";

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
  );
}