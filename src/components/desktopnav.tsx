import Image from "next/image";


export default function DesktopNav() {
    return (
        <div className="hidden lg:flex lg:max-w-6xl mx-auto px-4  ">
           
                <div className="group  relative">

                    <div className=" flex justify-center items-center gap-2 hover:bg-gray-100">
                        <Image src={'/icons/hamburger.svg'} alt="" height={20} width={20} />
                        <h3>All Categories</h3>
                    </div>

                    <div className="hidden group-hover:block z-20 absolute bg-white w-full border-2 border-gray-200">
                        <li className="border-b border-gray-400 h-10 flex items-center py-8 px-2 hover:text-blue-400">Electronic</li>
                        <li  className="border-b border-gray-400 h-10 flex items-center py-8 px-2 hover:text-blue-400">Men</li>
                        <li className="border-b border-gray-400 h-10 flex items-center py-8 px-2 hover:text-blue-400">Women</li>
                        <li className="border-b border-gray-400 h-10 flex items-center py-8 px-2 hover:text-blue-400">Office</li>
                        <li className="border-b border-gray-400 h-10 flex items-center py-8 px-2 hover:text-blue-400">Camera</li>

                    </div>
                
            </div>



            <div className="flex ml-60 gap-x-10 list-none">{/*col-2 */}
            <li className="text-lg hover:text-blue-400">Home</li>
            <li className="text-lg hover:text-blue-400">Pages</li>
            <li className="text-lg hover:text-blue-400">Shop</li>
            <li className="text-lg hover:text-blue-400">Blog</li>
            <li className="text-lg hover:text-blue-400">Gallery</li>

            </div>
        </div>
    )
}