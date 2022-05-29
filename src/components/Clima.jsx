import { React, useState, useEffect } from 'react'
import axios from 'axios'
import moment from "moment";
import Sol from '../assets/sol.png'

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


  const dataInicial = moment().format("DD/MM/YYYY HH:mm:ss")
  const [tempoAtual, setTempoAtual] = useState(dataInicial)

  useEffect(() => {
    setInterval(() => {
      let novaData = moment().format("DD/MM/YYYY HH:mm:ss")
      setTempoAtual(novaData)
    }, 1000)

  }, [])

  return (
    <div className='flex fixed justify-center items-center w-full my-28 bg-[#0a192f] text-1xl text-gray-300'>
      <div className='flex fixed justify-between items-center border-4w-[290px] bg-[#0a192f] text-1xl text-gray-300'>
        <div>
          <label className='text-gray-300 mr-3' htmlFor="cidade" >Cidade</label><br />
          <span className='text-pink-600 mr-3'>
            {data.name}
          </span>
        </div>

        <div>
          <label htmlFor="datahora">Data  Hora</label><br />
          <span className='text-pink-600 text mr-3'>{tempoAtual}</span>
        </div>

        <div>
          <label htmlFor="tempo">Tempo</label><br />
          <div className='flex text-pink-600'>
            <span>{((data?.main?.temp) - 273.15).toFixed(0)} °C</span>
          </div>
        </div>
      </div>

    </div>

  )

}

export default Clima