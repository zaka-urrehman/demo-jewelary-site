import Image from "next/image";

export default function Header(){
    return (
        <section className="bg-black w-full h-12 py-1 hidden lg:block">
            <div className="max-w-6xl mx-auto bg-black flex justify-between px-4">
                
                <div className="flex">
                    <div className="flex border-r border-white px-2">
                        <Image src={'/icons/delivery.svg'} alt="" width={20} height={20} className="m-2 font-bold"/>
                        <h3 className="text-white mt-[10px] text-xs mx-4">Free Delivery</h3>
                    </div>
                    <div className="flex border-r border-white px-2">
                        <Image src={'/icons/earth.svg'} alt="" width={20} height={20} className="m-2 font-bold"/>
                        <h3 className="text-white mt-[10px] text-xs mx-4">Return Policy</h3>
                    </div>
                    <div className="flex px-2">
                        <h3 className="text-white mt-[10px] text-xs mx-4">Follow us</h3>
                        <Image src={'/icons/insta.svg'} alt="" width={20} height={20} className="m-2 font-bold"/>
                        <Image src={'/icons/fb.svg'} alt="" width={20} height={20} className="m-2 font-bold"/>
                        <Image src={'/icons/twitter.svg'} alt="" width={20} height={20} className="m-2 font-bold"/>
                    </div>
                    

                </div>


                <div>
                      <button className="text-white mt-2"> login </button>
                </div>

            </div>
        </section>

    )
}