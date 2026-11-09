import { waDefault } from '../data/site'

export default function CtaBanner() {
  return (
    <section className="bg-cream pt-0 pb-24 md:pb-32">
      <div className="shell">
        <div className="rounded-card-lg bg-crimson px-8 py-14 text-white md:px-14 md:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1.5fr_auto]">
            <div className="max-w-[52ch]">
              <h2 className="text-[clamp(1.7rem,3.4vw,2.4rem)]">
                Lapar? Pesan bento sekarang, kami antar hangat.
              </h2>
              <p className="mt-4 text-[1rem] leading-[1.7] text-white/80">
                Gratis ongkir untuk pemesanan minimal 5 kotak di area tertentu.
                Tersedia juga paket catering untuk acara kantor dan keluarga.
              </p>
            </div>
            <a
              className="btn btn-light max-lg:w-full"
              href={waDefault}
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2Zm5.8 14.13c-.24.68-1.42 1.3-1.95 1.35-.53.05-1.02.24-3.44-.72-2.9-1.15-4.72-4.11-4.86-4.3-.14-.19-1.15-1.53-1.15-2.92s.73-2.07.99-2.35c.26-.29.56-.36.75-.36l.54.01c.17 0 .41-.06.63.48.24.58.81 2 .88 2.15.07.14.12.31.02.5-.1.19-.36.5-.53.72-.17.22-.29.28-.14.53.14.24.65 1.06 1.39 1.72.95.85 1.76 1.11 2 .1.24-.14.53-.55.72-.74.19-.19.36-.14.6-.05.24.09 1.53.72 1.79.85.26.14.44.19.5.29.07.1.07.58-.17 1.26Z" />
              </svg>
              Chat WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
