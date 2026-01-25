import React from 'react';
import { Button, Image, Space, Table } from 'antd';
import axios from 'axios';
import { toast } from 'react-toastify';
import MovieGenreAddModal from '../AddModal/MovieGenreAddModal';


const MovieGenreTable = ({index , genre , getGenre , movie , getMovie , movieGenre , getMovieGenre}) => {


  async function deleteActor(id) {
    try {
      await axios.delete(`https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/movie_genre/${id}`)
      toast.warning("You deleted movie_genre")
      getMovieGenre()
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
    title: 'Genre name',
    dataIndex: 'genre_id',
    key: 'name',
    render: text => {
        return <p>{genre?.find((el) => el.id === text)?.name_uz}</p>
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
        <MovieGenreAddModal movie={movie} genre={genre} getMovieGenre={getMovieGenre}/>
        <Table key={index} columns={columns} dataSource={movieGenre} />
      </div>
    )
}

export default MovieGenreTable;