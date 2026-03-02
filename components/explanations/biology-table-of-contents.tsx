"use client"

import React from "react"

const sections = [
  {
    id: "human-body",
    title: "The Human Body",
    topics: [
      { id: "brain", title: "Brain" },
      { id: "heart", title: "Heart" },
      { id: "lungs", title: "Lungs" },
      { id: "rib-cage", title: "Rib Cage" },
      { id: "liver", title: "Liver" },
      { id: "kidneys", title: "Kidneys" },
      { id: "stomach", title: "Stomach" },
      { id: "intestines", title: "Intestines" },
      { id: "bones", title: "Bones" },
      { id: "chromosomes", title: "XY & XX Chromosomes" },
      { id: "dna", title: "DNA" },
      { id: "cell-structure", title: "Cell Structure" },
    ],
  },
  {
    id: "botany",
    title: "Botany (Plants)",
    topics: [
      { id: "tree-structure", title: "Structure of a Tree" },
      { id: "pollination", title: "Pollination" },
      { id: "photosynthesis", title: "Photosynthesis" },
      { id: "germination", title: "Germination" },
      { id: "wood", title: "Wood" },
    ],
  },
  {
    id: "animals",
    title: "Animals",
    topics: [
      { id: "vertebrates-invertebrates", title: "Vertebrates vs Invertebrates" },
      { id: "animal-groups", title: "Main Animal Groups" },
    ],
  },
  {
    id: "microorganisms",
    title: "Microorganisms",
    topics: [
      { id: "virus", title: "Virus" },
      { id: "bacteria", title: "Bacteria" },
      { id: "fungi", title: "Fungi" },
      { id: "algae", title: "Algae" },
      { id: "amoeba", title: "Amoeba" },
    ],
  },
  {
    id: "exobiology",
    title: "Exobiology",
    topics: [
      { id: "exobiology", title: "Exobiology" },
    ],
  },
]

export function BiologyTableOfContents() {
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
