'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { icons } from "react-icons"
import { AiOutlineMenu } from "react-icons/ai"
import { AiOutlineClose } from "react-icons/ai"



export default function Navbar() {
    const [nav, SetNav] = useState(false)

    const handleNav = () => {
        SetNav(!nav)
    }




    return (
        <div className=" mr-10 ">

            {/* <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16 py-10"> */}




                {/* mobile Screen Hamburger */}
                <div onClick={handleNav} className="lg:hidden flex justify-center items-center ">
                <Image src={'/icons/hamburger.svg'} alt="Navigation Menu" width={25} height={20}/>

                </div>



            



            <div className={`${nav ? "z-20 md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}`}>
                <div className={` ${nav ? " left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-300" : " fixed left-[-100%] top-0 ease-in "}`}>
                    <div className="flex w-full items-center justify-between">
                        
                        <div onClick={handleNav} className="rounded-full flex justify-end shadow-lg shadow-gray-400 p-3 cursor-pointer">
                            <AiOutlineClose size="20" />

                        </div>


                    </div>


                    <div className="mt-8">
                        <ul className="uppercase">
                            <li className="py-4 border-b border-gray-400  hover:text-blue-400 ">
                                <Link href={"/"}>
                                    Home
                                </Link>
                            </li>
                            <li className="py-4 border-b border-gray-400  hover:text-blue-400">
                                <Link href={"/"}>
                                    Pages
                                </Link>
                            </li>
                            

                            <li className="py-4 border-b border-gray-400 hover:text-blue-400">
                                <Link href={"/"}>
                                    Shop
                                </Link>
                            </li>
                            <li className="py-4 border-b border-gray-400 hover:text-blue-400">
                                <Link href={"/"}>
                                    Blog
                                </Link>
                            </li>

                            <li className="py-4 border-b border-gray-400 hover:text-blue-400 ">
                                <Link href={"/"}>
                                    Gallery
                                </Link>
                               
                            </li>

                        </ul>
                    </div>

                </div>
            </div>


        </div>
    )
}