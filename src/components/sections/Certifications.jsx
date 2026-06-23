import { motion } from "framer-motion";
import {
  FaNetworkWired, FaPython, FaLinux, FaShieldAlt,
  FaCheckCircle, FaClock, FaSpinner, FaAward,
} from "react-icons/fa";
import { SiCisco } from "react-icons/si";
import { certifications } from "../../data/portfolioData";
import SectionTitle from "../ui/SectionTitle";

const ICON_MAP = {
  SiCisco, FaNetworkWired, FaPython, FaLinux, FaShieldAlt,
};

const STATUS_CONFIG = {
  "Completed": { color: "#10b981", icon: FaCheckCircle, label: "Completed" },
  "In Progress":{ color: "#f59e0b", icon: FaSpinner,     label: "In Progress" },
  "Planned":    { color: "#6366f1", icon: FaClock,        label: "Planned" },
};

export default function Certifications() {
  return (
    <section id="certs" className="section" style={{ position: "relative", overflow: "hidden" }}>
      <div className="cyber-grid" style={{ opacity: 0.22 }} />
      <div className="glow-orb glow-orb-blue" style={{ width: 350, height: 350, right: "-5%", bottom: "20%", opacity: 0.07 }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <SectionTitle
          badge="// certifications"
          title="My"
          highlight="Certifications"
          subtitle="Industry certifications and professional credentials that validate my technical expertise."
        />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "24px",
        }}>
          {certifications.map((cert, i) => {
            const Icon = ICON_MAP[cert.icon] || FaAward;
            const StatusIcon = STATUS_CONFIG[cert.status]?.icon || FaClock;
            const statusColor = STATUS_CONFIG[cert.status]?.color || "#94b8d4";

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8, boxShadow: `0 0 30px ${cert.color}30` }}
                className="glass"
                style={{
                  padding: "28px 24px",
                  borderRadius: "var(--radius-xl)",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                  transition: "all 0.35s ease",
                }}
              >
                {/* Shimmer border on hover */}
                <div style={{
                  position: "absolute", inset: 0, borderRadius: "var(--radius-xl)",
                  background: `linear-gradient(135deg, ${cert.color}10, transparent)`,
                  pointerEvents: "none",
                }} />

                {/* Top accent line */}
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 3,
                  background: `linear-gradient(90deg, ${cert.color}, transparent)`,
                  borderRadius: "var(--radius-xl) var(--radius-xl) 0 0",
                }} />

                {/* Status badge */}
                <div style={{
                  position: "absolute", top: 16, right: 16,
                  display: "flex", alignItems: "center", gap: 5,
                  padding: "4px 10px", borderRadius: 20,
                  background: `${statusColor}15`,
                  border: `1px solid ${statusColor}40`,
                  fontSize: "0.7rem", color: statusColor, fontWeight: 600,
                  fontFamily: "var(--font-mono)",
                }}>
                  <StatusIcon style={{ fontSize: "0.75rem" }} />
                  {cert.status}
                </div>

                {/* Icon */}
                <div style={{
                  width: 60, height: 60, borderRadius: 16, marginBottom: 18,
                  background: `${cert.color}15`,
                  border: `1.5px solid ${cert.color}40`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.6rem", color: cert.color,
                  boxShadow: `0 0 20px ${cert.color}25`,
                }}>
                  <Icon />
                </div>

                {/* Content */}
                <h3 style={{
                  fontFamily: "var(--font-head)", fontWeight: 800, fontSize: "1.2rem",
                  color: "var(--text-primary)", marginBottom: 6,
                }}>
                  {cert.title}
                </h3>
                <p style={{
                  fontSize: "0.8rem", color: cert.color, fontWeight: 600,
                  marginBottom: 12, fontFamily: "var(--font-mono)",
                }}>
                  {cert.issuer}
                </p>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
                  {cert.description}
                </p>

                {/* Category tag */}
                <div style={{ marginTop: 18 }}>
                  <span className="tag" style={{ borderColor: `${cert.color}40`, color: cert.color }}>
                    {cert.category}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{ textAlign: "center", marginTop: 52 }}
        >
          <div className="glass" style={{
            display: "inline-flex", flexDirection: "column", alignItems: "center",
            padding: "28px 40px", borderRadius: "var(--radius-xl)", gap: 12,
          }}>
            <FaAward style={{ color: "var(--accent-cyan)", fontSize: "1.8rem" }} />
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
              More certifications coming soon as I continue learning!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
