'use client'

import Image from 'next/image'
import { Link, animateScroll as scroll } from 'react-scroll'
import React from 'react'
import Social from '@/components/social'

const Footer = () => {
  return (
    <section className='bg-secondary py-8'>
      <div className='container flex flex-col items-center justify-between gap-4 xl:flex-row'>
        <p className='text-xl font-semibold uppercase'>
          {' '}
          <span>® 2024</span> Pov Sokny
        </p>
        <Link to='/' spy={true} smooth={true} className='cursor-pointer'>
          <Image src='/logo1.png' width={1000} height={1000} alt='logo' className='w-14 rounded-full' />
        </Link>
        <Social />
      </div>
    </section>
  )
}

export default Footer
