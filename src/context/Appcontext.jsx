import { createContext,useEffect } from "react";
import axios from 'axios'
import { useState } from "react";
import {toast} from 'react-toastify'

export const Appcontext=createContext()

const AppcontextProvider=(props)=>{

    const currencySymbol='$'
    const backendurl=import.meta.env.VITE_BACKEND_URL
    const [doctors,setDoctors]=useState([])
    const value={
        doctors,
        currencySymbol
    }
    
    const getDoctorsData=async()=>{

        try {
            const {data}=await axios.get(backendurl + '/api/doctor/list')
            if(data.success){
                setDoctors(data.doctors)
            }
            else{
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }

    }
useEffect(()=>{
    getDoctorsData()
},[])
    return (
        <Appcontext.Provider value={value}>
            {props.children}
        </Appcontext.Provider>
    )
}

export default AppcontextProvider