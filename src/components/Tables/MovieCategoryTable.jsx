import React from 'react';
import { Button, Image, Space, Table } from 'antd';
import axios from 'axios';
import { toast } from 'react-toastify';
import MovieCategoryAddModal from '../AddModal/MovieCategoryAddModal';


const MovieCategoryTable = ({index , category , getCategory , movie , getMovie , movieCategory , getMovieCategory}) => {


  async function deleteActor(id) {
    try {
      await axios.delete(`https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/movie_category/${id}`)
      toast.warning("You deleted movie_category")
      getMovieCategory()
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
    title: 'Category name',
    dataIndex: 'category_id',
    key: 'name',
    render: text => {
        return <p>{category?.find((el) => el.id === text)?.name_uz}</p>
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
        <MovieCategoryAddModal movie={movie} category={category} getMovieCategory={getMovieCategory}/>
        <Table key={index} columns={columns} dataSource={movieCategory} />
      </div>
    )
}

export default MovieCategoryTable;