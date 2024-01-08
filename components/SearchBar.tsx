'use client'
import React, { useState } from 'react'
import SearchManufacturer from './SearchManufacturer'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

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
    const router = useRouter();

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if(manufacturer === '' && model === '') {
        return alert('Please fill in the search bar')
      }
      updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase())
    }
    const updateSearchParams = (model: string, manufacturer: string) => {
      const searchParams = new URLSearchParams(window.location.search);
    
      if (model) {
        searchParams.set('model', model);
      } else {
        searchParams.delete('model');
      }
    
      if (manufacturer) {
        searchParams.set('manufacturer', manufacturer);
      } else {
        searchParams.delete('manufacturer');
      }
    
      const newPathname = `${window.location.pathname}?${searchParams.toString()}`; // Remove extra space
      router.push(newPathname);
    };

  return (
    <form className='search-bar flex flex-col md:flex-row md:items-center gap-5' onSubmit={handleSubmit}>
        <div className='manufacture flex gap-5 items-center focus-within:bg-blue-100 '>
            <SearchManufacturer 
            manufacturer = {manufacturer}
            setManufacturer = {setManufacturer}/>
            <SearchButton otherClasses="block md:hidden "/>
        </div>

    
        <div className='searchbar-item flex items-center  shadow-md focus-within:bg-blue-100 '>
            <Image
            src="/model-icon.png"
            width={25}
            height={25}
            className='absolute w-[20px] h-[20px] ml-4'
            alt='car-model'
            />
            <input type="text" name='model' value={model} 
            onChange={(e) => {setModel(e.target.value)}}
            placeholder='Tiguan'
            className='ml-10 search-manufacturer-input w-full border-none py-2 focus:bg-blue-100  pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 outline-none focu'
            />
              <SearchButton otherClasses='block md:hidden '/>

        </div>
        <SearchButton otherClasses='sm:hidden md:block max-sm:hidden'/>
    </form>
  )
}

export default SearchBar