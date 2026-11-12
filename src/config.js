// Centralized configuration - easy to customize
export const CONFIG = {
  brandName: "Kartali Studio",
  brandTagline: "Undangan Digital & Cetak",
  whatsappNumber: "6281234567890", // Ganti dengan nomor WhatsApp Anda
  whatsappDefaultMessage: "Halo, saya tertarik untuk memesan undangan. Boleh minta informasi lebih lanjut?",
  socialMedia: {
    instagram: "https://instagram.com/kartalistudio",
    facebook: "https://facebook.com/kartalistudio",
    tiktok: "https://tiktok.com/@kartalistudio",
  },
  email: "kartalistudio@email.com",
};

export const buildWhatsAppLink = (message = CONFIG.whatsappDefaultMessage) => {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encoded}`;
};

export const NAV_LINKS = [
  { label: "Beranda", href: "#beranda" },
  { label: "Layanan", href: "#layanan" },
  { label: "Portofolio", href: "#portofolio" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Kontak", href: "#kontak" },
];
