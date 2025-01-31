'use client'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { projectsData } from '@/lib/projectData'
import { useScroll, useTransform, motion } from 'framer-motion'

type ProjectProps = (typeof projectsData)[number]

export const Project = ({
  title,
  image,
  category,
  description,
  link = '#',
}: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="flex flex-col items-center rounded-3xl bg-blue/10 p-4 xl:flex-row xl:justify-between"
    >
      <div className="pb-[60px]">
        <h5 className="text-[18px] font-medium capitalize underline">{category}</h5>
        <h3 className="mt-4 text-[40px] font-light">{title}</h3>
        <p className="text-[18px] mb-4 mt-4 max-w-xl">{description}</p>
        <div className='flex gap-x-2'>
          <span className='text-blue-500'>URL:</span>
          <Link href={link} passHref className="">
            View Project
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center rounded-[30px] outline-[3px] outline-offset-8 outline-blue transition-all hover:outline">
        <Link href="/" >
          <Image
            src={image}
            width={360}
            height={360}
            alt="project image"
            className="inset-0 z-50 rounded-[30px] bg-cover transition-all hover:translate-x-[18px] hover:rotate-[-45deg] hover:shadow-lg"
          />
        </Link>
      </div>
    </motion.div>
  )
}
