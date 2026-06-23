import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCode, FaNetworkWired, FaServer, FaUsers,
  FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs,
  FaLinux, FaEnvelopeOpen, FaWifi, FaSitemap,
  FaShieldAlt, FaRoute, FaProjectDiagram,
  FaStar, FaTasks, FaClock, FaBrain,
} from "react-icons/fa";
import { SiC, SiMysql, SiCentos, SiUbuntu } from "react-icons/si";
import { skillCategories } from "../../data/portfolioData";
import SectionTitle from "../ui/SectionTitle";

const iconMap = {
  FaCode, FaNetworkWired, FaServer, FaUsers, FaJava, FaPython,
  FaHtml5, FaCss3Alt, FaJs, FaLinux, FaEnvelopeOpen, FaWifi,
  FaSitemap, FaShieldAlt, FaRoute, FaProjectDiagram,
  SiC, SiMysql, SiCentos, SiUbuntu,
  FaStar, FaTasks, FaClock, FaBrain,
};

function SkillBar({ name, level, icon: iconName, delay = 0 }) {
  const Icon = iconMap[iconName] || FaCode;
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.45 }}
      className="glass"
      style={{
        padding: "14px 18px",
        borderRadius: "var(--radius-md)",
        transition: "all 0.3s",
      }}
      whileHover={{ borderColor: "rgba(0,212,255,0.3)", boxShadow: "0 0 15px rgba(0,212,255,0.12)" }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Icon style={{ color: "var(--accent-cyan)", fontSize: "1rem", flexShrink: 0 }} />
          <span style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--text-primary)" }}>{name}</span>
        </div>
        <span style={{ fontSize: "0.75rem", color: "var(--accent-cyan)", fontFamily: "var(--font-mono)", fontWeight: 600 }}>{level}%</span>
      </div>
      <div className="progress-bar-wrap">
        <motion.div
          className="progress-bar-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState("programming");
  const activeCategory = skillCategories.find((c) => c.id === activeTab);
  const CatIcon = iconMap[activeCategory?.icon] || FaCode;

  return (
    <section id="skills" className="section" style={{ position: "relative", overflow: "hidden" }}>
      <div className="cyber-grid" style={{ opacity: 0.25 }} />
      <div className="glow-orb glow-orb-cyan" style={{ width: 350, height: 350, right: "-8%", top: "10%", opacity: 0.08 }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <SectionTitle
          badge="// skills"
          title="Technical"
          highlight="Expertise"
          subtitle="A comprehensive skill set spanning programming, networking, server administration, and soft skills."
        />

        {/* Tab buttons */}
        <div style={{
          display: "flex", flexWrap: "wrap", gap: 10,
          justifyContent: "center", marginBottom: 48,
        }}>
          {skillCategories.map((cat) => {
            const TabIcon = iconMap[cat.icon] || FaCode;
            const isActive = activeTab === cat.id;
            return (
              <motion.button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "flex", alignItems: "center", gap: 8,
                  padding: "10px 22px", borderRadius: "var(--radius-md)",
                  border: isActive ? "1.5px solid var(--accent-cyan)" : "1.5px solid var(--border-glass)",
                  background: isActive ? "rgba(0,212,255,0.1)" : "var(--bg-glass-light)",
                  color: isActive ? "var(--accent-cyan)" : "var(--text-secondary)",
                  fontWeight: isActive ? 700 : 500,
                  fontSize: "0.88rem",
                  cursor: "pointer",
                  transition: "all 0.25s",
                  boxShadow: isActive ? "var(--glow-cyan)" : "none",
                }}
              >
                <TabIcon style={{ fontSize: "0.9rem" }} />
                {cat.label}
              </motion.button>
            );
          })}
        </div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            {/* Category header */}
            <div style={{
              display: "flex", alignItems: "center", gap: 14,
              marginBottom: 28,
              padding: "16px 24px",
              borderRadius: "var(--radius-md)",
              background: "rgba(0,212,255,0.04)",
              border: "1px solid rgba(0,212,255,0.12)",
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: "rgba(0,212,255,0.1)",
                border: "1px solid rgba(0,212,255,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--accent-cyan)", fontSize: "1.2rem",
              }}>
                <CatIcon />
              </div>
              <div>
                <h3 style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: "1.15rem", color: "var(--text-primary)" }}>
                  {activeCategory?.label}
                </h3>
                <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                  {activeCategory?.skills.length} skills · hover to explore
                </p>
              </div>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "12px",
            }}>
              {activeCategory?.skills.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} delay={i * 0.06} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
