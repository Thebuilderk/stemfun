"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface Topic {
  id: string
  title: string
  content: string
}

interface ExplanationSectionProps {
  id: string
  title: string
  description: string
  topics: Topic[]
}

export function ExplanationSection({ id, title, description, topics }: ExplanationSectionProps) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-6">
        <h2 
          className="text-2xl font-bold tracking-tight text-foreground md:text-3xl"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {title}
        </h2>
        <p className="mt-2 text-muted-foreground">{description}</p>
      </div>

      <Accordion type="multiple" className="w-full">
        {topics.map((topic) => (
          <AccordionItem 
            key={topic.id} 
            value={topic.id}
            id={topic.id}
            className="scroll-mt-24 rounded-lg border border-border/50 bg-card/50 px-4 backdrop-blur-sm mb-3 last:mb-0"
          >
            <AccordionTrigger 
              className="text-left font-semibold hover:no-underline"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {topic.title}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {topic.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
