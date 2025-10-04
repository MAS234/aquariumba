import { Fish } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <Fish className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">aquariumba</span>
            </div>
            <p className="text-background/70 text-sm">Tu tienda especializada en productos marinos de calidad.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Productos</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-primary transition-colors">Acuarios</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Filtros</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Alimentos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Decoración</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Información</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-primary transition-colors">Sobre nosotros</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Envíos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Garantía</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-primary transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">YouTube</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">TikTok</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
          <p>&copy; 2025 aquariumba. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}


