'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

export function Heritage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.15 },
    )
    const els = ref.current?.querySelectorAll('.reveal')
    els?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="heritage" className="bg-background py-24 lg:py-36" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="reveal relative overflow-hidden aspect-[4/5] lg:aspect-auto lg:h-[600px] group">
            <Image
              src="/images/heritage-kerala.png"
              alt="Kerala spice plantation — origin of KTA spices"
              fill
              className="object-cover img-zoom"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Subtle vignette */}
            <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.25)]" />
            {/* Label tag */}
            <div className="absolute bottom-6 left-6 bg-ink/80 backdrop-blur-sm px-4 py-2 border-l-2 border-gold">
              <p className="font-sans text-[9px] uppercase tracking-[0.24em] text-gold">Origin</p>
              <p className="font-serif text-sm text-ink-foreground mt-0.5">Western Ghats, Kerala</p>
            </div>
          </div>

          {/* Copy */}
          <div className="space-y-8">
            <div
              className="reveal"
              style={{ '--reveal-delay': '100ms' } as React.CSSProperties}
            >
              <p className="font-sans text-[10px] uppercase tracking-[0.26em] text-gold mb-4">
                Our Heritage
              </p>
              <h2 className="font-serif text-4xl lg:text-6xl font-light text-foreground leading-tight text-balance">
                Three decades of knowing where flavour begins.
              </h2>
            </div>

            <div
              className="reveal space-y-5"
              style={{ '--reveal-delay': '200ms' } as React.CSSProperties}
            >
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                KTA was founded on a singular belief — that the difference between a
                good dish and a great one often lives in the spice drawer. We work
                directly with growers across Kerala, Tamil Nadu and Karnataka,
                visiting each estate every season.
              </p>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                Every batch is graded by hand, tested for moisture, volatile oil
                content and microbial load before it ever reaches a kitchen. No
                intermediaries. No shortcuts. Just the spice, as it was grown.
              </p>
            </div>

            {/* Pillars */}
            <div
              className="reveal grid grid-cols-2 gap-6 pt-4 border-t border-border"
              style={{ '--reveal-delay': '300ms' } as React.CSSProperties}
            >
              {[
                { n: '30+', label: 'Years in trade' },
                { n: '12', label: 'Estate partnerships' },
                { n: '100%', label: 'Direct from grower' },
                { n: '6', label: 'Spice varieties' },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-serif text-3xl lg:text-4xl text-foreground font-light">
                    {item.n}
                  </p>
                  <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-muted-foreground mt-1">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
