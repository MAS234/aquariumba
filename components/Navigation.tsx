"use client"
import { useEffect, useState } from "react"
import { Fish, X } from "lucide-react"

export default function Navigation() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [])
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
              <Fish className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">aquariumba</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors">Inicio</a>
            <a href="#productos" className="text-foreground hover:text-primary transition-colors">Productos</a>
            <a href="#nosotros" className="text-foreground hover:text-primary transition-colors">Nosotros</a>
            <a href="#contacto" className="text-foreground hover:text-primary transition-colors">Contacto</a>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition"
            aria-label="Abrir menú"
            aria-expanded={open}
          >
            <div className="w-6 h-0.5 bg-foreground mb-1"></div>
            <div className="w-6 h-0.5 bg-foreground mb-1"></div>
            <div className="w-6 h-0.5 bg-foreground"></div>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-3">
            <a onClick={() => setOpen(false)} href="#inicio" className="block py-2 text-foreground hover:text-primary transition-colors">Inicio</a>
            <a onClick={() => setOpen(false)} href="#productos" className="block py-2 text-foreground hover:text-primary transition-colors">Productos</a>
            <a onClick={() => setOpen(false)} href="#nosotros" className="block py-2 text-foreground hover:text-primary transition-colors">Nosotros</a>
            <a onClick={() => setOpen(false)} href="#contacto" className="block py-2 text-foreground hover:text-primary transition-colors">Contacto</a>
            <button onClick={() => setOpen(false)} className="mt-2 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"><X className="w-4 h-4" /> Cerrar</button>
          </div>
        </div>
      )}
    </nav>
  )
}


