'use client'

import { useEffect, useRef } from 'react'

const testimonials = [
  {
    quote:
      'The cardamom from KTA completely changed the character of our dessert menu. It is the most consistently fragrant cardamom I have encountered in twenty years of professional cooking.',
    author: 'Rajan Iyer',
    role: 'Executive Chef',
    property: 'The Leela Palace, Chennai',
  },
  {
    quote:
      'Supply reliability is everything in a high-volume kitchen. KTA has never missed a delivery in three years. The quality is exceptional — but the trust they have built is worth more.',
    author: 'Priya Menon',
    role: 'F&B Director',
    property: 'ITC Grand Chola, Chennai',
  },
  {
    quote:
      'We built our new tasting menu around the KTA Kashmiri chilli. The colour is extraordinary — our guests ask about it by name now. That says everything.',
    author: 'Arun Subramaniam',
    role: 'Head Chef',
    property: 'Malabar House, Kochi',
  },
]

export function Testimonials() {
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
    <section className="bg-background py-24 lg:py-36 overflow-hidden" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div
          className="reveal text-center mb-16 lg:mb-20"
          style={{ '--reveal-delay': '0ms' } as React.CSSProperties}
        >
          <p className="font-sans text-[10px] uppercase tracking-[0.26em] text-gold mb-4">
            From the kitchens we serve
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-foreground leading-tight text-balance max-w-2xl mx-auto">
            Trusted by chefs who leave nothing to chance.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <figure
              key={t.author}
              className="reveal border border-border p-8 lg:p-10 relative"
              style={{ '--reveal-delay': `${i * 120}ms` } as React.CSSProperties}
            >
              {/* Opening mark */}
              <span
                className="font-serif text-7xl leading-none text-gold/20 absolute top-4 left-7"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <blockquote className="font-serif text-lg lg:text-xl font-light text-foreground leading-[1.6] relative z-10 mt-4">
                {t.quote}
              </blockquote>

              <figcaption className="mt-8 pt-6 border-t border-border">
                <p className="font-sans text-xs font-medium text-foreground">
                  {t.author}
                </p>
                <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-muted-foreground mt-0.5">
                  {t.role}
                </p>
                <p className="font-sans text-[10px] text-gold/70 mt-0.5">
                  {t.property}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
