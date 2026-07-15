import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="bg-ink border-t border-white/8">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-serif text-3xl font-medium text-gold leading-none">KTA</span>
              <span className="font-sans text-[9px] uppercase tracking-[0.22em] text-ink-foreground/50 leading-tight">
                Kottayar<br />Trading Agency
              </span>
            </div>
            <p className="font-sans text-sm text-ink-foreground/50 leading-relaxed max-w-xs">
              Export-grade spices supplied exclusively to fine-dining restaurants and luxury hotel
              kitchens across South India. Est. in the pursuit of purity.
            </p>
            <p className="font-sans text-[10px] text-ink-foreground/30 mt-6 uppercase tracking-[0.18em]">
              FSSAI Licensed · ISO 22000 Certified
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-sans text-[9px] uppercase tracking-[0.24em] text-gold/60 mb-5">
              Navigate
            </p>
            <ul className="space-y-3">
              {[
                { label: 'Heritage', href: '/#heritage' },
                { label: 'Hotel Smart 24/7', href: '/#hotel-smart' },
                { label: 'The Collection', href: '/collection' },
                { label: 'Wholesale', href: '/#wholesale' },
                { label: 'Partnership', href: '/#partnership' },
                { label: 'Register Your Kitchen', href: '/#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-[11px] text-ink-foreground/50 hover:text-ink-foreground/90 transition-colors duration-300 link-line"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-[9px] uppercase tracking-[0.24em] text-gold/60 mb-5">
              Reach Us
            </p>
            <address className="not-italic space-y-3">
              <p className="font-sans text-[11px] text-ink-foreground/50 leading-relaxed">
                Kottayar Trading Agency<br />
                Kottayam, Kerala — 686 001<br />
                South India
              </p>
              <p>
                <a
                  href="mailto:supply@kottayartrading.com"
                  className="font-sans text-[11px] text-gold/60 hover:text-gold transition-colors duration-300"
                >
                  supply@kottayartrading.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+914812300000"
                  className="font-sans text-[11px] text-ink-foreground/50 hover:text-ink-foreground transition-colors duration-300"
                >
                  +91 481 230 0000
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-sans text-[10px] text-ink-foreground/30">
            © {new Date().getFullYear()} Kottayar Trading Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Supply'].map((item) => (
              <Link
                key={item}
                href="#"
                className="font-sans text-[10px] text-ink-foreground/30 hover:text-ink-foreground/60 transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}