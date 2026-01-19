import React from 'react'
import useGet from '../hooks/useGet'
import CountryTable from '../components/CountryTable'


const DestinationPage = () => {
   const {data} = useGet({url:"prods"})
  return (
    <div>
      <CountryTable data={data}/>
    </div>
  )
}

export default DestinationPage