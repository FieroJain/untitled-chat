'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const allProducts = [
  { id: 'green-cardamom', name: 'Green Cardamom', tag: 'Export Grade', image: '/images/product-cardamom.png' },
  { id: 'black-pepper', name: 'Black Pepper', tag: 'Bestseller', image: '/images/product-pepper.png' },
  { id: 'kashmiri-chilli', name: 'Kashmiri Chilli', tag: "Chef's Choice", image: '/images/product-chilli.png' },
  { id: 'turmeric', name: 'Turmeric Finger', tag: 'Premium Grade', image: '/images/product-turmeric.png' },
  { id: 'coriander-seeds', name: 'Coriander Seeds', tag: 'Foundation Spice', image: '/images/product-coriander.png' },
  { id: 'cumin-seeds', name: 'Cumin Seeds', tag: 'Kitchen Staple', image: '/images/product-cumin.png' },
  { id: 'mustard-seeds', name: 'Brown Mustard Seeds', tag: 'Export Grade', image: '/images/placeholder.svg' },
  { id: 'fenugreek', name: 'Fenugreek Seeds', tag: 'Premium Grade', image: '/images/placeholder.svg' },
  { id: 'fennel-seeds', name: 'Fennel Seeds', tag: 'Export Grade', image: '/images/placeholder.svg' },
  { id: 'star-anise', name: 'Star Anise', tag: "Chef's Choice", image: '/images/placeholder.svg' },
  { id: 'cinnamon', name: 'Cinnamon Stick', tag: 'Premium Grade', image: '/images/placeholder.svg' },
  { id: 'cloves', name: 'Cloves', tag: 'Export Grade', image: '/images/placeholder.svg' },
  { id: 'nutmeg', name: 'Nutmeg Whole', tag: 'Bestseller', image: '/images/placeholder.svg' },
  { id: 'mace', name: 'Mace', tag: "Chef's Choice", image: '/images/placeholder.svg' },
  { id: 'bay-leaf', name: 'Indian Bay Leaf', tag: 'Foundation Spice', image: '/images/placeholder.svg' },
  { id: 'cardamom-black', name: 'Black Cardamom', tag: 'Export Grade', image: '/images/placeholder.svg' },
  { id: 'pepper-white', name: 'White Pepper', tag: 'Premium Grade', image: '/images/placeholder.svg' },
  { id: 'chilli-byadgi', name: 'Byadgi Chilli', tag: "Chef's Choice", image: '/images/placeholder.svg' },
  { id: 'chilli-guntur', name: 'Guntur Chilli', tag: 'Bestseller', image: '/images/placeholder.svg' },
  { id: 'turmeric-raw', name: 'Raw Turmeric', tag: 'Premium Grade', image: '/images/placeholder.svg' },
  { id: 'ginger-dry', name: 'Dry Ginger', tag: 'Export Grade', image: '/images/placeholder.svg' },
  { id: 'asafoetida', name: 'Asafoetida', tag: "Chef's Choice", image: '/images/placeholder.svg' },
  { id: 'tamarind', name: 'Tamarind Block', tag: 'Kitchen Staple', image: '/images/placeholder.svg' },
  { id: 'curry-leaves', name: 'Curry Leaves Powder', tag: 'Foundation Spice', image: '/images/placeholder.svg' },
  { id: 'poppy-seeds', name: 'White Poppy Seeds', tag: 'Export Grade', image: '/images/placeholder.svg' },
  { id: 'sesame-white', name: 'White Sesame Seeds', tag: 'Premium Grade', image: '/images/placeholder.svg' },
  { id: 'sesame-black', name: 'Black Sesame Seeds', tag: 'Bestseller', image: '/images/placeholder.svg' },
  { id: 'carom-seeds', name: 'Ajwain Seeds', tag: 'Kitchen Staple', image: '/images/placeholder.svg' },
  { id: 'dill-seeds', name: 'Dill Seeds', tag: 'Export Grade', image: '/images/placeholder.svg' },
  { id: 'celery-seeds', name: 'Celery Seeds', tag: 'Premium Grade', image: '/images/placeholder.svg' },
  { id: 'pomegranate', name: 'Pomegranate Seed', tag: "Chef's Choice", image: '/images/placeholder.svg' },
  { id: 'mango-powder', name: 'Dry Mango Powder', tag: 'Kitchen Staple', image: '/images/placeholder.svg' },
  { id: 'kokum', name: 'Kokum Rind', tag: 'Bestseller', image: '/images/placeholder.svg' },
  { id: 'saffron', name: 'Kashmiri Saffron', tag: 'Premium Grade', image: '/images/placeholder.svg' },
  { id: 'rose-petal', name: 'Dried Rose Petals', tag: "Chef's Choice", image: '/images/placeholder.svg' },
  { id: 'licorice', name: 'Licorice Root', tag: 'Export Grade', image: '/images/placeholder.svg' },
  { id: 'long-pepper', name: 'Long Pepper', tag: 'Bestseller', image: '/images/placeholder.svg' },
  { id: 'cubeb', name: 'Cubeb Pepper', tag: "Chef's Choice", image: '/images/placeholder.svg' },
  { id: 'kalpasi', name: 'Black Stone Flower', tag: 'Foundation Spice', image: '/images/placeholder.svg' },
  { id: 'cassia', name: 'Cassia Bark', tag: 'Export Grade', image: '/images/placeholder.svg' },
  { id: 'cardamom-extra', name: 'Cardamom 9mm+', tag: 'Premium Grade', image: '/images/placeholder.svg' },
  { id: 'pepper-tellicherry', name: 'Tellicherry Pepper', tag: "Chef's Choice", image: '/images/placeholder.svg' },
  { id: 'chilli-teja', name: 'Teja Chilli', tag: 'Bestseller', image: '/images/placeholder.svg' },
  { id: 'chilli-w-r', name: 'Wrinkled Red Chilli', tag: 'Export Grade', image: '/images/placeholder.svg' },
  { id: 'turmeric-curcumin', name: 'High Curcumin Turmeric', tag: 'Premium Grade', image: '/images/placeholder.svg' },
  { id: 'coriander-ground', name: 'Coriander Powder', tag: 'Kitchen Staple', image: '/images/placeholder.svg' },
  { id: 'cumin-ground', name: 'Cumin Powder', tag: 'Kitchen Staple', image: '/images/placeholder.svg' },
  { id: 'chilli-powder', name: 'Chilli Powder', tag: 'Bestseller', image: '/images/placeholder.svg' },
  { id: 'turmeric-powder', name: 'Turmeric Powder', tag: 'Bestseller', image: '/images/placeholder.svg' },
  { id: 'garam-masala', name: 'Garam Masala Blend', tag: "Chef's Choice", image: '/images/placeholder.svg' },
]

export function CollectionGrid() {
  const ref = useRef<HTMLDivElement>(null)
  const [expandedId, setExpandedId] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('is-visible')
        })
      },
      { threshold: 0.05 },
    )
    const els = ref.current?.querySelectorAll('.reveal')
    els?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-background py-16 lg:py-24" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div
          className="reveal mb-12"
          style={{ '--reveal-delay': '0ms' } as React.CSSProperties}
        >
          <p className="font-sans text-[10px] uppercase tracking-[0.26em] text-gold mb-3">
            Full Catalogue
          </p>
          <h1 className="font-serif text-4xl lg:text-5xl font-light text-foreground leading-tight text-balance">
            {allProducts.length} products &middot; All export-grade
          </h1>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-border">
          {allProducts.map((product, i) => (
            <article
              key={product.id}
              id={product.id}
              className="reveal group relative bg-background overflow-hidden border border-border"
              style={{ '--reveal-delay': `${(i % 12) * 60}ms` } as React.CSSProperties}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image}
                  alt={`${product.name}`}
                  fill
                  className="object-cover img-zoom"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                {/* Tag */}
                <div className="absolute top-3 left-3 bg-gold/90 px-2.5 py-1">
                  <span className="font-sans text-[8px] uppercase tracking-[0.2em] text-gold-foreground">
                    {product.tag}
                  </span>
                </div>
              </div>

              {/* Info — name only */}
              <div className="p-4 lg:p-5 border-t border-border">
                <h2 className="font-serif text-base lg:text-lg font-light text-foreground leading-snug">
                  {product.name}
                </h2>
              </div>
            </article>
          ))}
        </div>

        {/* CTA strip */}
        <div
          className="reveal mt-16 p-10 lg:p-14 bg-ink text-center"
          style={{ '--reveal-delay': '100ms' } as React.CSSProperties}
        >
          <p className="font-sans text-[10px] uppercase tracking-[0.26em] text-gold/70 mb-4">
            Wholesale & Bulk Supply
          </p>
          <h3 className="font-serif text-3xl lg:text-4xl font-light text-ink-foreground text-balance max-w-xl mx-auto">
            Need volume? We supply manufacturers and bulk buyers.
          </h3>
          <p className="font-sans text-sm text-ink-foreground/55 mt-4 max-w-md mx-auto leading-relaxed">
            Any product category at wholesale rates. Volume pricing, flexible dispatch, dedicated account support.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Link
              href="/#wholesale"
              className="inline-block font-sans text-[11px] uppercase tracking-[0.22em] px-10 py-4 bg-gold text-gold-foreground hover:bg-gold/90 transition-colors duration-300"
            >
              Explore Wholesale
            </Link>
            <Link
              href="/#contact"
              className="inline-block font-sans text-[11px] uppercase tracking-[0.22em] px-10 py-4 border border-gold text-gold hover:bg-gold hover:text-gold-foreground transition-all duration-300"
            >
              Request Rates
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}