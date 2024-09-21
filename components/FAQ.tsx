'use client'

import Image from 'next/image'
import { animate, motion } from 'framer-motion'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import FadeIn from '@/lib/variants'

import { askedQuestions } from '@/lib/data'

const slideVariant = {
  initial: {
    x: 0
  },
  animate: {
    x: '-50%'
  }
}

export const tech = [
  {
    src: '/tech/c.png',
    width: 220,
    height: 180,
    alt: 'C Programming'
  },
  {
    src: '/tech/cpp.png',
    width: 220,
    height: 180,
    alt: 'C++ Programming'
  },
  {
    src: '/tech/ccharp.png',
    width: 220,
    height: 150,
    alt: 'C# Programming'
  },
  {
    src: '/tech/html.png',
    width: 200,
    height: 100,
    alt: 'HTML'
  },
  {
    src: '/tech/css.png',
    width: 220,
    height: 150,
    alt: 'CSS'
  },
  {
    src: '/tech/javascript.png',
    width: 200,
    height: 150,
    alt: 'JavaScript'
  },
  {
    src: '/tech/typescript.png',
    width: 200,
    height: 150,
    alt: 'TypeScript'
  },
  {
    src: '/tech/bootstrap.png',
    width: 200,
    height: 150,
    alt: 'Bootstrap'
  },
  {
    src: '/tech/tailwind.png',
    width: 1200,
    height: 100,
    alt: 'Tailwind CSS'
  },
  {
    src: '/tech/redux.png',
    width: 200,
    height: 150,
    alt: 'Redux'
  },
  {
    src: '/tech/reactjs.png',
    width: 200,
    height: 150,
    alt: 'React JS'
  },
  {
    src: '/tech/nextjs1.png',
    width: 1200,
    height: 150,
    alt: 'Next JS'
  },
  {
    src: '/tech/java.png',
    width: 250,
    height: 150,
    alt: 'Java Programming'
  },
  {
    src: '/tech/spring.png',
    width: 200,
    height: 100,
    alt: 'Spring Framework'
  },
  {
    src: '/tech/spring-boot1.png',
    width: 200,
    height: 100,
    alt: 'Spring Boot'
  },
  {
    src: '/tech/postgresql.png',
    width: 1000,
    height: 100,
    alt: 'PostgreSQL'
  },
  {
    src: '/tech/mysql.png',
    width: 1000,
    height: 100,
    alt: 'MySQL'
  },
  {
    src: '/tech/github.png',
    width: 200,
    height: 100,
    alt: 'Github'
  },
  {
    src: '/tech/docker.png',
    width: 200,
    height: 100,
    alt: 'Docker'
  },
  {
    src: '/tech/docker-compose1.png',
    width: 300,
    height: 1000,
    alt: 'Docker Compose'
  },
  {
    src: '/tech/jenkins.png',
    width: 300,
    height: 1000,
    alt: 'Jenkins'
  },
  {
    src: '/tech/linux.png',
    width: 300,
    height: 1000,
    alt: 'Linux'
  },

]

const FAQ = () => {
  return (
    <section className='bg-secondary pb-20 pt-36' id='FAQ'>
      <div className='container sm:px-2'>
        <div>
          <h1 className='text-[40px] font-bold uppercase leading-[3rem]'>
            Frequently <br /> <span className='under-line'>asked</span>
          </h1>
        </div>
        <motion.div
          variants={FadeIn('up', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.8 }}
        >
          <div className='mx-auto mt-12 flex max-w-3xl flex-col justify-center rounded-md bg-primary py-8 sm:px-2 xl:py-4'>
            {askedQuestions.map(qst => (
              <Accordion
                type='single'
                collapsible
                className='w-full text-left'
                key={qst.id}
              >
                <AccordionItem value='item-1'>
                  <AccordionTrigger className='mx-2 text-xl font-medium hover:no-underline'>
                    {qst.qs}
                  </AccordionTrigger>
                  <AccordionContent className='px-2 pt-4 text-[16px] leading-6'>
                    {qst.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </motion.div>
      </div>
      <div className='center mt-36 flex justify-center py-4'>
        <div className='flex w-full max-w-[1200px] items-center justify-center overflow-x-hidden'>
          <div className='right-0 z-40 h-full w-[150px] bg-opacity-20 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/0' />
          <motion.div
            variants={slideVariant}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
              repeatType: 'loop'
            }}
            initial='initial'
            animate='animate'
            className='center flex space-x-12'
          >
            {tech.map(item => (
              <Image
                key={item.alt}
                src={item.src}
                width={item.width}
                height={item.height}
                alt={item.alt}
                className='w-24 h-24'
              />
            ))}
            {tech.map(item => (
              <Image
                key={item.alt}
                src={item.src}
                width={item.width}
                height={item.height}
                alt={item.alt}
                className='w-24 h-24'
              />
            ))}
            {tech.map(item => (
              <Image
                key={item.alt}
                src={item.src}
                width={item.width}
                height={item.height}
                alt={item.alt}
                className='w-24 h-24'
              />
            ))}
          </motion.div>
          <div className='right-0 z-40 h-full w-[150px] bg-gradient-to-l from-secondary via-secondary/90 to-secondary/0' />
        </div>
      </div>
    </section>
  )
}
export default FAQ
