import { React, useState, useEffect } from 'react'
import axios from 'axios'
import moment from "moment";

const Clima = () => {
  const api = '8f761d9a2228893842749a06855ff17a'
  const [data, setData] = useState({})

  const getDetalhes = (cityName) => {

    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + api
    axios.get(url).then((res) => {
      console.log("Response", res.data)
      setData(res.data)
    }).catch((err) => {
      console.log("Err", err)
    })
  }

  useEffect(() => {
    getDetalhes("sao paulo")
    //<h2>{((data?.main?.temp_min) - 273.15).toFixed(1)} °C</h2>
    //<h2>{((data?.main?.temp_max) - 273.15).toFixed(1)} °C</h2>
  }, [])


  const dataInicial = moment().format("DD/MM/YYYY")
  const horaInicial = moment().format("HH:mm:ss")
  const [tempoAtual, setTempoAtual] = useState(dataInicial)
  const [horaAtual, setHoraAtual] = useState(horaInicial)

  useEffect(() => {
    setInterval(() => {
      let novaData = moment().format("DD/MM/YYYY")
      let novaHora = moment().format("HH:mm:ss")
      setTempoAtual(novaData)
      setHoraAtual(novaHora)
    }, 1000)

  }, [])

  return (
    /*Celular fica hidden*/
    <div className='flex justify-center items-center w-full bg-transparent text-sm text-gray-300 '>

      <div className='fixed flex mt-[230px] justify-between items-center w-[300px] bg-transparent text-sm text-gray-300 pl-[40px]'>
        <div>
          <label className='text-gray-300 text-sm mr-3' htmlFor="cidade" >Cidade</label><br />
          <span className='text-pink-600 mr-3'>
            {data.name}
          </span>
        </div>

        <div>
          <label className='text-sm' htmlFor="data">Data</label><br />
          <span className='text-pink-600 text-sm mr-3'>{tempoAtual}</span>
        </div>
        <div>
          <label className='text-sm' htmlFor="data">Hora</label><br />
          <span className='text-pink-600 text-sm mr-3'>{horaAtual}</span>
        </div>

        <div>
          <label className='text-sm' htmlFor="tempo">Tempo</label><br />
          <div className='flex text-pink-600 text-sm'>
            <span>{((data?.main?.temp) - 273.15).toFixed(0)} °C</span>
          </div>
        </div>
      </div>
    </div>



  )

}

export default Clima