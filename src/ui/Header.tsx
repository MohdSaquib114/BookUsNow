import ArrowRightIcon from "./ArrowRightIcon";


export default function Header({heading, textColor}:{heading:string,textColor:string}) {
  return (
    <div className={`${textColor} font-medium flex justify-between mb-10`}>
      <p className="flex items-center gap-4 text-lg ">
        {heading} <ArrowRightIcon />
      </p>
      <p className=" underline text-sm">See all</p>
     </div>
  )
}
