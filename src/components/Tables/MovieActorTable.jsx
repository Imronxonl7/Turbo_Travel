import React from 'react';
import { Button, Image, Space, Table } from 'antd';
import axios from 'axios';
import { toast } from 'react-toastify';
import MovieActorAddModal from '../AddModal/MovieActorAddModal';
import { useQueryClient } from '@tanstack/react-query';


const MovieActorTable = ({index , actor , movie ,  movieActor}) => {
  const queryClient = useQueryClient()


  async function deleteActor(id) {
    try {
      await axios.delete(`https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/movie_actor/${id}`)
      toast.warning("You deleted movie_actor")
      queryClient.invalidateQueries({
        queryKey:"movie_actors"
      })
    } catch (error) {
      console.log(error);
    }
  }
    const columns = [
  {
    title: 'Movie name',
    dataIndex: 'movie_id',
    key: 'name',
    render: text => {
        return <p>{movie?.find((el) => el.id === text)?.title_uz}</p>
    },
  },
  {
    title: 'Actor name',
    dataIndex: 'actor_id',
    key: 'name',
    render: text => {
        return <p>{actor?.find((el) => el.id === text)?.full_name}</p>
    },
  },
  {
    title: 'Role name',
    dataIndex: 'role',
    key: 'name',
    render: text => <p>{text}</p>,
  },
 
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Button type='primary'>Edit</Button>
        <Button danger onClick={() => deleteActor(record.id)}>Delete</Button>
      </Space>
    ),
  },
];
    return (
      <div>
        <MovieActorAddModal movie={movie} actor={actor}/>
        <Table key={index} columns={columns} dataSource={movieActor} />
      </div>
    )
}

export default MovieActorTable;