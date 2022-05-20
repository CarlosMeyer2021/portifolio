import React from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsWhatsapp } from 'react-icons/bs'

const Footer = () => {
  const api = 'https://api.whatsapp.com/send?phone'
  const numero = 5511976225137
  const mensagem = 'Olá, seja bem vindo ao MyPet!'
  const zap = `${api}=${numero}&text=${mensagem}`
  return (
    <div className='fixed w-full h-[80px] flex justify-center bottom-0 px-4 bg-[#0a192f] text-gray-300'>

      {/* Social icons */}
      <div className='sm:flex fixed flex-row bottom-0 justify-between items-center w-full inline border-t-4 border-white lg:hidden pt-1 pb-1'>

        <ul className='flex items-end justify-center w-full '>
          <li className='w-[60px] h-[60px] flex justify-between items-center bg-blue-600 rounded-full'>
            <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/carlosaugustomeyer/' target="_blank">
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[60px] h-[60px] flex justify-between items-center bg-[#333333] rounded-full'>
            <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/CarlosMeyer2021' target="_blank">
              <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[60px] h-[60px] flex justify-between items-center  bg-[#CD853F] rounded-full'>
            <a className='flex justify-between items-end w-full text-gray-300' href='/' target="_blank">
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[60px] h-[60px] flex justify-between items-center  bg-[#006400] rounded-full'>
            <a className='flex justify-between items-end w-full text-gray-300' href={zap} target="_blank">
              <BsWhatsapp size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer