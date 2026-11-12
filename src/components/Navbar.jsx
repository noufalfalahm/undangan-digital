import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { CONFIG, buildWhatsAppLink, NAV_LINKS } from "../config";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`navbar ${isScrolled ? "scrolled" : "top"}`}
      >
        {/* Brand */}
        <button className="navbar-brand" onClick={() => handleNavClick("#beranda")}>
          <div className="navbar-logo">K</div>
          <div>
            <div className="navbar-brand-name">{CONFIG.brandName}</div>
            <div className="navbar-brand-sub">{CONFIG.brandTagline}</div>
          </div>
        </button>

        {/* Desktop links */}
        <ul className="navbar-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button className="navbar-link" onClick={() => handleNavClick(link.href)}>
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="navbar-cta">
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ padding: "10px 22px", fontSize: "13px" }}
          >
            <MessageCircle size={14} />
            Pesan Sekarang
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="navbar-mobile-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22 }}
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                className="mobile-menu-link"
                onClick={() => handleNavClick(link.href)}
              >
                {link.label}
              </button>
            ))}
            <div style={{ marginTop: 12, padding: "0 4px" }}>
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: "100%", justifyContent: "center", display: "flex" }}
              >
                <MessageCircle size={15} />
                Chat WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
