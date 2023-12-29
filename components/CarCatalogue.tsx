import React from 'react'
import SearchBar from './SearchBar'
import CustomFilter from './CustomFilter'

const CarCatalogue = () => {
  return (
    <section className='car-catalogue-section mt-12 px-10' id='discover'>
        <h2 className='font-semibold text-neutral-800 text-2xl'>Car Catalogue</h2>
        <p className=' gray-text mt-4'>Explore the cars you might like</p>

        <div className='home-filters my-5 flex gap-y-5 flex-col md:flex-row justify-between'>
            <SearchBar/>
            <div className='flex gap-5'>
            <CustomFilter title="fuel"/>
            <CustomFilter title="year"/>
        </div>
        </div>

       


    </section>
  )
}

export default CarCatalogue