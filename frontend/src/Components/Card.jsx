import React from 'react'

const Card = ({ title, description }) => {
    return (
        <div className="card bg-base-100 w-full shadow-md hover:shadow-xl transition-shadow duration-300 rounded-lg border-2 border-gray-700">
            <div className="card-body p-4">
                <h2 className="card-title text-xl font-semibold">{title}</h2>
                <p className="text-white">{description}</p>
            </div>
        </div>
    )
}

export default Card
