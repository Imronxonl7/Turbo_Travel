import React from 'react'
import useGet from '../hooks/useGet'
import CountryTable from '../components/CountryTable'

const CountriesPage = () => {
  const {data} = useGet({url:"countries"})
  return (
    <div>
      <CountryTable data={data}/>
    </div>
  )
}

export default CountriesPage