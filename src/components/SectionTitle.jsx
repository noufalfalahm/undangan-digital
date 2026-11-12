import { motion } from "framer-motion";

const SectionTitle = ({ eyebrow, title, subtitle, style = {} }) => (
  <div style={{ textAlign: "center", ...style }}>
    {eyebrow && (
      <motion.span
        className="section-eyebrow"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {eyebrow}
      </motion.span>
    )}
    <motion.h2
      className="section-title"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {subtitle}
      </motion.p>
    )}
    <div className="section-divider">
      <div className="divider-line" />
      <span className="divider-gem">✦</span>
      <div className="divider-line-r" />
    </div>
  </div>
);

export default SectionTitle;
