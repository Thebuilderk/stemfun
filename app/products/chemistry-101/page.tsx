import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PhysicsBackground } from "@/components/physics-background"
import { ProductSlideshow } from "@/components/product-slideshow"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, BookOpen, Puzzle, ImageIcon, UtensilsCrossed, ShoppingCart } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Chemistry 101 - STEM Fun",
  description: "Explore our Chemistry 101 collection featuring educational posters, puzzles, and table mats designed to make chemistry fun for young learners.",
}

const productImages = [
  { src: "/images/chemistry-101-poster.jpg", alt: "Chemistry 101 Wall Poster" },
  { src: "/images/chemistry-101-puzzle.jpg", alt: "Chemistry 101 Puzzle" },
  { src: "/images/chemistry-101-tablemat.jpg", alt: "Chemistry 101 Table Mat" },
]

const products = [
  {
    id: "posters",
    title: "Chemistry 101 Wall Poster",
    description: "A stunning educational poster that brings the wonders of chemistry to life! From atoms and molecules to the periodic table and rocket propulsion, this poster covers key chemistry concepts in a visually engaging, kid-friendly format.",
    features: [
      "High-quality print on premium paper",
      "Vibrant cartoon-style illustrations",
      "Covers 15+ chemistry concepts",
      "Perfect for bedrooms, playrooms, or classrooms",
      "Size: Available in A2 and A1",
    ],
    icon: ImageIcon,
    color: "bg-accent/10 text-accent",
    ebayLink: "https://www.ebay.co.uk/usr/stemfun-chemistry101-poster",
    etsyLink: "https://www.etsy.com/uk/listing/stemfun-chemistry101-poster",
  },
  {
    id: "puzzles",
    title: "Chemistry 101 Puzzle",
    description: "Make learning chemistry a hands-on adventure! This engaging puzzle features the same beautiful chemistry illustrations as our poster, helping children learn while developing problem-solving skills and spatial awareness.",
    features: [
      "500 pieces for ages 8+",
      "100 pieces for ages 5-7",
      "High-quality, durable pieces",
      "Finished puzzle can be framed",
      "Includes chemistry fact card",
    ],
    icon: Puzzle,
    color: "bg-primary/10 text-primary",
    ebayLink: "https://www.ebay.co.uk/usr/stemfun-chemistry101-puzzle",
    etsyLink: "https://www.etsy.com/uk/listing/stemfun-chemistry101-puzzle",
  },
  {
    id: "tablemats",
    title: "Chemistry 101 Table Mat",
    description: "Turn mealtime into learning time! Our durable, wipeable table mat features chemistry concepts that spark curiosity and conversation during breakfast, lunch, or dinner.",
    features: [
      "Laminated for durability",
      "Easy to clean - just wipe",
      "Non-slip backing",
      "Safe, food-grade materials",
      "Perfect conversation starter",
    ],
    icon: UtensilsCrossed,
    color: "bg-secondary/10 text-secondary",
    ebayLink: "https://www.ebay.co.uk/usr/stemfun-chemistry101-tablemat",
    etsyLink: "https://www.etsy.com/uk/listing/stemfun-chemistry101-tablemat",
  },
]

export default function Chemistry101Page() {
  return (
    <>
      <PhysicsBackground />
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="animate-fade-up">
                <ProductSlideshow images={productImages} />
              </div>

              <div className="animate-fade-up flex flex-col justify-center" style={{ animationDelay: '0.1s' }}>
                <Badge variant="secondary" className="mb-4 w-fit">Featured Collection</Badge>
                
                <h1 
                  className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Chemistry 101
                </h1>
                
                <p className="mt-4 text-pretty text-lg text-muted-foreground">
                  Our educational collection that makes chemistry accessible and exciting for young minds. 
                  Covering everything from atoms and molecules to the periodic table, states of matter, and rocket propulsion.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <Badge variant="outline">Atoms & Molecules</Badge>
                  <Badge variant="outline">Chemical Bonds</Badge>
                  <Badge variant="outline">States of Matter</Badge>
                  <Badge variant="outline">Lab Equipment</Badge>
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button asChild className="rounded-full" size="lg">
                    <a href="#products">
                      View Products
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full bg-transparent" size="lg">
                    <Link href="/products/chemistry-101/explanations">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Read Explanations
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="scroll-mt-20 bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 
                className="text-2xl font-bold tracking-tight text-foreground md:text-3xl"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Choose Your Format
              </h2>
              <p className="mt-2 text-muted-foreground">
                Same amazing chemistry content, three different ways to learn
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {products.map((product) => (
                <Card 
                  key={product.id} 
                  id={product.id}
                  className="scroll-mt-24 border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
                >
                  <CardHeader>
                    <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${product.color}`}>
                      <product.icon className="h-6 w-6" />
                    </div>
                    <CardTitle style={{ fontFamily: 'var(--font-heading)' }}>{product.title}</CardTitle>
                    <CardDescription className="text-pretty">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-col gap-2">
                      <Button asChild className="w-full rounded-full">
                        <a href={product.ebayLink} target="_blank" rel="noopener noreferrer">
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Buy on eBay
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="w-full rounded-full bg-transparent">
                        <a href={product.etsyLink} target="_blank" rel="noopener noreferrer">
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Buy on Etsy
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Content Overview */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 
                className="text-2xl font-bold tracking-tight text-foreground md:text-3xl"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {"What's Inside Chemistry 101?"}
              </h2>
              <p className="mt-4 text-muted-foreground">
                Our Chemistry 101 collection covers a comprehensive range of chemistry concepts to spark curiosity.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div className="rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
                  Matter & Structure
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>Atoms (Oxygen)</li>
                  <li>Molecules (Water H2O)</li>
                  <li>Ionic & Covalent Bonds</li>
                  <li>States of Matter</li>
                  <li>Periodic Table</li>
                  <li>Polymerisation</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
                  Chemistry in Action
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>Oil and Gas</li>
                  <li>pH Scale</li>
                  <li>Enzymes</li>
                  <li>Photosynthesis</li>
                  <li>Pharmaceutical Drugs</li>
                  <li>{"Boyle's Law"}</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
                  Applications
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>Nuclear Bombs</li>
                  <li>Rocket Propulsion</li>
                  <li>Chemistry Apparatuses</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button asChild variant="outline" className="rounded-full bg-transparent" size="lg">
                <Link href="/products/chemistry-101/explanations">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Read Full Explanations
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
