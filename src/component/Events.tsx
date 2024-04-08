import { useEffect, useRef, useState } from "react"

import Header from "../ui/Header"
import EventCard from "./EventCard"
import Spinner from "../ui/Spinner"

type Event ={
    cityName:string,
    date:string,
    distanceKm:string,
    eventName:string,
    imgUrl:string,
    weather:string
  }

export default function Events() {
    const [events,setEvents] = useState<Event[]>([])
    const [loading,setLoading] = useState(true)
    const [page,setPage] = useState(1)
    const ref =useRef<HTMLDivElement>(null)
 
    useEffect(()=>{

      setLoading(true)
        async function getEvent(){
            const res = await fetch(`https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${page}&type=upcoming`)
            const data = await res.json()
            setEvents(prevEvent=>[...prevEvent,...data.events])
            console.log("d",page)
            // console.log(data)
           
            
        }
        getEvent()
        
        
    },[page])
    useEffect(()=>{
      window.addEventListener("scroll",(e)=>{

    const pos = ref.current?.getBoundingClientRect()
 
    
  if(Math.ceil(pos.bottom) === 227 && page < 5 ){
    
    setPage(prevPage=>{
      console.log(prevPage)
      if(prevPage < 5) return prevPage + 1
      else return prevPage
    })
  }

        
     
  
      })
      
    },[page])
   return (
    <div ref={ref}  >
      <Header heading={"Upcoming shows"} textColor="text-neutral-800"/> 
      <div >
        <ul className="grid grid-cols-3 gap-5 p-20">

        {events?.map((event:Event,id:number)=>< EventCard key={id+event.imgUrl} 
                            cityName={event.cityName}
                            date={event.date} 
                            distanceKm={event.distanceKm} 
                            eventName={event.eventName}
                            imgUrl={event.imgUrl}
                            weather={event.weather} />)}
                            </ul>
                                
     <Spinner isVisible={loading} />
      </div>
    </div>
  )
}
