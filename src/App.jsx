import React, { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import LoginPage from './pages/LoginPage'
import ActorsPage from './pages/ActorsPage'
import CategoryPage from './pages/CategoryPage'
import GenrePage from './pages/GenrePage'
import DirectorPage from './pages/DirectorPage'
import MoviePage from './pages/MoviePage'
import MovieActorPage from './pages/MovieActorPage'
import MovieCategoryPage from './pages/MovieCategoryPage'
import MovieDirectorPage from './pages/MovieDirectorPage'
import MovieGenrePage from './pages/MovieGenrePage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const handleStorage = () => {
      setToken(localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage setToken={setToken}/>}/>
      <Route element={token ? <Layout/> : <Navigate to={"/"} replace/>}>
        <Route path='admin/actors' element={<ActorsPage/>}/>
        <Route path='admin/category' element={<CategoryPage/>}/>
        <Route path='admin/director' element={<DirectorPage/>}/>
        <Route path='admin/genre' element={<GenrePage/>}/>
        <Route path='admin/movie' element={<MoviePage/>}/>
        <Route path='admin/movie_actor' element={<MovieActorPage/>}/>
        <Route path='admin/movie_category' element={<MovieCategoryPage/>}/>
        <Route path='admin/movie_director' element={<MovieDirectorPage/>}/>
        <Route path='admin/movie_genre' element={<MovieGenrePage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App