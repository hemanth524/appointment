import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Login = () => {

  const [state,setstate]=useState('Sign up')

  const [email,setemail]=useState('')
  const[password,setpassword]=useState('')

  const [name,setname]=useState('')

  const onsubmithandler=async(event)=>{
        event.prevantDefault()
  }

  return (
    <form className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-4  m-auto items-start p-8 min-w-[340px] sm:min-w-96  rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Sign up'?"Create Account" :"Login"}</p>
        <p> please  {state=== 'Sign up' ? "Sign up" : "Login"} to book an appointment</p>
        {
          state === 'Sign up' && <div className='w-full'>
          <p>Full Name</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type='text' onChange={(e)=>setname(e.target.value)} value={name}/>
        </div>
        }
        
        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type='text' onChange={(e)=>setemail(e.target.value)} value={email}/>
        </div>
        <div className='w-full'>
          <p>Password</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type='text' onChange={(e)=>setpassword(e.target.value)} value={password}/>
        </div>
        <button  className='bg-violet-500 text-white w-full   py-2 rounded-md text-base'>{state === 'Sign up'?"Create Account" :"Login"}</button>
        {
          state=== "Sign up"
          ?<p>Already have an account ?<span onClick={()=>setstate('Login')} className='font-semibold text-violet-500 cursor-pointer'>Login Here</span> </p>
          :<p>Create a new account?<span onClick={()=>setstate("Sign up")} className='font-semibold text-violet-500 cursor-pointer'>Click here</span></p>
        }
        </div>
    </form>  
 )
}

export default Login
