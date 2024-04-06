
export function distanceToRender(distanceKm:number){
 
    return  `${Math.floor(distanceKm/100)} Km`
}

export function weatherToRender(weather:string):string{
 
    return  `${weather.split(" ")[1].split(/[C]/)[0]}°C`
    }

export function dateToRender(date:string){
    const dateFormat =new Date(date)
    const monthName:string = new Intl.DateTimeFormat("en-US", { month: "long" }).format(dateFormat); 
     return `${monthName} ${dateFormat.getDay()+1}, ${dateFormat.getFullYear()}`
}

export function imageUrl(imgUrl:string){
 return `https://drive.google.com/thumbnail?id=${imgUrl?.split("/d/")[1]?.split("/")[0]}`
}