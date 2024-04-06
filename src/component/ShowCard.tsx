import MarkIcon from "../ui/MarkIcon";
import {Event} from "../App"
import { dateToRender, distanceToRender,imageUrl,weatherToRender } from "../utilities/utility";

export default function ShowCard({cityName,date,distanceKm,eventName,imgUrl,weather}:Event){
    
    const dateToDisplay:string = dateToRender(date)
    const distanceToDisplay:string = distanceToRender(+distanceKm)
    const weatherToDisplay:string = weatherToRender(weather)
    const bgImgUrl = imageUrl(imgUrl)
  return <li className="snap-center  grow h-[380px] w-[320px] ml-5 flex flex-col justify-end text-stone-200 rounded-md px-6 bg-cover bg-center  bg-no-repeat pb-4 " style={{backgroundImage:`url(${bgImgUrl})`}}  >
  
  
  <div className="flex justify-between items-center  ">
    <p className="text-s font-semibold text-pretty">{eventName}</p>
    <p className="text-xs font-normal">{dateToDisplay}</p>
  </div>
  <div className="flex text-xs justify-between">
    <div className="flex items-center gap-2">
      <MarkIcon />
      {cityName}
    </div>
    <div >
  {`${weatherToDisplay} | ${distanceToDisplay}`}
    </div>
  </div>
  </li>
  
  }
  