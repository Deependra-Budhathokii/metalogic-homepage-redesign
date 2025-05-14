import Image from 'next/image'
import React from 'react'
import { Rajdhani } from 'next/font/google'
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
                        Powering Progress Through <span className="text-[#cd3534]"> Digital Innovation</span>
                    </h1>
                    <p className="mt-5 mb-10 leading-relaxed font-[300]">
                        Metalogic delivers intelligent software solutions that drive transformation and growth. We help businesses adapt, scale, and thrive in the digital era through innovation, reliability, and a focus on results-driven technology and consulting services.
                    </p>
                    <div className="flex justify-center gap-4 lg:justify-start">
                        <button className="px-6 py-3 text-white bg-[#cd3534] rounded-lg hover:bg-red-500 z-10">
                            Get started
                        </button>
                        <button className="px-6 py-3 text-[#cd3534] border border-[#cd3534] rounded-lg hover:bg-[#cd3534] hover:text-white duration-300 z-50">
                            Explore Our Services
                        </button>
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