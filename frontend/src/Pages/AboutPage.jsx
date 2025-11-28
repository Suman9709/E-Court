import React from 'react'
import { IoCallOutline } from "react-icons/io5";

const AboutPage = () => {
    return (
        <div className='flex flex-col max-w-screen items-center justify-around h-full md:flex-row gap-4 p-4 md:p-10 bg-gray-200  ' id='About'>
            <div className=' border-black border-4 h-52 w-72 md:h-96 md:w-96 lg:h-[400px] lg:w-[500px] flex justify-center items-center '>
                <img src="" alt="" />
            </div>

            <div className='w-full md:w-1/2 flex flex-col h-full gap-6 text-black'>

                {/* HEADING */}
                <h1
                    className='text-gray-700 text-3xl md:text-4xl lg:text-5xl leading-tight font-serif'
                >
                    We Know What Is <br /> On The Line For You
                </h1>

                {/* PARAGRAPH */}
                <p className='text-gray-800'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nulla rerum
                    aliquam ipsam voluptates illo velit amet laborum repudiandae. Expedita tempore
                    eum numquam assumenda odit pariatur repudiandae veniam neque quod id,
                    necessitatibus, laudantium inventore ratione? Dolorem dicta aspernatur maxime,
                    recusandae earum culpa facere amet consectetur iure sequi, explicabo, voluptates quam!
                </p>

                {/* CONTACT BOX */}
                <div className='border border-gray-400 px-4 py-3 rounded-lg w-fit cursor-pointer hover:bg-gray-100 transition'>
                    <div className='flex items-center gap-3 text-lg font-semibold'>
                        <span><IoCallOutline size={30} /></span>
                        8083116208
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AboutPage