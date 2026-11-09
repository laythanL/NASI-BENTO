import { useState } from 'react'

// Logo memakai file gambar kalau tersedia.
// Taruh file logomu di folder `public/` dengan nama `logo.png` (atau `logo.svg`).
// Kalau belum ada, otomatis memakai wordmark teks + cipratan sebagai fallback.
const CANDIDATES = ['/logo.png', '/logo.svg']

function Wordmark({ size = 48, className = '' }) {
  return (
    <span
      className={`relative inline-flex items-center font-serif leading-none font-bold tracking-[0.02em] whitespace-nowrap ${className}`}
      style={{ fontSize: size * 0.52 }}
      aria-hidden="true"
    >
      <span className="text-crimson">
        NASI <strong>BENTO</strong>
      </span>
    </span>
  )
}

export default function Logo({ size = 48, className = '' }) {
  const [index, setIndex] = useState(0)
  const [failed, setFailed] = useState(false)

  const showImage = !failed && index < CANDIDATES.length

  if (showImage) {
    return (
      <img
        src={CANDIDATES[index]}
        alt="Logo Nasi Bento"
        className={`w-auto object-contain ${className}`}
        style={{ height: size }}
        onError={() => {
          if (index + 1 < CANDIDATES.length) setIndex(index + 1)
          else setFailed(true)
        }}
      />
    )
  }

  return <Wordmark size={size} className={className} />
}
