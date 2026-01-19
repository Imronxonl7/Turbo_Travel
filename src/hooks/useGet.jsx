import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useGet = ({url}) => {
  const [data , setData] = useState([])
  const [loading , setLoading] = useState(true);

  const getData = async() => {
    try {
      let res = await axios.get(`https://v1.turbotravel.uz/api/${url}`)
      setData(res?.data?.data)
      setLoading(false)
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    getData()
  } , [url])
  return {data , setData , loading , setLoading}
}

export default useGet