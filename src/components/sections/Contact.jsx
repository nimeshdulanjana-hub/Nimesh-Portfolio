import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhone, FaEnvelope, FaLinkedin, FaGithub,
  FaMapMarkerAlt, FaPaperPlane, FaCheckCircle,
} from "react-icons/fa";
import { personalInfo } from "../../data/portfolioData";
import SectionTitle from "../ui/SectionTitle";

const contactItems = [
  {
    icon: FaPhone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    color: "#10b981",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: "#00d4ff",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "nimesh-jayasingha-3385b1350",
    href: personalInfo.linkedin,
    color: "#0077b5",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "nimeshdulanjana-hub",
    href: personalInfo.github,
    color: "#e8f4fd",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all required fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    // In production, wire to EmailJS / Formspree etc.
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="section" style={{ background: "var(--gradient-section)", position: "relative", overflow: "hidden" }}>
      <div className="cyber-grid" style={{ opacity: 0.22 }} />
      <div className="glow-orb glow-orb-cyan" style={{ width: 400, height: 400, left: "-8%", top: "20%", opacity: 0.07 }} />
      <div className="glow-orb glow-orb-purple" style={{ width: 300, height: 300, right: "-5%", bottom: "10%", opacity: 0.06 }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <SectionTitle
          badge="// contact"
          title="Get In"
          highlight="Touch"
          subtitle="I'm open to collaborations, internship opportunities, and interesting projects. Let's connect!"
        />

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.5fr",
          gap: "48px",
          alignItems: "start",
        }} className="contact-grid">
          {/* Left: Contact Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 28 }}>
                Whether you have a project idea, want to collaborate on networking or software development, or simply want to connect — my inbox is always open!
              </p>
            </motion.div>

            {contactItems.map(({ icon: Icon, label, value, href, color }, i) => (
              <motion.a
                key={label}
                href={href}
                target={label === "LinkedIn" || label === "GitHub" ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.45 }}
                whileHover={{ x: 6, boxShadow: `0 0 20px ${color}25` }}
                className="glass"
                style={{
                  display: "flex", alignItems: "center", gap: 16,
                  padding: "16px 20px", borderRadius: "var(--radius-md)",
                  textDecoration: "none", transition: "all 0.3s",
                }}
              >
                <div style={{
                  width: 46, height: 46, borderRadius: 12, flexShrink: 0,
                  background: `${color}15`,
                  border: `1px solid ${color}40`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.15rem", color,
                }}>
                  <Icon />
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)", marginBottom: 3 }}>{label}</div>
                  <div style={{ fontSize: "0.88rem", color: "var(--text-primary)", fontWeight: 600, wordBreak: "break-all" }}>{value}</div>
                </div>
              </motion.a>
            ))}

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.42, duration: 0.45 }}
              className="glass"
              style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 20px", borderRadius: "var(--radius-md)" }}
            >
              <div style={{
                width: 46, height: 46, borderRadius: 12, flexShrink: 0,
                background: "rgba(245,158,11,0.1)",
                border: "1px solid rgba(245,158,11,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.15rem", color: "#f59e0b",
              }}>
                <FaMapMarkerAlt />
              </div>
              <div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)", marginBottom: 3 }}>Location</div>
                <div style={{ fontSize: "0.88rem", color: "var(--text-primary)", fontWeight: 600 }}>Sri Lanka 🇱🇰</div>
              </div>
            </motion.div>
          </div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="glass"
            style={{ padding: "36px 32px", borderRadius: "var(--radius-xl)", position: "relative", overflow: "hidden" }}
          >
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: 3,
              background: "linear-gradient(90deg, var(--accent-cyan), var(--accent-purple))",
            }} />

            <h3 style={{ fontFamily: "var(--font-head)", fontWeight: 800, fontSize: "1.35rem", color: "var(--text-primary)", marginBottom: 24 }}>
              Send a Message
            </h3>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: "center", padding: "40px 20px" }}
              >
                <FaCheckCircle style={{ fontSize: "3rem", color: "#10b981", marginBottom: 16 }} />
                <h4 style={{ fontFamily: "var(--font-head)", fontSize: "1.2rem", color: "var(--text-primary)", marginBottom: 8 }}>Message Sent!</h4>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                  Thank you! I'll get back to you as soon as possible.
                </p>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  onClick={() => setSent(false)}
                  className="btn-outline"
                  style={{ marginTop: 20, fontSize: "0.85rem" }}
                >
                  Send Another
                </motion.button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="form-row">
                  <div>
                    <label style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)", display: "block", marginBottom: 6 }}>
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={handleChange}
                      className="form-input"
                      required
                      id="contact-name"
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)", display: "block", marginBottom: 6 }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      className="form-input"
                      required
                      id="contact-email"
                    />
                  </div>
                </div>
                <div>
                  <label style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)", display: "block", marginBottom: 6 }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject (optional)"
                    value={form.subject}
                    onChange={handleChange}
                    className="form-input"
                    id="contact-subject"
                  />
                </div>
                <div>
                  <label style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)", display: "block", marginBottom: 6 }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    placeholder="Your message..."
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="form-input"
                    required
                    id="contact-message"
                    style={{ resize: "vertical", minHeight: 120 }}
                  />
                </div>

                {error && (
                  <p style={{ fontSize: "0.82rem", color: "#f87171", padding: "8px 14px", background: "rgba(248,113,113,0.08)", borderRadius: 8, border: "1px solid rgba(248,113,113,0.2)" }}>
                    ⚠ {error}
                  </p>
                )}

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center", padding: "14px", fontSize: "0.95rem" }}
                  id="contact-submit"
                >
                  <FaPaperPlane /> <span>Send Message</span>
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
