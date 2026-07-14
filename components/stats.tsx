'use client'

import { useEffect, useRef } from 'react'

const stats = [
  { value: '350+', label: 'Fine kitchens served', sub: 'Across South India' },
  { value: '6', label: 'Origin-verified varieties', sub: 'Grown by partner estates' },
  { value: '48h', label: 'Order-to-delivery', sub: 'Guaranteed within region' },
  { value: '100%', label: 'Batch-tested quality', sub: 'Every single delivery' },
]

export function Stats() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('is-visible')
        })
      },
      { threshold: 0.15 },
    )
    const els = ref.current?.querySelectorAll('.reveal')
    els?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-background border-y border-border py-16 lg:py-20" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="reveal px-6 lg:px-10 first:pl-0 last:pr-0 py-4"
              style={{ '--reveal-delay': `${i * 80}ms` } as React.CSSProperties}
            >
              <p className="font-serif text-4xl lg:text-5xl xl:text-6xl font-light text-foreground">
                {s.value}
              </p>
              <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-foreground mt-2">
                {s.label}
              </p>
              <p className="font-sans text-[10px] text-muted-foreground mt-0.5">
                {s.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
