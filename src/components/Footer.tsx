import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'


interface FooterProps {
    Logo: string
}

const Footer: React.FC<FooterProps> = ({ Logo }) => {
    return (
        <footer className="text-white bg-gray-900 dark:bg-black transition-colors duration-200">
            <div className="container px-6 py-16">
                {/* Footor social media sec */}
                <div className="flex flex-wrap items-center justify-between mb-12 gap-y-6">
                    <div className="text-3xl tracking-wider capitalize logo">
                        <Link href="/">
                            <Image src={Logo} width={100} height={40} alt="metalogic logo" className="dark:brightness-200" />
                        </Link>
                    </div>
                    <div className="flex gap-6 social_icons">
                        <Link href="#" className="p-3 bg-[#4267B2] rounded-full hover:bg-[#477fef] duration-300">
                            <i>
                                <FaFacebookF />
                            </i>
                        </Link>
                        <Link href="#" className="p-3 bg-[#1DA1F2] rounded-full hover:bg-[#44a9e8] duration-300">
                            <i>
                                <FaTwitter />
                            </i>
                        </Link>
                        <Link
                            href="#"
                            target="_blank"
                            className="p-3 rounded-full bg-[#E1306C] hover:bg-[#ef435f] duration-300"
                        >
                            <i>
                                <FaInstagram />
                            </i>
                        </Link>
                        <Link
                            href="#"
                            className="p-3 bg-[#0077B5] hover:bg-[#47a5f1] rounded-full duration-300"
                        >
                            <i>
                                <FaLinkedinIn />
                            </i>
                        </Link>
                    </div>
                </div>

                {/* Footers main section */}
                <div className="grid grid-cols-2 gap-4 text-base md:grid-cols-5 gap-y-6">
                    <ul className="space-y-2 opacity-80 hover:opacity-100 transition-opacity">
                        <li className="text-lg font-bold !opacity-100 footer_menu_style mb-2 text-gray-white">Metalogic</li>
                        <li className="text-white dark:text-white hover:text-white dark:hover:text-white transition-colors">
                            Location: Saptakhel, Lalitpur (Head office)
                        </li>
                        <li className="text-white dark:text-[#ffffff] hover:text-white dark:hover:text-white transition-colors">
                            Phn: +977 9851353599
                        </li>
                        <li className="text-white dark:text-white hover:text-white dark:hover:text-white transition-colors">
                            Email: info@metalogic.com.np
                        </li>
                    </ul>
                    <ul className="space-y-2 opacity-80 hover:opacity-100 transition-opacity">
                        <li className="text-lg font-bold !opacity-100 footer_menu_style mb-2 text-white">Company</li>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href="#">Career</a>
                        </li>
                        <li>
                            <a href="#">Blogs</a>
                        </li>
                    </ul>
                    <ul className="space-y-2 opacity-80 hover:opacity-100 transition-opacity">
                        <li className="text-lg font-bold !opacity-100 footer_menu_style mb-2 text-gray-100">Services</li>
                        <li>
                            <a href="#">Custom Web development</a>
                        </li>
                        <li>
                            <a href="#">Mobile App Development</a>
                        </li>
                        <li>
                            <a href="#">Cloud Computing</a>
                        </li>
                        <li>
                            <a href="#">Blockchain</a>
                        </li>
                    </ul>
                    <ul className="space-y-2 opacity-80 hover:opacity-100 transition-opacity">
                        <li className="text-lg font-bold !opacity-100 footer_menu_style mb-2 text-gray-100">Join</li>
                        <li>
                            <a href="#">Careers at MetaLogic</a>
                        </li>
                        <li>
                            <a href="#">Internships</a>
                        </li>

                    </ul>
                    <ul className="space-y-2 opacity-80 hover:opacity-100 transition-opacity">
                        <li className="text-lg font-bold !opacity-100 footer_menu_style mb-2 text-gray-100">Subscribe</li>
                        <li>
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="w-full px-4 py-1 bg-transparent border-2 border-gray-600 dark:border-gray-700 text-white placeholder:text-gray-400 focus:border-gray-400 dark:focus:border-gray-500 transition-colors"
                            />
                        </li>
                        <li>
                            <input
                                type="button"
                                value="Subscribe"
                                className="w-full px-4 py-1 text-gray-900 dark:text-white bg-white dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-blue-600 hover:text-white transition-colors duration-200 cursor-pointer"
                            />
                        </li>
                    </ul>
                </div>
            </div>

            {/* Footer bottom */}

            <div className="flex flex-wrap justify-center max-w-5xl pb-5 mx-auto md:justify-between pt-7 gap-y-3 border-t border-gray-800 dark:border-gray-700">
                <span>
                    <span className="text-gray-400 dark:text-gray-500">Copyright © 2025 Metalogic. </span>
                    <span className="ml-4 text-gray-300 dark:text-gray-400">All rights reserved</span>
                </span>
                <span className="text-gray-400 dark:text-gray-500">
                    <Link href="/" className="hover:text-white dark:hover:text-white transition-colors">Privacy policy</Link>
                    <Link href="/" className="ml-4 hover:text-white dark:hover:text-white transition-colors">
                        Terms & condition
                    </Link>
                </span>
            </div>
        </footer>
    )
}

export default Footer