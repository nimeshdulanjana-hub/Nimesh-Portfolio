import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload, FaArrowDown, FaEye } from "react-icons/fa";
import { personalInfo } from "../../data/portfolioData";
import ParticleBackground from "../ui/ParticleBackground";

const sequence = personalInfo.typingTitles.flatMap((t) => [t, 2000]).flat();

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background: "var(--gradient-hero)",
      }}
    >
      {/* Cyber Grid */}
      <div className="cyber-grid" />

      {/* Particle Canvas */}
      <ParticleBackground />

      {/* Glow Orbs */}
      <div className="glow-orb glow-orb-cyan"  style={{ width: 500, height: 500, top: "-10%", right: "-5%", opacity: 0.12 }} />
      <div className="glow-orb glow-orb-blue"  style={{ width: 350, height: 350, bottom: "5%", left: "-5%",  opacity: 0.1  }} />
      <div className="glow-orb glow-orb-purple"style={{ width: 250, height: 250, top: "40%", left: "40%",   opacity: 0.07 }} />

      <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "var(--nav-height)" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
          minHeight: "calc(100vh - var(--nav-height))",
        }} className="hero-grid">
          {/* ── Text Side ──────────────────────────── */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="section-badge">🎓 SLIIT Undergraduate · 2026</div>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              style={{
                fontFamily: "var(--font-head)",
                fontSize: "clamp(2.2rem, 5.5vw, 3.8rem)",
                fontWeight: 900,
                lineHeight: 1.1,
                marginTop: 12,
                marginBottom: 10,
                color: "var(--text-primary)",
              }}
            >
              Hello, I'm{" "}
              <span className="gradient-text">J.P. Nimesh</span>
              <br />
              <span style={{ fontSize: "0.65em", color: "var(--text-secondary)", fontWeight: 600 }}>
                Dulanjana Jayasingha
              </span>
            </motion.h1>

            {/* Typing Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
                fontFamily: "var(--font-mono)",
                color: "var(--accent-cyan)",
                marginBottom: 20,
                minHeight: "2em",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span style={{ color: "var(--text-muted)" }}>&gt;</span>
              <TypeAnimation
                sequence={sequence}
                wrapper="span"
                repeat={Infinity}
                style={{ display: "inline-block" }}
              />
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={{
                fontSize: "1rem",
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                maxWidth: 520,
                marginBottom: 32,
              }}
            >
              An undergraduate at SLIIT, passionate about{" "}
              <span style={{ color: "var(--accent-cyan)", fontWeight: 500 }}>computer networks</span>,{" "}
              <span style={{ color: "var(--accent-cyan)", fontWeight: 500 }}>server administration</span>,{" "}
              <span style={{ color: "var(--accent-cyan)", fontWeight: 500 }}>software development</span>, IoT, and AI/ML solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 36 }}
            >
              <motion.a
                href={personalInfo.cvUrl}
                className="btn-primary"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                download
              >
                <FaDownload /> <span>Download CV</span>
              </motion.a>
              <motion.button
                className="btn-outline"
                onClick={() => scrollTo("contact")}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <FaEnvelope /> Contact Me
              </motion.button>
              <motion.button
                className="btn-ghost"
                onClick={() => scrollTo("projects")}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <FaEye /> View Projects
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              style={{ display: "flex", alignItems: "center", gap: 16 }}
            >
              <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)", letterSpacing: 1 }}>CONNECT</span>
              <div style={{ flex: 1, height: 1, background: "var(--border-glass)" }} />
              {[
                { icon: FaLinkedin, href: personalInfo.linkedin, label: "LinkedIn", color: "#0077b5" },
                { icon: FaGithub,   href: personalInfo.github,   label: "GitHub",   color: "#e8f4fd" },
                { icon: FaEnvelope, href: `mailto:${personalInfo.email}`, label: "Email", color: "#00d4ff" },
              ].map(({ icon: Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel="noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    width: 42, height: 42, borderRadius: 10,
                    border: "1px solid var(--border-glass)",
                    background: "var(--bg-glass-light)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.1rem", color: "var(--text-secondary)",
                    transition: "all 0.25s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = color; e.currentTarget.style.borderColor = color; e.currentTarget.style.boxShadow = `0 0 20px ${color}60`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-secondary)"; e.currentTarget.style.borderColor = "var(--border-glass)"; e.currentTarget.style.boxShadow = "none"; }}
                  aria-label={label}
                >
                  <Icon />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* ── Profile Photo Side ───────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            {/* Spinning ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute",
                width: 360, height: 360,
                borderRadius: "50%",
                border: "2px solid transparent",
                borderTopColor: "var(--accent-cyan)",
                borderRightColor: "rgba(0,212,255,0.2)",
                borderBottomColor: "transparent",
              }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute",
                width: 390, height: 390,
                borderRadius: "50%",
                border: "1px solid transparent",
                borderTopColor: "rgba(124,58,237,0.3)",
                borderBottomColor: "rgba(124,58,237,0.3)",
              }}
            />

            {/* Photo container */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{
                width: 300, height: 300,
                borderRadius: "50%",
                overflow: "hidden",
                border: "3px solid rgba(0,212,255,0.25)",
                boxShadow: "0 0 50px rgba(0,212,255,0.2), 0 0 100px rgba(0,212,255,0.08)",
                background: "linear-gradient(135deg, #061222, #0a1f3a)",
                position: "relative",
                zIndex: 1,
              }}
            >
              <img
                src={`${import.meta.env.BASE_URL}profile.png`}
                alt="J.P. Nimesh Dulanjana Jayasingha"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.style.display = "flex";
                  e.target.parentElement.style.alignItems = "center";
                  e.target.parentElement.style.justifyContent = "center";
                  e.target.parentElement.innerHTML = '<span style="font-family:var(--font-head);font-size:4rem;color:var(--accent-cyan);font-weight:800">NJ</span>';
                }}
              />
            </motion.div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              style={{
                position: "absolute", left: -10, top: "20%",
                background: "rgba(6,18,34,0.9)", backdropFilter: "blur(12px)",
                border: "1px solid rgba(0,212,255,0.2)", borderRadius: 12,
                padding: "10px 16px",
              }}
            >
              <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginBottom: 2, fontFamily: "var(--font-mono)" }}>STATUS</div>
              <div style={{ fontSize: "0.85rem", color: "#10b981", fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#10b981", display: "inline-block", boxShadow: "0 0 8px #10b981" }} />
                Available for Work
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0 }}
              style={{
                position: "absolute", right: -10, bottom: "20%",
                background: "rgba(6,18,34,0.9)", backdropFilter: "blur(12px)",
                border: "1px solid rgba(0,212,255,0.2)", borderRadius: 12,
                padding: "10px 16px", textAlign: "center",
              }}
            >
              <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--accent-cyan)", fontFamily: "var(--font-head)" }}>9+</div>
              <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>Projects Done</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        onClick={() => scrollTo("about")}
        style={{
          position: "absolute", bottom: 30, left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
          cursor: "pointer", zIndex: 1,
        }}
      >
        <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)", letterSpacing: 2 }}>SCROLL</span>
        <FaArrowDown style={{ color: "var(--accent-cyan)", fontSize: "1rem" }} />
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .hero-grid > div:last-child { order: -1; }
          .hero-grid > div:last-child > div { width: 200px !important; height: 200px !important; }
        }
      `}</style>
    </section>
  );
}
