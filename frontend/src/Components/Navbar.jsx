import React, { useState } from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Link } from 'react-router-dom';
import logo from '/logo.png'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false);

    const guestLinks = [
        { name: "Home", path: "#" },
        { name: "About us", path: "#About" },
        { name: "Service", path: "#Service" },
        { name: "Contact", path: "#Contact" }
    ];

    const authLinks = [
        { name: "Home", path: "#" },
        { name: "Find Case", path: "/find-case" },
        { name: "Add Case", path: "/ac" },
        { name: "Contact", path: "#Contact" }
    ];

    const currentLinks = loggedIn ? authLinks : guestLinks;

    const handleLogout = () => {
        setLoggedIn(false);
    };

    const NavItem = ({ item }) => (
        <li className='relative group cursor-pointer px-3 py-2'>
            {item.path.startsWith('#') ? (
                <a href={item.path} className='text-gray-700 hover:text-black transition-colors duration-200'>
                    {item.name}
                </a>
            ) : (
                <Link 
                    to={item.path} 
                    className='text-gray-700 hover:text-black transition-colors duration-200'
                    onClick={() => setOpen(false)}
                >
                    {item.name}
                </Link>
            )}
            <span className='absolute left-3 right-3 bottom-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-[calc(100%-24px)]'></span>
        </li>
    );

    return (
        <div className='w-full fixed top-0 left-0 bg-white shadow-sm z-50 border-b border-gray-200'>
            {/* Desktop View */}
            <div className='w-full h-16 flex items-center justify-between px-4 md:px-8 lg:px-12'>
                {/* Logo */}
                <div className='flex items-center'>
                    <Link to="/" className='flex items-center'>
                        <img 
                            src={logo} 
                            alt="Logo" 
                            className='h-24 w-auto md:h-28 object-contain'
                        />
                    </Link>
                </div>

                {/* Navigation Links */}
                {!loggedIn ? (
                    <div className='hidden md:flex items-center space-x-1'>
                        <ul className='flex items-center gap-1'>
                            {guestLinks.map((item, index) => (
                                <NavItem key={index} item={item} />
                            ))}
                        </ul>
                    </div>
                ) : (
                    <div className='hidden md:flex items-center space-x-4'>
                        <ul className='flex items-center gap-1'>
                            {authLinks.map((item, index) => (
                                <NavItem key={index} item={item} />
                            ))}
                        </ul>
                        <button 
                            onClick={handleLogout}
                            className='border border-gray-300 py-2 px-6 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors duration-200 text-gray-700 font-medium'
                        >
                            Logout
                        </button>
                    </div>
                )}

                {/* Desktop Actions */}
                <div className='hidden md:flex items-center gap-4'>
                    {!loggedIn && (
                        <button className='bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg cursor-pointer transition-colors duration-200 font-medium shadow-sm'>
                            Book a consultation
                        </button>
                    )}
                </div>

                {/* Mobile Menu Button - Always visible on mobile */}
                <div className='md:hidden flex items-center'>
                    {open ? (
                        <CloseRoundedIcon
                            fontSize='large'
                            className='cursor-pointer text-gray-700 hover:text-black transition-colors'
                            onClick={() => setOpen(false)}
                        />
                    ) : (
                        <MenuRoundedIcon
                            fontSize='large'
                            className='cursor-pointer text-gray-700 hover:text-black transition-colors'
                            onClick={() => setOpen(true)}
                        />
                    )}
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {open && (
                <div 
                    className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setOpen(false)}
                >
                    {/* Mobile Menu Panel */}
                    <div 
                        className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-lg z-50 transform transition-transform duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className='p-6 border-b border-gray-200 flex justify-between items-center'>
                           
                            <CloseRoundedIcon
                                fontSize='large'
                                className='cursor-pointer text-gray-700 hover:text-black transition-colors'
                                onClick={() => setOpen(false)}
                            />
                        </div>

                        <div className='p-6'>
                            <ul className="flex flex-col gap-2">
                                {currentLinks.map((item, index) => (
                                    <li key={index} className='border-b border-gray-100 last:border-b-0'>
                                        {item.path.startsWith('#') ? (
                                            <a 
                                                href={item.path}
                                                className='block py-4 text-lg text-gray-700 hover:text-black transition-colors duration-200 font-medium'
                                                onClick={() => setOpen(false)}
                                            >
                                                {item.name}
                                            </a>
                                        ) : (
                                            <Link 
                                                to={item.path}
                                                className='block py-4 text-lg text-gray-700 hover:text-black transition-colors duration-200 font-medium'
                                                onClick={() => setOpen(false)}
                                            >
                                                {item.name}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>

                            <div className='mt-8 space-y-4'>
                                {!loggedIn ? (
                                    <button 
                                        className='w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg cursor-pointer transition-colors duration-200 font-medium text-lg'
                                        onClick={() => setOpen(false)}
                                    >
                                        Book a consultation
                                    </button>
                                ) : (
                                    <button 
                                        onClick={() => {
                                            handleLogout();
                                            setOpen(false);
                                        }}
                                        className='w-full border border-gray-300 py-3 px-6 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors duration-200 text-gray-700 font-medium text-lg'
                                    >
                                        Logout
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar