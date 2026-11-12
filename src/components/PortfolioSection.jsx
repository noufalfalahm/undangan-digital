import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, ZoomIn } from "lucide-react";
import { buildWhatsAppLink } from "../config";
import SectionTitle from "./SectionTitle";

const CATEGORIES = ["Semua", "Pernikahan", "Tunangan", "Khitanan", "Ulang Tahun", "Aqiqah"];

const PORTFOLIO_ITEMS = [
  { id: 1, category: "Pernikahan", title: "Elegant Rose Gold", style: "Klasik Mewah",
    bgGradient: "linear-gradient(135deg, #FAF0F0, #F5E6E6)", accentColor: "#D4A5A5",
    textColor: "#8B5555", emoji: "💍", nameA: "Aulia", nameB: "Rizky", date: "12 Des 2025" },
  { id: 2, category: "Pernikahan", title: "Sage Garden", style: "Modern Minimalis",
    bgGradient: "linear-gradient(135deg, #F0F5F0, #E6F0E6)", accentColor: "#9CAF88",
    textColor: "#4A6B40", emoji: "🌿", nameA: "Dinda", nameB: "Hafiz", date: "8 Mar 2026" },
  { id: 3, category: "Tunangan", title: "Blush Romance", style: "Romantis Pastel",
    bgGradient: "linear-gradient(135deg, #FFF0F5, #FFE6EC)", accentColor: "#E8A0B0",
    textColor: "#A05070", emoji: "💝", nameA: "Salsabila", nameB: "Alfarizi", date: "20 Jan 2026" },
  { id: 4, category: "Khitanan", title: "Islamic Blue", style: "Islami Elegan",
    bgGradient: "linear-gradient(135deg, #F0F5FF, #E6EEFF)", accentColor: "#7090C8",
    textColor: "#305090", emoji: "🌙", nameA: "M. Rafa", nameB: "", date: "5 Apr 2026" },
  { id: 5, category: "Ulang Tahun", title: "Golden Celebration", style: "Ceria & Festif",
    bgGradient: "linear-gradient(135deg, #FFFDF0, #FFF8E0)", accentColor: "#D4B060",
    textColor: "#806030", emoji: "🎂", nameA: "Keisha", nameB: "", date: "15 Mei 2026" },
  { id: 6, category: "Aqiqah", title: "Soft Mint", style: "Lembut & Hangat",
    bgGradient: "linear-gradient(135deg, #F0FFF8, #E6FFF2)", accentColor: "#70B090",
    textColor: "#305040", emoji: "🌙", nameA: "Fatimah Az-Zahra", nameB: "", date: "2 Jun 2026" },
  { id: 7, category: "Pernikahan", title: "Ivory Floral", style: "Boho Chic",
    bgGradient: "linear-gradient(135deg, #FDF8F0, #F8F0E6)", accentColor: "#C8A880",
    textColor: "#706040", emoji: "🌸", nameA: "Nadira", nameB: "Fauzan", date: "29 Nov 2025" },
  { id: 8, category: "Tunangan", title: "Lavender Dream", style: "Dreamy Pastel",
    bgGradient: "linear-gradient(135deg, #F5F0FF, #EDE6FF)", accentColor: "#A890C8",
    textColor: "#504080", emoji: "💜", nameA: "Carissa", nameB: "Bagas", date: "14 Feb 2026" },
  { id: 9, category: "Ulang Tahun", title: "Floral Garden", style: "Natural & Fresh",
    bgGradient: "linear-gradient(135deg, #FFF5F8, #FFE8F0)", accentColor: "#E890A8",
    textColor: "#803050", emoji: "🎉", nameA: "Zara", nameB: "", date: "30 Jul 2026" },
];

const MiniInviteDesign = ({ item }) => (
  <div className="mini-invite" style={{ background: item.bgGradient }}>
    <div className="mini-invite-line" style={{ background: item.accentColor }} />
    <span style={{ fontSize: 24, margin: "6px 0" }}>{item.emoji}</span>
    <p style={{ fontFamily: "'Great Vibes', cursive", color: item.accentColor, fontSize: 13 }}>
      {item.category === "Pernikahan" || item.category === "Tunangan" ? "Undangan" : "Acara"}
    </p>
    <p style={{ fontFamily: "'Cormorant Garamond', serif", color: item.textColor, fontSize: 13, fontWeight: 600, marginTop: 4 }}>
      {item.nameA}
    </p>
    {item.nameB && (
      <>
        <p style={{ color: item.accentColor, fontSize: 11 }}>&</p>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", color: item.textColor, fontSize: 13, fontWeight: 600 }}>
          {item.nameB}
        </p>
      </>
    )}
    <div className="mini-invite-line" style={{ background: item.accentColor, marginTop: 8 }} />
    <p style={{ color: item.accentColor, fontSize: 10, marginTop: 6 }}>{item.date}</p>
    <p style={{ color: item.textColor, fontSize: 9, opacity: 0.6, letterSpacing: "0.1em", marginTop: 2 }}>
      {item.title.toUpperCase()}
    </p>
  </div>
);

const PortfolioCard = ({ item, onClick }) => (
  <motion.div
    className="portfolio-card"
    onClick={() => onClick(item)}
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -5 }}
  >
    <MiniInviteDesign item={item} />
    <div className="portfolio-overlay">
      <div className="portfolio-overlay-text">
        <p>{item.title}</p>
        <p>{item.style}</p>
      </div>
      <div style={{ position: "absolute", top: 10, right: 10, color: "rgba(255,255,255,0.7)" }}>
        <ZoomIn size={18} />
      </div>
    </div>
  </motion.div>
);

const PortfolioModal = ({ item, onClose }) => (
  <AnimatePresence>
    {item && (
      <motion.div
        className="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="modal-box"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          onClick={e => e.stopPropagation()}
        >
          <button className="modal-close" onClick={onClose}>
            <X size={16} />
          </button>
          <div className="modal-preview">
            <MiniInviteDesign item={item} />
          </div>
          <div className="modal-info">
            <p className="modal-title">{item.title}</p>
            <p className="modal-style">{item.style}</p>
            <span className="modal-badge">{item.category}</span>
            <a
              href={buildWhatsAppLink(`Halo, saya tertarik dengan desain "${item.title}" untuk undangan ${item.category}. Boleh minta informasi lebih lanjut?`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <MessageCircle size={16} />
              Pesan Desain Ini
            </a>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [selectedItem, setSelectedItem] = useState(null);

  const filtered = activeCategory === "Semua"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(i => i.category === activeCategory);

  return (
    <section className="section portfolio-section" id="portofolio">
      <div className="container">
        <SectionTitle
          eyebrow="Portofolio"
          title="Contoh Desain Undangan Kami"
          subtitle="Telusuri koleksi desain eksklusif kami. Klik setiap desain untuk melihat detail dan melakukan pemesanan."
          style={{ marginBottom: 36 }}
        />

        {/* Category filter */}
        <div className="filter-bar">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`filter-btn${activeCategory === cat ? " active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="portfolio-grid">
          <AnimatePresence>
            {filtered.map(item => (
              <PortfolioCard key={item.id} item={item} onClick={setSelectedItem} />
            ))}
          </AnimatePresence>
        </div>

        {/* View more */}
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <a
            href={buildWhatsAppLink("Halo, saya ingin melihat lebih banyak contoh desain undangan yang tersedia.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Lihat Lebih Banyak Desain
          </a>
        </div>
      </div>

      {selectedItem && (
        <PortfolioModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </section>
  );
};

export default PortfolioSection;
