import React from 'react'
import useGet from '../hooks/useGet'
import DirectorTable from '../components/Tables/DirectorTable';


const DirectorPage = () => {
   const {data} = useGet({url:"director"})
   
  return (
    <div>
      <DirectorTable data={data}/>
    </div>
  )
}

export default DirectorPage