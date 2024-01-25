import Image from "next/image"
const Card = ({title,number,source,alt,graph,trend}) => {
  return (
    <div className="flex flex-col justify-around fold:p-1 mtablets:p-5 rounded-md bg-white dark:bg-coolors-gray fold:w-full tablets:w-auto">
        <div className="flex justify-between"> 
            <div><Image src={source} alt={alt} width={30} height={30}></Image></div>
            <div><Image src={graph} alt={alt} width={80} height={30}></Image></div>
        </div>
        <p className="text-gray-text-2 mobile:text-base mtablets:text-lg">{title}</p>
        <p className="mobile:text-base mtablets:text-xl font-semibold">{number}</p>
        <div className="flex items-center justify-between gap-5">
            <div><Image src={trend} alt={alt} width={100} height={30}></Image></div>
            <p className="w-full text-lgg">vs. previous month</p>
        </div>
    </div>
  )
}

export default Card