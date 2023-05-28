
import Image from "next/image";
import Navbar from "./mobnavbar";


export default function Logo() {
    return (
        <section className="max-w-6xl pt-2 z-50 sticky top-0 bg-white my-4 mx-auto px-2 lg:px-4 grid grid-cols-3 border-b border-gray-300 pb-8"> 
               
            <div className="my-auto"> {/* search box */}
                <input
                    type="search"
                    placeholder="Search "
                    className="bg-gray-100 h-10 p-4  rounded-lg w-[90px] lg:w-52 border-transparent mx-2 focus:w-full duration-150" />

            </div>

            <div className="mx-auto flex gap-4 ">
                <Image src={'/icons/logo.png'} alt="logo" width={100} height={100} />
               
                
            </div>

            <div className="flex justify-end mr-2 items-center gap-2">
            <Navbar/>
                <Image src={'/icons/heart.svg'} alt="My wishlist" height={40} width={40} className=" w-8 h-8 lg:w-12 lg:h-12 "/>
                <Image src={'/icons/bag.svg'} alt="shopping cart" height={40} width={40}  className=" w-8 h-8 lg:w-12 lg:h-12 "/>
            </div>



        </section>
    )
}