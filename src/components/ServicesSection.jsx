import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "../config";
import SectionTitle from "./SectionTitle";

const SERVICES = [
  {
    emoji: "💍",
    title: "Undangan Pernikahan",
    description: "Rancangan eksklusif untuk hari paling istimewa dalam hidupmu. Tersedia digital interaktif dan cetak premium.",
    bgColor: "#FFF0F0",
    accentColor: "#E8C4C4",
    linkColor: "#D4A5A5",
    waMessage: "Halo, saya tertarik memesan Undangan Pernikahan. Boleh minta informasi lebih lanjut?",
  },
  {
    emoji: "💝",
    title: "Undangan Tunangan",
    description: "Rayakan momen lamaran dengan undangan elegan dan berkesan untuk keluarga dan sahabat.",
    bgColor: "#FFF5F8",
    accentColor: "#D4A5A5",
    linkColor: "#C8909A",
    waMessage: "Halo, saya tertarik memesan Undangan Tunangan. Boleh minta informasi lebih lanjut?",
  },
  {
    emoji: "✂️",
    title: "Undangan Khitanan",
    description: "Desain yang bersih dan islami untuk menyebarkan kabar gembira acara khitanan putra tercinta.",
    bgColor: "#F0F8FF",
    accentColor: "#9CAF88",
    linkColor: "#7A9A68",
    waMessage: "Halo, saya tertarik memesan Undangan Khitanan. Boleh minta informasi lebih lanjut?",
  },
  {
    emoji: "🎂",
    title: "Undangan Ulang Tahun",
    description: "Undangan ceria dan penuh warna untuk merayakan hari ulang tahun yang penuh kebahagiaan.",
    bgColor: "#FFFDF0",
    accentColor: "#D4C5B0",
    linkColor: "#A89080",
    waMessage: "Halo, saya tertarik memesan Undangan Ulang Tahun. Boleh minta informasi lebih lanjut?",
  },
  {
    emoji: "🌙",
    title: "Undangan Aqiqah",
    description: "Undangan bernuansa islami yang hangat untuk mengundang sanak saudara hadir dalam syukuran buah hati.",
    bgColor: "#F5FFF5",
    accentColor: "#C8D5BC",
    linkColor: "#7A9A68",
    waMessage: "Halo, saya tertarik memesan Undangan Aqiqah. Boleh minta informasi lebih lanjut?",
  },
  {
    emoji: "🎉",
    title: "Undangan Acara Lainnya",
    description: "Seminar, gathering, reuni, wisuda, dan berbagai acara spesial lainnya. Kami siap membantu.",
    bgColor: "#FFF8F5",
    accentColor: "#A89080",
    linkColor: "#8B7355",
    waMessage: "Halo, saya tertarik memesan undangan untuk acara lainnya. Boleh minta informasi lebih lanjut?",
  },
];

const ServiceCard = ({ service, index }) => (
  <motion.div
    className="service-card"
    style={{ background: service.bgColor, borderColor: `${service.accentColor}40` }}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
  >
    <div
      className="service-icon-wrap"
      style={{ background: `${service.accentColor}30`, border: `1px solid ${service.accentColor}50` }}
    >
      {service.emoji}
    </div>
    <h3 className="service-title">{service.title}</h3>
    <p className="service-desc">{service.description}</p>
    <a
      href={buildWhatsAppLink(service.waMessage)}
      target="_blank"
      rel="noopener noreferrer"
      className="service-link"
      style={{ color: service.linkColor }}
    >
      <MessageCircle size={15} />
      Pesan Sekarang →
    </a>
  </motion.div>
);

const ServicesSection = () => (
  <section className="section services-section" id="layanan">
    <div className="container">
      <SectionTitle
        eyebrow="Layanan Kami"
        title="Berbagai Jenis Undangan Tersedia"
        subtitle="Dari undangan pernikahan mewah hingga perayaan sederhana yang hangat — kami hadirkan desain yang sesuai dengan impian dan kebutuhan Anda."
        style={{ marginBottom: 48 }}
      />
      <div className="grid-3">
        {SERVICES.map((service, i) => (
          <ServiceCard key={service.title} service={service} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
