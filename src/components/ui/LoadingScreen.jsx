import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setVisible(false);
            setTimeout(onComplete, 600);
          }, 300);
          return 100;
        }
        return p + 2;
      });
    }, 30);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={styles.overlay}
        >
          {/* Animated orbs */}
          <div style={{ ...styles.orb, width: 300, height: 300, top: "10%", left: "5%", background: "rgba(0,212,255,0.12)" }} />
          <div style={{ ...styles.orb, width: 200, height: 200, bottom: "15%", right: "8%", background: "rgba(124,58,237,0.12)" }} />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={styles.content}
          >
            {/* Logo */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              style={styles.logoRing}
            />
            <div style={styles.logoInner}>
              <span style={styles.logoText}>&lt;/&gt;</span>
            </div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, letterSpacing: "0.5em" }}
              animate={{ opacity: 1, letterSpacing: "0.1em" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={styles.name}
            >
              NIMESH
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              style={styles.subtitle}
            >
              Portfolio Loading...
            </motion.p>

            {/* Progress bar */}
            <div style={styles.barWrap}>
              <motion.div
                style={styles.barFill}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <p style={styles.percent}>{progress}%</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    zIndex: 9999,
    background: "linear-gradient(135deg, #020b18 0%, #061222 50%, #091f3a 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  orb: {
    position: "absolute",
    borderRadius: "50%",
    filter: "blur(60px)",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    position: "relative",
    zIndex: 1,
  },
  logoRing: {
    position: "absolute",
    width: 110,
    height: 110,
    borderRadius: "50%",
    border: "2px solid transparent",
    borderTopColor: "#00d4ff",
    borderRightColor: "rgba(0,212,255,0.3)",
    top: -15,
  },
  logoInner: {
    width: 80,
    height: 80,
    borderRadius: "50%",
    background: "rgba(0,212,255,0.08)",
    border: "1px solid rgba(0,212,255,0.25)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  logoText: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "1.6rem",
    color: "#00d4ff",
    fontWeight: 700,
  },
  name: {
    fontFamily: "'Rajdhani', sans-serif",
    fontSize: "2.2rem",
    fontWeight: 800,
    background: "linear-gradient(135deg, #00d4ff, #0ea5e9, #7c3aed)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    letterSpacing: "0.1em",
  },
  subtitle: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "0.78rem",
    color: "#567799",
    letterSpacing: "2px",
    textTransform: "uppercase",
  },
  barWrap: {
    width: 240,
    height: 3,
    background: "rgba(255,255,255,0.06)",
    borderRadius: 2,
    overflow: "hidden",
    marginTop: 8,
  },
  barFill: {
    height: "100%",
    background: "linear-gradient(90deg, #00d4ff, #7c3aed)",
    borderRadius: 2,
    boxShadow: "0 0 10px rgba(0,212,255,0.6)",
  },
  percent: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "0.72rem",
    color: "#00d4ff",
    letterSpacing: "1px",
  },
};
