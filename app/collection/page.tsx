import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { CollectionHero } from '@/components/collection-hero'
import { CollectionGrid } from '@/components/collection-grid'
import { ContactForm } from '@/components/contact-form'

export default function CollectionPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <CollectionHero />
        <CollectionGrid />
        <ContactForm />
      </main>
      <SiteFooter />
    </>
  )
}
