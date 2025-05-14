import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface ServicecardProps {
    title: string;
    descrip: string;
    url: string;
}

const Servicecard = ({ title, descrip, url }: ServicecardProps) => {
    return (
        <div className="p-4 rounded-lg card card_box_shadow overflow-hidden duration-200 ease-linear hover:scale-105 contact_card_shadow">
            <div className="card_image">
                <Image
                    src={url}
                    width={200}
                    height={200}
                    className="max-w-full rounded-tl-lg rounded-tr-lg"
                    alt={title}
                />
            </div>

            <div className="p-3 card_details">
                <h2 className="text-2xl font-bold card_title">{title}</h2>
                <p className="mt-3 mb-6 text-justify text-gray-600">{descrip.length > 66 ? `${descrip.substring(0, 66)}...` : descrip}</p>
                <Link href="/">
                    <button className="px-4 py-2 text-white duration-300 bg-black rounded-full hover:outline hover:bg-transparent hover:text-black">
                        Read more
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Servicecard