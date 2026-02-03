"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Making Science Fun for Kids</span>
          </div>

          {/* Main Heading */}
          <h1 
            className="animate-fade-up text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl"
            style={{ fontFamily: 'var(--font-heading)', animationDelay: '0.1s' }}
          >
            <span className="text-balance">Spark Curiosity with</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              STEM Fun
            </span>
          </h1>

          {/* Subtitle */}
          <p 
            className="animate-fade-up mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl"
            style={{ animationDelay: '0.2s' }}
          >
            Educational posters, puzzles, and table mats that make Science, Technology, 
            Engineering, and Mathematics exciting for young minds.
          </p>

          {/* CTA Buttons */}
          <div 
            className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            style={{ animationDelay: '0.3s' }}
          >
            <Button asChild size="lg" className="group rounded-full px-8">
              <Link href="/products/physics-101">
                Explore Products
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 bg-transparent">
              <Link href="#why-stem">
                Why STEM Matters
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div 
            className="animate-fade-up mt-16 grid grid-cols-2 gap-8 md:grid-cols-4"
            style={{ animationDelay: '0.4s' }}
          >
            {[
              { value: "S", label: "Science", color: "text-primary" },
              { value: "T", label: "Technology", color: "text-secondary" },
              { value: "E", label: "Engineering", color: "text-accent" },
              { value: "M", label: "Mathematics", color: "text-chart-4" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2">
                <span 
                  className={`text-4xl font-bold md:text-5xl ${item.color}`}
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {item.value}
                </span>
                <span className="text-sm text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -right-20 bottom-1/3 h-72 w-72 rounded-full bg-secondary/5 blur-3xl" />
    </section>
  )
}
