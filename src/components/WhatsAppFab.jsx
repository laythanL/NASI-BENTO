import { site, waDefault } from '../data/site'

export default function WhatsAppFab() {
  return (
    <a
      href={waDefault}
      target="_blank"
      rel="noreferrer"
      aria-label={`Hubungi ${site.name} lewat WhatsApp`}
      className="fixed right-6 bottom-6 z-80 inline-flex items-center gap-2.5 rounded-full bg-[#25d366] px-5 py-3.5 text-[0.92rem] font-bold text-[#06331a] shadow-[0_18px_32px_-14px_rgba(37,211,102,0.75)] transition duration-200 hover:-translate-y-0.5 hover:scale-102 hover:shadow-[0_24px_40px_-14px_rgba(37,211,102,0.85)] max-sm:right-4 max-sm:bottom-4 max-sm:p-3.5"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 animate-pulse-ring rounded-full border-2 border-[#25d366]/60"
      />
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5.5 w-5.5 shrink-0" fill="currentColor">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2Zm5.8 14.13c-.24.68-1.42 1.3-1.95 1.35-.53.05-1.02.24-3.44-.72-2.9-1.15-4.72-4.11-4.86-4.3-.14-.19-1.15-1.53-1.15-2.92s.73-2.07.99-2.35c.26-.29.56-.36.75-.36l.54.01c.17 0 .41-.06.63.48.24.58.81 2 .88 2.15.07.14.12.31.02.5-.1.19-.36.5-.53.72-.17.22-.29.28-.14.53.14.24.65 1.06 1.39 1.72.95.85 1.76 1.11 2 .1.24-.14.53-.55.72-.74.19-.19.36-.14.6-.05.24.09 1.53.72 1.79.85.26.14.44.19.5.29.07.1.07.58-.17 1.26Z" />
      </svg>
      <span className="max-sm:hidden">Pesan via WhatsApp</span>
    </a>
  )
}
