import Image from 'next/image'
import Link from 'next/link'

export function CollectionHero() {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-spices.png"
          alt="KTA full spice collection"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
      </div>

      <div className="relative z-10 w-full pb-16 lg:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <nav className="flex items-center gap-2 mb-6" aria-label="Breadcrumb">
            <Link
              href="/"
              className="font-sans text-[10px] uppercase tracking-[0.2em] text-ink-foreground/50 hover:text-ink-foreground transition-colors"
            >
              KTA
            </Link>
            <span className="text-ink-foreground/30 text-xs">/</span>
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold/80">
              The Collection
            </span>
          </nav>

          <h1 className="font-serif text-5xl lg:text-7xl font-light text-ink-foreground leading-tight text-balance max-w-3xl">
            The Full Collection
          </h1>
          <p className="font-sans text-sm text-ink-foreground/60 mt-4 max-w-xl leading-relaxed">
            Six origin-verified spice varieties. Each batch tested, documented and delivered with
            the provenance your kitchen deserves.
          </p>
        </div>
      </div>
    </section>
  )
}
