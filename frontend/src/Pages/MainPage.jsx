import React from 'react'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import CaseTypePage from './CaseTypePage'
import ConsultationForm from './ConsultationForm'
import Experience from './Experience'

const MainPage = () => {
    return (
        <div>
            <HomePage />
            <AboutPage />
            <Experience />
            <CaseTypePage />
            <ConsultationForm />
        </div>
    )
}

export default MainPage