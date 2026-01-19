import React from 'react'
import useGet from '../hooks/useGet'
import ToursPacketsTable from '../components/ToursPacketsTable';

const TourPacketsPage = () => {
   const {data} = useGet({url :"subtours"})
   
  return (
    <div>
      <ToursPacketsTable data={data}/>
    </div>
  )
}

export default TourPacketsPage