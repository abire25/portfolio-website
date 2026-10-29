import { ArrowUpRight, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Statement (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3 text-sm text-ink-muted">
              <span className="text-sage font-medium">
                Senior Advisory & Architecture
              </span>
              <span className="text-ink-dim">·</span>
              <span className="inline-flex items-center gap-1.5 text-ink-muted">
                <MapPin className="w-4 h-4 text-sage" />
                Toronto, Ontario, Canada
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-ink leading-tight">
              Modern Voice Clouds & Contact Centers.
            </h1>

            <p className="text-base sm:text-lg text-ink leading-relaxed font-normal">
              I am <strong className="font-medium text-sage">Mashuqul Chowdhury</strong>, a CRM Product Manager 
              and Enterprise Voice Engineer with over seventeen years in telecommunications and five years 
              leading CCaaS transformations across Amazon Connect, Genesys Cloud CX, Cisco, and Salesforce Voice.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium bg-sage text-[#1c1c1c] rounded hover:bg-sage-hover transition-colors"
              >
                <span>View Implementations</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium bg-surface text-ink hover:text-sage transition-colors rounded"
              >
                <span>Get in Touch</span>
              </a>

              <a
                href="https://www.linkedin.com/in/mashuqul-chowdhury-033a1625/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 text-sm text-ink-muted hover:text-ink transition-colors"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Editorial Career Numbers */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8">
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-medium text-ink">17+ Years</span>
                <span className="text-sm text-ink-muted block mt-1">Carrier Telecommunications</span>
              </div>
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-medium text-sage">5+ Years</span>
                <span className="text-sm text-ink-muted block mt-1">CCaaS & Conversational AI</span>
              </div>
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-medium text-ink">10,000+</span>
                <span className="text-sm text-ink-muted block mt-1">Endpoints Provisioned</span>
              </div>
            </div>
          </div>

          {/* Right Column / Real Telecom Tower Photograph (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="rounded overflow-hidden bg-surface aspect-[4/5] max-w-md mx-auto relative">
              <img
                src="/assets/vodno-telecommunication-tower.jpg"
                alt="Telecommunication relay tower reaching into overcast skies"
                className="w-full h-full object-cover brightness-90 contrast-105"
              />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-ink-dim bg-[#1c1c1c]/90 p-2.5 rounded">
                <span>Infrastructure · Telecommunication Lattice & Microwave Ingress</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
