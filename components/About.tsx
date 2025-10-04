import Image from "next/image"

export default function About() {
  return (
    <section id="nosotros" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Expertos en Vida Marina</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Con más de 15 años de experiencia, aquariumba se ha convertido en la tienda de confianza para
              entusiastas de los acuarios en toda la región. Ofrecemos productos de la más alta calidad y
              asesoramiento experto para ayudarte a crear y mantener el ecosistema acuático perfecto.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nuestro equipo de especialistas está siempre disponible para brindarte consejos personalizados sobre el
              cuidado de tus peces, la selección del equipo adecuado y el mantenimiento de tu acuario.
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-6 text-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Años de experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Productos disponibles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2000+</div>
                <div className="text-sm text-muted-foreground">Clientes satisfechos</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/beta.jpg"
                alt="Pez betta en acuario"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-secondary to-primary rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}


