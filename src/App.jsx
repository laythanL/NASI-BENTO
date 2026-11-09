import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Steps from './components/Steps'
import Testimonials from './components/Testimonials'
import CtaBanner from './components/CtaBanner'
import Footer from './components/Footer'
import WhatsAppFab from './components/WhatsAppFab'

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Lewati ke konten utama
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Features />
        <Steps />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
