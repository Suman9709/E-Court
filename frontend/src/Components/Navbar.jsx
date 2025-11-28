import React, { useState } from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Link } from 'react-router';

const Navbar = () => {

    const [open, setOpen] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <div className='w-full '>

            {/* desktop view */}
            <div className='border-b border-black w-full h-18 flex items-center justify-between px-8 text-md font-semibold '>
                <div>
                    <img src="src" alt="logo" />
                </div>
                {!loggedIn ? (
                    <ul className=' hidden md:flex gap-4 '>
                        <li className='relative group cursor-pointer'>
                            <a href="#">Home</a>
                            <span className='absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full'></span>
                        </li>
                        <li className='relative group cursor-pointer'>
                            <a href="#">About us</a>
                            <span className='absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full'></span>
                        </li>

                        <li className='relative group cursor-pointer'>
                            <a href="#">Service</a>
                            <span className='absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full'></span>
                        </li>
                        <li className='relative group cursor-pointer'><a href="#">Contact</a>
                            <span className='absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full'></span>
                        </li>
                    </ul>
                ) : (
                    <div>
                        <ul className=' hidden md:flex gap-4 '>
                            <li className='relative group cursor-pointer'>
                                <a href="#">Home</a>
                                <span className='absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full'></span>
                            </li>
                            <li className='relative group cursor-pointer'>
                                <a href="#">Find Case</a>
                                <span className='absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full'></span>
                            </li>

                            <li className='relative group cursor-pointer'>
                                <Link to={"/ac"}>Add Case</Link>
                                <span className='absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full'></span>
                            </li>
                            <li className='relative group cursor-pointer'><a href="#">Contact</a>
                                <span className='absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full'></span>
                            </li>
                        </ul>
                        <button className='border py-1 px-4 rounded cursor-pointer'>Logout</button>

                    </div>
                )}
                <div className=' hidden md:block'>
                    <button className='border py-1 px-4 rounded cursor-pointer' >Book a consultation</button>
                </div>

                <div className='md:hidden'>

                    {!open && (

                        <MenuRoundedIcon
                            fontSize='large'
                            className='cursor-pointer'
                            onClick={() => setOpen(true)}
                        />
                    )
                    }
                </div>
            </div>


            {/* mobile view */}

            {
                open && (
                    <div className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 flex flex-col items-center gap-4  p-5 border-b font-semibold ${open ? 'translate-x-0' : '-translate-x-full'}`}>
                        <div className='w-full flex justify-start'>
                            <CloseRoundedIcon
                                fontSize='large'
                                className='cursor-pointer hover:rotate-90 transition'
                                onClick={() => setOpen(false)}
                            /></div>


                        <ul className="flex flex-col gap-5 text-lg mt-5">
                            <li className='relative group cursor-pointer'>
                                <a href="#">Home</a>
                                <span className='absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full'></span>
                            </li>
                            <li className='relative group cursor-pointer'>
                                <a href="#">About us</a>
                                <span className='absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full'></span>
                            </li>

                            <li className='relative group cursor-pointer'>
                                <a href="#">Service</a>
                                <span className='absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full'></span>
                            </li>
                            <li className='relative group cursor-pointer'><a href="#">Contact</a>
                                <span className='absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full'></span>
                            </li>
                        </ul>
                        <button className='border py-1 px-4 rounded cursor-pointer'>Book a consultation</button>

                    </div>


                )
            }
        </div >
    )
}

export default Navbar



