"use client"
import React, { useState } from 'react'
import Nav from './Nav'
import Link from 'next/link'
import Image from 'next/image'
import { ThemeToggle } from './theme-toggle'

const Header = () => {
    const logo_path = "/metalogic-logo.png"
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className='relative custom-box-shadow bg-white dark:bg-gray-900 transition-colors duration-200'>
            <div className="max-w-[1600px] mx-auto flex justify-between py-4 px-6 items-center">
                <div className='flex items-center gap-4'>
                    <div>
                        <Link href={"/"} >
                            <Image src={logo_path} alt="logo" width={50} height={50} className="dark:brightness-200" />
                        </Link>
                    </div>
                    <Link href="#" target="_blank" rel="noopener noreferrer" className="hover:underline inline-block">
                        <span className='font-medium text-3xl opacity-80 capitalize text-gray-900 dark:text-gray-100'>metalogic </span>
                    </Link>
                </div>
                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <Nav isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
                </div>
            </div>
        </header>
    )
}

export default Header