import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form method='POST' action='https://getform.io/f/94b817f9-ddf9-4760-89ed-783c4832536e' className='flex flex-col max-w-[600px] w-full  sm mb-16'>
        <div className='p-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contato</p>
          <p className='text-gray-300 py-4'>Envie o formulário abaixo ou envie um e-mail - <span className='font-bold'>carlos.desenvolve@gmail.com</span></p>
        </div>
        <input className='bg-[#ccd6f6] p-2 rounded' type='text' placeholder='Nome' name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6] rounded' type='email' placeholder='E-mail' name='email' />
        <textarea className='bg-[#ccd6f6] p-2 rounded' name='message' rows='10' placeholder='Mensagem'></textarea>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center rounded'>Clique para enviar</button>
      </form>
    </div>
  )
}

export default Contact