import MarkIcon from "../ui/MarkIcon";
import {Event} from "../App"
import { dateToRender, distanceToRender,imageUrl,weatherToRender } from "../utilities/utility";

export default function EventCard({cityName,date,distanceKm,eventName,imgUrl,weather}:Event){
    
 
    const dateToDisplay:string = dateToRender(date)
    const distanceToDisplay:string = distanceToRender(+distanceKm)
    const weatherToDisplay:string = weatherToRender(weather)
    const imgUrlToDisplay = imageUrl(imgUrl)
  return <li className=" p-4 border rounded-md flex flex-col gap-10"  >
          
          <div className="pt-[200px] bg-no-repeat bg-cover   " style={{backgroundImage:`url(${imgUrlToDisplay})`}}>
            
            <p style={{backgroundColor:"hsla(244, 38%, 11%, 0.7)"}} className="text-stone-100  text-sm font-semibold p-1 bg-blend-soft-light rounded-b-lg  ">{dateToDisplay}</p>
          </div>
         <div>
            
  <div  className="flex flex-col gap-4">

    <p className="text-s font-semibold text-pretty">{eventName}</p>
   
  
  <div className="flex text-xs justify-between">
    <div className="flex items-center gap-2">
      <MarkIcon />
      {cityName}
    </div>
    <div >
  {`${weatherToDisplay} | ${distanceToDisplay}`}
    </div>
  </div>  
  </div>
         </div>
         </li>
  
  }
  
//   style={{backgroundImage:`url(https://drive.google.com/thumbnail?id=${imgUrl.split("/d/")[1].split("/")[0]})`}} 