import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Profile from './pages/Profile'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/doctors' element={<Doctors/>}/>
          <Route path='/doctors/:speciality' element={<Doctors/>}/>
          <Route path='/Login' element={<Login/>}/>
           <Route path='/About' element={<About/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            
            <Route path='/Profile' element={<Profile/>}/>
            <Route path='/MyAppointments' element={<MyAppointments/>}/>
            <Route path='/Appointment/:docId' element={<Appointment/>}/>
        </Routes>
        <Footer/>

    </div>
  )
}

export default App
