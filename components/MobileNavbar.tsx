import { MobileNavbarProps } from '@/types';
import React from 'react'
import { RxCross1 } from "react-icons/rx";

const MobileNavbar = ({setShowMenu, showMenu}: MobileNavbarProps) => {
  return (
    <section className={`fixed top-0 left-0 w-full mobile-navbar-page bg-blue-500/90 text-white ${
        showMenu ? ' h-[50%]  ' : ' h-0 '
      }`}>
        <div className='flex justify-end p-5'>
          <RxCross1 onClick={setShowMenu} className='text-2xl font-semibold' />
        </div>
      </section>
  )
}

export default MobileNavbar