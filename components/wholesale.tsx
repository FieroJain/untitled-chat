'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

export function Wholesale() {
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
    <section id="wholesale" className="bg-ink py-24 lg:py-36 relative overflow-hidden" ref={ref}>
      {/* Diagonal ribbon accent */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gold/5 rotate-45 origin-top-right" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gold/5 -rotate-45 origin-bottom-left" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="reveal inline-flex items-center gap-3 px-6 py-2.5 bg-ink border border-gold/40 mb-8"
            style={{ '--reveal-delay': '0ms' } as React.CSSProperties}
          >
            <span className="font-sans text-[9px] uppercase tracking-[0.22em] text-gold">
              Wholesale & Bulk Supply
            </span>
          </div>

          <div
            className="reveal"
            style={{ '--reveal-delay': '100ms' } as React.CSSProperties}
          >
            <h2 className="font-serif text-4xl lg:text-6xl font-light text-ink-foreground leading-tight text-balance">
              For manufacturers who need more than retail.
            </h2>
          </div>

          <div
            className="reveal mt-8 max-w-2xl mx-auto"
            style={{ '--reveal-delay': '200ms' } as React.CSSProperties}
          >
            <p className="font-sans text-sm text-ink-foreground/55 leading-relaxed">
              We supply manufacturers and industrial buyers — including resin, packaging and
              allied trades — with any product category at wholesale rates. Volume pricing,
              flexible dispatch, and dedicated account support for bulk orders.
            </p>
          </div>

          <div
            className="reveal mt-10"
            style={{ '--reveal-delay': '300ms' } as React.CSSProperties}
          >
            <Link
              href="/#contact"
              className="inline-block font-sans text-[11px] uppercase tracking-[0.22em] px-10 py-4 border-2 border-gold text-gold hover:bg-gold hover:text-gold-foreground transition-all duration-300"
            >
              Request Wholesale Rates
            </Link>
          </div>

          {/* Detail chips */}
          <div
            className="reveal mt-12 flex flex-wrap justify-center items-center gap-4 pt-8 border-t border-white/8"
            style={{ '--reveal-delay': '400ms' } as React.CSSProperties}
          >
            {[
              'Volume pricing across all categories',
              'Flexible dispatch scheduling',
              'Dedicated bulk account support',
            ].map((item) => (
              <span
                key={item}
                className="font-sans text-[9px] uppercase tracking-[0.16em] text-ink-foreground/50 px-3 py-1.5 border border-white/10"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}