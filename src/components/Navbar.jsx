import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsWhatsapp } from 'react-icons/bs'

import Logo from '../assets/logocm.png'
import Home from '../assets/home.png'
import About from '../assets/about.png'
import Skills from '../assets/skills.png'
import Work from '../assets/work.png'
import Contact from '../assets/contact.png'
import { Link } from 'react-scroll'
import Clima from './Clima'




const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => {
    setNav(!nav)
  }



  const api = 'https://api.whatsapp.com/send?phone'
  const numero = 5511976225137
  const mensagem = 'Olá, seja bem vindo ao MyPet!'
  const zap = `${api}=${numero}&text=${mensagem}`

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div className='flex justify-start items-center'>
        <img className='ml-[-10px] mt-[15px]' src={Logo} alt='Logo Image' style={{ width: '180px', height: '180px' }} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link to="home" spy={true} smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true} duration={500}>
            Sobre
          </Link>
        </li>
        <li>
          <Link to="skills" spy={true} smooth={true} duration={500}>
            Habilidades
          </Link>
        </li>
        <li>
          <Link to="work" spy={true} smooth={true} duration={500}>
            Trabalho
          </Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            Contato
          </Link>
        </li>
      </ul>
      <Clima />


      {/* Hamburgues */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <ul >
          <li className='py-6 text-4xl'>
            <Link className='flex justify-start items-center' onClick={handleClick} to="home" spy={true} smooth={true} duration={500}>
              <img className='mb-3 mr-2' src={Home} alt='Home icon' style={{ width: '35px' }} />
              Home
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link className='flex justify-start items-center' onClick={handleClick} to="about" spy={true} smooth={true} duration={500}>
              <img className='mb-3 mr-2' src={About} alt='About icon' style={{ width: '35px' }} />
              Sobre
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link className='flex justify-start items-center' onClick={handleClick} to="skills" spy={true} smooth={true} duration={500}>
              <img className='mb-3 mr-2' src={Skills} alt='Skills icon' style={{ width: '35px' }} />
              Habilidades
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link className='flex justify-start items-center' onClick={handleClick} to="work" spy={true} smooth={true} duration={500}>
              <img className='mb-3 mr-2' src={Work} alt='work icon' style={{ width: '35px' }} />
              Trabalho
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link className='flex justify-start items-center' onClick={handleClick} to="contact" spy={true} smooth={true} duration={500}>
              <img className='mb-3 mr-2' src={Contact} alt='contact icon' style={{ width: '35px' }} />
              Contato
            </Link>
          </li>
        </ul>
      </div>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-r'>
            <a className='flex justify-between items-end w-full text-gray-300' href='https://www.linkedin.com/in/carlosaugustomeyer/' target="_blank">
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] rounded-r'>
            <a className='flex justify-between items-end w-full text-gray-300' href='https://github.com/CarlosMeyer2021' target="_blank">
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#CD853F] rounded-r'>
            <a className='flex justify-between items-end w-full text-gray-300' href='/'>
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#006400] rounded-r'>
            <a className='flex justify-between items-end w-full text-gray-300' href={zap} target="_blank">
              WhatsApp <BsWhatsapp size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar