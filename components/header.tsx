"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Image
              src="/images/logogrecia.png"
              alt="Grecia Interiores"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#servicios" className="text-sm tracking-wide hover:text-muted-foreground transition-colors">
              SERVICIOS
            </a>
            <a href="#proceso" className="text-sm tracking-wide hover:text-muted-foreground transition-colors">
              PROCESO
            </a>
            <a href="#portafolio" className="text-sm tracking-wide hover:text-muted-foreground transition-colors">
              PORTAFOLIO
            </a>
            <a href="#contacto">
              <Button size="sm" className="tracking-wide">
                CONTACTO
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a
                href="#servicios"
                className="text-sm tracking-wide hover:text-muted-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                SERVICIOS
              </a>
              <a
                href="#proceso"
                className="text-sm tracking-wide hover:text-muted-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                PROCESO
              </a>
              <a
                href="#portafolio"
                className="text-sm tracking-wide hover:text-muted-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                PORTAFOLIO
              </a>
              <a href="#contacto" onClick={() => setMobileMenuOpen(false)}>
                <Button size="sm" className="w-full tracking-wide">
                  CONTACTO
                </Button>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
