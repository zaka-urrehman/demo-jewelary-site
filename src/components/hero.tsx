'use client'
import Image from "next/image"
import { motion } from 'framer-motion';


export default function Hero() {
    return (
        <section className="  lg:max-w-6xl mx-auto ">
            <div className="bg-[url(/images/1.jpg)] bg-clip-border lg:bg-cover  h-[455px] lg:w-[1120px]  mx-auto mt-4 overflow-hidden relative">
                <motion.div
                    animate={{
                        x: [0, 30 , 30, -30, -30,0], // Animate in a smaller square path
                        y: [0, 0, -20 , -20, 0,0],
                    }}
                    transition={{
                        duration: 20, // Animation duration in seconds
                        loop: Infinity, // Loop the animation
                        repeat: Infinity, // Repeat the animation indefinitely
                        repeatType: 'loop',
                        ease: 'circIn', // Linear animation
                    }}
                >


                    <Image src={'/images/x1.png'} alt="image" height={200} width={'180'} className="lg:ml-10 mx-auto " />
                </motion.div>


                <div className=" lg:-mt-40 flex flex-col justify-center gap-y-2">

                    <motion.h1 className="text-center text-4xl font-bold"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}>Luxury</motion.h1>

                    <motion.h3 className="text-center"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}>Discover a World of Beautiful Handcrafted Designs</motion.h3>

                    <button className="w-28 lg:w-36 h-7 lg:h-10 z-10 border rounded-md border-black mx-auto bg-blue hover:bg-white hover:border-transparent ">
                     Find Yours
                    </button>
                </div>

            </div>


        </section>
    )
}