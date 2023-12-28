import React from 'react'
import Image from 'next/image'
import { footerLinks } from '@/constants'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className=' flex justify-between flex-wrap gap-10 md:gap-60 py-10 mt-32 px-5 md:px-10 '>
      <div className='flex flex-col gap-y-5'>
        <Image src="/logo.svg" width={100} height={100} alt='footer-logo' className='img'/>
        <span className='gray-text'>
          Carhub 2023  <br></br>
          All RightsReserved @c
        </span>
      </div>
    <div className='flex gap-32'>
      {
        footerLinks.map((footerLink) => (
          <div key={footerLink.title}>
            <h2 className='font-semibold text-neutral-600 mb-2'>{footerLink.title}</h2>
            <ul className=''>
              {footerLink.links.map((link) => (
                <li className=' gray-text py-2 ' key={link.title}><Link href={link.url}>{link.title}</Link></li>
              ))}
            </ul>
          </div>
        ))
      }
       </div>

      <div className='flex items-center w-full justify-between'>
        <span className='gray-text text-sm md:text-lg'>@2023 Carhub All Rights Reserved</span>
        <div className='flex gap-5'>
          <span className='gray-text text-sm md:text-lg'>Privacy</span>
          <span className='gray-text text-sm md:text-lg'>Terms of Use</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer