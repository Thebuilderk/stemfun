"use client"

import { Brain, Lightbulb, Target, Rocket } from "lucide-react"

const benefits = [
  {
    icon: Brain,
    title: "Critical Thinking",
    description: "STEM education develops analytical and problem-solving skills that are essential for success in any field.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Creativity",
    description: "Children learn to think outside the box, experiment, and create solutions to real-world challenges.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Target,
    title: "Future-Ready Skills",
    description: "85% of jobs in 2030 haven't been invented yet. STEM prepares kids for the careers of tomorrow.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Rocket,
    title: "Hands-On Learning",
    description: "STEM makes learning active and engaging, helping concepts stick through experimentation and play.",
    color: "bg-chart-4/10 text-chart-4",
  },
]

export function WhyStemSection() {
  return (
    <section id="why-stem" className="scroll-mt-20 bg-muted/30 py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 
            className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Why STEM Education Matters
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground md:text-lg">
            Early exposure to STEM subjects builds the foundation for lifelong learning and success.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div 
              key={benefit.title}
              className="group flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${benefit.color} transition-transform duration-300 group-hover:scale-110`}>
                <benefit.icon className="h-8 w-8" />
              </div>

              {/* Content */}
              <h3 
                className="text-lg font-semibold text-foreground"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <blockquote className="mx-auto mt-16 max-w-3xl rounded-2xl border border-border/50 bg-card/50 p-8 text-center backdrop-blur-sm">
          <p className="text-lg italic text-muted-foreground md:text-xl">
            &quot;The important thing is not to stop questioning. Curiosity has its own reason for existing.&quot;
          </p>
          <footer className="mt-4 font-semibold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
            — Albert Einstein
          </footer>
        </blockquote>
      </div>
    </section>
  )
}
