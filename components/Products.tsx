"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

function FilterProductCard() {
  const images = [
    "/images/filtros/filtro703-1.jpeg",
    "/images/filtros/filtro703-2.jpeg",
    "/images/filtros/filtro703-3.jpeg",
  ]
  const [index, setIndex] = useState(0)
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    if (open) document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [open])

  const next = () => setIndex((prev) => (prev + 1) % images.length)
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length)

  useEffect(() => setMounted(true), [])

  const productName = "Filtro interno RS Electrical RS-703"
  const message = `Hola, estoy interesado en el producto: ${productName}. ¿Está disponible?`
  const whatsappUrl = `https://wa.me/1141919349?text=${encodeURIComponent(message)}`

  return (
    <div
      className="group bg-card rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border"
      style={{ animationDelay: `0s` }}
    >
      <div className="relative w-full h-48 md:h-56 lg:h-60">
        <Image
          src={images[index]}
          alt="Filtro interno RS Electrical RS-703"
          width={600}
          height={400}
          className="w-full h-full object-cover select-none"
          priority
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2">
          <button
            onClick={prev}
            className="pointer-events-auto p-2 rounded-full bg-black/50 text-white backdrop-blur hover:bg-black/60 transition"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="pointer-events-auto p-2 rounded-full bg-black/50 text-white backdrop-blur hover:bg-black/60 transition"
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
        <div className="absolute bottom-2 inset-x-0 flex justify-center gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Ir a imagen ${i + 1}`}
              aria-pressed={i === index}
              className={`h-2 w-2 rounded-full transition ${i === index ? "bg-white" : "bg-white/50 hover:bg-white/70"}`}
            />
          ))}
        </div>
      </div>
      <div className="p-6">
        <div className="text-4xl mb-4">💧</div>
        <h3 className="text-2xl font-bold text-foreground mb-2">Filtro interno RS Electrical RS-703</h3>
        <p className="text-muted-foreground mb-4">
          Filtro interno RS Electrical filtro rs 703 50Hz con capacidad máxima de 1500L, caudal máximo de 25l/min y potencia de 18W
        </p>
        <div className="flex items-center gap-3">
          <button className="text-primary font-semibold hover:text-secondary transition-colors">Ver más →</button>
          <button
            onClick={() => setOpen(true)}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors"
          >
            Ver producto
          </button>
        </div>
      </div>
      {mounted && open && createPortal(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.currentTarget === e.target) setOpen(false)
          }}
        >
          <div className="relative bg-card text-foreground rounded-2xl w-full max-w-3xl border border-border shadow-2xl">
            <button
              onClick={() => setOpen(false)}
              aria-label="Cerrar"
              className="absolute top-3 right-3 p-2 rounded-full hover:bg-muted transition"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-6">
              <div className="relative w-full h-64 md:h-full md:min-h-[22rem] rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none overflow-hidden">
                <Image
                  src={images[index]}
                  alt="Filtro interno RS Electrical RS-703"
                  width={700}
                  height={700}
                  className="w-full h-full object-cover select-none"
                  priority
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">Filtro interno RS Electrical RS-703</h4>
                <p className="text-muted-foreground mb-3">Capacidad máxima 1500L, caudal 25 l/min, potencia 18W.</p>
                <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
                  <li>Incluye control de flujo</li>
                  <li>Fácil mantenimiento</li>
                  <li>Silencioso</li>
                </ul>
                <div className="mt-5 flex gap-3">
                  <button
                    onClick={() => setOpen(false)}
                    className="px-4 py-2 rounded-full border border-border hover:bg-muted transition"
                  >
                    Cerrar
                  </button>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition"
                  >
                    Consultar disponibilidad
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  )
}

function FoodProductCard() {
  const images = [
    "/images/alimentos/alimentos.jpeg",
    "/images/alimentos/alimentos2.jpeg",
    "/images/alimentos/alimentos3.jpeg",
    "/images/alimentos/alimentos4.jpeg",
  ]
  const [index, setIndex] = useState(0)
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    if (open) document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [open])

  const next = () => setIndex((prev) => (prev + 1) % images.length)
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length)

  useEffect(() => setMounted(true), [])
  const productName = "Alimentos para peces de fondo"
  const message = `Hola, estoy interesado en el producto: ${productName}. ¿Está disponible?`
  const whatsappUrl = `https://wa.me/1141919349?text=${encodeURIComponent(message)}`
  return (
    <div
      className="group bg-card rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border"
      style={{ animationDelay: `0.1s` }}
    >
      <div className="relative w-full h-48 md:h-56 lg:h-60">
        <Image
          src={images[index]}
          alt="Alimento peces de fondo PRODAC Vegetablet 160gr Espirulina Aloe"
          width={600}
          height={400}
          className="w-full h-full object-cover select-none"
          priority
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2">
          <button
            onClick={prev}
            className="pointer-events-auto p-2 rounded-full bg-black/50 text-white backdrop-blur hover:bg-black/60 transition"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="pointer-events-auto p-2 rounded-full bg-black/50 text-white backdrop-blur hover:bg-black/60 transition"
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
        <div className="absolute bottom-2 inset-x-0 flex justify-center gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Ir a imagen ${i + 1}`}
              aria-pressed={i === index}
              className={`h-2 w-2 rounded-full transition ${i === index ? "bg-white" : "bg-white/50 hover:bg-white/70"}`}
            />
          ))}
        </div>
      </div>
      <div className="p-6">
        <div className="text-4xl mb-4">🍽️</div>
        <h3 className="text-2xl font-bold text-foreground mb-2">Alimentos para peces de fondo</h3>
        <p className="text-muted-foreground mb-4">
          Alimento Peces Fondo Prodac Vegetablet 160gr Espirulina Aloe
        </p>
        <div className="flex items-center gap-3">
          <button className="text-primary font-semibold hover:text-secondary transition-colors">Ver más →</button>
          <button
            onClick={() => setOpen(true)}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors"
          >
            Ver producto
          </button>
        </div>
      </div>
      {mounted && open && createPortal(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.currentTarget === e.target) setOpen(false)
          }}
        >
          <div className="relative bg-card text-foreground rounded-2xl w-full max-w-3xl border border-border shadow-2xl">
            <button
              onClick={() => setOpen(false)}
              aria-label="Cerrar"
              className="absolute top-3 right-3 p-2 rounded-full hover:bg-muted transition"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-6">
              <div className="relative w-full h-64 md:h-full md:min-h-[22rem] rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none overflow-hidden">
                <Image
                  src={images[index]}
                  alt="Alimentos para peces de fondo"
                  width={700}
                  height={700}
                  className="w-full h-full object-cover select-none"
                  priority
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">Alimentos para peces de fondo</h4>
                <p className="text-muted-foreground mb-3">PRODAC Vegetablet 160gr con Espirulina y Aloe.</p>
                <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
                  <li>Alto contenido vegetal</li>
                  <li>Mejora digestión</li>
                  <li>No enturbia el agua</li>
                </ul>
                <div className="mt-5 flex gap-3">
                  <button
                    onClick={() => setOpen(false)}
                    className="px-4 py-2 rounded-full border border-border hover:bg-muted transition"
                  >
                    Cerrar
                  </button>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition"
                  >
                    Consultar disponibilidad
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  )
}

function PeceraProductCard() {
  const images = [
    "/images/pecera/pecera.jpeg",
    "/images/pecera/pecera2.jpeg",
  ]
  const [index, setIndex] = useState(0)
  const [expanded, setExpanded] = useState(false)
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    if (open) document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [open])

  const next = () => setIndex((prev) => (prev + 1) % images.length)
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length)

  useEffect(() => setMounted(true), [])

  const detalles = [
    "Pecera de vidrio 40x30x20 cm de calidad Mainar",
    "1 x Aireador de una salida",
    "5 x Placas biológicas",
    "1.5 m de manguera de aire",
    "1 x 100 ml de anticloro",
    "1 x Lámina de imagen de plantas",
    "2 x Plantas plásticas o 2 porciones de plantas naturales",
    "1 x Pez Carassius (mediano)",
    "2.5 kg de gravas",
    "1 x Sobrecito de alimento en escamas",
  ]

  const productName = "Kit Pecera Completa 40x30x20 con 1 pez (mediano)"
  const message = `Hola, estoy interesado en el producto: ${productName}. ¿Está disponible?`
  const whatsappUrl = `https://wa.me/1141919349?text=${encodeURIComponent(message)}`

  return (
    <div
      className="group bg-card rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border"
      style={{ animationDelay: `0.2s` }}
    >
      <div className="relative w-full h-48 md:h-56 lg:h-60">
        <Image
          src={images[index]}
          alt="Kit Pecera Completa 40x30x20"
          width={600}
          height={400}
          className="w-full h-full object-cover select-none"
          priority
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2">
          <button
            onClick={prev}
            className="pointer-events-auto p-2 rounded-full bg-black/50 text-white backdrop-blur hover:bg-black/60 transition"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="pointer-events-auto p-2 rounded-full bg-black/50 text-white backdrop-blur hover:bg-black/60 transition"
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
        <div className="absolute bottom-2 inset-x-0 flex justify-center gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Ir a imagen ${i + 1}`}
              aria-pressed={i === index}
              className={`h-2 w-2 rounded-full transition ${i === index ? "bg-white" : "bg-white/50 hover:bg-white/70"}`}
            />
          ))}
        </div>
      </div>
      <div className="p-6">
        <div className="text-4xl mb-4">🐟</div>
        <h3 className="text-2xl font-bold text-foreground mb-2">Kit Pecera Completa 40x30x20 con 1 pez (mediano)</h3>
      {!expanded ? (
        <p className="text-muted-foreground mb-4">
          Incluye pecera de vidrio 40x30x20 cm y accesorios esenciales para montar tu acuario. Ideal para iniciar en la acuariofilia.
        </p>
      ) : (
        <div className="text-muted-foreground mb-4">
          <p className="mb-2 font-semibold">El kit incluye:</p>
          <ul className="list-disc pl-5 space-y-1">
            {detalles.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setExpanded((v) => !v)}
          className="text-primary font-semibold hover:text-secondary transition-colors"
        >
          {expanded ? "Ver menos ↑" : "Ver más →"}
        </button>
        <button
          onClick={() => setOpen(true)}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors"
        >
          Ver producto
        </button>
      </div>

      {mounted && open && createPortal(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.currentTarget === e.target) setOpen(false)
          }}
        >
          <div className="relative bg-card text-foreground rounded-2xl w-full max-w-3xl border border-border shadow-2xl">
            <button
              onClick={() => setOpen(false)}
              aria-label="Cerrar"
              className="absolute top-3 right-3 p-2 rounded-full hover:bg-muted transition"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-6">
              <div className="relative w-full h-64 md:h-full md:min-h-[22rem] rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none overflow-hidden">
                <Image
                  src={images[index]}
                  alt="Kit Pecera Completa 40x30x20"
                  width={700}
                  height={700}
                  className="w-full h-full object-cover select-none"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2">
                  <button
                    onClick={prev}
                    className="pointer-events-auto p-2 rounded-full bg-black/50 text-white backdrop-blur hover:bg-black/60 transition"
                    aria-label="Imagen anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={next}
                    className="pointer-events-auto p-2 rounded-full bg-black/50 text-white backdrop-blur hover:bg-black/60 transition"
                    aria-label="Siguiente imagen"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">Kit Pecera Completa 40x30x20 con 1 pez (mediano)</h4>
                <p className="text-muted-foreground mb-3">Todo lo necesario para iniciar tu acuario, fácil de armar y mantener.</p>
                <p className="mb-2 font-semibold">El kit incluye:</p>
                <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
                  {detalles.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="mt-5 flex gap-3">
                  <button
                    onClick={() => setOpen(false)}
                    className="px-4 py-2 rounded-full border border-border hover:bg-muted transition"
                  >
                    Cerrar
                  </button>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition"
                  >
                    Consultar disponibilidad
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
      </div>
    </div>
  )
}

export default function Products() {
  return (
    <section id="productos" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Nuestros Productos</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Todo lo que necesitas para mantener un acuario saludable y hermoso
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          <FilterProductCard />
          <FoodProductCard />
          <PeceraProductCard />
          {[]}
        </div>
      </div>
    </section>
  )
}


