'use client'

import { useEffect, useRef, useState } from 'react'

export function ContactForm() {
  const ref = useRef<HTMLDivElement>(null)
  const [submitted, setSubmitted] = useState(false)

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

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-background py-24 lg:py-36" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — copy */}
          <div>
            <div
              className="reveal"
              style={{ '--reveal-delay': '0ms' } as React.CSSProperties}
            >
              <p className="font-sans text-[10px] uppercase tracking-[0.26em] text-gold mb-4">
                Register Your Kitchen
              </p>
              <h2 className="font-serif text-4xl lg:text-5xl font-light text-foreground leading-tight text-balance">
                Let&apos;s talk about what belongs in your kitchen.
              </h2>
            </div>
            <div
              className="reveal mt-8 space-y-4"
              style={{ '--reveal-delay': '100ms' } as React.CSSProperties}
            >
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                We work exclusively with professional kitchens — fine-dining restaurants,
                luxury hotels and premium catering establishments. Fill in the form and
                our team will be in touch within 24 hours.
              </p>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                Every new partnership begins with a no-obligation consultation and
                complimentary sample kit of our four core spices.
              </p>
            </div>

            {/* Process */}
            <div
              className="reveal mt-10 space-y-4"
              style={{ '--reveal-delay': '200ms' } as React.CSSProperties}
            >
              {[
                { n: '01', label: 'Submit enquiry', desc: 'We review your kitchen profile' },
                { n: '02', label: 'Sample kit', desc: 'Complimentary tasting kit delivered' },
                { n: '03', label: 'Consultation', desc: 'Build your bespoke supply programme' },
                { n: '04', label: 'First delivery', desc: 'On-time, documented, guaranteed' },
              ].map((step) => (
                <div key={step.n} className="flex items-start gap-5 py-4 border-b border-border last:border-0">
                  <span className="font-serif text-2xl text-gold/50 font-light w-8 shrink-0">
                    {step.n}
                  </span>
                  <div>
                    <p className="font-sans text-xs uppercase tracking-[0.16em] text-foreground">
                      {step.label}
                    </p>
                    <p className="font-sans text-xs text-muted-foreground mt-0.5">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div
            className="reveal"
            style={{ '--reveal-delay': '150ms' } as React.CSSProperties}
          >
            {submitted ? (
              <div className="h-full flex flex-col items-start justify-center py-16">
                <div className="w-12 h-px bg-gold mb-8" />
                <h3 className="font-serif text-3xl font-light text-foreground">
                  Thank you — we&apos;ll be in touch.
                </h3>
                <p className="font-sans text-sm text-muted-foreground mt-4 leading-relaxed max-w-sm">
                  Your enquiry has been received. Expect a response from our partnerships
                  team within 24 hours, along with your complimentary sample kit details.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-sans text-[9px] uppercase tracking-[0.22em] text-muted-foreground mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Chef Rajan Iyer"
                      className="w-full bg-transparent border border-border px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-gold focus:outline-none transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-[9px] uppercase tracking-[0.22em] text-muted-foreground mb-2">
                      Role / Title *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Executive Chef"
                      className="w-full bg-transparent border border-border px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-gold focus:outline-none transition-colors duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-sans text-[9px] uppercase tracking-[0.22em] text-muted-foreground mb-2">
                    Establishment Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="The Leela Palace, Chennai"
                    className="w-full bg-transparent border border-border px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-gold focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-sans text-[9px] uppercase tracking-[0.22em] text-muted-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="chef@hotel.com"
                      className="w-full bg-transparent border border-border px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-gold focus:outline-none transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-[9px] uppercase tracking-[0.22em] text-muted-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full bg-transparent border border-border px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-gold focus:outline-none transition-colors duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-sans text-[9px] uppercase tracking-[0.22em] text-muted-foreground mb-2">
                    Spices of Interest
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {['Cardamom', 'Black Pepper', 'Turmeric', 'Kashmiri Chilli', 'Coriander', 'Cumin'].map(
                      (spice) => (
                        <label
                          key={spice}
                          className="flex items-center gap-2 cursor-pointer group"
                        >
                          <input type="checkbox" className="sr-only peer" />
                          <span className="font-sans text-[9px] uppercase tracking-[0.15em] px-3 py-1.5 border border-border text-muted-foreground peer-checked:border-gold peer-checked:text-gold transition-colors duration-200 cursor-pointer group-hover:border-gold/40">
                            {spice}
                          </span>
                        </label>
                      ),
                    )}
                  </div>
                </div>

                <div>
                  <label className="block font-sans text-[9px] uppercase tracking-[0.22em] text-muted-foreground mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your kitchen, your menus, and your current spice challenges…"
                    className="w-full bg-transparent border border-border px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-gold focus:outline-none transition-colors duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full font-sans text-[11px] uppercase tracking-[0.22em] px-8 py-4 bg-gold text-gold-foreground hover:bg-gold/90 transition-colors duration-300"
                >
                  Submit Enquiry
                </button>
                <p className="font-sans text-[10px] text-muted-foreground text-center">
                  We respond within 24 hours. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
