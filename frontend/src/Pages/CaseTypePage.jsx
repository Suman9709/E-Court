import React from 'react'
import Card from '../Components/Card'
import casebg from '/law2.png'

const CaseTypePage = () => {
    return (
        <div className="relative w-full min-h-screen flex items-center justify-center mt-4 mb-4" id="Service">

            {/* Blurred Background */}
            <div
                className="absolute inset-0 bg-cover bg-center blur-sm scale-100"
                style={{ backgroundImage: `url(${casebg})` }}
            ></div>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className='relative z-10 w-full max-w-screen flex flex-col items-center justify-center gap-8 p-10 text-white'>

                <div className='w-[90%] px-4 py-8 flex flex-col gap-6'>
                    
                    <h1 className='text-center text-2xl md:text-3xl lg:text-4xl font-semibold'>
                        Potential consequences
                    </h1>

                    <p className='text-center max-w-3xl mx-auto'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Nisi, quasi eius doloribus consequuntur nihil repudiandae.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card title="Example Title" description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                        <Card title="Example Title" description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                        <Card title="Example Title" description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                        <Card title="Example Title" description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                        <Card title="Example Title" description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                        <Card title="Example Title" description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CaseTypePage
