import React from 'react'
import { FaWhatsapp, FaPhoneAlt, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <footer className='w-full bg-[#0B1226] text-white pt-8'>
            
            <div className='max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-10'>

                {/* Left: Branding */}
                <div className="flex flex-col gap-3">
                    <h2 className="text-xl font-semibold">E-Court</h2>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Your trusted legal guidance platform for all case types,
                        consultancy, and justice-related support.
                    </p>
                </div>

              <div className='flex justify-between w-full'>
                  {/* Middle: Quick Links */}
                <div className="flex flex-col gap-3">
                    <h2 className="text-xl font-semibold">Quick Links</h2>

                    <ul className="flex flex-col gap-2 text-gray-300 text-sm">
                        <li className='hover:text-blue-400 cursor-pointer'>About</li>
                        <li className='hover:text-blue-400 cursor-pointer'>Privacy Policy</li>
                        <li className='hover:text-blue-400 cursor-pointer'>Terms & Conditions</li>
                        <li className='hover:text-blue-400 cursor-pointer'>Contact Us</li>
                    </ul>
                </div>

                {/* Right: Contact */}
                <div className="flex flex-col gap-3">
                    <h2 className="text-xl font-semibold">Contact</h2>

                    <div className='flex items-center gap-3 cursor-pointer'>
                        <FaWhatsapp size={20} className='text-green-400' />
                        <a 
                            href="https://wa.me/918083116208" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='text-gray-300 hover:text-white text-sm'
                        >
                            WhatsApp
                        </a>
                    </div>

                    <div className='flex items-center gap-3 cursor-pointer'>
                        <FaPhoneAlt size={18} className='text-blue-300' />
                        <a 
                            href="tel:+918083116208" 
                            className='text-gray-300 hover:text-white text-sm'
                        >
                            +91 80831 16208
                        </a>
                    </div>

                    <div className='flex items-center gap-3 cursor-pointer'>
                        <MdEmail size={22} className='text-red-400' />
                        <a 
                            href="mailto:example@example.com"     
                            className='text-gray-300 hover:text-white text-sm'
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
                            className='text-gray-300 hover:text-white text-sm'
                        >
                            Instagram
                        </a>
                    </div>
                </div>
              </div>

            </div>

            {/* Bottom Footer */}
            <div className='m-4 text-center text-gray-500 text-xs'>
                © {new Date().getFullYear()} E-Court. All Rights Reserved.
            </div>

        </footer>
    )
}

export default Footer
