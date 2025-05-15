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
        <div className="p-4 rounded-lg card card_box_shadow overflow-hidden duration-200 ease-linear hover:scale-105 contact_card_shadow bg-white dark:bg-gray-800 dark:shadow-gray-700/30">
            <div className="card_image">
                <Image
                    src={url}
                    width={200}
                    height={200}
                    className="max-w-full rounded-tl-lg rounded-tr-lg dark:brightness-90 dark:contrast-125"
                    alt={title}
                />
            </div>

            <div className="p-3 card_details">
                <h2 className="text-2xl font-bold card_title text-gray-900 dark:text-gray-100">{title}</h2>
                <p className="mt-3 mb-6 text-justify text-gray-600 dark:text-gray-300">{descrip.length > 66 ? `${descrip.substring(0, 66)}...` : descrip}</p>
                <Link href="/">
                    <button className="px-4 py-2 text-white duration-300 bg-black dark:bg-gray-700 rounded-full hover:outline hover:bg-transparent hover:text-black dark:hover:text-white dark:hover:bg-transparent dark:hover:outline-gray-300 hover:outline-black">
                        Read more
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Servicecard