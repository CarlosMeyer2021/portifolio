import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'


const Home = () => {

  return (
    <div name='home' className='w-full h-screen bg-[#0a192f] mt-10'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-[600px] py-5'>
        <p className='text-pink-600'>Oi meu nome é</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Carlos Meyer</h1>
        <h2 className='text-4xl sm:text-5xl font-bold text-[#8892b0]'>Sou Desenvolvedor Full Stack.</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>Sou especializado em construir experiências digitais excepcionais. Atualmente, estou focado na construção de aplicativos web full-stack responsivos.</p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>Ver trabalho
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </button>


        </div>
      </div>

    </div>
  )
}

export default Home