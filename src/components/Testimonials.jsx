import { testimonials } from '../data/menu'

function Stars({ count }) {
  return (
    <span
      className="mb-5 inline-flex gap-1 text-gold"
      aria-label={`${count} dari 5 bintang`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-4 w-4"
          fill={i < count ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3Z" />
        </svg>
      ))}
    </span>
  )
}

export default function Testimonials() {
  const [lead, ...rest] = testimonials

  return (
    <section
      id="testimoni"
      className="section-y border-y border-white/10 bg-ink text-cream"
    >
      <div className="shell">
        <div className="max-w-[44rem]">
          <h2>Dipercaya ribuan pelanggan</h2>
          <p className="mt-5 text-[1.02rem] leading-[1.7] text-cream/65">
            Cerita mereka yang sudah mencoba bento kami.
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-20">
          <figure className="m-0">
            <Stars count={lead.rating} />
            <blockquote className="m-0 font-serif text-[clamp(1.5rem,2.7vw,2.1rem)] leading-[1.35] text-cream">
              &ldquo;{lead.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-[0.95rem] text-cream/60">
              {lead.name}, {lead.role}
            </figcaption>
          </figure>

          <div className="flex flex-col divide-y divide-white/12 border-t border-white/12">
            {rest.map((t) => (
              <figure key={t.name} className="m-0 py-6">
                <blockquote className="m-0 text-[0.98rem] leading-[1.65] text-cream/85">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-3 text-[0.85rem] text-cream/55">
                  {t.name}, {t.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
