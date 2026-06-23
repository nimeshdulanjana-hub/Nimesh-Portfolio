import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaFolder, FaChevronRight } from "react-icons/fa";
import { projects } from "../../data/portfolioData";
import SectionTitle from "../ui/SectionTitle";

const IMAGE_MAP = {
  iot: `${import.meta.env.BASE_URL}projects/proj-iot.png`,
  network: `${import.meta.env.BASE_URL}projects/proj-network.png`,
  java: `${import.meta.env.BASE_URL}projects/proj-java.png`,
  aiml: `${import.meta.env.BASE_URL}projects/proj-aiml.png`,
  ticket: `${import.meta.env.BASE_URL}projects/proj-ticket.png`,
};

const CATEGORY_FILTERS = ["All", "Networking", "Software", "AI/ML", "IoT", "Server"];

function ProjectCard({ project, onDetails }) {
  const [hovered, setHovered] = useState(false);
  const imgSrc = IMAGE_MAP[project.image];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="glass"
      style={{
        borderRadius: "var(--radius-xl)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "border-color 0.3s, box-shadow 0.3s",
        borderColor: hovered ? "rgba(0,212,255,0.3)" : "var(--border-glass)",
        boxShadow: hovered ? "var(--glow-cyan)" : "none",
      }}
    >
      {/* Project Image */}
      <div style={{
        height: 200, position: "relative", overflow: "hidden",
        background: project.gradient,
        flexShrink: 0,
      }}>
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={project.title}
            style={{
              width: "100%", height: "100%",
              objectFit: "cover",
              transition: "transform 0.5s ease",
              transform: hovered ? "scale(1.08)" : "scale(1)",
              opacity: 0.85,
            }}
            onError={(e) => { e.target.style.display = "none"; }}
          />
        ) : null}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, transparent 50%, rgba(2,11,24,0.95) 100%)",
        }} />
        {/* Category badge */}
        <div style={{
          position: "absolute", top: 14, right: 14,
          padding: "4px 12px", borderRadius: 20,
          background: "rgba(0,212,255,0.15)", backdropFilter: "blur(8px)",
          border: "1px solid rgba(0,212,255,0.25)",
          fontSize: "0.72rem", color: "var(--accent-cyan)", fontFamily: "var(--font-mono)",
          fontWeight: 600,
        }}>
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "22px 22px 20px", flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
        <h3 style={{
          fontFamily: "var(--font-head)", fontWeight: 700, fontSize: "1.1rem",
          color: "var(--text-primary)", lineHeight: 1.3,
        }}>
          {project.title}
        </h3>
        <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.7, flex: 1 }}>
          {project.shortDesc}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 4 }}>
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
          {project.tags.length > 3 && (
            <span className="tag">+{project.tags.length - 3}</span>
          )}
        </div>

        {/* Actions */}
        <div style={{ display: "flex", gap: 8, marginTop: 6 }}>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onDetails(project)}
            className="btn-primary"
            style={{ flex: 1, fontSize: "0.8rem", padding: "9px 14px" }}
          >
            View Details <FaChevronRight style={{ fontSize: "0.7rem" }} />
          </motion.button>
          <motion.a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.1 }}
            className="btn-ghost"
            style={{ padding: "9px 14px" }}
            aria-label="GitHub"
          >
            <FaGithub />
          </motion.a>
          {project.demo !== "#" && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1 }}
              className="btn-ghost"
              style={{ padding: "9px 14px" }}
              aria-label="Live Demo"
            >
              <FaExternalLinkAlt />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }) {
  const imgSrc = IMAGE_MAP[project.image];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 2000,
        background: "rgba(2,11,24,0.85)", backdropFilter: "blur(10px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "20px",
      }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="glass"
        style={{
          maxWidth: 680, width: "100%",
          maxHeight: "90vh", overflowY: "auto",
          borderRadius: "var(--radius-xl)",
        }}
      >
        {/* Image */}
        <div style={{ height: 260, position: "relative", background: project.gradient, flexShrink: 0 }}>
          {imgSrc && (
            <img src={imgSrc} alt={project.title} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.75 }}
              onError={(e) => { e.target.style.display = "none"; }} />
          )}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(2,11,24,0.3), rgba(2,11,24,0.9))" }} />
          <button
            onClick={onClose}
            style={{
              position: "absolute", top: 16, right: 16,
              width: 36, height: 36, borderRadius: "50%",
              background: "rgba(2,11,24,0.8)", border: "1px solid rgba(255,255,255,0.15)",
              color: "#fff", fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <FaTimes />
          </button>
          <div style={{ position: "absolute", bottom: 20, left: 24 }}>
            <span style={{ padding: "4px 12px", borderRadius: 20, background: "rgba(0,212,255,0.2)", fontSize: "0.75rem", color: "var(--accent-cyan)", fontFamily: "var(--font-mono)" }}>
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: "28px 28px 32px" }}>
          <h2 style={{ fontFamily: "var(--font-head)", fontWeight: 800, fontSize: "1.5rem", color: "var(--text-primary)", marginBottom: 14 }}>
            {project.title}
          </h2>
          <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 24 }}>
            {project.description}
          </p>

          <h4 style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: "0.95rem", color: "var(--text-primary)", marginBottom: 12, letterSpacing: "0.5px" }}>
            TECHNOLOGY STACK
          </h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
            {project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
          </div>

          <div style={{ display: "flex", gap: 12 }}>
            <a href={project.github} target="_blank" rel="noreferrer" className="btn-primary" style={{ fontSize: "0.88rem" }}>
              <FaGithub /> View on GitHub
            </a>
            {project.demo !== "#" && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="btn-outline" style={{ fontSize: "0.88rem" }}>
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section" style={{ background: "var(--gradient-section)", position: "relative", overflow: "hidden" }}>
      <div className="cyber-grid" style={{ opacity: 0.2 }} />
      <div className="glow-orb glow-orb-blue" style={{ width: 400, height: 400, left: "50%", bottom: "-5%", opacity: 0.07 }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <SectionTitle
          badge="// featured projects"
          title="My"
          highlight="Projects"
          subtitle="A collection of academic and personal projects showcasing skills across networking, software development, AI/ML, IoT, and server administration."
        />

        {/* Filter buttons */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 48 }}>
          {CATEGORY_FILTERS.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: "8px 20px", borderRadius: 30,
                border: filter === cat ? "1.5px solid var(--accent-cyan)" : "1.5px solid var(--border-glass)",
                background: filter === cat ? "rgba(0,212,255,0.1)" : "transparent",
                color: filter === cat ? "var(--accent-cyan)" : "var(--text-muted)",
                fontWeight: filter === cat ? 700 : 400,
                fontSize: "0.85rem", cursor: "pointer",
                transition: "all 0.22s",
              }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} onDetails={setSelected} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
