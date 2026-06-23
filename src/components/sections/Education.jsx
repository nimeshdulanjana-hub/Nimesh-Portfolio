import { motion } from "framer-motion";
import { FaSchool, FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";
import { education } from "../../data/portfolioData";
import SectionTitle from "../ui/SectionTitle";

const ICON_MAP = { FaSchool, FaGraduationCap };

export default function Education() {
  return (
    <section id="education" className="section" style={{ background: "var(--gradient-section)", position: "relative", overflow: "hidden" }}>
      <div className="cyber-grid" style={{ opacity: 0.22 }} />
      <div className="glow-orb glow-orb-cyan" style={{ width: 350, height: 350, left: "-5%", bottom: "10%", opacity: 0.07 }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <SectionTitle
          badge="// education"
          title="Academic"
          highlight="Journey"
          subtitle="My educational path from school to university, building the foundation for a career in technology."
        />

        {/* Timeline */}
        <div style={{ maxWidth: 720, margin: "0 auto", position: "relative" }}>
          {/* Vertical line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{
              position: "absolute",
              left: 28,
              top: 40,
              bottom: 40,
              width: 2,
              background: "linear-gradient(to bottom, var(--accent-cyan), var(--accent-purple))",
              borderRadius: 2,
              zIndex: 0,
              transformOrigin: "top",
            }}
          />

          {education.map((item, i) => {
            const Icon = ICON_MAP[item.icon] || FaGraduationCap;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.18 }}
                style={{
                  display: "flex",
                  gap: "28px",
                  marginBottom: i < education.length - 1 ? 40 : 0,
                  position: "relative",
                }}
              >
                {/* Icon node */}
                <div style={{
                  width: 58, height: 58, flexShrink: 0,
                  borderRadius: "50%",
                  background: item.current
                    ? "linear-gradient(135deg, rgba(0,212,255,0.2), rgba(14,165,233,0.15))"
                    : "rgba(255,255,255,0.04)",
                  border: item.current
                    ? "2px solid var(--accent-cyan)"
                    : "2px solid rgba(255,255,255,0.12)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: item.current ? "var(--accent-cyan)" : "var(--text-muted)",
                  fontSize: "1.3rem",
                  boxShadow: item.current ? "var(--glow-cyan)" : "none",
                  zIndex: 1,
                  flexShrink: 0,
                }}>
                  <Icon />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -4, boxShadow: "var(--glow-blue)" }}
                  className="glass"
                  style={{
                    flex: 1, padding: "24px 26px",
                    borderRadius: "var(--radius-lg)",
                    position: "relative",
                    overflow: "hidden",
                    borderColor: item.current ? "rgba(0,212,255,0.2)" : "var(--border-glass)",
                    transition: "all 0.3s",
                  }}
                >
                  {item.current && (
                    <div style={{
                      position: "absolute", top: 0, left: 0, right: 0, height: 3,
                      background: "linear-gradient(90deg, var(--accent-cyan), var(--accent-blue))",
                      borderRadius: "var(--radius-lg) var(--radius-lg) 0 0",
                    }} />
                  )}

                  <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: 8, marginBottom: 12 }}>
                    <div>
                      <h3 style={{
                        fontFamily: "var(--font-head)", fontWeight: 800, fontSize: "1.2rem",
                        color: "var(--text-primary)", marginBottom: 4,
                      }}>
                        {item.institution}
                      </h3>
                      <p style={{ fontWeight: 700, color: "var(--accent-cyan)", fontSize: "0.92rem" }}>
                        {item.degree}
                      </p>
                      {item.field && (
                        <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", marginTop: 2 }}>
                          {item.field}
                        </p>
                      )}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "flex-end" }}>
                      <div style={{
                        display: "flex", alignItems: "center", gap: 6,
                        fontSize: "0.78rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)",
                      }}>
                        <FaCalendarAlt /> {item.period}
                      </div>
                      {item.current && (
                        <div style={{
                          display: "flex", alignItems: "center", gap: 5,
                          padding: "3px 10px", borderRadius: 20,
                          background: "rgba(16,185,129,0.12)",
                          border: "1px solid rgba(16,185,129,0.3)",
                          fontSize: "0.72rem", color: "#10b981", fontWeight: 600,
                        }}>
                          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981", display: "inline-block" }} />
                          Ongoing
                        </div>
                      )}
                    </div>
                  </div>

                  <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.75 }}>
                    {item.description}
                  </p>

                  {item.current && (
                    <div style={{
                      marginTop: 16, display: "flex", flexWrap: "wrap", gap: 8,
                    }}>
                      {["Networking", "Server Admin", "Software Dev", "AI/ML", "Database", "IoT"].map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
