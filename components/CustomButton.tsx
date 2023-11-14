'use client';

import React from 'react'
import Image from 'next/image'
import { CustonButtonProps } from '@/types';

const CustomButton = ({ title, containerStyles, handleClick, btnType}: CustonButtonProps) => {
  return (
    <button
    disabled={false}
    type={btnType || 'button'}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    >
     <span className={`flex-1`}>
       {title}
    </span>   
    </button>
  )
}

export default CustomButton