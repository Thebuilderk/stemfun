"use client"

import React from "react"

const sections = [
  {
    id: "matter-structure",
    title: "Matter & Structure",
    topics: [
      { id: "atoms", title: "Atoms" },
      { id: "molecules", title: "Molecules" },
      { id: "ionic-covalent-bonds", title: "Ionic & Covalent Bonds" },
      { id: "states-of-matter", title: "States of Matter" },
      { id: "periodic-table", title: "Periodic Table" },
      { id: "polymerisation", title: "Polymerisation" },
    ],
  },
  {
    id: "chemistry-action",
    title: "Chemistry in Action",
    topics: [
      { id: "oil-and-gas", title: "Oil and Gas" },
      { id: "ph-scale", title: "pH Scale" },
      { id: "enzymes", title: "Enzymes" },
      { id: "photosynthesis", title: "Photosynthesis" },
      { id: "pharmaceutical-drugs", title: "Pharmaceutical Drugs" },
      { id: "boyles-law", title: "Boyle's Law" },
    ],
  },
  {
    id: "applications",
    title: "Applications",
    topics: [
      { id: "nuclear-bombs", title: "Nuclear Bombs" },
      { id: "rocket-propulsion", title: "Rocket Propulsion" },
      { id: "chemistry-apparatuses", title: "Chemistry Apparatuses" },
    ],
  },
]

export function ChemistryTableOfContents() {
  const scrollToElement = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      window.history.pushState(null, "", `#${id}`)
    }
  }

  return (
    <nav className="rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
      <h2 
        className="mb-4 text-lg font-semibold text-foreground"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        Contents
      </h2>
      <ul className="space-y-4">
        {sections.map((section) => (
          <li key={section.id}>
            <a 
              href={`#${section.id}`}
              onClick={(e) => scrollToElement(e, section.id)}
              className="cursor-pointer font-medium text-foreground transition-colors hover:text-primary"
            >
              {section.title}
            </a>
            <ul className="mt-2 space-y-1 border-l-2 border-border/50 pl-4">
              {section.topics.map((topic) => (
                <li key={topic.id}>
                  <a
                    href={`#${topic.id}`}
                    onClick={(e) => scrollToElement(e, topic.id)}
                    className="cursor-pointer text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {topic.title}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}
