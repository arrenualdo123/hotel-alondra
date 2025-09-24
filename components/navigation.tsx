"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-primary">Hotel La Alondra</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Inicio
              </a>
              <a href="#nosotros" className="text-foreground hover:text-primary transition-colors">
                Nosotros
              </a>
              <a href="#servicios" className="text-foreground hover:text-primary transition-colors">
                Servicios
              </a>
              <a href="#galeria" className="text-foreground hover:text-primary transition-colors">
                Galería
              </a>
              <a href="#contacto" className="text-foreground hover:text-primary transition-colors">
                Contacto
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Reservar</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              <a href="#" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Inicio
              </a>
              <a href="#nosotros" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Nosotros
              </a>
              <a href="#servicios" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Servicios
              </a>
              <a href="#galeria" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Galería
              </a>
              <a href="#contacto" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Contacto
              </a>
              <div className="px-3 py-2">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Reservar</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
