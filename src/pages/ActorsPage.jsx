import React from 'react'
import useGet from '../hooks/useGet'
import ActorTable from '../components/Tables/ActorTable'

const ActorsPage = () => {
  const {data , getData} = useGet({url:"actor"})
  return (
    <div>
      <ActorTable getData={getData} data={data}/>
    </div>
  )
}

export default ActorsPage