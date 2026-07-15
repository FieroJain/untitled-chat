import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { HotelSmart } from '@/components/hotel-smart'
import { Heritage } from '@/components/heritage'
import { FeaturedProducts } from '@/components/featured-products'
import { VideoSection } from '@/components/video-section'
import { Stats } from '@/components/stats'
import { Wholesale } from '@/components/wholesale'
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
        <HotelSmart />
        <Heritage />
        <FeaturedProducts />
        <VideoSection />
        <Stats />
        <Wholesale />
        <Partnership />
        <Testimonials />
        <ContactForm />
      </main>
      <SiteFooter />
    </>
  )
}