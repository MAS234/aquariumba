import { Fish, Waves } from "lucide-react"

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/fondo.png')] bg-cover bg-center animate-ocean-sway"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-[200%] h-32 opacity-20">
          <Waves className="w-full h-full text-primary animate-wave" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up mx-auto inline-block rounded-2xl bg-black/30 backdrop-blur-md p-6 md:p-8 ring-1 ring-white/20 shadow-xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance drop-shadow-md animate-title-splash">
            Tu Mundo Marino
            <span className="block text-primary mt-2">Comienza Aquí</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto text-pretty drop-shadow">
            Descubre la mejor selección de acuarios, filtros, alimentos y accesorios para crear el ecosistema perfecto
            para tus peces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#productos" className="px-8 py-4 bg-primary/90 backdrop-blur-sm text-primary-foreground rounded-full font-semibold hover:bg-primary transition-all hover:scale-105 shadow-md">Ver Productos</a>
            <a href="#contacto" className="px-8 py-4 bg-black/30 backdrop-blur-sm border-2 border-primary text-white rounded-full font-semibold hover:bg-black/40 transition-all shadow-md">Contáctanos</a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-20 right-10 animate-float opacity-20">
        <Fish className="w-24 h-24 text-secondary" />
      </div>
    </section>
  )
}


