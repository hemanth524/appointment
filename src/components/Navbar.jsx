import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate=useNavigate();
    const [showMenu,setshowMenu]=useState(false)
    const [token, setToken]=useState(true);



  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-500 '>
        <img onClick={()=>navigate('/')} className=' md:w-44 w-26  cursor-pointer ' src={assets.logo} alt=''/>
        <ul className='  hidden  md:flex  items-start gap-5 font-medium text-lg '>
            <NavLink to={'/'} >
                <li  className='py-1'>Home</li>
              <hr className='border-none outline-none h-0.5 bg-blue-300 w-4/5  m-auto hidden' />
            </NavLink>
              <NavLink to={'/Doctors'}>
                <li className='py-1' >All Doctors</li>
                <hr className='border-none outline-none h-0.5 bg-blue-300  w-4/5 m-auto hidden' />
            </NavLink>
              <NavLink to={'/About'}>
                <li  className='py-1'>About</li>
                <hr className='border-none outline-none h-0.5 bg-blue-300  w-4/5 m-auto hidden' />
            </NavLink>
              <NavLink to={'/Contact'}> 
                <li className='py-1' >Contact</li>
                <hr className='border-none outline-none h-0.5  bg-blue-300 w-4/5 m-auto hidden' />
            </NavLink>
        </ul>
        <div className='flex items-center gap-4'>
            {
                token
                ?<div className='flex items center gap-2 cursor-pointer group relative '>
                     <img className='w-8 rounded-full ' src={assets.profile_pic} />
                      <img  className='w-2.5' src={assets.dropdown_icon}/>
                      <div className='absolute  top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20  hidden group-hover:block '>
                      <div className='min-w-48 bg-stone-100 rounded  flex flex-col gap-4 p-4'> 
                      <p onClick={()=>navigate('Profile')} className='hover:text-black cursor-pointer'> My Profile</p>
                      <p onClick={()=>navigate('MyAppointments')} className='hover:text-black cursor-pointer'> My Appointments</p>
                      <p  onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'> Logout</p> 
                      </div>
                      </div>
                      
                 </div>
               
                :<button  onClick={()=>navigate('/Login')} className='border-none bg-blue-400 rounded-full px-8 py-1 md:py-3 text-white  font-light hidden md:block '>Create Account</button>


            } 
            <img onClick={()=>setshowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon}/>
            <div className={` ${showMenu ? 'fixed w-full ':'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
              <div className='flex items-center justify-between px-5 py-6'>
                <img className='w-36 ' src={assets.logo} alt="" />
                <img className='w-7' onClick={()=>setshowMenu(false)} src={assets.cross_icon} alt="" />
              </div>
              <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                <NavLink  onClick={()=>setshowMenu(false)}  to='/'> <p  className='px-4 py-2 rounded inline-block'>HOME</p></NavLink>
                <NavLink onClick={()=>setshowMenu(false)} to='/doctors'> <p  className='px-4 py-2 rounded inline-block'>ALL DOCTORS</p></NavLink>
                <NavLink onClick={()=>setshowMenu(false)} to='/about'> <p  className='px-4 py-2 rounded inline-block'>ABOUT</p></NavLink>
                <NavLink onClick={()=>setshowMenu(false)} to='/contact'> <p  className='px-4 py-2 rounded inline-block'>CONTACT</p></NavLink>
              </ul>
            </div> 
        </div>
    </div>
  )
}

export default Navbar
