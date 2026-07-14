import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-ink">
      {/* Background image */}
      <div className="absolute inset-0 hero-img-seq" style={{ '--seq-delay': '0ms' } as React.CSSProperties}>
        <Image
          src="/images/hero-spices.png"
          alt="Premium Indian spices — KTA collection"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Multi-layer dark overlay for text legibility */}
        <div className="absolute inset-0 bg-ink/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full pb-20 lg:pb-28 pt-32 lg:pt-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {/* Eyebrow */}
          <p
            className="hero-seq font-sans text-[10px] uppercase tracking-[0.3em] text-gold/80 mb-6"
            style={{ '--seq-delay': '300ms' } as React.CSSProperties}
          >
            Kottayar Trading Agency &nbsp;·&nbsp; Est. in the Pursuit of Purity
          </p>

          {/* Headline */}
          <h1
            className="hero-seq font-serif text-5xl sm:text-6xl lg:text-8xl xl:text-9xl font-light text-ink-foreground leading-[0.92] tracking-tight max-w-4xl text-balance"
            style={{ '--seq-delay': '500ms' } as React.CSSProperties}
          >
            The quiet standard<br />
            <em className="not-italic text-gold">behind India's</em><br />
            finest kitchens.
          </h1>

          {/* Body */}
          <p
            className="hero-seq font-sans text-sm lg:text-base text-ink-foreground/65 max-w-lg mt-8 leading-relaxed"
            style={{ '--seq-delay': '700ms' } as React.CSSProperties}
          >
            Export-grade spices, sourced from carefully selected growing regions and
            graded batch by batch — supplied exclusively to fine-dining restaurants
            and luxury hotel properties across South India.
          </p>

          {/* CTAs */}
          <div
            className="hero-seq flex flex-wrap items-center gap-5 mt-10"
            style={{ '--seq-delay': '900ms' } as React.CSSProperties}
          >
            <Link
              href="/#contact"
              className="inline-block font-sans text-[11px] uppercase tracking-[0.22em] px-8 py-4 bg-gold text-gold-foreground hover:bg-gold/90 transition-colors duration-300"
            >
              Register Your Kitchen
            </Link>
            <Link
              href="/collection"
              className="link-line inline-block font-sans text-[11px] uppercase tracking-[0.22em] text-ink-foreground/70 hover:text-ink-foreground transition-colors duration-300 py-4"
            >
              View the Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom marquee bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-ink/60 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-3 divide-x divide-white/10 py-4">
            {[
              { label: 'Institutional Compliance', sub: 'FSSAI & export certified' },
              { label: 'South India Distribution', sub: 'Next-day delivery network' },
              { label: 'Zero-Downtime Supply', sub: 'Guaranteed batch continuity' },
            ].map((item) => (
              <div key={item.label} className="px-4 lg:px-8 first:pl-0 last:pr-0">
                <p className="font-sans text-[9px] uppercase tracking-[0.22em] text-gold/70">
                  {item.label}
                </p>
                <p className="font-sans text-[10px] text-ink-foreground/50 mt-0.5">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
