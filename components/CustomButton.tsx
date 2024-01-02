import { CustomButtonProps } from '@/types'
import Image from 'next/image'
import React from 'react'

const CustomButton = ({title, containerStyles, textStyles, rightIcon, handleClick}: CustomButtonProps) => {
  return (
    <button className={`${containerStyles}`}
    disabled={false}
    type={'button'}
    onClick={handleClick}
    >
        <span className={`flex-1 ${textStyles}`}>
          {title}
        </span>
        {rightIcon && (
          <div className='relative w-7 h-7 mr-[1rem]'>
              <Image src={rightIcon} alt='right Icon' fill className=' object-contain right-arrow'/>
          </div>
        )}
    </button>
  )
}

export default CustomButton