"use client"

import React from "react"

import { useEffect, useState } from "react"

interface FloatingElement {
  id: number
  icon: string
  x: number
  y: number
  size: number
  rotation: number
  delay: number
  duration: number
}

const physicsIcons = [
  "Atom", "Wave", "Lightning", "Magnet", "Planet", "Rocket", "Star", "Electron", "Prism"
]

function AtomIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="2" />
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
    </svg>
  )
}

function WaveIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0 4 3 6 0" />
    </svg>
  )
}

function LightningIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  )
}

function MagnetIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 15V9a6 6 0 0 1 12 0v6" />
      <path d="M6 15h4v4H6z" />
      <path d="M14 15h4v4h-4z" />
    </svg>
  )
}

function PlanetIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="8" />
      <ellipse cx="12" cy="12" rx="12" ry="4" transform="rotate(-30 12 12)" />
    </svg>
  )
}

function RocketIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

function ElectronIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="3" />
      <circle cx="12" cy="5" r="1.5" fill="currentColor" />
      <circle cx="18" cy="16" r="1.5" fill="currentColor" />
      <circle cx="6" cy="16" r="1.5" fill="currentColor" />
    </svg>
  )
}

function PrismIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3L2 21h20L12 3z" />
      <path d="M12 3v18" />
    </svg>
  )
}

const iconComponents: Record<string, React.FC<{ className?: string }>> = {
  Atom: AtomIcon,
  Wave: WaveIcon,
  Lightning: LightningIcon,
  Magnet: MagnetIcon,
  Planet: PlanetIcon,
  Rocket: RocketIcon,
  Star: StarIcon,
  Electron: ElectronIcon,
  Prism: PrismIcon,
}

export function PhysicsBackground() {
  const [elements, setElements] = useState<FloatingElement[]>([])

  useEffect(() => {
    const generatedElements: FloatingElement[] = []
    for (let i = 0; i < 15; i++) {
      generatedElements.push({
        id: i,
        icon: physicsIcons[Math.floor(Math.random() * physicsIcons.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 24 + Math.random() * 32,
        rotation: Math.random() * 360,
        delay: Math.random() * 5,
        duration: 15 + Math.random() * 20,
      })
    }
    setElements(generatedElements)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted" />
      
      {/* Floating Physics Elements */}
      {elements.map((element) => {
        const IconComponent = iconComponents[element.icon]
        return (
          <div
            key={element.id}
            className="absolute animate-float text-primary/10"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: element.size,
              height: element.size,
              transform: `rotate(${element.rotation}deg)`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${element.duration}s`,
            }}
          >
            <IconComponent className="h-full w-full" />
          </div>
        )
      })}

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  )
}
