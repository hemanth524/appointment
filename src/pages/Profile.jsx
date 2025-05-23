import React, { useState } from 'react'
import {assets} from '../assets/assets'

const Profile = () => {

  const [userData,setuserData]=useState({
    name:"heamanth Reddy",
    image:assets.profile_pic,
    email:'heamanth@gmail.com',
    phone:'+91 7671098190',
    address:{
      line1:"57th cross haiwai street",
      line2:"bandra,Mumbai"
    },
    gender:"Male",
    dob:'2004-08-09',

  })

  const [isedit,setedit]=useState(false)


  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>

        <img className='w-36 rounded' src={userData.image} />
        {
          isedit
          ?<input className='bg-gray-100 text-3xl font-medium max-w-60 mt-4' type="text" value={userData.name} onChange={e=>setuserData(prev =>({...prev,name:e.target.value}))} />
          :<p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
        }
        <hr className='bg-zinc-400 h-[1px] border-none' />
        <div>
          <p className='text-neutral-500 underline mt-3'>Contact Information</p>
          <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3'>
            <p className='font-medium'>Email id:</p>
            <p className='text-blue-500'>{userData.email}</p>
            <p className='font-medium'>Phone:</p>
             {
          isedit
          ?<input className='bg-gray-100 max-w-52 ' type="text" value={userData.phone} onChange={e=>setuserData(prev =>({...prev,name:e.target.value}))} />
          :<p className='text-blue-400'>{userData.phone}</p>
        }
        <p className='font-medium'>Address:</p>
        {
          isedit
          ?<p>
            <input className='bg-gray-100' onChange={(e)=>setuserData(prev=>({...prev,address:{...prev.address,line1:e.target.value}}))} value={userData.address.line1} type='text' />
            <br/>
            <input  className='bg-gray-100' onChange={(e)=>setuserData(prev=>({...prev,address:{...prev.address,line2:e.target.value}}))}  value={userData.address.line2} type="text"/>
            <br/>
          </p>
          :<p className='text-gray-500 '>
            {userData.address.line1}
            <br/>
            {userData.address.line2}
          </p>
        }
          </div>
        </div>
        <div>
          <p className='text-neutral-500 underline mt-3'>Basic Information</p>
          <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-2 text-neutral-700'>
            <p className='font-medium '>Gender:</p>
            {
              isedit
              ?<select className='max-w-20 bg-gray-100' onChange={(e)=>setuserData(prev => ({...prev,gender:e.target.value}))} value={userData.gender}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              :<p className='text-gray-600'>{userData.gender}</p>
            }
            <p className='font-medium'>Birthday:</p>
            {
              isedit
              ? <input className='max-w-28 bg-gray-100' onChange={(e)=>setuserData(prev => ({...prev,dob:e.target.value}))} value={userData.dob} type="date"/>
              : <p className='text-gray-600'>{userData.dob}</p>
            }
          </div>
        </div>
        <div className='mt-10'>
          {
            isedit
            ?<button className='border border-violet-500 px-8 py-2 rounded-full hover:bg-violet-500 hover:text-white transition-all' onClick={()=>setedit(false)}>Save Information</button>
            :<button  className='border border-violet-500 px-8 py-2 rounded-full hover:bg-violet-500 hover:text-white transition-all'  onClick={()=>setedit(true)}>Edit</button>
          }
        </div>
    </div>
  )
}

export default Profile
