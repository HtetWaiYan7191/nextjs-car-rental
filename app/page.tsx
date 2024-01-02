import Image from 'next/image'
import { Hero } from '@/components'
import CarCatalogue from '@/components/CarCatalogue'
import { fetchCars } from '@/utils'

export default async function Home() {
  const allCars = await fetchCars();
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="oveflow-hidden">      
      <Hero/>
      <CarCatalogue isDataEmpty = {isDataEmpty} allCars = {allCars}/>
    </main>
  )
}
