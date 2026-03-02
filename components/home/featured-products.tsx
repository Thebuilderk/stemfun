"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Atom, Leaf, FlaskConical } from "lucide-react"

const products = [
  {
    id: "physics",
    title: "Physics 101",
    description: "From electromagnetic waves to black holes, explore the forces that govern our universe. Available as posters, puzzles, and table mats.",
    icon: Atom,
    color: "bg-primary/10 text-primary",
    href: "/products/physics-101",
  },
  {
    id: "biology",
    title: "Biology 101",
    description: "Discover the human body, plants, animals, and microorganisms. Learn how living things work in a fun, visual way.",
    icon: Leaf,
    color: "bg-secondary/10 text-secondary",
    href: "/products/biology-101",
  },
  {
    id: "chemistry",
    title: "Chemistry 101",
    description: "Explore atoms, molecules, the periodic table, and chemical reactions. Understand the building blocks of everything around us.",
    icon: FlaskConical,
    color: "bg-accent/10 text-accent",
    href: "/products/chemistry-101",
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
            Our 101 Collections
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground md:text-lg">
            Start your child&apos;s STEM journey with our carefully crafted educational products in Physics, Biology, and Chemistry.
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
      </div>
    </section>
  )
}
