import { CustomButtonProps } from '@/types'
import React from 'react'

const CustomButton = ({title, containerStyles, handleClick}: CustomButtonProps) => {
  return (
    <button className={`${containerStyles}`}
    disabled={false}
    type={'button'}
    onClick={handleClick}
    >
        {title}
    </button>
  )
}

export default CustomButton