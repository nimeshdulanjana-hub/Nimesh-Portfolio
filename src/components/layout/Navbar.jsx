import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import { useScrollSpy } from "../../hooks/useScrollSpy";

const navLinks = [
  { id: "home",      label: "Home" },
  { id: "about",     label: "About" },
  { id: "skills",    label: "Skills" },
  { id: "projects",  label: "Projects" },
  { id: "gallery",   label: "Gallery" },
  { id: "education", label: "Education" },
  { id: "certs",     label: "Certifications" },
  { id: "contact",   label: "Contact" },
];

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useScrollSpy(navLinks.map((l) => l.id));

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 800,
          height: "var(--nav-height)",
          display: "flex",
          alignItems: "center",
          transition: "all 0.35s ease",
          background: scrolled
            ? "rgba(2,11,24,0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0,212,255,0.08)" : "none",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "none",
        }}
      >
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}
            onClick={() => scrollTo("home")}
          >
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
          </motion.div>

          {/* Desktop Links */}
          <ul style={{
            display: "flex", gap: 2, listStyle: "none",
            "@media(max-width:768px)": { display: "none" },
          }} className="nav-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  style={{
                    background: "none", border: "none",
                    padding: "6px 14px", borderRadius: 8,
                    fontSize: "0.88rem", fontWeight: 500,
                    cursor: "pointer", transition: "all 0.2s",
                    color: activeSection === link.id ? "var(--accent-cyan)" : "var(--text-secondary)",
                    background: activeSection === link.id ? "rgba(0,212,255,0.08)" : "transparent",
                    borderBottom: activeSection === link.id ? "1.5px solid var(--accent-cyan)" : "1.5px solid transparent",
                  }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right: Theme + Mobile */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              style={{
                width: 38, height: 38, borderRadius: "50%",
                border: "1px solid var(--border-glass)",
                background: "var(--bg-glass-light)",
                backdropFilter: "blur(8px)",
                color: "var(--accent-cyan)", fontSize: "1rem",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer",
              }}
              aria-label="Toggle theme"
            >
              {isDark ? <FaSun /> : <FaMoon />}
            </motion.button>

            {/* Mobile burger */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileOpen((o) => !o)}
              style={{
                display: "none", width: 38, height: 38, borderRadius: 8,
                border: "1px solid var(--border-glass)",
                background: "var(--bg-glass-light)",
                color: "var(--text-primary)", fontSize: "1.1rem",
                alignItems: "center", justifyContent: "center", cursor: "pointer",
              }}
              className="mobile-burger"
            >
              {mobileOpen ? <FaTimes /> : <FaBars />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              position: "fixed", top: 0, right: 0, bottom: 0, width: "min(320px, 85vw)",
              zIndex: 799, background: "rgba(2,11,24,0.97)",
              backdropFilter: "blur(20px)",
              borderLeft: "1px solid rgba(0,212,255,0.1)",
              padding: "90px 32px 32px",
              display: "flex", flexDirection: "column", gap: 8,
            }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => scrollTo(link.id)}
                style={{
                  background: activeSection === link.id ? "rgba(0,212,255,0.08)" : "none",
                  border: "none",
                  borderRadius: 10,
                  padding: "14px 20px",
                  textAlign: "left",
                  fontSize: "1.1rem",
                  fontFamily: "var(--font-head)",
                  fontWeight: 600,
                  color: activeSection === link.id ? "var(--accent-cyan)" : "var(--text-primary)",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  letterSpacing: "0.5px",
                }}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .mobile-burger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
