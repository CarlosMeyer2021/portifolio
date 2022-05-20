import { React, useState, useEffect } from 'react'
import axios from 'axios'

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

  return (
    <div className='flex justify-end items-center border-4 border-red-600 w-full py-20'>
      <span className='text-red-900 text-5xl'>{data.name}</span>
      <h1 className='font-bold text-5xl text-blue-500'>{((data?.main?.temp) - 273.15).toFixed(1)} °C</h1>
    </div>
  )

}

export default Clima