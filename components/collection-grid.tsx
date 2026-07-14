'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const allProducts = [
  {
    id: 'cardamom',
    name: 'Green Cardamom',
    origin: 'Idukki, Kerala',
    grade: 'Export Grade — 8mm+',
    category: 'Seeds & Pods',
    description:
      'Intensely aromatic with camphor-sweet notes. Hand-picked at peak maturity and shade-dried to preserve volatile oils. Graded at 8mm and above for the export market — our finest.',
    notes: ['Camphor', 'Sweet', 'Floral'],
    uses: 'Biryanis, desserts, masala chai, curries',
    packSize: '250g · 500g · 1kg · 5kg',
    image: '/images/product-cardamom.png',
    tag: 'Signature',
  },
  {
    id: 'pepper',
    name: 'Malabar Black Pepper',
    origin: 'Wayanad, Kerala',
    grade: 'Bold Grade — 4.75mm+',
    category: 'Seeds & Pods',
    description:
      'Full-bodied heat with earthy, woody undertones. Harvested from mature berry clusters for maximum piperine content. Sun-dried to a deep, even black. The pepper behind great South Indian kitchens.',
    notes: ['Pungent', 'Earthy', 'Woody'],
    uses: 'Pepper rasam, marinades, finishing pepper',
    packSize: '250g · 500g · 1kg · 5kg',
    image: '/images/product-pepper.png',
    tag: 'Bestseller',
  },
  {
    id: 'turmeric',
    name: 'Alleppey Turmeric',
    origin: 'Alappuzha, Kerala',
    grade: 'Premium Finger Grade',
    category: 'Roots & Rhizomes',
    description:
      'Exceptionally high curcumin content — 5%+ vs the industry standard of 2%. Bright, deep orange-gold colour and a robust earthy flavour. Sourced from the alluvial farmlands of Alappuzha.',
    notes: ['Earthy', 'Peppery', 'Bitter'],
    uses: 'Curries, marinades, golden milk, rice dishes',
    packSize: '250g · 500g · 1kg · 5kg',
    image: '/images/product-turmeric.png',
    tag: 'High Curcumin',
  },
  {
    id: 'chilli',
    name: 'Kashmiri Chilli',
    origin: 'Byadgi, Karnataka',
    grade: 'S4 Premium Grade',
    category: 'Dried Chillis',
    description:
      'Deep scarlet colour with mild heat — the chilli behind every restaurant-quality red. Renowned for colour yield (ASTA 140+), Kashmiri chilli adds brilliance and gentle warmth without overpowering.',
    notes: ['Mild', 'Fruity', 'Deep Red'],
    uses: 'Tandoori marinades, gravies, chutneys, biryani',
    packSize: '250g · 500g · 1kg · 5kg',
    image: '/images/product-chilli.png',
    tag: "Chef's Choice",
  },
  {
    id: 'coriander',
    name: 'Coriander Seeds',
    origin: 'Rajkot, Gujarat',
    grade: 'Machine-Cleaned Eagle Grade',
    category: 'Seeds & Pods',
    description:
      'Pale golden-green seeds with a distinctive citrusy, slightly sweet flavour. Machine-cleaned eagle grade — uniform size, no chaff. The foundation spice in nearly every Indian masala.',
    notes: ['Citrus', 'Sweet', 'Floral'],
    uses: 'Masala blends, curries, chutneys, pickling',
    packSize: '500g · 1kg · 5kg · 10kg',
    image: '/images/product-coriander.png',
    tag: 'Foundation Spice',
  },
  {
    id: 'cumin',
    name: 'Cumin Seeds',
    origin: 'Unjha, Gujarat',
    grade: 'European Grade',
    category: 'Seeds & Pods',
    description:
      'Warm, earthy and slightly nutty — cumin is the spine of Indian cooking. Our European grade from Unjha, Gujarat is hand-cleaned, even in colour and size, and carries a rich, concentrated aroma.',
    notes: ['Warm', 'Earthy', 'Nutty'],
    uses: 'Tadkas, masala, rice, lentils, breads',
    packSize: '500g · 1kg · 5kg · 10kg',
    image: '/images/product-cumin.png',
    tag: 'Kitchen Staple',
  },
]

const categories = ['All', 'Seeds & Pods', 'Roots & Rhizomes', 'Dried Chillis']

export function CollectionGrid() {
  const ref = useRef<HTMLDivElement>(null)
  const [activeCategory, setActiveCategory] = useState('All')
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const filtered =
    activeCategory === 'All'
      ? allProducts
      : allProducts.filter((p) => p.category === activeCategory)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('is-visible')
        })
      },
      { threshold: 0.08 },
    )
    const els = ref.current?.querySelectorAll('.reveal')
    els?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [filtered])

  return (
    <section className="bg-background py-16 lg:py-24" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Filter bar */}
        <div
          className="reveal flex flex-wrap items-center gap-1 mb-12 pb-8 border-b border-border"
          style={{ '--reveal-delay': '0ms' } as React.CSSProperties}
        >
          <span className="font-sans text-[9px] uppercase tracking-[0.22em] text-muted-foreground mr-4">
            Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                'font-sans text-[10px] uppercase tracking-[0.18em] px-4 py-2 border transition-colors duration-200',
                activeCategory === cat
                  ? 'border-gold bg-gold text-gold-foreground'
                  : 'border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground',
              )}
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto font-sans text-[10px] text-muted-foreground">
            {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
          </span>
        </div>

        {/* Products */}
        <div className="space-y-px">
          {filtered.map((product, i) => (
            <article
              key={product.id}
              id={product.id}
              className="reveal group border border-border"
              style={{ '--reveal-delay': `${i * 80}ms` } as React.CSSProperties}
            >
              <div className="grid lg:grid-cols-[320px_1fr] divide-y lg:divide-y-0 lg:divide-x divide-border">
                {/* Image column */}
                <div className="relative overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-full min-h-[220px]">
                  <Image
                    src={product.image}
                    alt={`${product.name} — KTA premium spice`}
                    fill
                    className="object-cover img-zoom"
                    sizes="(max-width: 1024px) 100vw, 320px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ink/10" />
                  {/* Tag */}
                  <div className="absolute top-4 left-4 bg-gold/90 px-3 py-1">
                    <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-gold-foreground">
                      {product.tag}
                    </span>
                  </div>
                </div>

                {/* Content column */}
                <div className="p-7 lg:p-10">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <p className="font-sans text-[9px] uppercase tracking-[0.22em] text-gold mb-1">
                        {product.category}
                      </p>
                      <h2 className="font-serif text-2xl lg:text-3xl font-light text-foreground">
                        {product.name}
                      </h2>
                      <p className="font-sans text-[10px] text-muted-foreground mt-1">
                        {product.origin}
                      </p>
                    </div>
                    <span className="font-sans text-[9px] uppercase tracking-[0.15em] text-muted-foreground border border-border px-3 py-1.5 shrink-0">
                      {product.grade}
                    </span>
                  </div>

                  <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    {product.description}
                  </p>

                  {/* Flavour notes */}
                  <div className="flex flex-wrap items-center gap-2 mt-5">
                    <span className="font-sans text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                      Notes:
                    </span>
                    {product.notes.map((note) => (
                      <span
                        key={note}
                        className="font-sans text-[9px] uppercase tracking-[0.14em] px-2.5 py-1 bg-secondary text-secondary-foreground"
                      >
                        {note}
                      </span>
                    ))}
                  </div>

                  {/* Expandable details */}
                  <div
                    className={cn(
                      'overflow-hidden transition-all duration-500',
                      expandedId === product.id ? 'max-h-60 mt-5' : 'max-h-0',
                    )}
                  >
                    <div className="pt-5 border-t border-border grid sm:grid-cols-2 gap-5">
                      <div>
                        <p className="font-sans text-[9px] uppercase tracking-[0.2em] text-muted-foreground mb-1.5">
                          Culinary Uses
                        </p>
                        <p className="font-sans text-xs text-foreground">{product.uses}</p>
                      </div>
                      <div>
                        <p className="font-sans text-[9px] uppercase tracking-[0.2em] text-muted-foreground mb-1.5">
                          Available Pack Sizes
                        </p>
                        <p className="font-sans text-xs text-foreground">{product.packSize}</p>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-6 mt-6 pt-5 border-t border-border">
                    <button
                      onClick={() =>
                        setExpandedId(expandedId === product.id ? null : product.id)
                      }
                      className="font-sans text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                      {expandedId === product.id ? 'Show Less' : 'View Details'}
                    </button>
                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.2em] text-gold hover:text-gold/80 transition-colors duration-300"
                    >
                      Request This Spice <ArrowRight size={10} />
                    </Link>
                  </div>
                </div>
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
            Wholesale Supply
          </p>
          <h3 className="font-serif text-3xl lg:text-4xl font-light text-ink-foreground text-balance max-w-xl mx-auto">
            These spices are reserved for professional kitchens only.
          </h3>
          <p className="font-sans text-sm text-ink-foreground/55 mt-4 max-w-md mx-auto leading-relaxed">
            To enquire about supply, minimum order quantities and pricing, register your
            kitchen below.
          </p>
          <Link
            href="/#contact"
            className="inline-block mt-8 font-sans text-[11px] uppercase tracking-[0.22em] px-10 py-4 bg-gold text-gold-foreground hover:bg-gold/90 transition-colors duration-300"
          >
            Register Your Kitchen
          </Link>
        </div>
      </div>
    </section>
  )
}
