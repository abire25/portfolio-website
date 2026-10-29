import { Calendar, MapPin } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "Hyundai Capital Canada",
      role: "CRM Product Manager",
      period: "March 2024 – November 2024 (9 months)",
      location: "Toronto, Ontario, Canada",
      summary:
        "Led the enterprise migration and integration of Amazon Connect Contact Center with Salesforce Service Cloud Voice, transitioning off legacy Cisco UCCE.",
      bullets: [
        "Oversaw the end-to-end migration process ensuring zero disruption to automotive financing customer support operations.",
        "Engineered real-time telemetry pipelines leveraging AWS Redshift, Snowflake, Amazon S3, Analytics Data Lake, and CloudWatch to generate metric reports and dashboards for queues, agents, and workflows.",
        "Employed Contact Lens for automated speech analytics, agent sentiment scoring, and compliance monitoring.",
        "Designed and implemented complex Amazon Connect contact flows triggering serverless AWS Lambda functions.",
        "Managed workforce management (WFM) tasks including forecasting, scheduling, and evaluation form structures.",
        "Configured outbound dialers and proactive communication campaigns using AWS Pinpoint, creating proof-of-concepts (POCs) and testing call trees.",
      ],
      technologies: [
        "Amazon Connect",
        "Salesforce Service Cloud Voice",
        "AWS Lambda",
        "Redshift",
        "Snowflake",
        "Contact Lens",
        "Tableau",
        "AWS Pinpoint",
      ],
    },
    {
      company: "VoiceBootcamp Inc",
      role: "Voice, Network & CCaaS Consultant",
      period: "October 2018 – July 2024 (5 years 10 months)",
      location: "Toronto, Ontario, Canada",
      summary:
        "Delivered full-lifecycle Genesys Cloud CX architectures, CRM integrations, and large-scale cloud migrations for enterprise clients across North America.",
      bullets: [
        "Implemented and maintained Genesys Cloud CX (PureCloud) components: Scripts, Data Tables, Edge SBC (on-premises & BYOC), WFM, Workspace, Analytics, WebRTC, and AppFoundry integrations.",
        "Designed and automated omnichannel inbound and outbound customer journeys across Voice, Email, Callback, SMS, Webchat, and Conversational Bots.",
        "Engineered deep integrations connecting Genesys Cloud CX with Salesforce CRM, Google Dialogflow CX/EX, AWS Lambda, and Amazon Lex v2.",
        "Spearheaded enterprise cloud migrations to Genesys Cloud for travel agencies, healthcare providers, banking institutions, and insurance companies from legacy Cisco, Genesys on-premise, and AudioCodes.",
        "Developed Architect scripts for secure transaction processing and PCI-DSS compliant customer payment handling.",
        "Led cross-functional discovery, architecture, and operational support teams adhering to Agile, Scrum, Kanban, and Lean SDLC methodologies.",
      ],
      technologies: [
        "Genesys Cloud CX",
        "Google Dialogflow CX",
        "AWS Lex v2",
        "Salesforce CRM",
        "Edge SBC",
        "WebRTC",
        "PCI-DSS IVR",
        "Scrum / Agile",
      ],
    },
    {
      company: "IP Core Network Solutions Inc.",
      role: "Amazon Connect Specialist",
      period: "March 2023 – August 2023 (6 months)",
      location: "Toronto, Ontario, Canada",
      summary:
        "Designed and optimized cloud contact flows, conversational bot architectures, and enterprise REST API integrations.",
      bullets: [
        "Developed end-to-end services including Call/Chat queue flows, Agent Experience workspaces, Contact Lens speech analytics, and CTR data analysis.",
        "Optimized AWS-native contact flows utilizing Lambda, Lex, DynamoDB, CloudFormation, CloudWatch, Chat & Voice Bots, Voice ID, IAM, S3, KMS, and SNS.",
        "Developed and maintained secure REST API integrations with enterprise platforms including Genesys Cloud and NICE inContact.",
        "Engineered conversational flows, intents, entities, and responses to deliver natural customer self-service experiences.",
        "Managed the full SDLC and leveraged forecasting, capacity planning, and scheduling to optimize contact center operational cost.",
      ],
      technologies: [
        "Amazon Connect",
        "AWS Lambda",
        "DynamoDB",
        "Lex",
        "CloudWatch",
        "NICE inContact",
        "REST APIs",
      ],
    },
    {
      company: "IP Core Network Inc.",
      role: "Technical Sales Engineer",
      period: "February 2017 – August 2023 (6 years 7 months)",
      location: "Toronto, Ontario, Canada",
      summary:
        "Partnered with enterprise clients to translate business communication challenges into voice and network solutions.",
      bullets: [
        "Conducted technical discovery with client stakeholders to assess legacy telephony bottlenecks and plan modernization roadmaps.",
        "Designed high-level architectures and statements of work for unified communications, VoIP transitions, and contact center modernization.",
        "Provided technical governance across pre-sales scoping, proof-of-concept testing, and transition to implementation teams.",
      ],
      technologies: [
        "Technical Architecture",
        "Client Discovery",
        "VoIP Scoping",
        "Unified Communications",
        "Solution Design",
      ],
    },
    {
      company: "L7Connect Inc",
      role: "Voice / Network Engineer",
      period: "November 2014 – November 2018 (4 years 1 month)",
      location: "Hackensack, New Jersey, United States",
      summary:
        "Configured, administered, and upgraded multi-cluster Cisco Unified Communications systems and enterprise IP telephony networks.",
      bullets: [
        "Assisted with the deployment of Cisco Unified Communications Manager (CUCM) in high-availability multi-cluster environments.",
        "Deployed over 1,000 Cisco IP phones utilizing Cisco Bulk Administration Tool (BAT).",
        "Integrated CUCM with Cisco Unity Connection (CUC) for voicemail using SIP and SCCP between multi-site corporate locations.",
        "Hands-on execution of system migrations, upgrades, and maintenance using Cisco Prime Collaboration Deployment (PCD).",
        "Gathered use cases and built, optimized, and administered Cisco UCCX and UCCE ICM scripts, building custom reports in CUIC.",
      ],
      technologies: [
        "Cisco CUCM",
        "Cisco Unity (CUC)",
        "UCCX / UCCE",
        "ICM Scripting",
        "Cisco PCD",
        "CUIC Reporting",
        "SIP / SCCP",
      ],
    },
    {
      company: "IBSYS CANADA INC.",
      role: "Former Owner / CTO",
      period: "May 2003 – March 2013 (9 years 11 months)",
      location: "Toronto, Ontario, Canada",
      summary:
        "Built and led wholesale carrier VoIP operations, Class 5 SoftSwitches, and multi-POP data center infrastructure across North America.",
      bullets: [
        "Managed state-of-the-art VoIP solutions overseeing Class 5 SoftSwitches, wholesale termination and origination A-Z routing, DIDs, and SMS with Tier-1, Tier-2, and Tier-3 telecom operators.",
        "Supervised and coordinated operations across 4 Data Center POPs, establishing carrier interconnections with SaskTel, SingTel, and MCI/Verizon at 151 Front Street, Toronto.",
        "Configured and optimized networks spanning thousands of SIP, H.323 peers, PRI, IPPRI, and SS7 channels for carrier-grade transmission and high concurrency.",
        "Provisioned and configured networks supporting over 10,000 IP phones, ATAs, FXO, and FXS devices.",
        "Innovated customized softphone solutions with real-time balance tracking, rating engines, and comprehensive call detail records (CDRs).",
        "Implemented and maintained Unified Communication IP-PBX systems for diverse enterprise customer bases.",
      ],
      technologies: [
        "VoIP SoftSwitches (Class 5)",
        "SIP / H.323 / SS7",
        "Data Center POPs (151 Front St)",
        "Carrier Interconnects",
        "IP-PBX",
        "CDR Billing Engines",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-ink tracking-tight mb-4">
            Seventeen Years of Enterprise Voice Leadership.
          </h2>
          <p className="text-base sm:text-lg text-ink font-normal leading-relaxed">
            Detailed chronological record of enterprise roles, migrations, and infrastructure deployments extracted directly from verified credentials.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-8 sm:p-10 bg-surface rounded"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6 pb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-serif text-2xl sm:text-3xl font-medium text-ink">
                      {exp.company}
                    </h3>
                    <span className="px-2.5 py-0.5 text-sm font-medium bg-[#1c1c1c] text-sage rounded">
                      {exp.role}
                    </span>
                  </div>
                  <p className="text-base text-ink leading-relaxed max-w-2xl">
                    {exp.summary}
                  </p>
                </div>

                <div className="text-left md:text-right shrink-0 space-y-1">
                  <span className="inline-flex items-center gap-1.5 text-sm text-ink font-medium">
                    <Calendar className="w-4 h-4 text-sage" />
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-ink-muted block md:justify-end">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Bullet points */}
              <div className="space-y-3 mb-6">
                <span className="text-sm text-ink-muted block font-medium">
                  Key Scope & Deliverables:
                </span>
                <ul className="space-y-2.5">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-base text-ink leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-sage mt-2.5 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech stack tags */}
              <div className="pt-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm text-ink-muted mr-2">
                    Technologies:
                  </span>
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 text-sm bg-[#1c1c1c] text-ink rounded"
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
