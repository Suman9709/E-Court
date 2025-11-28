import React from 'react'
import AboutPage from './AboutPage'
import backgroundImg from '/law1.jpeg'

const HomePage = () => {
    return (
        <div className="relative w-full">

            {/* The Image */}
            <img
                src={backgroundImg}
                className="w-full h-[30vh] md:h-[90vh] object-cover md:object-cover"
                alt="background"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center px-6 md:px-10 text-white">

                <div className="w-full md:w-1/2">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                        LEGAL SOLUTION FOR A CHANGING WORLD
                    </h1>

                    <p className="mt-4 text-gray-200 text-sm sm:text-base hidden md:block">
                         Your trusted legal guidance platform for all case types,
                        consultancy, and justice-related support.
                    </p>
                </div>

            </div>

        </div>
    )
}

export default HomePage
