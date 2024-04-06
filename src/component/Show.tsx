import Header from "../ui/Header"
import ShowCard from "./ShowCard"
import {Event} from "../App"
import { useEffect, useState } from "react"


export default function Show() {
    const [show,setShow] = useState<Event[]>(null)
  // const [ loading,setLoading] = useState(true)
  useEffect(()=>{
    async function eventFetch(){
      const res =await fetch("https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco")
      const data = await res.json()
      
      setShow(data.events)
    }
    eventFetch()
  },[])
  
  return (
    <div >
        <Header heading="Recommended shows" textColor="text-stone-100"/>
            <div   className=" w-screen" >
                <div  className=" flex" style={{overflowX:"scroll",scrollbarWidth:"none"}}>
                    <ul className="flex" >

                            {show?.map((event:Event,id:number)=>< ShowCard key={id+event.imgUrl} 
                            cityName={event.cityName}
                            date={event.date} 
                            distanceKm={event.distanceKm} 
                            eventName={event.eventName}
                            imgUrl={event.imgUrl}
                            weather={event.weather} />)}
                                
                    </ul>
                </div>
            </div>
    </div>
  )
}
