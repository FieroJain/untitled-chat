'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'

const featured = [
  {
    id: 'cardamom',
    name: 'Green Cardamom',
    origin: 'Idukki, Kerala',
    grade: 'Export Grade — 8mm+',
    description:
      'Intensely aromatic with camphor-sweet notes. Hand-picked at peak maturity and shade-dried to preserve volatile oils.',
    image: '/images/product-cardamom.png',
    tag: 'Signature',
  },
  {
    id: 'pepper',
    name: 'Black Pepper',
    origin: 'Wayanad, Kerala',
    grade: 'Malabar Bold Grade',
    description:
      'Full-bodied heat with earthy, woody undertones. Harvested from mature berry clusters for maximum piperine content.',
    image: '/images/product-pepper.png',
    tag: 'Bestseller',
  },
  {
    id: 'chilli',
    name: 'Kashmiri Chilli',
    origin: 'Byadgi, Karnataka',
    grade: 'S4 Premium Grade',
    description:
      'Deep scarlet colour with mild heat — the chilli behind every restaurant-quality red. Renowned for colour yield.',
    image: '/images/product-chilli.png',
    tag: 'Chef\'s Choice',
  },
]

export function FeaturedProducts() {
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
    <section className="bg-ink py-24 lg:py-36" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div
            className="reveal"
            style={{ '--reveal-delay': '0ms' } as React.CSSProperties}
          >
            <p className="font-sans text-[10px] uppercase tracking-[0.26em] text-gold mb-4">
              Featured Spices
            </p>
            <h2 className="font-serif text-4xl lg:text-6xl font-light text-ink-foreground leading-tight text-balance max-w-xl">
              Where every pinch carries a provenance.
            </h2>
          </div>
          <div
            className="reveal"
            style={{ '--reveal-delay': '150ms' } as React.CSSProperties}
          >
            <Link
              href="/collection"
              className="inline-flex items-center gap-3 font-sans text-[10px] uppercase tracking-[0.22em] text-gold border-b border-gold/40 pb-1 hover:border-gold transition-colors duration-300"
            >
              View Full Collection
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>

        {/* Product grid */}
        <div className="grid lg:grid-cols-3 gap-px bg-white/8">
          {featured.map((product, i) => (
            <article
              key={product.id}
              className="reveal group relative bg-ink overflow-hidden"
              style={{ '--reveal-delay': `${i * 120}ms` } as React.CSSProperties}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={product.image}
                  alt={`${product.name} — KTA premium spice`}
                  fill
                  className="object-cover img-zoom"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                {/* Tag */}
                <div className="absolute top-5 left-5 bg-gold/90 px-3 py-1">
                  <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-gold-foreground">
                    {product.tag}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 lg:p-8 border-t border-white/8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl font-light text-ink-foreground">
                      {product.name}
                    </h3>
                    <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-gold mt-1">
                      {product.origin}
                    </p>
                  </div>
                  <span className="font-sans text-[9px] uppercase tracking-[0.15em] text-ink-foreground/40 border border-white/15 px-2.5 py-1 shrink-0">
                    {product.grade}
                  </span>
                </div>
                <p className="font-sans text-sm text-ink-foreground/55 mt-4 leading-relaxed">
                  {product.description}
                </p>
                <div className="mt-6 pt-4 border-t border-white/8">
                  <Link
                    href={`/collection#${product.id}`}
                    className="inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.2em] text-gold/70 hover:text-gold transition-colors duration-300"
                  >
                    View Details <ArrowRight size={10} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
