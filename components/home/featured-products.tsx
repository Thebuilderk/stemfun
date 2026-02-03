"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Puzzle, ImageIcon, UtensilsCrossed } from "lucide-react"

const products = [
  {
    id: "poster",
    title: "Physics 101 Wall Poster",
    description: "A beautifully designed educational poster covering key physics concepts from Classical to Modern physics.",
    icon: ImageIcon,
    color: "bg-primary/10 text-primary",
    href: "/products/physics-101#posters",
  },
  {
    id: "puzzle",
    title: "Physics 101 Puzzle",
    description: "An engaging puzzle that makes learning physics concepts fun while developing problem-solving skills.",
    icon: Puzzle,
    color: "bg-secondary/10 text-secondary",
    href: "/products/physics-101#puzzles",
  },
  {
    id: "tablemat",
    title: "Physics 101 Table Mat",
    description: "Learn physics during meals! A durable, educational table mat perfect for daily learning moments.",
    icon: UtensilsCrossed,
    color: "bg-accent/10 text-accent",
    href: "/products/physics-101#tablemats",
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 
            className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Our Physics 101 Collection
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground md:text-lg">
            Start your child&apos;s physics journey with our carefully crafted educational products.
          </p>
        </div>

        {/* Products Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {products.map((product, index) => (
            <Card 
              key={product.id}
              className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="flex flex-col p-6">
                {/* Icon */}
                <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${product.color}`}>
                  <product.icon className="h-7 w-7" />
                </div>

                {/* Content */}
                <h3 
                  className="text-xl font-semibold text-card-foreground"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {product.title}
                </h3>
                <p className="mt-2 flex-1 text-muted-foreground">
                  {product.description}
                </p>

                {/* Link */}
                <Link 
                  href={product.href}
                  className="mt-6 inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline" className="rounded-full bg-transparent">
            <Link href="/products/physics-101">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
