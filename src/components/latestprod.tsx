import Image from "next/image"

export default function LatestProducts() {
    const data = [
        { id: 1, url: '/images/p1.jpg',  name: "Mobile", Desc: "Men's Bead Ball Link Chain", OrigPrice: "$690", DiscPrice: "$600" },
        { id: 1, url: '/images/p2.jpg',  name: "Camera Drone Headphone Mobile Speaker", Desc: "Necklace Fashion", OrigPrice: "$520", DiscPrice: "$499" },
        { id: 1, url: '/images/p3.jpg',  name: "Camera Drone Gamepad Mobile Speaker", Desc: "Men's Bead Ball Link Chain", OrigPrice: "$560", DiscPrice: "$530" },
        { id: 1, url: '/images/p4.jpg',  name: "Drone Gamepad Mobile", Desc: "Natural Margarite Fresh water", OrigPrice: "$690", DiscPrice: "$620" },
    ]
    return (

        <div className="max-w-6xl p-4 mx-auto mt-10">
            <h3 className="text-red-400  text-lg lg:text-xl font-playfair italic text-center">New Collection</h3>
            <h3 className="text-xl lg:text-2xl font-light text-center mb-10">Latest Products</h3>
           

           <div className="flex flex-col lg:flex-row ">
           {data.map((item) => (
                    <div key={item.id} className="px-2 text-center mx-auto" >

                        <div className="h-[370px] w-[260px] shadow-lg flex flex-col justify-between items-center px-4 border-[1px] border-gray-200">
                            <Image src={item.url} alt="category" height={100} width={170} />
                            <h2 className="font-light ">{item.name}</h2>
                            <h3>{item.Desc}</h3>
                            <div className="flex text-red-400 gap-x-2 mb-2">
                                   <h5 className="line-through">{item.OrigPrice}</h5>
                                   <h5>{item.DiscPrice}</h5>
                            </div>
                            
                        </div>


                    </div>))}


           </div>


        </div>

     
    )
}