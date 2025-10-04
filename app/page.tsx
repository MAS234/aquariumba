import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import Products from "@/components/Products"
import About from "@/components/About"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Products />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
