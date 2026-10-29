export default function About() {
  const coreCompetencies = [
    {
      title: "Cloud Contact Centers",
      description: "Architecture, migration, and operation of Amazon Connect, Genesys Cloud CX, Webex Calling, and Cisco UCCE platforms with high availability.",
    },
    {
      title: "CRM & Omnichannel Integration",
      description: "Connecting Salesforce Service Cloud Voice and custom CRMs with intelligent call flows and unified agent desktop workspaces.",
    },
    {
      title: "Conversational AI & NLU",
      description: "Designing natural language bots, sentiment analysis, and self-service IVR using Google Dialogflow CX, AWS Lex v2, and Contact Lens.",
    },
    {
      title: "Carrier Telecom Infrastructure",
      description: "Deep foundation in SIP, H.323, MPLS, SD-WAN, Session Border Controllers (SBC), and carrier interconnects across major data centers.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-serif text-3xl sm:text-5xl font-medium text-ink tracking-tight mb-8">
          Carrier Telephony & Cloud Contact Centers.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left Column / Narrative */}
          <div className="lg:col-span-7 space-y-6 text-ink leading-relaxed text-base sm:text-lg font-normal">
            <p>
              With over seventeen years in enterprise Information Technology and telecommunications, my career began at the core of carrier infrastructure: supervising wholesale VoIP softswitches, managing data center points of presence, and provisioning thousands of endpoints across North American telecom corridors.
            </p>

            <p>
              Over the past five years, I have translated that telecommunications engineering discipline into cloud-native Contact Center as a Service (CCaaS) transformations. At organizations like <strong className="font-medium text-sage">Hyundai Capital Canada</strong> and <strong className="font-medium text-sage">VoiceBootcamp</strong>, I have led complex migrations replacing legacy on-premises systems with platforms like <strong className="font-medium text-ink">Amazon Connect</strong>, <strong className="font-medium text-ink">Genesys Cloud CX</strong>, and <strong className="font-medium text-ink">Salesforce Service Cloud Voice</strong>.
            </p>

            <p>
              My approach connects telephony directly with business analytics: integrating real-time telemetry through AWS Redshift, Snowflake, and CloudWatch, deploying conversational AI with Dialogflow and Lex, and building PCI-DSS compliant workflows that support agents while optimizing operational efficiency.
            </p>
          </div>

          {/* Right Column / Real Photo & Facts */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded overflow-hidden bg-[#1c1c1c] aspect-[16/10] relative">
              <img
                src="/assets/itu-council-2018-40622286475.jpg"
                alt="International Telecommunication Union global communications delegation"
                className="w-full h-full object-cover brightness-85 contrast-105"
                loading="lazy"
              />
              <div className="p-3 bg-[#1c1c1c] text-sm text-ink-muted">
                <span>International telecommunications standards & enterprise governance</span>
              </div>
            </div>

            <div className="p-6 bg-[#1c1c1c] rounded space-y-4">
              <div>
                <span className="text-sm text-ink-muted block">Current Focus</span>
                <span className="text-base text-ink font-medium mt-0.5 block">
                  CRM Product Management & CCaaS Solutions
                </span>
              </div>
              <div>
                <span className="text-sm text-ink-muted block">Core Methodology</span>
                <span className="text-base text-ink font-medium mt-0.5 block">
                  Agile, Scrum, Kanban & Lean SDLC Delivery
                </span>
              </div>
              <div>
                <span className="text-sm text-ink-muted block">Location</span>
                <span className="text-base text-ink font-medium mt-0.5 block">
                  Toronto, Ontario, Canada (Remote & Hybrid)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Competencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreCompetencies.map((item, index) => (
            <div key={index} className="p-6 bg-[#1c1c1c] rounded space-y-2">
              <span className="text-sm text-sage font-medium block">
                {item.title}
              </span>
              <p className="text-sm text-ink leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
