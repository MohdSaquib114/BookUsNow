import { useEffect, useState } from "react"
import ArrowRightIcon from "../ui/ArrowRightIcon"
import Header from "../ui/Header"
import EventCard from "./EventCard"

type Event ={
    cityName:string,
    date:string,
    distanceKm:string,
    eventName:string,
    imgUrl:string,
    weather:string
  }

export default function Events() {
    const [events,setEvents] = useState<Event[]>()
    const [loading,setLoading] = useState(true)
    const [page,setPage] = useState(1)
    useEffect(()=>{

        async function getEvent(){
            const res = await fetch(`https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${page}&type=upcoming`)
            const data = await res.json()
            setEvents(data.events)
         
            
        }
        getEvent()
        setLoading(false)
    },[page])
   return (
    <div style={{overflow:"auto"}} onScroll={(e)=>console.log(e)} className="">
      <Header heading={"Upcoming shows"} textColor="text-neutral-800"/> 
      <div>
        <ul className="grid grid-cols-3 gap-5 p-20">

        {events?.map((event:Event,id:number)=>< EventCard key={id+event.imgUrl} 
                            cityName={event.cityName}
                            date={event.date} 
                            distanceKm={event.distanceKm} 
                            eventName={event.eventName}
                            imgUrl={event.imgUrl}
                            weather={event.weather} />)}
                            </ul>
                                
      </div>
    </div>
  )
}
