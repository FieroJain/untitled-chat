'use client'

import { useEffect, useRef } from 'react'
import { Play } from 'lucide-react'

const videos = [
  {
    id: 'grading',
    label: 'Grading',
    bg: 'from-amber-900/40 to-ink/60',
    icon: '🔍',
  },
  {
    id: 'packing',
    label: 'Packing',
    bg: 'from-teal-900/40 to-ink/60',
    icon: '📦',
  },
  {
    id: 'dispatch',
    label: 'Dispatch',
    bg: 'from-gold/30 to-ink/60',
    icon: '🚚',
  },
]

export function VideoSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('is-visible')
        })
      },
      { threshold: 0.1 },
    )
    const els = ref.current?.querySelectorAll('.reveal')
    els?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-background py-24 lg:py-36" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div
          className="reveal text-center mb-16 lg:mb-20"
          style={{ '--reveal-delay': '0ms' } as React.CSSProperties}
        >
          <p className="font-sans text-[10px] uppercase tracking-[0.26em] text-gold mb-4">
            See the Purity for Yourself
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-foreground leading-tight text-balance max-w-2xl mx-auto">
            From our hands to your kitchen —<br />
            <span className="text-gold">every step, transparent.</span>
          </h2>
        </div>

        {/* Video grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {videos.map((v, i) => (
            <div
              key={v.id}
              className="reveal group relative overflow-hidden bg-ink"
              style={{ '--reveal-delay': `${i * 120}ms` } as React.CSSProperties}
            >
              {/* Placeholder video embed — 16:9 aspect */}
              <div className="relative aspect-video overflow-hidden">
                {/* Gradient placeholder */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${v.bg} flex items-center justify-center`}
                >
                  <div className="text-center">
                    <span className="text-4xl block mb-2">{v.icon}</span>
                    <Play
                      size={32}
                      className="text-gold/80 mx-auto group-hover:scale-110 transition-transform duration-300"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Overlay with label */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent p-6 pt-12">
                  <span className="font-sans text-[10px] uppercase tracking-[0.22em] text-gold">
                    {v.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div
          className="reveal mt-8 text-center"
          style={{ '--reveal-delay': '300ms' } as React.CSSProperties}
        >
          <p className="font-sans text-[10px] text-muted-foreground tracking-[0.15em]">
            Authenticity starts at the source — every batch is graded, packed, and dispatched from our facility.
          </p>
        </div>
      </div>
    </section>
  )
}