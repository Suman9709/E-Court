import React, { useState } from 'react'
import consultancybg from '/law3.png'
import ConsultancyInput from '../Components/ConsultancyInput'

const ConsultationForm = () => {

    const [name, setName] = useState("")

    return (
        <div
            className="w-full min-h-screen bg-cover bg-center relative flex items-center justify-center p-6 mt-4"
            style={{ backgroundImage: `url(${consultancybg})` }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-1 bg-black/30"></div>

            {/* Content Wrapper */}
            <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 text-white">

                {/* LEFT — FORM */}
                <div className="backdrop-blur-md bg-white/10 p-8 rounded-md shadow-lg">
                    <h1 className="text-2xl md:text-3xl font-semibold mb-6">
                        Request Your Free Consultation
                    </h1>

                    <form className="flex flex-col gap-4 text-white">
                        <ConsultancyInput 
                            type="text" 
                            label="Name" 
                            placeholder="Enter your name"
                            value={name}
                            onChange={setName}
                            
                        />

                        <ConsultancyInput 
                            type="email" 
                            label="Email" 
                            placeholder="Enter your email"
                        />

                        <ConsultancyInput 
                            type="text" 
                            label="Phone" 
                            placeholder="Enter your phone number"
                        />

                        <ConsultancyInput 
                            type="text" 
                            label="Subject" 
                            placeholder="Enter subject"
                        />

                        <ConsultancyInput 
                            type="text" 
                            label="Message" 
                            placeholder="Your message"
                        />

                        <button
                            className="mt-4 bg-blue-600 hover:bg-blue-700 transition text-white py-2 rounded"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                {/* RIGHT — IMAGE (Hidden on mobile) */}
                <div className="hidden md:flex justify-center items-center">
                    <img 
                        src="/consultation.png" 
                        alt="Consultation" 
                        className="w-[80%] object-contain drop-shadow-lg"
                    />
                </div>

            </div>

        </div>
    )
}

export default ConsultationForm
