import React from 'react'
import { FaWhatsapp, FaPhoneAlt, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div className='w-full bg-[#0B1226] text-white py-6 md:py-8'>
            
            <div className='max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-6'>

                {/* Contact Section */}
                <div className='flex flex-col gap-3 text-sm md:text-base'>
                    <h1 className='font-semibold text-lg'>Contact</h1>

                    <div className='flex items-center gap-3 cursor-pointer'>
                        <FaWhatsapp size={20} className='text-green-400' />
                        <a 
                            href="https://wa.me/918083116208" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='text-gray-300 hover:text-white'
                        >
                            WhatsApp
                        </a>
                    </div>

                    <div className='flex items-center gap-3 cursor-pointer'>
                        <FaPhoneAlt size={18} className='text-blue-300' />
                        <a 
                            href="tel:8083116208" 
                            className='text-gray-300 hover:text-white'
                        >
                            8083116208
                        </a>
                    </div>

                    <div className='flex items-center gap-3 cursor-pointer'>
                        <MdEmail size={22} className='text-red-400' />
                        <a 
                            href="mailto:example@example.com"     
                            className='text-gray-300 hover:text-white'
                        >
                            example@example.com
                        </a>
                    </div>

                    <div className='flex items-center gap-3 cursor-pointer'>
                        <FaInstagram size={22} className='text-pink-400' />
                        <a 
                            href="https://instagram.com/yourusername" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='text-gray-300 hover:text-white'
                        >
                            Instagram
                        </a>
                    </div>
                </div>

                {/* Links */}
                <ul className='flex flex-col md:flex-row gap-2 md:gap-6 text-sm md:text-base font-medium'>
                    <li className='hover:text-blue-400 cursor-pointer'>About</li>
                    <li className='hover:text-blue-400 cursor-pointer'>Privacy Policy</li>
                    <li className='hover:text-blue-400 cursor-pointer'>Terms & Conditions</li>
                    <li className='hover:text-blue-400 cursor-pointer'>Contact Us</li>
                </ul>
            </div>

            {/* Bottom Text */}
            <div className='mt-6 text-center text-xs md:text-sm text-gray-400'>
                E-Court &copy; {new Date().getFullYear()}. All Rights Reserved.
            </div>

        </div>
    )
}

export default Footer
