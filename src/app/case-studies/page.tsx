import type { Metadata } from "next";
import Image from "next/image";
import CloudBackground from "../CloudBackground";
import Header from "../../components/Header";
import CTASection from "../../components/CTASection";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Case Studies",
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-bg-base relative">
      <CloudBackground />
      <Header />
      
      <main className="px-8 md:px-12 py-16 max-w-7xl mx-auto relative z-10 mt-20">
        <section className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-fg-violet mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-fg-gray max-w-3xl">
            Nothing here yet! But there will be.
          </p>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
}