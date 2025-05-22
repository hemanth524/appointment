import React from 'react'
import Header from '../components/header'
import Speciality from '../components/Speciality'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'
import City from '../components/City'

const Home = () => {
  return (
    <div>
     <Header/>
     <Speciality/>
    <City/>
     <TopDoctors/>
     <Banner/>
     
    </div>
  )
}

export default Home
