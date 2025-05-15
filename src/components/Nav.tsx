import Link from 'next/link'
import React from 'react'

interface NavProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

interface MenuItem {
    name: string;
    link: string;
}

const Nav = ({ isOpen, setIsOpen }: NavProps) => {
    const menuItems: MenuItem[] = [
        { name: 'Home', link: '/' },
        { name: 'Services', link: '/services' },
        { name: 'about', link: '/about' },
        { name: 'Career', link: '/#career' },
        { name: 'Blogs', link: '/#blogs' },


    ];

    return (
        <nav className="z-50">
            {/* Hamburger menu button - visible only on mobile */}
            <button
                className="p-2 lg:hidden"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                <div className={`w-6 h-[2px] bg-gray-800 dark:bg-gray-200 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></div>
                <div className={`w-6 h-[2px] bg-gray-800 dark:bg-gray-200 my-[5px] transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-6 h-[2px] bg-gray-800 dark:bg-gray-200 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></div>
            </button>

            {/* Navigation menu */}
            <div className={`
                lg:block
                ${isOpen ? 'block' : 'hidden'}
                fixed lg:relative
                top-[4rem] lg:top-0
                left-0 lg:left-auto
                w-full lg:w-auto
                bg-white dark:bg-gray-900 lg:bg-transparent lg:dark:bg-transparent
                shadow-lg dark:shadow-gray-800 lg:shadow-none
                transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-y-0' : '-translate-y-full lg:translate-y-0'}
            `}>
                <ul className='flex flex-col gap-6 p-6 lg:flex-row lg:p-0'>
                    {menuItems.map((item: MenuItem, index: number) => (
                        <li key={index}>
                            <Link href={item.link} className="text-gray-800 dark:text-gray-200 hover:text-[#cd3534] dark:hover:text-[#ff4545] transition-colors capitalize font-medium" onClick={() => setIsOpen(false)}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Overlay for mobile menu */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-[-1] lg:hidden"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </nav>
    )
}

export default Nav