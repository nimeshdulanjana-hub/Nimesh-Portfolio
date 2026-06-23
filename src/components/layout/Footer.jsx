import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaHeart, FaCode } from "react-icons/fa";
import { personalInfo } from "../../data/portfolioData";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Gallery", id: "gallery" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];

const socials = [
  { icon: FaLinkedin, href: personalInfo.linkedin, label: "LinkedIn", color: "#0077b5" },
  { icon: FaGithub,   href: personalInfo.github,   label: "GitHub",   color: "#e8f4fd" },
  { icon: FaEnvelope, href: `mailto:${personalInfo.email}`, label: "Email", color: "#00d4ff" },
];

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer
      style={{
        background: "rgba(2,7,18,0.95)",
        borderTop: "1px solid rgba(0,212,255,0.1)",
        padding: "60px 0 28px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Cyber grid */}
      <div className="cyber-grid" style={{ opacity: 0.4 }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "48px",
          marginBottom: "48px",
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 38, height: 38, borderRadius: "50%",
                background: "rgba(0,212,255,0.1)",
                border: "1.5px solid rgba(0,212,255,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.9rem", color: "var(--accent-cyan)", fontWeight: 700 }}>&lt;/&gt;</span>
              </div>
              <span style={{
                fontFamily: "var(--font-head)", fontWeight: 700, fontSize: "1.25rem",
                background: "linear-gradient(90deg, #00d4ff, #0ea5e9)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>Nimesh</span>
            </div>
            <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.7, maxWidth: 280 }}>
              Computer Systems & Network Engineering Undergraduate at SLIIT. Passionate about networking, server administration, and software development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: "var(--font-head)", fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 18, letterSpacing: "0.5px" }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    style={{
                      background: "none", border: "none", cursor: "pointer", padding: 0,
                      fontSize: "0.88rem", color: "var(--text-muted)",
                      transition: "color 0.2s",
                      display: "flex", alignItems: "center", gap: 8,
                    }}
                    onMouseEnter={(e) => e.target.style.color = "var(--accent-cyan)"}
                    onMouseLeave={(e) => e.target.style.color = "var(--text-muted)"}
                  >
                    <span style={{ color: "var(--accent-cyan)", fontSize: "0.65rem" }}>▶</span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "var(--font-head)", fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 18, letterSpacing: "0.5px" }}>
              Get In Touch
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a href={`mailto:${personalInfo.email}`} style={{ fontSize: "0.85rem", color: "var(--text-muted)", transition: "color 0.2s" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "var(--accent-cyan)"}
                onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-muted)"}
              >
                📧 {personalInfo.email}
              </a>
              <a href={`tel:${personalInfo.phone}`} style={{ fontSize: "0.85rem", color: "var(--text-muted)", transition: "color 0.2s" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "var(--accent-cyan)"}
                onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-muted)"}
              >
                📱 {personalInfo.phone}
              </a>
            </div>

            {/* Social Icons */}
            <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
              {socials.map(({ icon: Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--text-secondary)", fontSize: "1.1rem",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = color; e.currentTarget.style.borderColor = color; e.currentTarget.style.boxShadow = `0 0 15px ${color}40`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-secondary)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.boxShadow = "none"; }}
                  aria-label={label}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.2), transparent)", marginBottom: 24 }} />

        {/* Bottom bar */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <p style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
            © 2026 J.P. Nimesh Dulanjana Jayasingha. All Rights Reserved.
          </p>
          <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 6 }}>
            Built with <FaHeart style={{ color: "#f43f5e" }} /> using React + Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
