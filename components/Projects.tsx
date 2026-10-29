import { CheckCircle2, Server, Cloud, Bot } from "lucide-react";

export default function Projects() {
  const caseStudies = [
    {
      title: "Amazon Connect & Salesforce Voice Migration",
      client: "Hyundai Capital Canada",
      sector: "Automotive Finance Operations",
      period: "2024",
      image: "/assets/wikimedia-servers-0001-42.jpg",
      imageAlt: "Enterprise cloud servers and data storage infrastructure",
      challenge:
        "Replace an aging on-premises Cisco UCCE telephony environment with a cloud-native CCaaS solution tightly integrated into Salesforce CRM, without interrupting financial support services.",
      solution:
        "Architected and deployed an integrated Amazon Connect solution embedded into Salesforce Service Cloud Voice. Built AWS Lambda serverless functions to dynamically drive contact flows, configured Contact Lens speech analytics, and established a data lake pipeline (Redshift, Snowflake, S3) for real-time queue and agent dashboards.",
      highlights: [
        "Single-pane agent workspace embedded directly inside Salesforce console",
        "Automated speech analytics and sentiment tracking via AWS Contact Lens",
        "Near real-time queue telemetry and reporting via Snowflake & Redshift",
        "Migration from legacy Cisco UCCE with zero business downtime",
      ],
      technologies: ["Amazon Connect", "Salesforce Voice", "AWS Lambda", "Snowflake", "Redshift", "CloudWatch"],
    },
    {
      title: "Genesys Cloud CX & Conversational AI",
      client: "VoiceBootcamp Enterprise Engagements",
      sector: "Banking, Insurance & Healthcare",
      period: "2018 – 2024",
      image: "/assets/itu-council-2018-40622286475.jpg",
      imageAlt: "Enterprise communications summit and governance assembly",
      challenge:
        "Transition diverse enterprise organizations from fragmented on-premises PBXs (Cisco, AudioCodes, legacy Genesys) to unified cloud contact centers with intelligent natural language self-service.",
      solution:
        "Engineered full-stack Genesys Cloud CX deployments across voice, email, callback, SMS, and chat. Connected Google Dialogflow CX and AWS Lex v2 conversational virtual agents for automated self-service, and authored PCI-DSS compliant Architect call flows for secure transaction processing.",
      highlights: [
        "End-to-end cloud migrations across regulated enterprise industries",
        "Natural language IVR deflection with Google Dialogflow CX & Lex v2",
        "Full PCI-DSS compliance in payment collection and credit card data handling",
        "Bullseye, predictive, and conditional agent skill routing setups",
      ],
      technologies: ["Genesys Cloud CX", "Google Dialogflow CX", "AWS Lex v2", "Edge SBC", "WebRTC", "Salesforce"],
    },
    {
      title: "Wholesale VoIP SoftSwitch & Infrastructure",
      client: "IBSYS Canada Inc.",
      sector: "Telecommunications & Carrier Hubs",
      period: "2003 – 2013",
      image: "/assets/19-inch-racks-mit-agr.jpg",
      imageAlt: "Carrier-grade 19-inch telecommunication relay racks",
      challenge:
        "Design, build, and maintain carrier-grade wholesale VoIP infrastructure capable of handling high-volume A-Z termination routes, DIDs, and interconnects with Tier-1 carriers.",
      solution:
        "Supervised and operated 4 Data Center POPs, including key interconnects at the carrier hub (151 Front Street, Toronto) with SaskTel, SingTel, and MCI/Verizon. Implemented Class 5 SoftSwitches, managed thousands of SIP and H.323 peers, and provisioned over 10,000 IP endpoints.",
      highlights: [
        "Carrier-grade 99.999% voice availability across 4 Data Center facilities",
        "Interconnections with Tier-1 carriers (Verizon, SingTel, SaskTel, Qwest)",
        "Over 10,000 IP phones, ATAs, and gateways deployed",
        "Custom softphone applications with real-time balance tracking and CDR rating",
      ],
      technologies: ["Class 5 SoftSwitches", "SIP / H.323 / SS7", "151 Front St POP", "Carrier Interconnects", "PRI"],
    },
  ];

  return (
    <section id="projects" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-ink tracking-tight mb-4">
            Enterprise Cloud Voice Projects.
          </h2>
          <p className="text-base sm:text-lg text-ink font-normal leading-relaxed">
            Representative case studies illustrating cloud migrations, conversational AI integrations, and carrier-grade telecommunications engineering.
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-16">
          {caseStudies.map((project, idx) => (
            <div
              key={idx}
              className="bg-[#1c1c1c] rounded p-8 sm:p-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
                {/* Text details (7 cols) */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2.5 text-sm text-sage font-medium">
                    <span>{project.client} · {project.sector}</span>
                    <span className="text-ink-muted">·</span>
                    <span className="text-ink-muted">{project.period}</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-ink leading-tight">
                    {project.title}
                  </h3>

                  <div className="space-y-4 pt-2 text-base text-ink leading-relaxed">
                    <div>
                      <span className="text-sm font-medium text-sage block mb-1">
                        The Architecture Challenge
                      </span>
                      <p>{project.challenge}</p>
                    </div>

                    <div>
                      <span className="text-sm font-medium text-sage block mb-1">
                        Engineered Solution
                      </span>
                      <p>{project.solution}</p>
                    </div>
                  </div>
                </div>

                {/* Real Photograph (5 cols) */}
                <div className="lg:col-span-5">
                  <div className="rounded overflow-hidden bg-surface aspect-[16/11]">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="w-full h-full object-cover brightness-90 contrast-105"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Verified Outcomes */}
              <div className="pt-6">
                <span className="text-sm font-medium text-ink block mb-4">
                  Verified Outcomes & Deliverables:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {project.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-sm text-ink leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-sage mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm text-ink-muted mr-2">
                    Stack:
                  </span>
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 text-sm bg-surface text-ink rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
