'use client'
import React, { useState } from 'react'
import SearchManufacturer from './SearchManufacturer'


const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('');
    const handleSubmit = () => {}
  return (
    <form className='search-bar' onSubmit={handleSubmit}>
        <div className='manufacture'>
            <SearchManufacturer 
            manufacturer = {manufacturer}
            setManufacturer = {setManufacturer}/>
        </div>

        <div className='model'>
            
        </div>
    </form>
  )
}

export default SearchBar