'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Heritage', href: '/#heritage' },
  { label: 'The Collection', href: '/collection' },
  { label: 'Partnership', href: '/#partnership' },
  { label: 'Contact', href: '/#contact' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isCollection = pathname === '/collection'

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled || isCollection
          ? 'bg-ink/95 backdrop-blur-sm border-b border-white/8'
          : 'bg-transparent',
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <span className="font-serif text-2xl lg:text-3xl font-medium text-gold leading-none tracking-tight">
              KTA
            </span>
            <span className="hidden sm:block text-[10px] font-sans uppercase tracking-[0.22em] text-ink-foreground/60 leading-tight max-w-[110px]">
              Kottayar<br />Trading Agency
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="link-line font-sans text-[11px] uppercase tracking-[0.2em] text-ink-foreground/70 hover:text-ink-foreground transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <Link
              href="/#contact"
              className="font-sans text-[10px] uppercase tracking-[0.22em] px-5 py-2.5 border border-gold text-gold hover:bg-gold hover:text-gold-foreground transition-all duration-300"
            >
              Register Your Kitchen
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-ink-foreground p-2 -mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'lg:hidden overflow-hidden transition-all duration-500 bg-ink border-t border-white/8',
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <nav className="flex flex-col px-6 py-6 gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-sans text-[11px] uppercase tracking-[0.2em] text-ink-foreground/80 hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 font-sans text-[10px] uppercase tracking-[0.22em] px-5 py-3 border border-gold text-gold text-center hover:bg-gold hover:text-gold-foreground transition-all duration-300"
          >
            Register Your Kitchen
          </Link>
        </nav>
      </div>
    </header>
  )
}
