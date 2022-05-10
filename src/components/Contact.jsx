import { React, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com'


const Contact = () => {
  const iniciarValues = { username: "", email: "", message: "" }
  const [formValues, setFormValues] = useState(iniciarValues)
  const [formErros, setFormErros] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
    console.log(formValues)

  }
  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_vjetf7b', 'template_5gvvqxk', e.target, 'TqTdJfDEVGp1w2LxE').then(res => {
      console.log(res)
    })
    setFormErros(validaCampos(formValues))
    setIsSubmit(true)
  }
  useEffect(() => {
    console.log(formErros)
    if (Object.keys(formErros).length === 0 && isSubmit) {
      console.log(formValues)

      toast.success('Mensagem enviada com sucesso!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined
      });

      setTimeout(() => {
        setFormValues(iniciarValues)
      }, 2000)
    }
  }, [formErros])

  const validaCampos = (values) => {
    const erros = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    if (!values.username) {
      erros.username = "Favor preencher o nome para prosseguir"
    }
    if (!values.email) {
      erros.email = "Favor preencher o e-mail para prosseguir"
    } else if (!regex.test(values.email)) {
      erros.email = "Esse e-mail não é válido!"
    }
    if (!values.message) {
      erros.message = "Favor preencher a mensagem para prosseguir"
    }
    return erros
  }




  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>

      {Object.keys(formErros).length === 0 && isSubmit ? (<div className='ui message success'>{validaCampos}</div>) : (
        <pre className='hidden'>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}


      <form onSubmit={handleSubmit} method='POST' className='flex flex-col max-w-[600px] w-full  sm mb-16'>
        <ToastContainer />
        <div className='p-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contato</p>
          <p className='text-gray-300 py-4'>Preencha o formulário e clique para enviar.</p>
          <p className=' text-gray-300'>Você também pode enviar e-mail para <span className='font-bold cursor-pointer'><a href=''>carlos.desenvolve@gmail.com</a></span></p>
        </div>
        <input className='bg-[#ccd6f6] p-2 rounded' type='text' placeholder='Nome' name='username' value={formValues.username} onChange={handleChange} />
        <p className='text-red-600'>{formErros.username}</p>

        <input className='my-4 p-2 bg-[#ccd6f6] rounded' type='email' placeholder='E-mail' name='email' value={formValues.email} onChange={handleChange} />
        <p className='text-red-600'>{formErros.email}</p>
        <textarea className='bg-[#ccd6f6] p-2 rounded' name='message' rows='10' placeholder='Mensagem' value={formValues.message} onChange={handleChange}></textarea>
        <p className='text-red-600'>{formErros.message}</p>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center rounded'>Clique para enviar</button>
      </form>
    </div>
  )
}

export default Contact