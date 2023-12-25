import React from 'react'
import Image from 'next/image'
import { footerLinks } from '@/constants'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className=' flex justify-center flex-wrap gap-10 md:gap-60 py-10 mt-32 '>
      <div className='flex flex-col gap-y-5'>
        <Image src="/logo.svg" width={100} height={100} alt='footer-logo'/>
        <span className='gray-text'>
          Carhub 2023  <br></br>
          All RightsReserved @c
        </span>
      </div>

      {
        footerLinks.map((footerLink) => (
          <div key={footerLink.title}>
            <h2 className='font-semibold text-neutral-600 mb-2'>{footerLink.title}</h2>
            <ul className=''>
              {footerLink.links.map((link) => (
                <li className=' gray-text py-2 '><Link href={link.url}>{link.title}</Link></li>
              ))}
            </ul>
          </div>
        ))
      }
    </footer>
  )
}

export default Footer