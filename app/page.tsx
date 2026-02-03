import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PhysicsBackground } from "@/components/physics-background"
import { HeroSection } from "@/components/home/hero-section"
import { FeaturedProducts } from "@/components/home/featured-products"
import { WhyStemSection } from "@/components/home/why-stem-section"
import { StemFactsSection } from "@/components/home/stem-facts-section"
import { CtaSection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <PhysicsBackground />
      <Navigation />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <WhyStemSection />
        <StemFactsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
