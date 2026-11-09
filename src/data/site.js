// Konfigurasi utama website Nasi Bento.
// Ubah nilai di sini untuk mengganti nomor WhatsApp, kontak, jam buka, dll.

export const site = {
  name: 'Nasi Bento',
  tagline: 'Authentic Japanese Delights',
  // Format internasional tanpa "+" dan tanpa spasi/angka 0 di depan.
  whatsapp: '6281234567890',
  whatsappLabel: '+62 812-3456-7890',
  email: 'halo@nasibento.id',
  address: 'Jl. Sakura Raya No. 21, Jakarta Selatan',
  socials: [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'TikTok', href: 'https://tiktok.com' },
    { label: 'Facebook', href: 'https://facebook.com' },
  ],
}

export const pillars = ['Praktis', 'Lezat', 'Higienis', 'Terjangkau']

export function waLink(message) {
  const text = encodeURIComponent(message)
  return `https://wa.me/${site.whatsapp}?text=${text}`
}

export const waDefault = waLink(
  'Halo Nasi Bento! Saya mau pesan bento, boleh minta info menu & pengiriman?',
)
