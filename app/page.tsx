import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Heritage } from '@/components/heritage'
import { FeaturedProducts } from '@/components/featured-products'
import { Stats } from '@/components/stats'
import { Partnership } from '@/components/partnership'
import { Testimonials } from '@/components/testimonials'
import { ContactForm } from '@/components/contact-form'
import { SiteFooter } from '@/components/site-footer'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Heritage />
        <FeaturedProducts />
        <Stats />
        <Partnership />
        <Testimonials />
        <ContactForm />
      </main>
      <SiteFooter />
    </>
  )
}
