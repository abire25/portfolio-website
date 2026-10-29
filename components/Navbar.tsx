"use client";

import { useState } from "react";
import { Linkedin, Github, Mail, Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Architecture", href: "#architecture" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#1c1c1c] py-4">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Name / Brand */}
        <a href="#" className="flex flex-col group">
          <span className="font-serif text-xl sm:text-2xl font-medium tracking-tight text-ink group-hover:text-sage transition-colors">
            Mashuqul Chowdhury
          </span>
          <span className="text-xs text-ink-muted">
            CCaaS & CRM Product Architect
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-ink-muted hover:text-ink transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action & Socials */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/mashuqul-chowdhury-033a1625/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-ink-muted hover:text-sage transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/abire25"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-ink-muted hover:text-sage transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="mailto:abire25@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium bg-sage text-[#1c1c1c] rounded hover:bg-sage-hover transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Connect</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-ink-muted hover:text-ink focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-ink-muted hover:text-ink transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/mashuqul-chowdhury-033a1625/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-muted hover:text-sage"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/abire25"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-muted hover:text-sage"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="tel:6478492226"
                className="text-ink-muted hover:text-sage"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>

            <a
              href="mailto:abire25@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium bg-sage text-[#1c1c1c] rounded"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email Me</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
