import Image from 'next/image'
import { Hero } from '@/components'
import CarCatalogue from '@/components/CarCatalogue'
import { fetchCars } from '@/utils'

export default async function Home({searchParams}) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
    model: searchParams.model || '',
  });
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="oveflow-hidden">      
      <Hero/>
      <CarCatalogue isDataEmpty = {isDataEmpty} allCars = {allCars}/>
    </main>
  )
}
