import React from 'react'
import useGet from '../hooks/useGet'
import DirectorTable from '../components/Tables/DirectorTable';


const DirectorPage = () => {
   const {data , getData} = useGet({url:"director"})
   
  return (
    <div>
      <DirectorTable getData={getData} data={data}/>
    </div>
  )
}

export default DirectorPage