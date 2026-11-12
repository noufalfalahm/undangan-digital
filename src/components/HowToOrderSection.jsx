import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const STEPS = [
  {
    number: "01",
    title: "Pilih Jenis Undangan",
    description: "Pilih jenis undangan yang sesuai dengan acara Anda dari berbagai opsi yang tersedia.",
    icon: "📋",
    color: "#E8C4C4",
  },
  {
    number: "02",
    title: "Konsultasi Desain",
    description: "Hubungi via WhatsApp untuk mendiskusikan konsep, tema warna, dan detail impian Anda.",
    icon: "💬",
    color: "#D4A5A5",
  },
  {
    number: "03",
    title: "Kirim Data Acara",
    description: "Kirimkan data lengkap acara seperti nama mempelai/anak, waktu, lokasi, dan denah.",
    icon: "📨",
    color: "#C8D5BC",
  },
  {
    number: "04",
    title: "Proses Pembuatan",
    description: "Tim desainer kami mulai merancang dan menyempurnakan preview undangan Anda.",
    icon: "🎨",
    color: "#9CAF88",
  },
  {
    number: "05",
    title: "Undangan Selesai",
    description: "Undangan digital siap disebar link-nya atau dicetak dengan kualitas terbaik.",
    icon: "✅",
    color: "#8B7355",
  },
];

const StepCard = ({ step, index }) => (
  <motion.div
    className="step-card"
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div
      className="step-circle"
      style={{
        background: `linear-gradient(135deg, ${step.color}35, ${step.color}65)`,
        border: `2px solid ${step.color}`,
      }}
    >
      <span>{step.icon}</span>
    </div>

    <span className="step-num" style={{ color: step.color }}>
      LANGKAH {step.number}
    </span>
    <h3 className="step-title">{step.title}</h3>
    <p className="step-desc">{step.description}</p>
  </motion.div>
);

const HowToOrderSection = () => (
  <section className="section how-section">
    <div className="container">
      <SectionTitle
        eyebrow="Alur Pemesanan"
        title="Proses Pemesanan yang Mudah"
        subtitle="Hanya 5 langkah sederhana untuk mendapatkan undangan impian Anda."
        style={{ marginBottom: 48 }}
      />

      <div className="steps-grid">
        {STEPS.map((step, i) => (
          <StepCard key={step.number} step={step} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default HowToOrderSection;
