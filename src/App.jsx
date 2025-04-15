import { Analytics } from './components/Analytics'
import { Features } from './components/Features'
import { Header } from './components/header/Header'
import { Hero } from './components/Hero'
import { Event } from './components/Event'
import { Cta } from './components/Cta'
import { Footer } from './components/Footer'
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Analytics />
      <Event />
      <Cta />
      <Footer />
    </>
  )
}
export default App
