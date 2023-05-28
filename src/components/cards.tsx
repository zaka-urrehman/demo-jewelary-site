import Image from "next/image";


export default function Cards(){
    return(
        <div className="max-w-6xl p-4 mx-auto flex flex-col lg:flex-row gap-y-8 justify-between">
            <div >
                  <Image src={'/images/card1.jpg'} alt="image-1" height={300} width={550}/>
            </div>

            <div>
            <Image src={'/images/card2.jpg'} alt="image-1" height={300} width={550}/>

            </div>
        </div>
    )
}