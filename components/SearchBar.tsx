'use client'
import React, { useState } from 'react'
import SearchManufacturer from './SearchManufacturer'
import Image from 'next/image'

const SearchButton = ({otherClasses} : {otherClasses: string}) => {
  return (
    <>
      <button type='submit' className={` z-10 relative ${otherClasses}`}>
          <Image src="/magnifying-glass.svg" alt="magnifying glass"
          width={30} 
          height={30}
          className="object-contain"
          />
      </button>
    </>
  )
}

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('');
    const [model, setModel] = useState('');
    const handleSubmit = () => {}
  return (
    <form className='search-bar flex flex-col md:flex-row md:items-center gap-5' onSubmit={handleSubmit}>
        <div className='manufacture flex gap-5 items-center '>
            <SearchManufacturer 
            manufacturer = {manufacturer}
            setManufacturer = {setManufacturer}/>
            <SearchButton otherClasses="sm:hidden "/>
        </div>

    
        <div className='searchbar-item flex items-center  shadow-md '>
            <Image
            src="/model-icon.png"
            width={25}
            height={25}
            className='absolute w-[20px] h-[20px] ml-4'
            alt='car-model'
            />
            <input type="text" name='model' value={model} 
            onChange={(e) => setModel(e.target.value)}
            placeholder='Tiguan'
            className='ml-10 search-manufacturer-input w-full border-none py-2  pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 outline-none'
            />
              <SearchButton otherClasses='sm:hidden '/>

        </div>
        <SearchButton otherClasses='sm:hidden md:block max-sm:hidden'/>
    </form>
  )
}

export default SearchBar