'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import FadeIn from '../lib/variants'
import AnimatedCounter from '../lib/animatedCounter'
import {servicesData} from '@/lib/serviceData'
import { ServiceType } from '@/lib/type'


const Services = () => {
  const [cart, setCart] = useState<ServiceType[]>([])

  const addToCart = (service: ServiceType) => {
    setCart((prevCart) => [...prevCart, service])
  }

  return (
    <section id="services" className="z-30 -translate-y-1 bg-secondary">
      <div className="container w-full py-[100px] lg:py-[200px]">
        <div className="flex flex-col justify-between gap-12 px-2 lg:flex-row lg:px-0">
          <motion.div
            variants={FadeIn('right', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.8 }}
            className="justify-between lg:mr-8 flex w-full flex-col lg:w-1/2"
          >
            <h1 className="pb-4 text-[40px] font-bold leading-[3rem]">What We Do?</h1>
            <p className='text-[18px]'>
            At our core, we are committed to delivering cutting-edge solutions in Front-end Development, Back-end Development, and DevOps Engineering. With a focus on innovation and efficiency, we help businesses transform ideas into reality.
            </p>
            <div className="flex justify-between space-x-4 py-8">
              <div className="flex flex-col items-center justify-center">
                <p className="text-lg font-semibold uppercase">Projects</p>
                <p className="text-[36px] font-bold text-blue">
                  + <AnimatedCounter from={0} to={10} />
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-lg font-semibold uppercase">Satisfied Clients</p>
                <p className="text-[36px] font-bold text-blue">
                  <AnimatedCounter from={0} to={10} />
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={FadeIn('left', 0.4)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.8 }}
            className="flex h-full flex-col gap-8"
          >
            {servicesData.map((service) => (
              <div key={service.id} className="flex items-center space-x-6 bg-primary p-4">
                <p className="text-6xl font-bold text-blue">{`0${service.id}`}</p>
                <div>
                  <h2 className="mb-2 text-2xl font-bold">{service.title}</h2>
                  <p>{service.description}</p>
                  {/* <button
                    className="mt-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                    onClick={() => addToCart(service)}
                  >
                    Add to Cart
                  </button> */}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Cart Display */}
        {cart.length > 0 && (
          <div className="mt-8 bg-gray-100 p-4">
            <h2 className="text-2xl font-bold">Cart</h2>
            <ul>
              {cart.map((item) => (
                <li key={item.id} className="py-1">
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
    </section>
  )
}

export default Services
