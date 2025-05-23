import Image from 'next/image'
import React from 'react'
import { Rajdhani } from 'next/font/google'
import Link from 'next/link'
// Define prop types for TypeScript
interface HerosectionProps {
    imageUrl: string;
    Descrip: string; // Optional prop

}

const Herosection: React.FC<HerosectionProps> = ({ imageUrl, Descrip }) => { // Destructure imageUrl from props
    return (
        <section className=" custom-grad-bg" >
            <div className="container relative grid grid-cols-1 px-6 py-16 mx-auto lg:grid-cols-2  ">


                {/* left side */}
                <div className="mt-5 text-center lg:text-left  order-2 lg:order-1">
                    <h1 className="mb-6 mt-10 lg:mt-0 text-4xl/snug font-bold uppercase text-[#161617]">
                        Powering Progress Through <span className="text-[#cd3534]  dark:text-[#a12727]"> Digital Innovation</span>
                    </h1>
                    <p className="mt-5 mb-10 leading-relaxed  font-[300] dark:text-gray-950">
                        {Descrip}
                    </p>
                    <div className="flex justify-center gap-4 lg:justify-start">
                        <button className="px-6 py-3 text-white bg-[#cd3534] rounded-lg hover:bg-red-500 z-10 dark:bg-[#a12727] dark:hover:bg-[#cd3534]">
                            Get started
                        </button>

                        <Link href="/services">
                            <button className="px-6 py-3 text-[#cd3534] border border-[#cd3534] rounded-lg hover:bg-[#cd3534] hover:text-white duration-300 z-50 dark:bg-transparent dark:text-[#cd3534] dark:border-[#a12727] dark:hover:bg-[#a12727] dark:hover:text-white">
                                Explore Our Services
                            </button>
                        </Link>
                    </div>
                </div>


                {/* right side */}
                {/* flip the image */}


                <div className="z-10 flex justify-center items-center order-1 lg:order-2">
                    <Image
                        src={imageUrl}
                        alt="hero"
                        width={400}
                        height={400}
                    // className="transform -scale-x-100"

                    />
                </div>

                {/* Decorative typography */}
                {/* <div className={`absolute top-[20%] left-1/2    text-[2rem] font-extrabold text-transparent hero_hi select-none pointer-events-none font-hero-hi opacity-50 animate-pulse-scale`}>
                    INNOVATION
                </div>
                <div className={`absolute top-[35%] left-1/2    text-[2rem] font-extrabold text-transparent hero_hi select-none pointer-events-none font-hero-hi opacity-50 animate-pulse-scale`}>
                    TRANSFORMATION
                </div>
                <div className={`absolute top-[50%] left-1/2    text-[2rem] font-extrabold text-transparent hero_hi select-none pointer-events-none font-hero-hi opacity-50 animate-pulse-scale`}>
                    GROWTH
                </div> */}


            </div>













        </section>
    )
}

export default Herosection