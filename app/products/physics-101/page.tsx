import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PhysicsBackground } from "@/components/physics-background"
import { ProductSlideshow } from "@/components/product-slideshow"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, BookOpen, Puzzle, ImageIcon, UtensilsCrossed } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Physics 101 - STEM Fun",
  description: "Explore our Physics 101 collection featuring educational posters, puzzles, and table mats designed to make physics fun for young learners.",
}

const productImages = [
  { src: "/images/physics-101-poster.jpg", alt: "Physics 101 Wall Poster" },
  { src: "/images/physics-101-puzzle.jpg", alt: "Physics 101 Puzzle" },
  { src: "/images/physics-101-tablemat.jpg", alt: "Physics 101 Table Mat" },
]

const products = [
  {
    id: "posters",
    title: "Physics 101 Wall Poster",
    description: "A stunning educational poster that brings the wonders of physics to life! From electromagnetic waves to black holes, this poster covers Classical, Modern, and Interdisciplinary physics concepts in a visually engaging, kid-friendly format.",
    features: [
      "High-quality print on premium paper",
      "Vibrant cartoon-style illustrations",
      "Covers 20+ physics concepts",
      "Perfect for bedrooms, playrooms, or classrooms",
      "Size: Available in A2 and A1",
    ],
    icon: ImageIcon,
    color: "bg-primary/10 text-primary",
    purchaseLink: "https://www.amazon.co.uk/dp/stemfun-physics101-poster",
  },
  {
    id: "puzzles",
    title: "Physics 101 Puzzle",
    description: "Make learning physics a hands-on adventure! This engaging puzzle features the same beautiful physics illustrations as our poster, helping children learn while developing problem-solving skills and spatial awareness.",
    features: [
      "500 pieces for ages 8+",
      "100 pieces for ages 5-7",
      "High-quality, durable pieces",
      "Finished puzzle can be framed",
      "Includes physics fact card",
    ],
    icon: Puzzle,
    color: "bg-secondary/10 text-secondary",
    purchaseLink: "https://www.amazon.co.uk/dp/stemfun-physics101-puzzle",
  },
  {
    id: "tablemats",
    title: "Physics 101 Table Mat",
    description: "Turn mealtime into learning time! Our durable, wipeable table mat features physics concepts that spark curiosity and conversation during breakfast, lunch, or dinner.",
    features: [
      "Laminated for durability",
      "Easy to clean - just wipe",
      "Non-slip backing",
      "Safe, food-grade materials",
      "Perfect conversation starter",
    ],
    icon: UtensilsCrossed,
    color: "bg-accent/10 text-accent",
    purchaseLink: "https://www.amazon.co.uk/dp/stemfun-physics101-tablemat",
  },
]

export default function Physics101Page() {
  return (
    <>
      <PhysicsBackground />
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Slideshow */}
              <div className="animate-fade-up">
                <ProductSlideshow images={productImages} />
              </div>

              {/* Product Info */}
              <div className="animate-fade-up flex flex-col justify-center" style={{ animationDelay: '0.1s' }}>
                <Badge variant="secondary" className="mb-4 w-fit">Featured Collection</Badge>
                
                <h1 
                  className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Physics 101
                </h1>
                
                <p className="mt-4 text-pretty text-lg text-muted-foreground">
                  Our flagship educational collection that makes physics accessible and exciting for young minds. 
                  Covering everything from electromagnetic waves to black holes, quantum mechanics to the Big Bang.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <Badge variant="outline">Classical Physics</Badge>
                  <Badge variant="outline">Modern Physics</Badge>
                  <Badge variant="outline">Interdisciplinary</Badge>
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button asChild className="rounded-full" size="lg">
                    <a href="#products">
                      View Products
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full bg-transparent" size="lg">
                    <Link href="/products/physics-101/explanations">
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
                Same amazing physics content, three different ways to learn
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
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="mt-6 w-full rounded-full">
                      <a href={product.purchaseLink} target="_blank" rel="noopener noreferrer">
                        Purchase
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
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
                What&apos;s Inside Physics 101?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Our Physics 101 collection covers a comprehensive range of physics concepts, organized into three categories.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {/* Classical Physics */}
              <div className="rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
                <h3 
                  className="text-lg font-semibold text-foreground"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Classical Physics
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>Electromagnetic Waves</li>
                  <li>Longitudinal Waves</li>
                  <li>Gravity</li>
                  <li>Calculus</li>
                  <li>Thermodynamics</li>
                  <li>Electromagnetic Spectrum</li>
                  <li>Atoms</li>
                </ul>
              </div>

              {/* Modern Physics */}
              <div className="rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
                <h3 
                  className="text-lg font-semibold text-foreground"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Modern Physics
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>Special Relativity</li>
                  <li>General Relativity</li>
                  <li>E=MC²</li>
                  <li>Condensed Matter Physics</li>
                  <li>Schrödinger&apos;s Cat</li>
                  <li>Quantum Mechanics</li>
                  <li>Quantum Entanglement</li>
                  <li>Nuclear Fusion</li>
                  <li>Nebula</li>
                </ul>
              </div>

              {/* Interdisciplinary */}
              <div className="rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
                <h3 
                  className="text-lg font-semibold text-foreground"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Interdisciplinary
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>Geophysics</li>
                  <li>Biophysics</li>
                  <li>Astrophysics</li>
                  <li>String Theory</li>
                  <li>Big Bang</li>
                  <li>Black Holes</li>
                  <li>Dark Matter</li>
                  <li>Dark Energy</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button asChild variant="outline" className="rounded-full bg-transparent" size="lg">
                <Link href="/products/physics-101/explanations">
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
