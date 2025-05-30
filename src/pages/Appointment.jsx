import React, { use, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Appcontext } from '../context/Appcontext'
import { assets } from '../assets/assets'
import RelatedDoctors from '../components/RelatedDoctors'

const Appointment = () => {

    const {docId}=useParams()
    const {doctors,currencySymbol}=useContext(Appcontext)
    const daysofweek=["SUN","MON","TUE","WED","THUR","FRI","SAT"]

    const [docInfo,setDocInfo]=useState(null)
    const [docslots,setDocslots]=useState([])
    const [slotindex,setslotindex]=useState(0)
    const [slottime,setslottime]=useState('')

    const fetchDocInfo = async () => {
      const docInfo = doctors.find(doc=>doc._id === docId)
      setDocInfo(docInfo)
      console.log(docInfo)
    }

    const getAvailableSlots=async()=>{
            
      setDocslots([])
      //getting current date

      let today=new Date()

      for(let i=0;i<7;i++){
        let currdate=new Date(today)
        currdate.setDate(today.getDate()+i)

        let endtime=new Date()
        endtime.setDate(today.getDate()+i)
        endtime.setHours(21,0,0,0)

        if(today.getDate()==currdate.getDate()){
            currdate.setHours(currdate.getHours()>10 ? currdate.getHours()+1:10)
            currdate.setMinutes(currdate.getMinutes()>30 ?30:0)
            
        }
        else{
          currdate.setHours(10)
          currdate.setMinutes(10)
        }
        let timeslots=[]
        while(currdate<endtime){
          let formattedTime =currdate.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})
          
          timeslots.push({
            datetime:new Date(currdate),
            time:formattedTime
          })

          currdate.setMinutes(currdate.getMinutes()+30)


        }
        setDocslots(prev=>([...prev,timeslots]))

      }


    }


    

    useEffect(()=>{
        fetchDocInfo()
    },[doctors,docId])

    useEffect(()=>{
        getAvailableSlots()
    },[docInfo])

    useEffect(()=>{
      console.log(docslots);
    },[docslots])

  return docInfo &&  (
    <div>
        {/* --------------Doctor details----- */}
        <div className='flex flex-col sm:flex-row gap-4'>
            <div>
              <img className='bg-violet-500 w-full rounded-lg sm:w-72' src={docInfo.image} alt="" />
            </div>
            <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
              <p className='flex  items-center gap-2 text-2xl font-medium text-gray-900'>{docInfo.name} 
                <img  className='w-5' src={assets.verified_icon}/></p>
              <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
                <p>{docInfo.degree}-{docInfo.speciality}</p>
                <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
                </div>
                {/* ----------about doctor-------- */}
                <div>
                  <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>About <img src={assets.info_icon}/></p>
                  <p className='text-sm text-gray-900 max-w-[700px] mt-1'>{docInfo.about}</p>
                </div>
                <p className='text-gray-900 font-medium mt-4'>
                  Appointment fee: <span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span>
                </p>
            </div>
        </div>
        {/*-------------booking-slots------------ */}
        <div className='sm:ml-72 mt-4 sm:pl-4 font-medium text-gray-900'>
            <p>Booking Slots</p>
            <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
              {
                docslots.length && docslots.map((item,index)=>(
                    <div onClick={()=>setslotindex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotindex === index ? 'bg-violet-500 text-white':'border border-gray-100'}`} key={index}>
                      <p>{item[0] && daysofweek[item[0].datetime.getDay()]}</p>

                      <p>{item[0] && item[0].datetime.getDate()}</p>
                      </div>
                ))
              }
            </div>
             <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
          {docslots.length && docslots[slotindex].map((item,index)=>(
            <p onClick={()=>setslottime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time===slottime?'bg-violet-500 text-white':'text-gray-400 border border-gray-300'}`} key={index}>
              {item.time.toLowerCase()}
            </p>

          ))}
        </div>
        <button className='bg-violet-500 text-white text-sm font-light px-14 py-2 rounded-full my-6'>Book an Appointment</button>
        </div>
        {/*----------listing related doctors */}
        <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
       
    </div>
  )
}

export default Appointment
