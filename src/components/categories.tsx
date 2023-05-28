import Image from "next/image";



export default function Categories() {
    const data = [
        { id: 1, url: '/images/c1.jpg', text: "Ring" },
        { id: 2, url: '/images/c2.jpg', text: "Necklace" },
        { id: 3, url: '/images/c3.jpg', text: "Earing" },
        { id: 4, url: '/images/c4.jpg', text: "Bangles" },
        { id: 5, url: '/images/c5.jpg', text: "Pendant" },
        { id: 6, url: '/images/c6.jpg', text: "Bracelete" },

    ];
    return (
        <section className="max-w-6xl p-4 mx-auto mt-10">
            <h3 className="text-red-400  text-xl lg:text-2xl font-playfair italic text-center">Our Designs</h3>
            <h3 className="text-2xl lg:text-3xl font-light text-center mb-10">Shop By Category</h3>


            <div className="flex flex-col lg:flex-row justify-between items-center">

                {data.map((item) => (
                    <div key={item.id} >

                        <div>
                            <Image src={item.url} alt="category" height={100} width={170} />
                            <h5 className="m-4 text-center">{item.text}</h5>
                        </div>


                    </div>))}
            </div>

        </section >
    )
}