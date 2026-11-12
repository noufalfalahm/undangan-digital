import { motion } from "framer-motion";
import { MessageCircle, BookOpen } from "lucide-react";
import { buildWhatsAppLink } from "../config";
import { FloralCornerSVG, FlowerSVG, PetalSVG } from "./FloralElements";

// Animated mock invitation card
const MockInvitationCard = () => (
  <motion.div
    className="hero-card-wrap"
    initial={{ opacity: 0, scale: 0.9, y: 30 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.9, delay: 0.4 }}
  >
    <div className="mock-card-outer">
      <div className="mock-card-shadow2" />
      <div className="mock-card-shadow1" />
      <div className="mock-card">
        <div className="mock-card-top-bar" />
        <div className="mock-card-body">
          <p className="font-script" style={{ color: "#D4A5A5", fontSize: "1.4rem", marginBottom: 2 }}>Undangan</p>
          <p className="font-script" style={{ color: "#8B7355", fontSize: "2.8rem", lineHeight: 1.1 }}>Pernikahan</p>

          <div className="mock-divider" style={{ marginTop: 14, marginBottom: 14 }}>
            <div className="mock-divider-line" style={{ background: "#D4A5A5" }} />
            <span className="mock-divider-gem" style={{ color: "#D4A5A5" }}>✦</span>
            <div className="mock-divider-line" style={{ background: "#D4A5A5" }} />
          </div>

          <p style={{ fontSize: 11, color: "#A89080", marginBottom: 2 }}>Bismillahirrahmanirrahim</p>
          <p style={{ fontSize: 11, color: "#A89080", marginBottom: 16 }}>Dengan memohon ridho Allah SWT</p>
          <p className="font-script" style={{ color: "#3D3530", fontSize: "2rem" }}>David</p>
          <p className="font-serif" style={{ color: "#A89080", fontSize: "13px" }}>&</p>
          <p className="font-script" style={{ color: "#3D3530", fontSize: "2rem" }}>Victor</p>

          <div className="mock-divider" style={{ marginTop: 14, marginBottom: 10 }}>
            <div className="mock-divider-line" style={{ background: "#C8D5BC" }} />
            <span className="mock-divider-gem" style={{ color: "#C8D5BC" }}>✦</span>
            <div className="mock-divider-line" style={{ background: "#C8D5BC" }} />
          </div>

          <p className="font-serif" style={{ fontSize: 13, color: "#8B7355" }}>Sabtu, 15 Februari 2025</p>
          <p style={{ fontSize: 11, color: "#A89080" }}>Pukul 10.00 WIB</p>
          <p style={{ fontSize: 11, color: "#A89080" }}>Gedung Al-Hikmah, Jakarta</p>
          <p style={{ marginTop: 12, fontSize: 18, opacity: 0.4 }}>🌸 🌿</p>
        </div>
        <div className="mock-card-bottom-bar" />
      </div>

      {/* Floating flowers */}
      <motion.div
        style={{ position: "absolute", top: -20, right: -20 }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <FlowerSVG size={48} color="#E8C4C4" opacity={0.85} />
      </motion.div>
      <motion.div
        style={{ position: "absolute", bottom: -16, left: -16 }}
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <FlowerSVG size={38} color="#9CAF88" opacity={0.75} />
      </motion.div>
    </div>
  </motion.div>
);

// Falling petal
const FallingPetal = ({ delay, x, size, color }) => (
  <motion.div
    style={{ position: "absolute", left: `${x}%`, top: "-20px", pointerEvents: "none" }}
    animate={{
      y: ["0vh", "105vh"],
      x: [0, 25, -15, 10, 0],
      rotate: [0, 180, 360],
      opacity: [0, 0.75, 0.75, 0],
    }}
    transition={{
      duration: 12 + Math.random() * 7,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <PetalSVG size={size} color={color} opacity={0.8} />
  </motion.div>
);

const HeroSection = () => {
  const petals = [
    { delay: 0, x: 8, size: 20, color: "#E8C4C4" },
    { delay: 2, x: 22, size: 15, color: "#D4A5A5" },
    { delay: 4, x: 38, size: 24, color: "#C8D5BC" },
    { delay: 1, x: 54, size: 18, color: "#E8C4C4" },
    { delay: 3, x: 68, size: 22, color: "#D4A5A5" },
    { delay: 5, x: 82, size: 16, color: "#9CAF88" },
    { delay: 2.5, x: 94, size: 19, color: "#E8C4C4" },
  ];

  return (
    <section className="hero" id="beranda">
      {/* Falling petals */}
      {petals.map((p, i) => <FallingPetal key={i} {...p} />)}

      {/* Corner decorations */}
      <div style={{ position: "absolute", top: 72, left: 0, pointerEvents: "none" }}>
        <FloralCornerSVG size={170} />
      </div>
      <div style={{ position: "absolute", top: 72, right: 0, pointerEvents: "none" }}>
        <FloralCornerSVG size={170} flip />
      </div>

      {/* Blobs */}
      <div style={{
        position: "absolute", top: 120, right: 80,
        width: 280, height: 280, borderRadius: "50%",
        background: "rgba(232,196,196,0.18)", filter: "blur(40px)", pointerEvents: "none"
      }} />
      <div style={{
        position: "absolute", bottom: 80, left: 100,
        width: 320, height: 320, borderRadius: "50%",
        background: "rgba(200,213,188,0.18)", filter: "blur(40px)", pointerEvents: "none"
      }} />

      {/* Content */}
      <div className="hero-content">
        {/* Left */}
        <div>
          <motion.span
            className="hero-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Kartali Studio
          </motion.span>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Abadikan Momen Spesial dengan Undangan yang{" "}
            <span>Berkesan</span>
          </motion.h1>

          <motion.p
            className="hero-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Kami hadir untuk mewujudkan undangan impianmu — digital maupun cetak —
            dengan desain elegan, personal, dan penuh makna untuk setiap momen berharga.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <MessageCircle size={16} />
              Pesan Sekarang
            </a>
            <button
              className="btn btn-outline"
              onClick={() => document.querySelector("#portofolio")?.scrollIntoView({ behavior: "smooth" })}
            >
              <BookOpen size={16} />
              Lihat Katalog
            </button>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              { number: "500+", label: "Undangan Dibuat" },
              { number: "98%", label: "Kepuasan Pelanggan" },
              { number: "6+", label: "Jenis Layanan" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="stat-num">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: card */}
        <MockInvitationCard />
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator animate-bounce-scroll">
        <div className="scroll-indicator-track">
          <div className="scroll-indicator-dot" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
