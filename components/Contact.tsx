"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name || "Portfolio Visitor"}`
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:abire25@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-ink tracking-tight mb-4">
            Discuss Enterprise Voice Architecture.
          </h2>
          <p className="text-base sm:text-lg text-ink font-normal leading-relaxed">
            Whether you are planning a CCaaS cloud migration, optimizing Salesforce Service Cloud Voice, or seeking a senior product architect, reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Direct Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 bg-surface rounded space-y-4">
              <span className="text-sm text-ink-muted block font-medium">
                Direct Channels
              </span>

              <div className="space-y-4">
                <a
                  href="mailto:abire25@gmail.com"
                  className="flex items-center gap-3 text-ink hover:text-sage transition-colors group"
                >
                  <div className="p-3 rounded bg-[#1c1c1c] text-sage">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm text-ink-muted block">Email</span>
                    <span className="text-base text-ink font-medium">abire25@gmail.com</span>
                  </div>
                </a>

                <a
                  href="tel:6478492226"
                  className="flex items-center gap-3 text-ink hover:text-sage transition-colors group"
                >
                  <div className="p-3 rounded bg-[#1c1c1c] text-sage">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm text-ink-muted block">Phone (Work)</span>
                    <span className="text-base text-ink font-medium">647-849-2226</span>
                  </div>
                </a>

                <div className="flex items-center gap-3 text-ink">
                  <div className="p-3 rounded bg-[#1c1c1c] text-sage">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm text-ink-muted block">Location</span>
                    <span className="text-base text-ink font-medium">Toronto, Ontario, Canada</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social & Professional Networks */}
            <div className="p-8 bg-surface rounded space-y-4">
              <span className="text-sm text-ink-muted block font-medium">
                Verified Profiles
              </span>

              <div className="space-y-3">
                <a
                  href="https://www.linkedin.com/in/mashuqul-chowdhury-033a1625/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded bg-[#1c1c1c] text-ink hover:text-sage transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-sage" />
                    <span className="text-base font-medium">LinkedIn Profile</span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-ink-muted group-hover:text-sage transition-colors" />
                </a>

                <a
                  href="https://github.com/abire25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded bg-[#1c1c1c] text-ink hover:text-sage transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-sage" />
                    <span className="text-base font-medium">GitHub Repository</span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-ink-muted group-hover:text-sage transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Message Form (7 cols) */}
          <div className="lg:col-span-7 bg-surface rounded p-8 sm:p-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-2">
              Send a Direct Message
            </h3>
            <p className="text-sm text-ink-muted mb-6">
              This form opens directly in your default email client with your message prepared. Zero external trackers or third-party databases.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-sm text-ink block font-medium">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 text-base bg-[#1c1c1c] rounded text-ink placeholder:text-ink-muted focus:outline-none focus:ring-1 focus:ring-sage transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-sm text-ink block font-medium">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full px-4 py-3 text-base bg-[#1c1c1c] rounded text-ink placeholder:text-ink-muted focus:outline-none focus:ring-1 focus:ring-sage transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-sm text-ink block font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Enterprise CCaaS Migration / Advisory Inquiry"
                  className="w-full px-4 py-3 text-base bg-[#1c1c1c] rounded text-ink placeholder:text-ink-muted focus:outline-none focus:ring-1 focus:ring-sage transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-sm text-ink block font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your project, team goals, or timeline..."
                  className="w-full px-4 py-3 text-base bg-[#1c1c1c] rounded text-ink placeholder:text-ink-muted focus:outline-none focus:ring-1 focus:ring-sage transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium bg-sage text-[#1c1c1c] rounded hover:bg-sage-hover transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Compose Email Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
