import StickyNav from './components/StickyNav.jsx'
import Hero from './components/Hero.jsx'
import ExpertiseGrid from './components/ExpertiseGrid.jsx'
import PartnerSpotlight from './components/PartnerSpotlight.jsx'
import InlineContactForm from './components/InlineContactForm.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <StickyNav />
      <Hero />
      <ExpertiseGrid />
      <PartnerSpotlight />
      <InlineContactForm />
      <Footer />
    </div>
  )
}
