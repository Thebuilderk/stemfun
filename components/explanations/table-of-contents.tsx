"use client"

import React from "react"

import Link from "next/link"

import { cn } from "@/lib/utils"

const sections = [
  {
    id: "classical",
    title: "Classical Physics",
    topics: [
      { id: "electromagnetic-wave", title: "Electromagnetic Wave" },
      { id: "longitudinal-waves", title: "Longitudinal Waves" },
      { id: "gravity", title: "Gravity" },
      { id: "calculus", title: "Calculus" },
      { id: "thermodynamics", title: "Thermodynamics" },
      { id: "electromagnetic-spectrum", title: "Electromagnetic Spectrum" },
    ],
  },
  {
    id: "modern",
    title: "Modern Physics",
    topics: [
      { id: "special-relativity", title: "Special Relativity" },
      { id: "general-relativity", title: "General Relativity" },
      { id: "emc2", title: "E=MC²" },
      { id: "condensed-matter", title: "Condensed Matter Physics" },
      { id: "schrodingers-cat", title: "Schrödinger's Cat" },
      { id: "nebula", title: "Nebula" },
      { id: "quantum-mechanics", title: "Quantum Mechanics" },
      { id: "quantum-entanglement", title: "Quantum Entanglement" },
      { id: "nuclear-fusion", title: "Nuclear Fusion" },
    ],
  },
  {
    id: "interdisciplinary",
    title: "Interdisciplinary",
    topics: [
      { id: "geophysics", title: "Geophysics" },
      { id: "biophysics", title: "Biophysics" },
      { id: "astrophysics", title: "Astrophysics" },
      { id: "string-theory", title: "String Theory" },
      { id: "big-bang", title: "Big Bang" },
      { id: "black-holes", title: "Black Holes" },
      { id: "dark-matter", title: "Dark Matter" },
      { id: "dark-energy", title: "Dark Energy" },
    ],
  },
]

export function TableOfContents() {
  const scrollToElement = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      // Update URL hash without navigation
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
              className="font-medium text-foreground transition-colors hover:text-primary cursor-pointer"
            >
              {section.title}
            </a>
            <ul className="mt-2 space-y-1 border-l-2 border-border/50 pl-4">
              {section.topics.map((topic) => (
                <li key={topic.id}>
                  <a
                    href={`#${topic.id}`}
                    onClick={(e) => scrollToElement(e, topic.id)}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary cursor-pointer"
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
