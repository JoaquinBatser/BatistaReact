import React from 'react'
import HeroImg from '../images/heroimg.png'

const Hero = () => {
  return (
    <section className='min-h-screen flex justify-center items-center p-14 bg-gradient-to-b md:from-white md:justify-around '>
    
            
            <h1 className='text-white font-black text-[6rem] md:text-[12rem] lg:text-[16rem] tracking-wider z-0 absolute italic drop-shadow-xl'>EVOKE</h1>          
            <img className=' relative md:h-[24rem] h-[20rem] lg:h-[32rem] hidden md:block' src={HeroImg} alt="" />

    </section>
  )
}

export default Hero