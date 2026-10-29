import { Award, GraduationCap, CheckCircle } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      category: "CCaaS & Contact Centers",
      skills: [
        "Amazon Connect",
        "Genesys Cloud CX",
        "Webex Contact Center & Enterprise",
        "Cisco UCCE & UCCX",
        "Google CCAIP Dialogflow CX & EX",
        "Contact Lens Speech Analytics",
        "Workforce Management (WFM)",
        "Bullseye & Predictive Routing",
      ],
    },
    {
      category: "AWS Cloud & Data Lake",
      skills: [
        "AWS Lambda (Serverless)",
        "Amazon Lex v2",
        "Snowflake & Redshift",
        "Amazon S3 Analytics Lake",
        "CloudWatch Telemetry",
        "AWS Pinpoint Dialers",
        "CloudFormation & DynamoDB",
        "API Gateway & IAM",
      ],
    },
    {
      category: "Voice & Carrier Networks",
      skills: [
        "Cisco CUCM & Unity (CUC)",
        "Microsoft Teams Voice",
        "Session Border Controllers (SBC)",
        "SIP, H.323 & SCCP Protocols",
        "Cisco SD-WAN & MPLS",
        "WebRTC & Softphones",
        "DID & Carrier Interconnects",
        "Expressway & Jabber",
      ],
    },
    {
      category: "CRM & Enterprise Systems",
      skills: [
        "Salesforce Service Cloud Voice",
        "Tableau Reporting",
        "MuleSoft Integration",
        "PCI-DSS IVR Compliance",
        "Agile, Scrum & Kanban SDLC",
        "Microsoft Active Directory",
        "NICE inContact",
        "Capacity Planning & Forecasting",
      ],
    },
  ];

  const certifications = [
    "CCNP Collaboration (Cisco Certified Network Professional)",
    "Cisco Cloud Collaboration Solutions (CCS)",
    "CCNA & CCNP Routing & Switching",
    "Beyond Genesys Cloud CX",
    "Microsoft Teams Administrator",
    "Amazon Web Services (AWS)",
    "Palo Alto Networks",
    "Axelos ITIL v4 Foundation",
  ];

  return (
    <section id="skills" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-ink tracking-tight mb-4">
            Technical Capabilities & Architecture.
          </h2>
          <p className="text-base sm:text-lg text-ink font-normal leading-relaxed">
            A comprehensive overview of platforms, serverless technologies, networking protocols, and industry certifications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-[#1c1c1c] rounded p-6 space-y-4"
            >
              <h3 className="font-serif text-xl font-medium text-ink pb-2">
                {cat.category}
              </h3>
              <ul className="space-y-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-2 text-sm text-ink">
                    <span className="w-1.5 h-1.5 rounded-full bg-sage shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications & Education Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
          {/* Certifications (8 cols) */}
          <div className="lg:col-span-8 bg-[#1c1c1c] rounded p-8 sm:p-10">
            <div className="flex items-center gap-2.5 mb-6 text-ink">
              <Award className="w-5 h-5 text-sage" />
              <h3 className="font-serif text-xl sm:text-2xl font-medium">
                Professional Certifications
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, cIdx) => (
                <div key={cIdx} className="flex items-start gap-2.5 text-sm text-ink leading-relaxed">
                  <CheckCircle className="w-4 h-4 text-sage mt-1 shrink-0" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education (4 cols) */}
          <div className="lg:col-span-4 bg-[#1c1c1c] rounded p-8 sm:p-10 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 text-ink">
                <GraduationCap className="w-5 h-5 text-sage" />
                <h3 className="font-serif text-xl font-medium">
                  Education
                </h3>
              </div>

              <div>
                <span className="font-serif text-lg text-ink block font-medium">
                  triOS College Business Technology Healthcare
                </span>
                <span className="text-sm text-sage block mt-1">
                  IT Professionals, Information Technology
                </span>
                <span className="text-sm text-ink-muted block mt-0.5">
                  2019 – 2021 · Toronto, Canada
                </span>
              </div>
            </div>

            <div className="pt-6 mt-6">
              <span className="text-sm text-ink-muted block font-medium">
                Continuous Learning
              </span>
              <p className="text-sm text-ink mt-1 leading-relaxed">
                Ongoing specialization in cloud contact centers, conversational AI, and serverless microservices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
