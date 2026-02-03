"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-secondary p-8 md:p-16">
          {/* Content */}
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-foreground/10">
              <BookOpen className="h-8 w-8 text-primary-foreground" />
            </div>
            
            <h2 
              className="text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Ready to Start the Journey?
            </h2>
            
            <p className="mt-4 text-pretty text-lg text-primary-foreground/80">
              Explore our Physics 101 collection and give your child the gift of curiosity and knowledge.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button 
                asChild 
                size="lg" 
                variant="secondary"
                className="group rounded-full px-8"
              >
                <Link href="/products/physics-101">
                  Shop Physics 101
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="ghost"
                className="rounded-full px-8 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link href="/products/physics-101/explanations">
                  Explore Explanations
                </Link>
              </Button>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary-foreground/5 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-primary-foreground/5 blur-3xl" />
        </div>
      </div>
    </section>
  )
}
