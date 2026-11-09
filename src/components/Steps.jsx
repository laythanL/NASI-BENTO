import { steps } from '../data/menu'
import { waDefault } from '../data/site'

export default function Steps() {
  return (
    <section id="cara-pesan" className="section-y bg-cream">
      <div className="shell">
        <div className="max-w-[44rem]">
          <h2>Pesan bento hanya dalam 4 langkah</h2>
          <p className="mt-5 text-[1.02rem] leading-[1.7] text-muted">
            Mudah, cepat, dan tanpa minimum order untuk area tertentu.
          </p>
        </div>

        <ol className="mt-14 grid list-none grid-cols-1 gap-px border border-ink/12 bg-ink/12 p-0 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="bg-cream px-7 pt-8 pb-7">
              <span className="font-serif text-[2.4rem] leading-none text-crimson/25">
                0{i + 1}
              </span>
              <h3 className="mt-6 font-serif text-[1.2rem]">{s.title}</h3>
              <p className="mt-2.5 text-[0.92rem] leading-[1.65] text-muted">
                {s.desc}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-ink/12 pt-8">
          <p className="font-serif text-[1.3rem]">
            Siap pesan sekarang? Tim kami siap membantu.
          </p>
          <a
            className="btn btn-primary"
            href={waDefault}
            target="_blank"
            rel="noreferrer"
          >
            Mulai pesan
          </a>
        </div>
      </div>
    </section>
  )
}
