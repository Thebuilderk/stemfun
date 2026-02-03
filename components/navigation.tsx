"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/stem-fun-logo.png"
            alt="STEM Fun Logo"
            width={48}
            height={48}
            className="h-12 w-12"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          <Link 
            href="/" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Home
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary">
                Products
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem asChild>
                <Link href="/products/physics-101" className="w-full cursor-pointer">
                  Physics 101
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/products/physics-101#posters" className="w-full cursor-pointer pl-6">
                  Posters
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/products/physics-101#puzzles" className="w-full cursor-pointer pl-6">
                  Puzzles
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/products/physics-101#tablemats" className="w-full cursor-pointer pl-6">
                  Table Mats
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/products/physics-101/explanations" className="w-full cursor-pointer">
                  Physics 101 Explanation
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link 
            href="/#why-stem" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Why STEM?
          </Link>

          <Button asChild className="rounded-full">
            <Link href="/products/physics-101">
              Shop Now
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-border/40 bg-background md:hidden">
          <div className="container mx-auto flex flex-col gap-4 px-4 py-4">
            <Link 
              href="/" 
              className="text-sm font-medium text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-foreground">Products</span>
              <Link 
                href="/products/physics-101" 
                className="pl-4 text-sm text-muted-foreground"
                onClick={() => setIsOpen(false)}
              >
                Physics 101
              </Link>
              <Link 
                href="/products/physics-101#posters" 
                className="pl-8 text-sm text-muted-foreground"
                onClick={() => setIsOpen(false)}
              >
                Posters
              </Link>
              <Link 
                href="/products/physics-101#puzzles" 
                className="pl-8 text-sm text-muted-foreground"
                onClick={() => setIsOpen(false)}
              >
                Puzzles
              </Link>
              <Link 
                href="/products/physics-101#tablemats" 
                className="pl-8 text-sm text-muted-foreground"
                onClick={() => setIsOpen(false)}
              >
                Table Mats
              </Link>
              <Link 
                href="/products/physics-101/explanations" 
                className="pl-4 text-sm text-muted-foreground"
                onClick={() => setIsOpen(false)}
              >
                Physics 101 Explanation
              </Link>
            </div>
            <Link 
              href="/#why-stem" 
              className="text-sm font-medium text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Why STEM?
            </Link>
            <Button asChild className="mt-2 w-full rounded-full">
              <Link href="/products/physics-101" onClick={() => setIsOpen(false)}>
                Shop Now
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
