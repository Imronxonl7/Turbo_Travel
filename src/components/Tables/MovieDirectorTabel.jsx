import React from 'react';
import { Button, Image, Space, Table } from 'antd';
import axios from 'axios';
import { toast } from 'react-toastify';
import MovieDirectorAddModal from '../AddModal/MovieDirectorAddModal';
import { useQueryClient } from '@tanstack/react-query';


const MovieDirectorTable = ({index , director , movie , movieDirector}) => {

  const queryClient = useQueryClient()

  async function deleteActor(id) {
    try {
      await axios.delete(`https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/movie_director/${id}`)
      toast.warning("You deleted movie_director")
      queryClient.invalidateQueries({
        queryKey:"movie_directors"
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
    title: 'Director name',
    dataIndex: 'director_id',
    key: 'name',
    render: text => {
        return <p>{director?.find((el) => el.id === text)?.full_name}</p>
    },
  },
  {
    title: 'Created_at name',
    dataIndex: 'created_at',
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
        <MovieDirectorAddModal movie={movie} director={director}/>
        <Table key={index} columns={columns} dataSource={movieDirector} />
      </div>
    )
}

export default MovieDirectorTable;