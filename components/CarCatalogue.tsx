import React from 'react'
import SearchBar from './SearchBar'
import CustomFilter from './CustomFilter'
import { CarCatalogueProps } from '@/types'
import CarCard from './CarCard'
import { fuels, yearsOfProduction } from '@/constants'

const CarCatalogue = ({isDataEmpty, allCars} : CarCatalogueProps) => {
  const years = [...yearsOfProduction];
  return (
    <section className='car-catalogue-section mt-12 px-10' id='discover'>
        <h2 className='font-semibold text-neutral-800 text-2xl'>Car Catalogue</h2>
        <p className=' gray-text mt-2'>Explore the cars you might like</p>

        <div className='home-filters my-5 flex gap-y-5 flex-col md:flex-row justify-between'>
            <SearchBar/>
            <div className='flex gap-5'>
            <CustomFilter title="fuel" options={fuels}/>
            <CustomFilter title="year" options={years}/>
        </div>
        </div>

       {!isDataEmpty ? (
        <section>
          <div className='home-cars-wrapper grid grid-cols-1 md:grid-cols-3 gap-10'>
            {
              allCars?.map((car) => (
                <CarCard car={car} />
              ))
            }
          </div>
        </section>
       ) : (
        <div>
          <h2>we don't have cars</h2>
        </div>
       )}


    </section>
  )
}

export default CarCatalogue