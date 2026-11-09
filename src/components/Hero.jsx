import { pillars, site, waDefault } from '../data/site'
import FoodImage from './FoodImage'

export default function Hero() {
  return (
    <section id="beranda" className="pt-14 pb-20 lg:pt-20 lg:pb-28">
      <div className="shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <p className="font-serif text-[0.95rem] italic text-muted">
            Bento Jepang, dibuat harian di Jakarta Selatan
          </p>

          <h1 className="mt-5 text-[clamp(2.2rem,4.8vw,3.4rem)] tracking-[-0.015em]">
            Nasi bento yang praktis &amp; lezat untuk setiap momen
          </h1>

          <p className="mt-6 max-w-[46ch] text-[1.05rem] leading-[1.7] text-muted">
            {site.tagline}. Kami menyajikan bento dengan bahan segar pilihan
            setiap hari, dikemas higienis, dan siap menemani aktivitasmu.
          </p>

          <ul className="mt-8 flex list-none flex-wrap items-center gap-x-7 gap-y-3 border-t border-ink/12 p-0 pt-6">
            {pillars.map((p) => (
              <li key={p} className="font-serif text-[1.02rem] italic text-ink">
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
            <a
              className="btn btn-primary"
              href={waDefault}
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2Zm5.8 14.13c-.24.68-1.42 1.3-1.95 1.35-.53.05-1.02.24-3.44-.72-2.9-1.15-4.72-4.11-4.86-4.3-.14-.19-1.15-1.53-1.15-2.92s.73-2.07.99-2.35c.26-.29.56-.36.75-.36l.54.01c.17 0 .41-.06.63.48.24.58.81 2 .88 2.15.07.14.12.31.02.5-.1.19-.36.5-.53.72-.17.22-.29.28-.14.53.14.24.65 1.06 1.39 1.72.95.85 1.76 1.11 2 .1.24-.14.53-.55.72-.74.19-.19.36-.14.6-.05.24.09 1.53.72 1.79.85.26.14.44.19.5.29.07.1.07.58-.17 1.26Z" />
              </svg>
              Pesan via WhatsApp
            </a>
            <a
              href="#cara-pesan"
              className="text-[0.95rem] font-semibold text-ink underline decoration-ink/25 underline-offset-4 transition-colors hover:text-crimson hover:decoration-crimson"
            >
              Cara pesan
            </a>
          </div>
        </div>

        <figure className="relative m-0 lg:pl-6">
          <div className="aspect-[4/5] w-full overflow-hidden border border-ink/12 bg-cream-deep">
            <FoodImage
              src="/images/hero-bento.jpg"
              alt="Bento Jepang berisi ayam teriyaki, nasi, telur, dan tumis sayur"
              width={1000}
              height={1250}
              priority
            />
          </div>
          <figcaption className="mt-3 font-serif text-[0.9rem] italic text-muted">
            Bento ayam teriyaki
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
