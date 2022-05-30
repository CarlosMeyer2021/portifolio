import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-[250px]'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Sobre</p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Oi eu sou o Carlos,</p>
            <p> prazer em
              conhecê-lo. Fique a vontade para conhecer meu portifólio.</p>
          </div>
          <div>
            <p>Sou apaixonado por construir softwares excelentes que melhorem a vida das pessoas ao meu redor. Eu me especializei na criação de software para clientes que vão desde indivíduos e pequenas empresas. O que você faria se tivesse um especialista em software disponível ao seu alcance?

            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About