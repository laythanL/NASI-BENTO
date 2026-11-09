import { useEffect, useState } from 'react';
import Logo from './Logo';
import { pillars, site, waDefault } from '../data/site';

const NAV = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Keunggulan', href: '#keunggulan' },
  { label: 'Cara Pesan', href: '#cara-pesan' },
  { label: 'Kontak', href: '#kontak' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled
          ? 'border-ink/12 bg-cream/90 shadow-[0_10px_30px_-26px_rgba(27,24,19,0.6)] backdrop-blur-md'
          : 'border-transparent'
      }`}
    >
      <div className="shell flex h-[74px] items-center justify-between gap-5">
        <a href="#beranda" className="inline-flex items-center gap-3" aria-label={site.name}>
          <Logo size={42} />
        </a>

        <nav className="flex items-center gap-7 max-lg:hidden" aria-label="Navigasi utama">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-2 text-[0.92rem] font-semibold text-ink after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-crimson after:transition-transform after:duration-200 hover:text-crimson hover:after:scale-x-100"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            className="btn btn-primary max-lg:hidden"
            href={waDefault}
            target="_blank"
            rel="noreferrer"
          >
            Pesan Sekarang
          </a>
          <button
            type="button"
            className="flex h-11 w-11 flex-col justify-between rounded-[3px] border-[1.5px] border-ink/20 bg-paper p-3 lg:hidden"
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block h-0.5 w-full rounded bg-ink transition duration-200 ${
                open ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-full rounded bg-ink transition duration-200 ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-full rounded bg-ink transition duration-200 ${
                open ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`fixed top-[74px] right-0 z-60 h-[calc(100vh-74px)] w-[min(340px,88vw)] overflow-y-auto border-l border-ink/12 bg-paper p-7 shadow-[-30px_0_60px_-40px_rgba(27,24,19,0.6)] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          open ? 'translate-x-0' : 'translate-x-[105%]'
        }`}
      >
        <nav className="flex flex-col" aria-label="Navigasi mobile">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="border-b border-ink/12 px-1 py-3.5 text-base font-semibold transition-colors hover:text-crimson"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            className="btn btn-primary btn-block mt-6"
            href={waDefault}
            target="_blank"
            rel="noreferrer"
          >
            Pesan Sekarang
          </a>
          <ul className="mt-6 flex list-none flex-wrap gap-2 p-0">
            {pillars.map((p) => (
              <li
                key={p}
                className="border border-crimson/25 px-3 py-1.5 text-xs font-semibold text-crimson"
              >
                {p}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {open && (
        <button
          type="button"
          className="fixed inset-x-0 top-[74px] bottom-0 z-55 border-none bg-ink/40"
          aria-label="Tutup menu"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
}
