'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { CheckCircle2 } from 'lucide-react'

const benefits = [
  'Dedicated account manager for every kitchen partner',
  'Quarterly estate-origin tasting kits delivered free',
  'Priority allocation during seasonal supply peaks',
  'Custom batch grading on request for signature dishes',
  'FSSAI-compliant documentation for every delivery',
  'Flexible minimum order — designed around your menu cycles',
]

export function Partnership() {
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
    <section id="partnership" className="bg-ink py-24 lg:py-36" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <div>
            <div
              className="reveal"
              style={{ '--reveal-delay': '0ms' } as React.CSSProperties}
            >
              <p className="font-sans text-[10px] uppercase tracking-[0.26em] text-gold mb-4">
                Partnership
              </p>
              <h2 className="font-serif text-4xl lg:text-6xl font-light text-ink-foreground leading-tight text-balance">
                Built for kitchens that take flavour seriously.
              </h2>
            </div>
            <div
              className="reveal mt-8"
              style={{ '--reveal-delay': '100ms' } as React.CSSProperties}
            >
              <p className="font-sans text-sm text-ink-foreground/55 leading-relaxed max-w-md">
                We only work with establishments that share our standards. Each
                partnership begins with a consultation — we learn your menus, your
                service volumes and your expectations. Then we build a supply
                programme around exactly what you need.
              </p>
              <Link
                href="/#contact"
                className="inline-block mt-8 font-sans text-[11px] uppercase tracking-[0.22em] px-8 py-4 bg-gold text-gold-foreground hover:bg-gold/90 transition-colors duration-300"
              >
                Begin a Partnership
              </Link>
            </div>
          </div>

          {/* Right — benefits */}
          <div
            className="reveal"
            style={{ '--reveal-delay': '150ms' } as React.CSSProperties}
          >
            <ul className="space-y-5">
              {benefits.map((b, i) => (
                <li
                  key={b}
                  className="reveal flex items-start gap-4 pb-5 border-b border-white/8 last:border-0 last:pb-0"
                  style={{ '--reveal-delay': `${i * 60}ms` } as React.CSSProperties}
                >
                  <CheckCircle2
                    size={14}
                    className="text-gold mt-0.5 shrink-0"
                    strokeWidth={1.5}
                  />
                  <p className="font-sans text-sm text-ink-foreground/70 leading-relaxed">
                    {b}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
