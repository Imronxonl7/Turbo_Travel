import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import CountriesPage from './pages/CountriesPage'
import ToursCitiesPage from './pages/ToursCitiesPage'
import TourPacketsPage from './pages/TourPacketsPage'
import HotelPage from './pages/HotelPage'
import DestinationPage from './pages/DestinationPage'
import LoginPage from './pages/LoginPage'

const App = () => {
  const token = localStorage.getItem("token")
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route element={token ? <Layout/> : <Navigate to={"/"}/>}>
        <Route path='admin/countries' element={<CountriesPage/>}/>
        <Route path='admin/toursCities' element={<ToursCitiesPage/>}/>
        <Route path='admin/tourPackets' element={<TourPacketsPage/>}/>
        <Route path='admin/hotel' element={<HotelPage/>}/>
        <Route path='admin/destination' element={<DestinationPage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App