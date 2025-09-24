import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Phone, Mail, Wifi, Car, Waves, Coffee, Users, Calendar } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { Navigation } from "@/components/navigation"
import { ImageCarousel } from "@/components/image-carousel"

export default function HomePage() {
  const galleryImages = [
    {
      src: "/alondra.jpg",
      alt: "Hotel La Alondra - Vista principal",
      title: "Hotel La Alondra",
    },
    {
      src: "/alondra1.jpg",
      alt: "Habitaciones del Hotel La Alondra",
      title: "Hermosos atardeceres",
    },
    {
      src: "/alondra2.jpg",
      alt: "Instalaciones del hotel",
      title: "Habitaciones confortables",
    },
    {
      src: "/alondra3.jpg",
      alt: "Vista del hotel y alrededores",
      title: "Acceso a la picina",
    },
    {
      src: "/alondra4.jpg",
      alt: "Áreas comunes del hotel",
      title: "Áreas Comunes",
    },
    {
      src: "/alondra5.jpg",
      alt: "Servicios del Hotel La Alondra",
      title: "Servicios Exclusivos",
    },
    {
      src: "/alondra6.jpg",
      alt: "Amenidades del hotel",
      title: "Amenidades",
    },
    {
      src: "/alondra7.jpg",
      alt: "Exteriores del Hotel La Alondra",
      title: "Interiores",
    },
    {
      src: "/alondra8.jpg",
      alt: "Vistas desde el hotel",
      title: "Lobby",
    },
    {
      src: "/alondra9.jpg",
      alt: "Detalles del Hotel La Alondra",
      title: "Detalles de Lujo",
    },
    {
      src: "/malecon.jpg",
      alt: "Malecón de Barra de Navidad",
      title: "Malecón de Barra de Navidad",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/alondra-fachada.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Hotel La Alondra</h1>
          <p className="text-xl md:text-2xl mb-8 text-pretty">
            {"Experiencia de lujo frente al mar en Barra de Navidad, Jalisco"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Reservar Ahora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-foreground bg-transparent"
            >
              Ver Habitaciones
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Quiénes Somos</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Hotel La Alondra es un refugio de lujo de 4 estrellas ubicado en el corazón de Barra de Navidad,
              ofreciendo vistas espectaculares y una experiencia inolvidable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Nuestra Historia</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Desde 1995, Hotel La Alondra ha sido el destino preferido para viajeros que buscan la perfecta
                combinación entre elegancia y la belleza natural de la costa de Jalisco. Nuestro compromiso con la
                excelencia nos ha convertido en un referente de hospitalidad en Barra de Navidad.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">28+</div>
                  <div className="text-sm text-muted-foreground">Años de experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">1,384</div>
                  <div className="text-sm text-muted-foreground">Huéspedes satisfechos</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="/alondra1.jpg" alt="Hotel La Alondra interior" className="rounded-lg shadow-lg w-full" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Waves className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Misión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Brindar experiencias excepcionales que superen las expectativas de nuestros huéspedes, combinando
                  lujo, comodidad y la calidez mexicana.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle>Visión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ser reconocidos como el hotel boutique líder en la costa de Jalisco, referente de excelencia en
                  hospitalidad y sostenibilidad.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <CardTitle>Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Excelencia, hospitalidad auténtica, respeto por el medio ambiente y compromiso con la comunidad local.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Servicios y Amenidades</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Disfruta de nuestras instalaciones de primera clase y servicios diseñados para tu comodidad
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Waves className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Piscina al Aire Libre</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Relájate en nuestra hermosa piscina con vista panorámica a la bahía de Barra de Navidad.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Wifi className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Wi-Fi Gratuito</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Mantente conectado con internet de alta velocidad disponible en todas las áreas del hotel.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Car className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Estacionamiento Privado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Estacionamiento gratuito y seguro para todos nuestros huéspedes las 24 horas.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Coffee className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Centro de Negocios</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Instalaciones completas para reuniones y eventos con tecnología de vanguardia.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Servicio 24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Personal amigable y profesional disponible las 24 horas para atender tus necesidades.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Casa Club La Alondra</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Habitaciones exclusivas con vista al mar, piscina privada y áreas comunes premium.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-card rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-8 text-center text-card-foreground">Nuestras Habitaciones</h3>

            {/* Casa Club Section */}
            <div>
              <div className="text-center mb-8">
                <h4 className="text-xl font-bold text-primary mb-2">Casa Club La Alondra</h4>
                <p className="text-muted-foreground">
                  Habitaciones exclusivas con vista al mar y acceso a piscina privada
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <img
                    src="/alondra-sencilla.jpg"
                    alt="Habitación Sencilla Casa Club"
                    className="rounded-lg mb-4 w-full h-48 object-cover"
                  />
                  <h5 className="font-semibold mb-2">Habitación Sencilla</h5>
                  <p className="text-sm text-muted-foreground mb-3">
                    Habitación cómoda con cama individual, vista parcial al mar y acceso a áreas comunes de Casa Club.
                  </p>
                  <Badge variant="secondary">Desde $1,800 MXN/noche</Badge>
                </div>

                <div className="text-center">
                  <img
                    src="/alondra2.jpg"
                    alt="Habitación Doble Casa Club"
                    className="rounded-lg mb-4 w-full h-48 object-cover"
                  />
                  <h5 className="font-semibold mb-2">Habitación Doble</h5>
                  <p className="text-sm text-muted-foreground mb-3">
                    Espaciosa habitación con cama matrimonial, balcón con vista al mar y acceso exclusivo a piscina
                    privada.
                  </p>
                  <Badge variant="secondary">Desde $2,800 MXN/noche</Badge>
                </div>
              </div>
            </div>

            {/* Hotel Principal Section */}
            <div>
              <div className="text-center mb-8">
                <h4 className="text-xl font-bold text-primary mb-2">Hotel Principal</h4>
                <p className="text-muted-foreground">
                  Habitaciones y suites con todas las comodidades y servicios completos
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <img
                    src="/alondra-sen.jpg"
                    alt="Habitación Sencilla Hotel"
                    className="rounded-lg mb-4 w-full h-48 object-cover"
                  />
                  <h5 className="font-semibold mb-2">Habitación Sencilla</h5>
                  <p className="text-sm text-muted-foreground mb-3">
                    Habitación confortable con cama individual y todas las amenidades básicas del hotel.
                  </p>
                  <Badge variant="secondary">Desde $1,200 MXN/noche</Badge>
                </div>

                <div className="text-center">
                  <img
                    src="/alondradoble.jpg"
                    alt="Habitación Doble Hotel"
                    className="rounded-lg mb-4 w-full h-48 object-cover"
                  />
                  <h5 className="font-semibold mb-2">Habitación Doble</h5>
                  <p className="text-sm text-muted-foreground mb-3">
                    Habitación amplia con cama matrimonial, vista parcial al mar y balcón privado.
                  </p>
                  <Badge variant="secondary">Desde $1,800 MXN/noche</Badge>
                </div>

                <div className="text-center">
                  <img
                    src="/image.jpg"
                    alt="Jr Suite Hotel"
                    className="rounded-lg mb-4 w-full h-48 object-cover"
                  />
                  <h5 className="font-semibold mb-2">Jr Suite</h5>
                  <p className="text-sm text-muted-foreground mb-3">
                    Suite junior con área de estar, jacuzzi y vista panorámica a la bahía de Barra de Navidad.
                  </p>
                  <Badge variant="secondary">Desde $2,500 MXN/noche</Badge>
                </div>

                <div className="text-center">
                  <img
                    src="/suite.jpg"
                    alt="Suite Hotel"
                    className="rounded-lg mb-4 w-full h-48 object-cover"
                  />
                  <h5 className="font-semibold mb-2">Suite</h5>
                  <p className="text-sm text-muted-foreground mb-3">
                    Suite de lujo con área de comedor, jacuzzi privado, balcón amplio y vista espectacular al océano.
                  </p>
                  <Badge variant="secondary">Desde $3,500 MXN/noche</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Galería</h2>
            <p className="text-xl text-muted-foreground">
              Descubre la belleza de nuestras instalaciones y los paisajes de Barra de Navidad
            </p>
          </div>

          <ImageCarousel images={galleryImages} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Lo Que Dicen Nuestros Huéspedes</h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-secondary text-secondary" />
              ))}
              <span className="text-lg font-semibold ml-2">8.2/10</span>
              <span className="text-muted-foreground">(1,384 reseñas)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Una experiencia increíble. Las vistas desde nuestra habitación eran espectaculares y el servicio fue
                  excepcional. Definitivamente regresaremos."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">María González</div>
                    <div className="text-sm text-muted-foreground">Ciudad de México</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "El hotel perfecto para una escapada romántica. La Casa Club es simplemente espectacular y el personal
                  muy atento a todos los detalles."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Carlos Mendoza</div>
                    <div className="text-sm text-muted-foreground">Guadalajara</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                  <Star className="w-4 h-4 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground mb-4">
                  "Excelente ubicación y instalaciones. La piscina con vista al mar es hermosa. Solo sugeriría mejorar
                  el wifi en algunas áreas."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Ana Rodríguez</div>
                    <div className="text-sm text-muted-foreground">Monterrey</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="ubicacion" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Nuestra Ubicación</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Ubicados en el corazón de Barra de Navidad, con acceso directo a la playa y cerca de las principales
              atracciones
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="bg-card rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-card-foreground">Información de Ubicación</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Dirección Completa</h4>
                      <p className="text-muted-foreground">
                        Sinaloa #16, Barra de Navidad
                        <br />
                        Jalisco, México, C.P. 48987
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Distancias</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex justify-between">
                          <span>Playa:</span>
                          <span className="font-medium">50 metros</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Centro de Barra:</span>
                          <span className="font-medium">2 minutos</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Aeropuerto Manzanillo:</span>
                          <span className="font-medium">45 minutos</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Puerto Vallarta:</span>
                          <span className="font-medium">3.5 horas</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Atracciones Cercanas</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex justify-between">
                          <span>Laguna de Navidad:</span>
                          <span className="font-medium">5 minutos</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Melaque:</span>
                          <span className="font-medium">10 minutos</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Isla Navidad Golf:</span>
                          <span className="font-medium">15 minutos</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Colimilla:</span>
                          <span className="font-medium">20 minutos</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-accent">Cómo Llegar</h4>
                    <p className="text-sm text-muted-foreground">
                      Desde el Aeropuerto de Manzanillo, toma la carretera federal 200 hacia el sur. El hotel se
                      encuentra en el centro de Barra de Navidad, sobre la calle Sinaloa, a solo unos pasos de la playa
                      principal.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-card rounded-lg overflow-hidden shadow-lg">
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.8234567890123!2d-104.67654321234567!3d19.198765432109876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBarra%20de%20Navidad%2C%20Jalisco%2C%20Mexico!5e0!3m2!1sen!2smx!4v1234567890123!5m2!1sen!2smx"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación Hotel La Alondra"
                    className="w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-semibold mb-2">Vista Satelital</h4>
                  <p className="text-sm text-muted-foreground">
                    Explora nuestra ubicación privilegiada en Barra de Navidad. Haz clic en el mapa para obtener
                    direcciones detalladas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Contacto</h2>
            <p className="text-xl text-muted-foreground">Estamos aquí para hacer tu estancia inolvidable</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Información de Contacto</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Dirección</h4>
                    <p className="text-muted-foreground">
                      Sinaloa #16, Barra de Navidad
                      <br />
                      Jalisco, México, C.P. 48987
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Teléfono</h4>
                    <p className="text-muted-foreground">
                      +52 (314) 355-5555
                      <br />
                      Reservaciones: +52 (314) 355-5556
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">
                      info@hotelalondra.com
                      <br />
                      reservaciones@hotelalondra.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold mb-4">Horarios de Atención</h4>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Recepción:</span>
                    <span>24 horas</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Reservaciones:</span>
                    <span>8:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Check-in:</span>
                    <span>3:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Check-out:</span>
                    <span>12:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Hotel La Alondra</h3>
              <p className="text-background/80 mb-4">
                Tu refugio de lujo en Barra de Navidad, donde cada momento se convierte en un recuerdo inolvidable.
              </p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
                <span className="ml-2 text-sm">8.2/10</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-background/80">
                <li>
                  <a href="#nosotros" className="hover:text-background transition-colors">
                    Quiénes Somos
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="hover:text-background transition-colors">
                    Servicios
                  </a>
                </li>
                <li>
                  <a href="#galeria" className="hover:text-background transition-colors">
                    Galería
                  </a>
                </li>
                <li>
                  <a href="#ubicacion" className="hover:text-background transition-colors">
                    Ubicación
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="hover:text-background transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-background/80">
                <li>Piscina al Aire Libre</li>
                <li>Wi-Fi Gratuito</li>
                <li>Estacionamiento Privado</li>
                <li>Centro de Negocios</li>
                <li>Servicio 24/7</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Síguenos</h4>
              <div className="flex gap-4 mb-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297L3.323 17.49c.875.807 2.026 1.297 3.323 1.297h7.117c1.297 0 2.448-.49 3.323-1.297l-1.803-1.799c-.875.807-2.026 1.297-3.323 1.297H8.449z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
                >
                  <span className="sr-only">TripAdvisor</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </a>
              </div>
              <p className="text-background/80 text-sm">
                Sinaloa #16, Barra de Navidad
                <br />
                Jalisco, México
              </p>
            </div>
          </div>

          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/80">
            <p>&copy; 2024 Hotel La Alondra. Todos los derechos reservados.</p>
            <p className="text-sm mt-2">Diseñado y desarrollado con ❤️ para brindar la mejor experiencia digital.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
