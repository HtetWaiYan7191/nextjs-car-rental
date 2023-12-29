import Image from 'next/image'
import { Hero } from '@/components'
import CarCatalogue from '@/components/CarCatalogue'

export default function Home() {
  return (
    <main className="oveflow-hidden">      
      <Hero/>
      <CarCatalogue/>
    </main>
  )
}
