"use client"
import React, { useState } from 'react'
import Nav from './Nav'
import Link from 'next/link'
import Image from 'next/image'


const Header = () => {
    const logo_path = "/metalogic-logo.png"
    const [isMenuOpen, setIsMenuOpen] = useState(false)


    return (
        <header className='relative custom-box-shadow'>
            <div className="max-w-[1600px] mx-auto flex justify-between py-4 px-6 items-center">
                <div className='flex items-center gap-4'>
                    <div>
                        <Link href={"/"} >
                            <Image src={logo_path} alt="logo" width={50} height={50} />
                        </Link>
                    </div>
                    <Link href="#" target="_blank" rel="noopener noreferrer" className=" hover:underline inline-block">
                        <span className='font-medium  text-3xl opacity-80 capitalize'>metalogic </span>
                    </Link>
                </div>
                <Nav isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />

            </div>
        </header>
    )
}

export default Header