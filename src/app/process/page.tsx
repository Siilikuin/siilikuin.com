import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import CloudBackground from "../CloudBackground";

export default function Process() {
  return (
    <div className="min-h-screen bg-bg-base relative">
      <CloudBackground />
      <Header />
      
      <main className="px-8 md:px-12 max-w-4xl mx-auto py-20 relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-fg-violet mb-8">
          How I Work
        </h1>
        
        <div className="prose prose-lg text-fg-gray mb-12">
          <p className="text-xl">
            I&apos;ve found that jumping straight into big projects usually goes badly for everyone. So I break things down into three steps that make sense.
          </p>
        </div>

        <div className="space-y-12">
          <section className="bg-bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-3xl font-bold text-fg-violet mb-3">
              Phase 1: Let&apos;s Talk
            </h3>
            <p className="text-xl text-fg-seafoam font-medium mb-4">
              30 minutes to figure out if I can actually help
            </p>
            <p className="text-fg-gray mb-6">
              We hop on a call and you tell me what you&apos;re trying to build. I&apos;ll ask questions about the technical stuff, timeline, and budget. By the end, we&apos;ll both know if this is a good fit.
            </p>
            <ul className="space-y-3 text-fg-gray">
              <li className="flex items-start">
                <span className="text-fg-seafoam mr-2">•</span>
                <span><strong>Time:</strong> 30 minutes</span>
              </li>
              <li className="flex items-start">
                <span className="text-fg-seafoam mr-2">•</span>
                <span><strong>Cost:</strong> Free</span>
              </li>
              <li className="flex items-start">
                <span className="text-fg-seafoam mr-2">•</span>
                <span><strong>Outcome:</strong> We either move forward or I point you to someone who&apos;d be better suited</span>
              </li>
            </ul>
          </section>

          <section className="bg-bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-3xl font-bold text-fg-violet mb-3">
              Phase 2: The Plan
            </h3>
            <p className="text-xl text-fg-seafoam font-medium mb-4">
              2 weeks to map out what we&apos;re actually building
            </p>
            <p className="text-fg-gray mb-6">
              If we decide to work together, I&apos;ll spend two weeks writing up exactly what I understand needs to be built, how I&apos;d build it, and what it&apos;ll cost. This is about 8-10 hours of focused work, spread across evenings and weekends. I have a day job, so I only take on what I can deliver in this timeframe.
            </p>
            <p className="text-fg-gray mb-6">
              You get a technical roadmap that captures all the important decisions - architecture, tools, timeline. Usually 5-10 pages of clear direction that you can hand to any competent developer.
            </p>
            <p className="text-fg-gray mb-6 font-medium">
              Most clients take the plan and run with it. That&apos;s the point.
            </p>
            <ul className="space-y-3 text-fg-gray mb-6">
              <li className="flex items-start">
                <span className="text-fg-seafoam mr-2">•</span>
                <span><strong>Timeline:</strong> Delivered within 14 days</span>
              </li>
              <li className="flex items-start">
                <span className="text-fg-seafoam mr-2">•</span>
                <span><strong>Cost:</strong> €250 (while I build my case study portfolio)</span>
              </li>
              <li className="flex items-start">
                <span className="text-fg-seafoam mr-2">•</span>
                <span><strong>What you get:</strong> A technical roadmap you can implement with anyone</span>
              </li>
              <li className="flex items-start">
                <span className="text-fg-seafoam mr-2">•</span>
                <span><strong>Bonus:</strong> For 30 days after delivery, I&apos;ll answer implementation questions via email (up to 2 hours total). This helps your team get unstuck without keeping me on retainer.</span>
              </li>
            </ul>
          </section>

          <section className="bg-bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-3xl font-bold text-fg-violet mb-3">
              Phase 3: Build It (Rarely)
            </h3>
            <p className="text-xl text-fg-seafoam font-medium mb-4">
              1-3 months of actual development
            </p>
            <p className="text-fg-gray mb-6">
              Very occasionally, I&apos;ll build the implementation myself - but this is the exception, not the rule. The whole point of Phase 2 is to give you a roadmap you can take anywhere.
            </p>
            <p className="text-fg-gray mb-6">
              If I do take on development, it&apos;s because the project hits a sweet spot: technically fascinating, perfectly timed, and aligned with something I&apos;m already exploring. This happens maybe once or twice a year.
            </p>
            <p className="text-fg-gray mb-6">
              Why so selective? Taking on development means I can&apos;t help other clients with Phase 2 planning for months. Since my evenings and weekends are limited, I have to choose between helping one client build or helping many clients plan.
            </p>
            <ul className="space-y-3 text-fg-gray">
              <li className="flex items-start">
                <span className="text-fg-seafoam mr-2">•</span>
                <span><strong>Time:</strong> 1-3 months of focused development</span>
              </li>
              <li className="flex items-start">
                <span className="text-fg-seafoam mr-2">•</span>
                <span><strong>Cost:</strong> We&apos;ll agree on terms if we get here</span>
              </li>
              <li className="flex items-start">
                <span className="text-fg-seafoam mr-2">•</span>
                <span><strong>Reality check:</strong> Don&apos;t count on this happening - the Phase 2 plan is designed to stand on its own</span>
              </li>
            </ul>
          </section>
        </div>

        <section className="bg-bg-violet p-8 rounded-xl mt-16 text-center">
          <h3 className="text-3xl font-bold text-fg-white mb-6">
            Want to see if I can help?
          </h3>
          <Link 
            href="https://calendly.com/andrew-siilikuin" 
            className="bg-bg-seafoam text-fg-seafoam px-8 py-4 rounded-lg hover:opacity-90 transition-opacity inline-block font-medium text-lg mb-6"
          >
            Let&apos;s talk
          </Link>
          <p className="text-fg-white">
            Email is fine too: <a href="mailto:andrew@siilikuin.com" className="underline hover:opacity-90">andrew@siilikuin.com</a>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}