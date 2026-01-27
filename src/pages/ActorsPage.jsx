import React from 'react'
import ActorTable from '../components/Tables/ActorTable'
import useReactQuery from '../hooks/useReactQuery'

const ActorsPage = () => {
  const {data , isLoading} = useReactQuery({url:"actor" , key:"actors"})
  return (
    <div>
      <ActorTable data={data?.data}/>
    </div>
  )
}

export default ActorsPage