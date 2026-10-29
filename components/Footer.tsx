export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-background text-ink text-sm">
      <div className="max-w-6xl mx-auto px-6 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-between">
          {/* Left: What this is */}
          <div className="text-left text-ink-muted">
            <span>Mashuqul Chowdhury · Enterprise Voice & CCaaS</span>
          </div>

          {/* Center: Navigation Links */}
          <div className="flex items-center justify-start md:justify-center gap-6">
            <a href="#about" className="text-ink hover:text-sage transition-colors">
              About
            </a>
            <a href="#experience" className="text-ink hover:text-sage transition-colors">
              Experience
            </a>
            <a href="#projects" className="text-ink hover:text-sage transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-ink hover:text-sage transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-ink hover:text-sage transition-colors">
              Contact
            </a>
          </div>

          {/* Right: Year & Location */}
          <div className="text-left md:text-right text-ink-muted">
            <span>© {currentYear} · Toronto, Ontario, Canada</span>
          </div>
        </div>

        {/* Archival Photography Attribution as required by Taste Skill */}
        <div className="pt-6 text-xs text-ink-muted leading-relaxed">
          <span>Pictures: </span>
          <a
            href="https://commons.wikimedia.org/wiki/File:Wikimedia_Servers-0001_42.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-ink"
          >
            Wikimedia Servers
          </a>{" "}
          by Helpameout (CC BY-SA 3.0);{" "}
          <a
            href="https://commons.wikimedia.org/wiki/File:Vodno_Telecommunication_Tower.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-ink"
          >
            Vodno Telecommunication Tower
          </a>{" "}
          by kallerna (CC BY-SA 4.0);{" "}
          <a
            href="https://commons.wikimedia.org/wiki/File:19_inch_racks_MIT.agr.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-ink"
          >
            19-inch Relay Racks
          </a>{" "}
          by ArnoldReinhold (CC BY-SA 4.0);{" "}
          <a
            href="https://commons.wikimedia.org/wiki/File:ITU_Council_2018_(40622286475).jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-ink"
          >
            ITU Assembly
          </a>{" "}
          by ITU Pictures (CC BY 2.0).
        </div>
      </div>
    </footer>
  );
}
