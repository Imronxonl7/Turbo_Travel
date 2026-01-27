import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const useReactQuery = ({url , key}) => {
    const getData = async() => await axios.get(`https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/${url}`)
  const {data , isLoading , isError} = useQuery({
    queryKey: [key],
    queryFn: getData,
    staleTime: 60 * 100 * 5
  })
  return {data}
}

export default useReactQuery
