'use client'

import { useEffect, useRef } from 'react'

export function HotelSmart() {
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
    <section id="hotel-smart" className="bg-background py-24 lg:py-36 relative overflow-hidden" ref={ref}>
      {/* Subtle watermark growth-arrow motif */}
      <div className="absolute -top-20 -right-20 text-[280px] font-serif text-gold/5 leading-none select-none pointer-events-none rotate-12">
        ↗
      </div>
      <div className="absolute -bottom-20 -left-20 text-[200px] font-serif text-gold/5 leading-none select-none pointer-events-none -rotate-6">
        ↗
      </div>
      {/* Teal/gold accent border top */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-500 via-gold to-teal-500/30" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — growth arrow visual */}
          <div
            className="reveal"
            style={{ '--reveal-delay': '0ms' } as React.CSSProperties}
          >
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
              {/* Upward trending line graph */}
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Grid lines */}
                {[80, 160, 240, 320].map((y) => (
                  <line
                    key={y}
                    x1="40"
                    y1={y}
                    x2="360"
                    y2={y}
                    stroke="oklch(0.2 0.015 60 / 8%)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                ))}
                {/* Growth line — teal to gold gradient */}
                <defs>
                  <linearGradient id="growthGrad" x1="0" y1="1" x2="1" y2="0">
                    <stop offset="0%" stopColor="#14b8a6" />
                    <stop offset="50%" stopColor="#a16207" />
                    <stop offset="100%" stopColor="#eab308" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                {/* Area under curve */}
                <path
                  d="M40 320 L80 280 L140 260 L200 200 L260 150 L320 100 L360 60 L360 320 Z"
                  fill="url(#growthGrad)"
                  fillOpacity="0.08"
                />
                {/* The line */}
                <path
                  d="M40 320 L80 280 L140 260 L200 200 L260 150 L320 100 L360 60"
                  stroke="url(#growthGrad)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#glow)"
                  className="animate-pulse"
                />
                {/* Arrowhead */}
                <path
                  d="M350 55 L360 60 L352 72"
                  stroke="url(#growthGrad)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                {/* Data dots */}
                {[
                  [40, 320],
                  [80, 280],
                  [140, 260],
                  [200, 200],
                  [260, 150],
                  [320, 100],
                  [360, 60],
                ].map(([x, y], i) => (
                  <circle
                    key={i}
                    cx={x}
                    cy={y}
                    r="4"
                    fill="oklch(0.58 0.118 58)"
                    stroke="oklch(0.97 0.01 82)"
                    strokeWidth="1.5"
                  />
                ))}
                {/* Labels */}
                <text x="40" y="340" className="font-sans text-[8px]" fill="oklch(0.48 0.02 68)" textAnchor="middle">Q1</text>
                <text x="140" y="340" className="font-sans text-[8px]" fill="oklch(0.48 0.02 68)" textAnchor="middle">Q2</text>
                <text x="260" y="340" className="font-sans text-[8px]" fill="oklch(0.48 0.02 68)" textAnchor="middle">Q3</text>
                <text x="360" y="340" className="font-sans text-[8px]" fill="oklch(0.48 0.02 68)" textAnchor="middle">Q4</text>
                <text x="20" y="325" className="font-sans text-[7px]" fill="oklch(0.48 0.02 68)" textAnchor="end">GROWTH</text>
              </svg>
            </div>
          </div>

          {/* Right — copy */}
          <div className="space-y-8">
            <div
              className="reveal"
              style={{ '--reveal-delay': '100ms' } as React.CSSProperties}
            >
              <p className="font-sans text-[10px] uppercase tracking-[0.26em] text-teal-600 mb-3">
                Hotel Smart 24/7
              </p>
              <h2 className="font-serif text-4xl lg:text-6xl font-light text-foreground leading-tight text-balance">
                Room service that never clocks out.
              </h2>
            </div>

            <div
              className="reveal space-y-5"
              style={{ '--reveal-delay': '200ms' } as React.CSSProperties}
            >
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                Round-the-clock delivery on everything in our own catalogue, completely free.
                Need something outside our range? We&rsquo;ll source it for you too, but only
                products that meet our quality standard, supplied with a fair additional service
                charge.
              </p>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                Backed by 25+ years of trading experience, Hotel Smart 24/7 is built for
                kitchens that can&rsquo;t afford to wait.
              </p>
            </div>

            {/* Stat chips */}
            <div
              className="reveal flex flex-wrap items-center gap-3 pt-4"
              style={{ '--reveal-delay': '300ms' } as React.CSSProperties}
            >
              {[
                { label: '24/7', sub: 'Always open' },
                { label: 'Free', sub: 'On our catalogue' },
                { label: '25+ yrs', sub: 'Trading experience' },
              ].map((chip) => (
                <div
                  key={chip.label}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500/10 to-gold/10 border border-teal-500/20"
                >
                  <span className="font-sans text-[10px] uppercase tracking-[0.16em] font-semibold text-teal-700">
                    {chip.label}
                  </span>
                  <span className="font-sans text-[9px] text-muted-foreground">
                    · {chip.sub}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}