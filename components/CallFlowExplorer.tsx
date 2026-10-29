"use client";

import { useState } from "react";
import { Phone, Bot, Headphones, BarChart3, ArrowRight, Layers } from "lucide-react";

export default function CallFlowExplorer() {
  const [activeStep, setActiveStep] = useState(0);

  const architectureStages = [
    {
      id: "inbound",
      title: "Inbound Carrier & IVR",
      subtitle: "Carrier Ingress & Secure Routing",
      icon: Phone,
      platform: "Amazon Connect / Genesys Cloud CX",
      protocols: "SIP, WebRTC, RTP, DID",
      description:
        "Calls enter via redundant carrier SIP trunks into Amazon Connect or Genesys Cloud CX Edge SBCs. The system executes initial security checks and PCI-DSS compliant Architect scripts.",
      implementationDetails: [
        "Provisioned over 10,000 DIDs, extensions, and toll-free numbers.",
        "Built resilient multi-region trunking with failover queues.",
        "PCI-DSS compliant secure IVR transaction workflows preventing plain-text cardholder data exposure.",
      ],
      metrics: "99.999% Voice Uptime · Sub-50ms SBC Latency",
    },
    {
      id: "ai-nlu",
      title: "Conversational AI & NLU",
      subtitle: "Natural Language Intent Classification",
      icon: Bot,
      platform: "Google Dialogflow CX / AWS Lex v2",
      protocols: "NLU, NLP, Speech-to-Text, REST API",
      description:
        "The caller's intent is parsed using conversational AI before queue placement. Self-service workflows authenticate callers, resolve common inquiries, or route with context.",
      implementationDetails: [
        "Designed conversational flows, entities, and fallback branches.",
        "Integrated AWS Lambda serverless webhooks to fetch real-time customer account balances.",
        "Reduced agent transfer volume by resolving Tier-1 inquiries automatically in natural language.",
      ],
      metrics: "35% Self-Service Deflection · 94% Intent Accuracy",
    },
    {
      id: "crm-routing",
      title: "Agent Desktop & CRM",
      subtitle: "Omnichannel Screenpop & Softphone",
      icon: Headphones,
      platform: "Salesforce Service Cloud Voice",
      protocols: "CTI, WebRTC, Open CTI, REST",
      description:
        "Calls are intelligently routed via Bullseye or Predictive routing directly to an agent. Salesforce Service Cloud Voice pops up the caller's complete profile and interaction history.",
      implementationDetails: [
        "Embedded softphone directly within Salesforce console to eliminate tab-switching.",
        "Automated case creation and screenpops synced to caller ANI or customer ID.",
        "Configured skill-based and conditional queue distributions for specialized agent tiers.",
      ],
      metrics: "40s Average Handle Time Reduction · Single Pane of Glass",
    },
    {
      id: "telemetry",
      title: "Telemetry & Analytics",
      subtitle: "Speech Intelligence & Reporting",
      icon: BarChart3,
      platform: "Snowflake, Redshift & Contact Lens",
      protocols: "Contact Lens, S3 Lake, CloudWatch, Tableau",
      description:
        "Every second of audio and metadata is ingested into analytics data lakes. Real-time speech analytics track sentiment, queue adherence, and workforce forecasting.",
      implementationDetails: [
        "Live speech analytics using Contact Lens to detect customer frustration and agent compliance.",
        "Built executive dashboards in Tableau powered by Amazon Redshift and Snowflake data pipelines.",
        "CloudWatch log monitoring and alerting for contact flow errors and queue capacity spikes.",
      ],
      metrics: "Real-time Queue Telemetry · Automated Quality Scoring",
    },
  ];

  const current = architectureStages[activeStep];

  return (
    <section id="architecture" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-ink tracking-tight mb-4">
            Enterprise Contact Center Operations.
          </h2>
          <p className="text-base sm:text-lg text-ink font-normal leading-relaxed">
            Explore how carrier telephony, conversational AI, CRM agent workspaces, and real-time cloud data pipelines connect together in production.
          </p>
        </div>

        {/* Step Navigation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {architectureStages.map((stage, idx) => {
            const Icon = stage.icon;
            const isSelected = activeStep === idx;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStep(idx)}
                className={`p-5 text-left rounded transition-colors flex flex-col justify-between ${
                  isSelected
                    ? "bg-surface text-ink"
                    : "bg-[#222222] text-ink-muted hover:text-ink"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon className={`w-5 h-5 ${isSelected ? "text-sage" : "text-ink-muted"}`} />
                  <span className="text-sm text-ink-muted">Step {idx + 1}</span>
                </div>
                <div>
                  <span className="block text-sm text-ink-muted mb-0.5">
                    Pipeline {idx + 1}
                  </span>
                  <span className={`text-base font-medium block truncate ${isSelected ? "text-ink font-semibold" : "text-ink"}`}>
                    {stage.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Stage Panel */}
        <div className="bg-surface rounded p-6 sm:p-10 transition-colors">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column / Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 bg-[#1c1c1c] text-sage text-sm font-medium rounded">
                  {current.platform}
                </span>
                <span className="text-sm text-ink-muted">
                  Protocols: {current.protocols}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-2">
                  {current.title}
                </h3>
                <p className="text-sm text-sage mb-4 font-medium">
                  {current.subtitle}
                </p>
                <p className="text-base text-ink leading-relaxed">
                  {current.description}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <span className="text-sm text-ink block font-medium">
                  Key Engineering Deliverables:
                </span>
                <ul className="space-y-2">
                  {current.implementationDetails.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5 text-sm text-ink leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-sage mt-2 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column / Architecture Snapshot */}
            <div className="lg:col-span-5 bg-[#1c1c1c] rounded p-6 space-y-6">
              <div className="flex items-center justify-between pb-3">
                <div className="flex items-center gap-2 text-sm text-ink font-medium">
                  <Layers className="w-4 h-4 text-sage" />
                  <span>Pipeline Telemetry</span>
                </div>
                <span className="text-sm text-sage font-medium">Active Stage {activeStep + 1} of 4</span>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-sm text-ink-muted block">Observed Metric Benchmark</span>
                  <span className="text-lg font-serif text-ink font-medium mt-1 block">
                    {current.metrics}
                  </span>
                </div>

                <div className="pt-3">
                  <span className="text-sm text-ink-muted block mb-2">Enterprise Ecosystem Integration</span>
                  <div className="flex flex-wrap gap-2">
                    {current.platform.split(" / ").concat(current.protocols.split(", ")).map((tag, tIdx) => (
                      <span key={tIdx} className="text-sm bg-surface text-ink px-2.5 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Progress Flow Controls */}
              <div className="flex items-center justify-between pt-4">
                <button
                  onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : 3))}
                  className="text-sm text-ink hover:text-sage px-3 py-1.5 rounded bg-surface transition-colors"
                >
                  Previous Stage
                </button>
                <button
                  onClick={() => setActiveStep((prev) => (prev < 3 ? prev + 1 : 0))}
                  className="inline-flex items-center gap-1.5 text-sm text-[#1c1c1c] bg-sage hover:bg-sage-hover px-4 py-1.5 rounded font-medium transition-colors"
                >
                  <span>Next Stage</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
