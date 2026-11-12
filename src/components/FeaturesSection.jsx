import { motion } from "framer-motion";
import { Palette, Zap, Clock, DollarSign, RefreshCw, Star } from "lucide-react";
import SectionTitle from "./SectionTitle";

const FEATURES = [
  {
    icon: Palette,
    title: "Desain Elegan & Personal",
    description: "Setiap undangan dirancang khusus sesuai tema dan selera Anda, dengan sentuhan artistik yang elegan.",
    color: "#E8C4C4",
    bgColor: "#FFF5F8",
  },
  {
    icon: Zap,
    title: "Proses Pemesanan Mudah",
    description: "Cukup hubungi kami via WhatsApp, konsultasikan kebutuhan, dan proses desain pun dimulai.",
    color: "#9CAF88",
    bgColor: "#F5FFF5",
  },
  {
    icon: Clock,
    title: "Pengerjaan Cepat",
    description: "Undangan digital selesai dalam 1–3 hari kerja, undangan cetak menyesuaikan jumlah pesanan.",
    color: "#D4B060",
    bgColor: "#FFFDF0",
  },
  {
    icon: DollarSign,
    title: "Harga Terjangkau",
    description: "Kualitas premium dengan harga yang bersahabat. Ada pilihan paket yang sesuai budget Anda.",
    color: "#A890C8",
    bgColor: "#F8F5FF",
  },
  {
    icon: RefreshCw,
    title: "Revisi Sesuai Ketentuan",
    description: "Tidak puas? Kami siap merevisi desain sesuai masukan Anda hingga Anda benar-benar puas.",
    color: "#70B090",
    bgColor: "#F0FFF8",
  },
  {
    icon: Star,
    title: "Hasil Berkualitas Tinggi",
    description: "File desain berkualitas tinggi, siap cetak atau dibagikan secara digital ke tamu undangan.",
    color: "#D4A5A5",
    bgColor: "#FFF0F0",
  },
];

const FeatureCard = ({ feature, index }) => {
  const Icon = feature.icon;
  return (
    <motion.div
      className="feature-card"
      style={{
        background: feature.bgColor,
        border: `1px solid ${feature.color}35`,
      }}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div
        className="feature-icon-wrap"
        style={{ background: `${feature.color}25` }}
      >
        <Icon size={22} style={{ color: feature.color }} />
      </div>
      <h3 className="feature-title">{feature.title}</h3>
      <p className="feature-desc">{feature.description}</p>
    </motion.div>
  );
};

const FeaturesSection = () => (
  <section className="section features-section" id="keunggulan">
    <div className="container">
      <SectionTitle
        eyebrow="Keunggulan"
        title="Mengapa Memilih Kartali Studio?"
        subtitle="Kami berkomitmen memberikan layanan terbaik dengan hasil yang melampaui ekspektasi Anda."
        style={{ marginBottom: 48 }}
      />

      <div className="grid-3">
        {FEATURES.map((feature, i) => (
          <FeatureCard key={feature.title} feature={feature} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
