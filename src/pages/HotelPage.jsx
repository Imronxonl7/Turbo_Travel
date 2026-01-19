import React from 'react'
import useGet from '../hooks/useGet'
import ToursPacketsTable from '../components/ToursPacketsTable';


const HotelPage = () => {
   const {data} = useGet({url:"hotels"})
   
  return (
    <div>
      <ToursPacketsTable data={data}/>
    </div>
  )
}

export default HotelPage