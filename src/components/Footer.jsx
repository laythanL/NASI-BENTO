import Logo from './Logo'
import { pillars, site, waDefault } from '../data/site'

const LINKS = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Keunggulan', href: '#keunggulan' },
  { label: 'Cara Pesan', href: '#cara-pesan' },
]

export default function Footer() {
  return (
    <footer id="kontak" className="bg-sumi px-0 pt-18 pb-7 text-white/72">
      <div className="shell grid grid-cols-[1.6fr_1fr_1.3fr_1.2fr] gap-10 max-lg:grid-cols-2 max-lg:gap-8.5 max-sm:grid-cols-1">
        <div className="max-lg:col-span-2 max-sm:col-span-1">
          <Logo size={52} />
          <p className="mt-5 mb-4.5 max-w-[30rem] text-[0.92rem] leading-[1.7]">
            {site.name} — {site.tagline}. Menyajikan bento segar, halal, dan
            higienis untuk menemani harimu.
          </p>
          <ul className="flex list-none flex-wrap gap-2 p-0">
            {pillars.map((p) => (
              <li
                key={p}
                className="border border-white/12 px-3.5 py-1.5 font-serif text-[0.86rem] italic text-[#f3e4d6]"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Tautan cepat">
          <h4 className="mb-4.5 font-serif text-[1rem] text-white">Jelajahi</h4>
          <ul className="flex list-none flex-col gap-2.5 p-0 text-[0.92rem]">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="transition-colors hover:text-crimson-soft"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h4 className="mb-4.5 font-serif text-[1rem] text-white">
            Hubungi kami
          </h4>
          <ul className="flex list-none flex-col gap-2.5 p-0 text-[0.92rem]">
            <li>
              <a
                href={waDefault}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-crimson-soft"
              >
                {site.whatsappLabel}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="transition-colors hover:text-crimson-soft"
              >
                {site.email}
              </a>
            </li>
            <li>{site.address}</li>
          </ul>
        </div>

        <div>
          <ul className="flex list-none flex-row flex-wrap gap-2 p-0">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block border border-white/16 px-3.5 py-1.5 text-[0.82rem] font-semibold transition-colors hover:border-crimson hover:bg-crimson hover:text-white"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="shell mt-13 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-[0.85rem] max-sm:justify-center max-sm:text-center">
        <p>
          &copy; {new Date().getFullYear()} {site.name}. Seluruh hak cipta
          dilindungi.
        </p>
        <p>Dibuat untuk pecinta bento.</p>
      </div>
    </footer>
  )
}
