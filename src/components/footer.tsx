import Image from "next/image";
import Link from "next/link";


export default function Footer() {
    return (
        <section className="mt-10">
            <div className="bg-[#f6f7fb] w-full">
                <div className="max-w-6xl bg-[#f6f7fb] flex flex-col gap-y-8 lg:flex-row list-none mx-auto justify-between py-8">
                    <li className="mx-auto">Canada</li>
                    <li className="mx-auto">United States</li>
                    <li className="mx-auto">Saudi Arabia</li>
                    <li className="mx-auto">United Kingdom</li>
                    <li className="mx-auto">Brazil</li>
                    <li className="mx-auto">Singapore</li>
                </div>
            </div>





            <div className="max-w-6xl p-4 mt-10 mx-auto grid lg:grid-cols-4 ">
                <div className="my-10">
                    <Image src={'/icons/logo-2.png'} alt="logo" height={50} width={100} className="mt-4" />
                    <h3 className="text-xl mt-5">Got Questions?</h3>
                    <h3>Call us at +000111222</h3>
                    <h5 className="my-6 text-sm">17 Princess Road, London, Greater London NW1 8JR, UK</h5>
                    <Link href={'https://goo.gl/maps/9rqYVpJUVzBPvKyt7'}>
                        <button className="bg-red-500 hover:bg-black text-white w-32 h-12 rounded-lg">View on Map</button>
                    </Link>
                </div>


                <div className="my-10 lg:mx-auto">
                    <h3 className="font-bold my-4">We Using Safe Payments</h3>
                    <div className="flex gap-x-2">
                        <Image src={'/payments/skril-1.png'} height={30} width={60} alt="skrill" />
                        <Image src={'/payments/american_express-1.png'} height={30} width={60} alt="American express" />
                    </div>
                    <h3 className="my-4">Secured By:</h3>
                    <div className="flex gap-x-2">
                        <Image src={'/payments/norton.png'} height={30} width={70} alt="norton" />
                        <Image src={'/payments/mcAfee.png'} height={30} width={70} alt="mcAfee" />
                    </div>
                </div>



                <div className="my-10 lg:mx-auto">
                    <h3 className="font-bold my-4">Our Stories</h3>
                    <ul className="list-none font-light space-y-2 text-sm">

                        <li>New York</li>
                        <li>London SF</li>
                        <li>Cockfosters BP</li>
                        <li>Los Angeles</li>
                        <li>Los Angeles</li>
                        <li>Chicago</li>


                    </ul>
                </div>



                <div className="my-10 lg:mx-auto">
                    <h3 className="font-bold my-4">Quick Links</h3>
                    <ul className="list-none font-light space-y-2 text-sm">

                        <li>Support Center</li>
                        <li>Terms and Conditions</li>
                        <li>Shipping</li>
                        <li>Privacy Policy</li>
                        <li>Help</li>
                        <li>FAQs</li>


                    </ul>

                </div>

            </div>


            <div className="bg-gray-800 w-full p-6">
                <div className="bg-gray-800 max-w-6xl mx-auto">

                <h1 className="text-gray-400 text-xs font-light">All Rigts Reserved Ⓒ Copyright 2023 by Zaka Urrehman Shah</h1>

                </div>
            </div>
        </section>
    )
}