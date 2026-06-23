import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaUser, FaGraduationCap, FaNetworkWired, FaCode, FaBrain } from "react-icons/fa";
import { useCounter } from "../../hooks/useCounter";
import { aboutStats } from "../../data/portfolioData";
import SectionTitle from "../ui/SectionTitle";

function StatCard({ stat, start }) {
  const count = useCounter(stat.value, 1800, start);
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: "var(--glow-cyan)" }}
      className="glass glass-hover"
      style={{
        padding: "28px 20px",
        textAlign: "center",
        borderRadius: "var(--radius-lg)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(135deg, rgba(0,212,255,0.04), transparent)",
        borderRadius: "var(--radius-lg)",
      }} />
      <div style={{
        fontSize: "2.4rem", fontWeight: 900,
        fontFamily: "var(--font-head)",
        background: "linear-gradient(135deg, #00d4ff, #0ea5e9)",
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
        lineHeight: 1,
        position: "relative",
      }}>
        {count}{stat.suffix}
      </div>
      <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginTop: 8, fontWeight: 500, position: "relative" }}>
        {stat.label}
      </div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const passions = [
    { icon: FaNetworkWired, label: "Network Engineering", color: "#00d4ff" },
    { icon: FaCode,         label: "Software Development", color: "#0ea5e9" },
    { icon: FaBrain,        label: "AI & Machine Learning", color: "#7c3aed" },
    { icon: FaGraduationCap,label: "Server Administration", color: "#10b981" },
  ];

  return (
    <section id="about" className="section" style={{ background: "var(--gradient-section)", position: "relative", overflow: "hidden" }}>
      <div className="cyber-grid" style={{ opacity: 0.3 }} />
      <div className="glow-orb glow-orb-purple" style={{ width: 400, height: 400, left: "-10%", top: "20%", opacity: 0.07 }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <SectionTitle
          badge="// about me"
          title="Who I"
          highlight="Am"
          subtitle="A passionate Computer Systems & Network Engineering undergraduate building skills across multiple technology domains."
        />

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "start",
          marginBottom: "60px",
        }} className="about-grid">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{
              display: "flex", alignItems: "center", gap: 14, marginBottom: 24,
            }}>
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: "rgba(0,212,255,0.1)",
                border: "1px solid rgba(0,212,255,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.3rem", color: "var(--accent-cyan)",
              }}>
                <FaUser />
              </div>
              <div>
                <h3 style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: "1.25rem", color: "var(--text-primary)" }}>
                  J.P. Nimesh Dulanjana Jayasingha
                </h3>
                <p style={{ fontSize: "0.85rem", color: "var(--accent-cyan)", fontFamily: "var(--font-mono)" }}>Computer Systems & Network Engineering</p>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                "I am an undergraduate student at SLIIT (Sri Lanka Institute of Information Technology) following a degree in Computer Systems and Network Engineering. I am deeply interested in the technical domains that power modern digital infrastructure.",
                "My academic journey has given me hands-on experience in networking, server administration, IoT systems, software development, and AI/ML model training. I believe in learning by building real projects.",
                "My goal is to become a skilled network engineer and systems developer who can bridge the gap between hardware infrastructure and intelligent software solutions. I am continuously working toward industry certifications including CCNA.",
              ].map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.8 }}
                >
                  {text}
                </motion.p>
              ))}
            </div>

            {/* Passions */}
            <div style={{ marginTop: 28, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {passions.map(({ icon: Icon, label, color }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="glass"
                  style={{ padding: "12px 16px", display: "flex", alignItems: "center", gap: 10, borderRadius: 10 }}
                >
                  <Icon style={{ color, fontSize: "1.1rem", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.82rem", color: "var(--text-secondary)", fontWeight: 500 }}>{label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Image + info card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: "flex", flexDirection: "column", gap: 24 }}
          >
            {/* About image card */}
            <div className="glass" style={{
              borderRadius: "var(--radius-xl)",
              overflow: "hidden",
              position: "relative",
              height: 280,
            }}>
              <img
            src={`${import.meta.env.BASE_URL}profile.png`}
            alt="Nimesh"
               style={{
                width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top",
                filter: "brightness(0.7)",
              }} />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to bottom, transparent 40%, rgba(2,11,24,0.95) 100%)",
              }} />
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 24px",
              }}>
                <p style={{ fontFamily: "var(--font-head)", fontSize: "1.1rem", fontWeight: 700, color: "#fff" }}>J.P. Nimesh Dulanjana</p>
                <p style={{ fontSize: "0.78rem", color: "var(--accent-cyan)", fontFamily: "var(--font-mono)" }}>SLIIT Undergraduate · Computer Systems & Network Engineering</p>
              </div>
            </div>

            {/* Info bullets */}
            {[
              { label: "University", val: "SLIIT – Sri Lanka" },
              { label: "Degree",     val: "BSc Hons – CS & NE" },
              { label: "Focus",      val: "Networking · Server · Dev" },
              { label: "Status",     val: "Undergraduate (Ongoing)" },
            ].map(({ label, val }) => (
              <div key={label} style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "10px 0",
                borderBottom: "1px solid var(--border-glass)",
              }}>
                <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>{label}</span>
                <span style={{ fontSize: "0.88rem", color: "var(--text-primary)", fontWeight: 600 }}>{val}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stat Cards */}
        <div ref={ref} style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
        }} className="stat-grid">
          {aboutStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5 }}
            >
              <StatCard stat={stat} start={inView} />
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .stat-grid  { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .stat-grid  { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
