import React from 'react'
import useGet from '../hooks/useGet'
import DirectorTable from '../components/Tables/DirectorTable';
import useReactQuery from '../hooks/useReactQuery';


const DirectorPage = () => {
     const {data , isLoading} = useReactQuery({url:"director" , key:"directors"})

   
  return (
    <div>
      <DirectorTable data={data?.data}/>
    </div>
  )
}

export default DirectorPage