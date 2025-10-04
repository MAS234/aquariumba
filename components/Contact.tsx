import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Contact() {
  return (
    <section id="contacto" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Visítanos</h2>
          <p className="text-xl text-muted-foreground">Estamos aquí para ayudarte</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Dirección</h3>
                <p className="text-muted-foreground">
                Gascón 933, Buenos Aires<br />Argentina C1181ACQ</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Teléfono</h3>
                <p className="text-muted-foreground">+54 9 11419193498<br />WhatsApp disponible</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground">info@aquariumba.com<br />ventas@aquariumba.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Horarios</h3>
                <p className="text-muted-foreground">Lunes a Viernes: 9:00 - 19:00<br />Sábados: 9:00 - 14:00</p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl overflow-hidden shadow-xl border border-border h-[320px] sm:h-[380px] md:h-[440px] lg:h-[500px]">
            <iframe
              title="Mapa - Gascón 933, Buenos Aires, Argentina C1181ACQ"
              src="https://www.google.com/maps?q=Gasc%C3%B3n%20933%2C%20Buenos%20Aires%2C%20Argentina%20C1181ACQ&output=embed&z=16"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}


