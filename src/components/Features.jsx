const ICONS = {
  Praktis: (
    <>
      <path d="M4 7.5 12 4l8 3.5v9L12 20l-8-3.5v-9Z" />
      <path d="M4 7.5 12 11l8-3.5M12 11v9" />
    </>
  ),
  Lezat: (
    <>
      <path d="M7 3v8a2.5 2.5 0 0 0 5 0V3M9.5 11v10" />
      <path d="M17 3c-1.4 1.4-1.8 3.2-1.8 5.2 0 1.4.7 2.3 1.8 2.6V21" />
    </>
  ),
  Higienis: (
    <>
      <path d="M12 3 5 6v5.5c0 4.3 2.8 7.6 7 9.5 4.2-1.9 7-5.2 7-9.5V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  Terjangkau: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M14.5 9.2c-.6-.7-1.6-1-2.6-.9-1.3.1-2.2.9-2.2 1.9 0 1.2 1.1 1.6 2.4 1.9 1.4.3 2.6.8 2.6 2 0 1-.9 1.9-2.3 2-1.1.1-2.1-.3-2.7-1M12 6.8v1.4M12 16.2v1.4" />
    </>
  ),
}

const FEATURES = [
  {
    title: 'Praktis',
    desc: 'Siap santap kapan saja. Dikemas rapi, mudah dibawa, dan tidak merepotkan.',
  },
  {
    title: 'Lezat',
    desc: 'Resep autentik Jepang dengan bumbu seimbang, dimasak segar setiap hari.',
  },
  {
    title: 'Higienis',
    desc: 'Proses masak bersih, kemasan food-grade, dan standar keamanan terjaga.',
  },
  {
    title: 'Terjangkau',
    desc: 'Harga bersahabat dengan porsi mengenyangkan. Ramah untuk kantong.',
  },
]

export default function Features() {
  return (
    <section id="keunggulan" className="section-y border-y border-ink/12 bg-paper">
      <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <h2>Empat alasan pelanggan kembali lagi</h2>
          <p className="mt-5 max-w-[40ch] text-[1.02rem] leading-[1.7] text-muted">
            Kami percaya makanan enak tidak harus mahal atau ribet. Inilah
            komitmen kami di setiap kotak bento.
          </p>
        </div>

        <dl className="divide-y divide-ink/12 border-y border-ink/12">
          {FEATURES.map((f) => (
            <div key={f.title} className="flex items-start gap-6 py-7">
              <span className="mt-0.5 shrink-0 text-crimson">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {ICONS[f.title]}
                </svg>
              </span>
              <div className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-6">
                <dt className="font-serif text-[1.25rem]">{f.title}</dt>
                <dd className="max-w-[54ch] text-[0.95rem] leading-[1.7] text-muted">
                  {f.desc}
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
