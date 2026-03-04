import Link from "next/link"
import { Instagram, Facebook } from "lucide-react"

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                <span className="text-xl font-bold text-primary-foreground">S</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
                STEM Fun
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Making Science, Technology, Engineering, and Mathematics fun and accessible for young minds.
            </p>
          </div>

          {/* Products */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>Products</h4>
            <div className="flex flex-col gap-2">
              <Link href="/products/physics-101" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Physics 101
              </Link>
              <Link href="/products/physics-101#posters" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Posters
              </Link>
              <Link href="/products/physics-101#puzzles" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Puzzles
              </Link>
              <Link href="/products/physics-101#tablemats" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Table Mats
              </Link>
            </div>
          </div>

          {/* Learn */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>Learn</h4>
            <div className="flex flex-col gap-2">
              <Link href="/products/physics-101/explanations" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Physics 101 Explanations
              </Link>
              <Link href="/#why-stem" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Why STEM Matters
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>Follow Us</h4>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/stemfun" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com/stemfun" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://tiktok.com/@stemfun" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="Follow us on TikTok"
              >
                <TikTokIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            {new Date().getFullYear()} STEM Fun. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
