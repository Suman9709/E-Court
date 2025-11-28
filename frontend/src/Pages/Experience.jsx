import React from 'react'
import { GoLaw } from "react-icons/go";

const Experience = () => {
    return (
        <div className='px-4 py-12 bg-[#0B1226] text-white'>

            <div className='text-center mb-10'>
                <h1 className='text-3xl md:text-4xl font-bold leading-tight'>
                    22 Years Of Experience In <br /> Legal Case Field
                </h1>
                <p className='mt-4 text-gray-300 max-w-2xl mx-auto'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime suscipit,
                    minus hic odio cupiditate nulla expedita non sint ea facere.
                </p>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>

                {/* Card */}
                {[
                    { number: "1500+", label: "Successful Cases" },
                    { number: "1200+", label: "Happy Clients" },
                    { number: "22+", label: "Years Experience" },
                    { number: "50+", label: "Awards Won" },
                ].map((item, index) => (
                    <div
                        key={index}
                        className='group p-6 rounded-xl bg-[#0F1A33] border border-gray-700 hover:border-blue-500
                                   transition-all duration-300 shadow-md hover:shadow-blue-500/20
                                   hover:-translate-y-2 cursor-pointer animate-fadeIn'
                    >
                        <div className='flex items-center justify-center mb-4'>
                            <div className='p-3 rounded-full bg-blue-500/20 group-hover:bg-blue-500/30 transition'>
                                <GoLaw size={40} className='text-blue-400' />
                            </div>
                        </div>

                        <h2 className='text-3xl font-bold text-center mb-1'>{item.number}</h2>
                        <p className='text-center text-gray-300'>{item.label}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Experience
