import { MobileNavbarProps } from '@/types';
import React from 'react'
import { RxCross1 } from "react-icons/rx";

const MobileNavbar = ({handleClick, showMenu}: MobileNavbarProps) => {
  return (
    <section className={`absolute left-0 top-0  h-[100vh]  w-full mobile-navbar-page bg-blue-600/80 backdrop-blur-sm text-white transition-all ${
        showMenu ? 'w-full' : 'w-0 '
      }`}>
        <div className='flex justify-end p-5'>
          <RxCross1 onClick={handleClick} className='text-2xl font-bold' />
        </div>
      </section>
  )
}

export default MobileNavbar