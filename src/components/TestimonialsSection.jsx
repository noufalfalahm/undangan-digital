import { motion } from "framer-motion";
import { Star } from "lucide-react";
import SectionTitle from "./SectionTitle";

const TESTIMONIALS = [
  {
    name: "Aulia Rahma",
    location: "Jakarta",
    service: "Undangan Pernikahan",
    rating: 5,
    text: "Desainnya cantik banget! Persis seperti yang aku bayangkan. Banyak tamu yang tanya di mana bikin undangannya. Responsif dan sabar meladeni revisi.",
    avatar: "AR",
    avatarColor: "#E8C4C4",
  },
  {
    name: "Budi Santoso",
    location: "Surabaya",
    service: "Undangan Khitanan",
    rating: 5,
    text: "Pesan undangan khitanan anak, hasilnya memuaskan. Proses cepat, harga terjangkau, dan desain islaminya bagus. Terima kasih Kartali Studio!",
    avatar: "BS",
    avatarColor: "#9CAF88",
  },
  {
    name: "Carissa Putri",
    location: "Bandung",
    service: "Undangan Tunangan",
    rating: 5,
    text: "Undangan tunanganku keren abis! Tim-nya kreatif dan pengertian. Revisinya ditanggapi cepat. Pasti balik lagi pas nikah nanti.",
    avatar: "CP",
    avatarColor: "#D4A5A5",
  },
  {
    name: "Dwi Lestari",
    location: "Yogyakarta",
    service: "Undangan Ulang Tahun",
    rating: 5,
    text: "Pesan undangan ultah anak, hasilnya beyond expectations! Anak saya suka banget sama desainnya. Proses cepat dan harganya bersahabat.",
    avatar: "DL",
    avatarColor: "#A890C8",
  },
  {
    name: "Fajar Nugroho",
    location: "Medan",
    service: "Undangan Pernikahan",
    rating: 5,
    text: "Sangat puas! Desainer-nya komunikatif. File yang dikirim beresolusi tinggi, hasil cetak sangat tajam. Istri juga senang banget.",
    avatar: "FN",
    avatarColor: "#D4B060",
  },
  {
    name: "Gita Maharani",
    location: "Makassar",
    service: "Undangan Aqiqah",
    rating: 5,
    text: "Undangan aqiqah putri kami cantik sekali. Nuansanya lembut dan elegan. Pelayanan ramah sekali. Sangat direkomendasikan!",
    avatar: "GM",
    avatarColor: "#70B090",
  },
];

const StarRating = ({ count }) => (
  <div className="stars">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} size={14} style={{ fill: "#D4B060", color: "#D4B060" }} />
    ))}
  </div>
);

const TestimonialCard = ({ testimonial, index }) => (
  <motion.div
    className="testimonial-card flex flex-col justify-between"
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
  >
    <div>
      <StarRating count={testimonial.rating} />
      <p className="testimonial-text">"{testimonial.text}"</p>
    </div>

    <div className="testimonial-author">
      <div
        className="author-avatar"
        style={{ background: `linear-gradient(135deg, ${testimonial.avatarColor}, ${testimonial.avatarColor}99)` }}
      >
        {testimonial.avatar}
      </div>
      <div>
        <div className="author-name">{testimonial.name}</div>
        <div className="author-meta">
          {testimonial.location} · {testimonial.service}
        </div>
      </div>
    </div>
  </motion.div>
);

const TestimonialsSection = () => (
  <section className="section testimonials-section">
    <div className="container">
      <SectionTitle
        eyebrow="Testimoni"
        title="Kata Mereka Tentang Kami"
        subtitle="Kepuasan pelanggan adalah prioritas utama kami. Berikut pengalaman nyata dari pelanggan setia Kartali Studio."
        style={{ marginBottom: 48 }}
      />

      <div className="grid-3">
        {TESTIMONIALS.map((t, i) => (
          <TestimonialCard key={t.name} testimonial={t} index={i} />
        ))}
      </div>

      <div className="stats-bar">
        {[
          { number: "500+", label: "Undangan Dibuat" },
          { number: "98%", label: "Tingkat Kepuasan" },
          { number: "4.9/5", label: "Rating Rata-rata" },
          { number: "200+", label: "Pelanggan Aktif" },
        ].map(stat => (
          <div key={stat.label}>
            <div className="stat-big-num">{stat.number}</div>
            <div className="stat-big-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
