import { Analytics } from '../components/Analytics'
import { Features } from '../components/Features'
import { Hero } from '../components/Hero'
import { Event } from '../components/Event'
import { Cta } from '../components/Cta'

export const Index = () => {
  return (
    <>
      <Hero />
      <Features />
      <Analytics />
      <Event />
      <Cta />
    </>
  )
}
