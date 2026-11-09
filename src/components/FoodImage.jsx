import { useState } from 'react'

// Menampilkan foto kalau file-nya ada di `public/images/`.
// Kalau belum ada (atau gagal dimuat), tampil fallback netral — bukan emoji.
export default function FoodImage({
  src,
  alt,
  width = 1200,
  height = 900,
  priority = false,
  imgClassName = '',
}) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="flex h-full w-full flex-col items-center justify-center gap-2.5 border border-ink/12 bg-cream-deep p-6 text-center"
      >
        <span className="font-serif text-[0.95rem] italic text-muted">
          {alt}
        </span>
        <span className="text-[0.68rem] font-semibold tracking-[0.18em] text-ink/35 uppercase">
          Foto belum tersedia
        </span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      onError={() => setFailed(true)}
      className={`h-full w-full object-cover ${imgClassName}`}
    />
  )
}
