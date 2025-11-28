import React from 'react'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import CaseTypePage from './CaseTypePage'
import ConsultationForm from './ConsultationForm'
import Experience from './Experience'

const MainPage = () => {
    return (
        <div className='mt-16'>
            <HomePage />
            <AboutPage />
            <Experience />
            <CaseTypePage />
            <ConsultationForm />
        </div>
    )
}

export default MainPage