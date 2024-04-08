import HamburgerIcon from "./ui/HamburgerIcon"
import HeartIcon from "./ui/HeartIcon"
import LeftIcon from "./ui/LeftIcon"
import MarkIcon from "./ui/MarkIcon"
import SearchIcon from "./ui/SearchIcon"
import Events from "./component/Events"
import Show from "./component/Show"


export type Event ={
  cityName:string,
  date:string,
  distanceKm:string,
  eventName:string,
  imgUrl:string,
  weather:string
}

export default function App() {
   
  return (
    <>
    <div className="px-20 py-5 flex flex-col gap-3 text-neutral-800" >

    <div className="grid grid-cols-11 font-semibold gap-4  pl-2">
     <h1 className=" text-red-600 col-span-2 font-bold text-xl ">BookUsNow</h1>
     <button className="flex justify-around rounded-md  p-2 bg-slate-800  text-white text-xs items-center ">
      <HamburgerIcon />
      Categories</button>
      <div className="flex border border-gray-400 rounded-md  p-2 col-start-4 col-end-10">
      <input className="focus:outline-none grow text-sm"  type="text" placeholder="Search" />
       <SearchIcon />
      </div>
      <div className="flex col-start-10 justify-around items-center hover:border rounded-sm cursor-pointer  text-sm">
        <HeartIcon />
        Favorites
      </div>
      <button className="col-start-11 border rounded-md text-sm">Sign In</button>

    </div>
    <div className=" grid grid-cols-4">
      <div className="flex gap-2 items-center text-sm font-semibold cursor-pointer">
        <MarkIcon />
        <p>Mumbai, India</p>
        <LeftIcon />
      </div>
      <div className="flex justify-around col-start-2 col-span-2 text-sm font-semibold  cursor-pointer">
        <p>Live shows</p>
        <p>Stream</p>
        <p>Movies</p>
        <p>Plays</p>
        <p>Events</p>
        <p>Sports</p>
        <p>Activities</p>
      </div>
    </div>
    </div>




    <div className=" flex flex-col bg-cover gap-10 bg-no-repeat bg-bannerImg bg-center  pt-36 px-28 pb-[340px]  " >
     <div className="text-center flex flex-col gap-6 px-3">
      <h1 className="text-7xl text-white font-medium">Discover Eciting Events Happening </h1>
      <h1 className="text-7xl tracking-tight text-white font-medium">Near You - Stay Tuned for Updates!</h1>
      <p className="text-stone-200 text-md px-40">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quia, cupiditate dicta ducimus autem maiores praesentium in laboriosam voluptatum similique rerum atque possimus perferendis id excepturi expedita perspiciatis deserunt sapiente</p>
     </div>
  
    </div>
    <div className="relative top-[-180px] flex flex-col gap-10 px-28">

<Show   />
<Events />
</div>

   
    </>
  )
}

