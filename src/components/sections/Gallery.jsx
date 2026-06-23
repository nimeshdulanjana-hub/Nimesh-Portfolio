import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight, FaExpand } from "react-icons/fa";
import { galleryCategories, galleryItems } from "../../data/portfolioData";
import SectionTitle from "../ui/SectionTitle";

const IMAGE_MAP = {
  iot: `${import.meta.env.BASE_URL}proj-iot.png`,
  network: `${import.meta.env.BASE_URL}proj-network.png`,
  java: `${import.meta.env.BASE_URL}proj-java.png`,
  aiml: `${import.meta.env.BASE_URL}proj-aiml.png`,
  ticket: `${import.meta.env.BASE_URL}proj-ticket.png`,
  wlan: `${import.meta.env.BASE_URL}proj-network.png`,
  server: `${import.meta.env.BASE_URL}proj-ticket.png`,
  database: `${import.meta.env.BASE_URL}proj-java.png`,
};

// Gradient fallbacks
const GRAD_MAP = {
  iot:     "linear-gradient(135deg, #0f3460, #0e4d3a)",
  network: "linear-gradient(135deg, #0a1628, #1a3a6b)",
  java:    "linear-gradient(135deg, #1a0533, #3d1a78)",
  aiml:    "linear-gradient(135deg, #0d1117, #1a3a2a)",
  ticket:  "linear-gradient(135deg, #1a0e2e, #2d1b5e)",
  wlan:    "linear-gradient(135deg, #0d1b3e, #1a2f6e)",
  server:  "linear-gradient(135deg, #0a1f0a, #1a3d1a)",
  database:"linear-gradient(135deg, #0c1a2e, #1a3350)",
};

function Lightbox({ items, currentIndex, onClose, onPrev, onNext }) {
  const item = items[currentIndex];
  const imgSrc = IMAGE_MAP[item.image];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 3000,
        background: "rgba(0,0,0,0.92)", backdropFilter: "blur(12px)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}
    >
      <motion.div
        initial={{ scale: 0.85 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.85 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(800px, 92vw)",
          background: "rgba(6,18,34,0.95)",
          border: "1px solid rgba(0,212,255,0.15)",
          borderRadius: "var(--radius-xl)",
          overflow: "hidden",
        }}
      >
        {/* Image */}
        <div style={{ position: "relative", height: "min(480px, 55vw)", background: GRAD_MAP[item.image] || "#061222" }}>
          {imgSrc && (
            <img src={imgSrc} alt={item.title}
              style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.9 }}
              onError={(e) => { e.target.style.display = "none"; }}
            />
          )}
          {/* Controls */}
          <button onClick={onClose} style={{
            position: "absolute", top: 14, right: 14,
            width: 36, height: 36, borderRadius: "50%",
            background: "rgba(2,11,24,0.9)", border: "1px solid rgba(255,255,255,0.15)",
            color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
          }}><FaTimes /></button>
          <button onClick={onPrev} style={{
            position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)",
            width: 40, height: 40, borderRadius: "50%",
            background: "rgba(2,11,24,0.9)", border: "1px solid rgba(0,212,255,0.2)",
            color: "var(--accent-cyan)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
          }}><FaChevronLeft /></button>
          <button onClick={onNext} style={{
            position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)",
            width: 40, height: 40, borderRadius: "50%",
            background: "rgba(2,11,24,0.9)", border: "1px solid rgba(0,212,255,0.2)",
            color: "var(--accent-cyan)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
          }}><FaChevronRight /></button>
          {/* Counter */}
          <div style={{
            position: "absolute", bottom: 14, left: "50%", transform: "translateX(-50%)",
            padding: "4px 14px", borderRadius: 20,
            background: "rgba(2,11,24,0.8)", border: "1px solid rgba(255,255,255,0.1)",
            fontSize: "0.75rem", color: "var(--text-secondary)", fontFamily: "var(--font-mono)",
          }}>
            {currentIndex + 1} / {items.length}
          </div>
        </div>
        <div style={{ padding: "20px 24px" }}>
          <span style={{ fontSize: "0.72rem", color: "var(--accent-cyan)", fontFamily: "var(--font-mono)", marginBottom: 6, display: "block" }}>
            {item.category}
          </span>
          <h3 style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: "1.15rem", color: "var(--text-primary)", marginBottom: 6 }}>
            {item.title}
          </h3>
          <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>{item.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((g) => g.category === activeCategory);

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevItem = () => setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length);
  const nextItem = () => setLightboxIndex((i) => (i + 1) % filtered.length);

  return (
    <section id="gallery" className="section" style={{ position: "relative", overflow: "hidden" }}>
      <div className="cyber-grid" style={{ opacity: 0.2 }} />
      <div className="glow-orb glow-orb-purple" style={{ width: 300, height: 300, right: "5%", top: "15%", opacity: 0.07 }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <SectionTitle
          badge="// project gallery"
          title="Work"
          highlight="Gallery"
          subtitle="Screenshots, diagrams, and visuals from across my academic and personal projects."
        />

        {/* Category filter */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 44 }}>
          {galleryCategories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: "7px 18px", borderRadius: 30,
                border: activeCategory === cat ? "1.5px solid var(--accent-cyan)" : "1.5px solid var(--border-glass)",
                background: activeCategory === cat ? "rgba(0,212,255,0.08)" : "transparent",
                color: activeCategory === cat ? "var(--accent-cyan)" : "var(--text-muted)",
                fontSize: "0.82rem", fontWeight: activeCategory === cat ? 700 : 400,
                cursor: "pointer", transition: "all 0.22s",
              }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Masonry-ish grid */}
        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => {
              const imgSrc = IMAGE_MAP[item.image];
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="glass"
                  style={{
                    borderRadius: "var(--radius-lg)",
                    overflow: "hidden",
                    cursor: "pointer",
                    position: "relative",
                  }}
                  whileHover={{ y: -4, boxShadow: "var(--glow-cyan)" }}
                  onClick={() => openLightbox(i)}
                >
                  <div style={{
                    height: 200, position: "relative",
                    background: GRAD_MAP[item.image] || "#061222",
                    overflow: "hidden",
                  }}>
                    {imgSrc && (
                      <img src={imgSrc} alt={item.title} style={{
                        width: "100%", height: "100%", objectFit: "cover",
                        transition: "transform 0.4s ease",
                      }}
                        onError={(e) => { e.target.style.display = "none"; }}
                        className="gallery-img"
                      />
                    )}
                    <div style={{
                      position: "absolute", inset: 0,
                      background: "linear-gradient(to bottom, transparent 50%, rgba(2,11,24,0.9) 100%)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      opacity: 0, transition: "opacity 0.3s",
                    }} className="gallery-overlay">
                      <FaExpand style={{ color: "#fff", fontSize: "1.5rem" }} />
                    </div>
                  </div>
                  <div style={{ padding: "14px 16px" }}>
                    <span style={{ fontSize: "0.7rem", color: "var(--accent-cyan)", fontFamily: "var(--font-mono)" }}>{item.category}</span>
                    <h4 style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: "0.95rem", color: "var(--text-primary)", margin: "4px 0" }}>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      <style>{`
        .gallery-img:hover { transform: scale(1.06); }
        .glass:hover .gallery-overlay { opacity: 1 !important; }
      `}</style>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            items={filtered}
            currentIndex={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevItem}
            onNext={nextItem}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
