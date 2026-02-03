"use client"

const facts = [
  {
    stat: "80%",
    description: "of the fastest-growing occupations rely on STEM skills",
  },
  {
    stat: "2x",
    description: "STEM jobs are growing twice as fast as other occupations",
  },
  {
    stat: "Early",
    description: "children who engage with STEM early develop stronger cognitive skills",
  },
  {
    stat: "Fun",
    description: "hands-on STEM activities boost engagement and retention",
  },
]

export function StemFactsSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 
            className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            STEM by the Numbers
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground md:text-lg">
            The importance of early STEM education is backed by research and real-world outcomes.
          </p>
        </div>

        {/* Facts Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact, index) => (
            <div 
              key={fact.stat}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
            >
              {/* Number */}
              <div 
                className="text-4xl font-bold text-primary md:text-5xl"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {fact.stat}
              </div>
              
              {/* Description */}
              <p className="mt-4 text-sm text-muted-foreground">
                {fact.description}
              </p>

              {/* Decorative gradient */}
              <div 
                className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle at ${index % 2 === 0 ? 'top left' : 'bottom right'}, var(--primary) 0%, transparent 70%)`,
                  opacity: 0.05,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
