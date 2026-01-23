import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useGet = ({url}) => {
  const [data , setData] = useState([])
  const [loading , setLoading] = useState(true);

  const getData = async() => {
    try {
      let res = await axios.get(`https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/${url}`)
      setData(res?.data)
      setLoading(false)
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    getData()
  } , [url])
  return {data , setData , loading , setLoading , getData}
}

export default useGet