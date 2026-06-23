import { motion } from "framer-motion";

export default function SectionTitle({ badge, title, highlight, subtitle, center = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{ textAlign: center ? "center" : "left", marginBottom: "56px" }}
    >
      {badge && <div className="section-badge">{badge}</div>}
      <h2
        style={{
          fontFamily: "'Rajdhani', sans-serif",
          fontSize: "clamp(2rem, 5vw, 3rem)",
          fontWeight: 800,
          color: "var(--text-primary)",
          marginBottom: "14px",
          lineHeight: 1.15,
        }}
      >
        {title}{" "}
        {highlight && (
          <span className="gradient-text">{highlight}</span>
        )}
      </h2>
      {subtitle && (
        <p
          style={{
            fontSize: "1.05rem",
            color: "var(--text-secondary)",
            maxWidth: center ? "560px" : "100%",
            margin: center ? "0 auto" : 0,
            lineHeight: 1.7,
          }}
        >
          {subtitle}
        </p>
      )}
      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{
          width: center ? 64 : 48,
          height: 3,
          background: "linear-gradient(90deg, #00d4ff, #7c3aed)",
          borderRadius: 2,
          margin: center ? "20px auto 0" : "20px 0 0",
          transformOrigin: center ? "center" : "left",
          boxShadow: "0 0 10px rgba(0,212,255,0.5)",
        }}
      />
    </motion.div>
  );
}
