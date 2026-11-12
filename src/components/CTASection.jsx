import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "../config";
import { FloralCornerSVG } from "./FloralElements";

const CTASection = () => (
  <section className="cta-section">
    {/* Floral corners */}
    <div style={{ position: "absolute", top: 0, left: 0, opacity: 0.25, pointerEvents: "none" }}>
      <FloralCornerSVG size={180} />
    </div>
    <div style={{ position: "absolute", bottom: 0, right: 0, opacity: 0.25, pointerEvents: "none" }}>
      <FloralCornerSVG size={180} flip />
    </div>

    <div className="container" style={{ position: "relative", zIndex: 1 }}>
      <motion.span
        className="cta-eyebrow"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Hubungi Kami
      </motion.span>

      <motion.h2
        className="cta-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        Siap Membuat Undangan Impianmu?
      </motion.h2>

      <motion.p
        className="cta-desc"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Jangan ragu konsultasikan tema, konsep, dan budget undangan acara spesialmu.
        Kami siap membantu mewujudkan undangan elegan penuh makna.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-white"
          style={{ fontSize: 15, padding: "14px 34px" }}
        >
          <MessageCircle size={18} />
          Pesan Sekarang via WhatsApp
        </a>
      </motion.div>

      <p className="cta-note">
        ✓ Respons cepat · ✓ Konsultasi gratis tanpa komitmen · ✓ Garansi revisi
      </p>
    </div>
  </section>
);

export default CTASection;
