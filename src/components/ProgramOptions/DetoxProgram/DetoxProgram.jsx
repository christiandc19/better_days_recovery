import React from 'react'

import ContactForm from '../../LandingPage/ContactForm'
import DetoxSection from './DetoxProgramSection'
import Mission from '../../LandingPage/Mission'

import './DetoxProgram.css'


const DetoxProgram = () => {
return (

<>   

<Helmet>
            <meta charSet="utf-8" />
            <title>DETOX PROGRAM - Better Days Recovery</title>
            <link rel="canonical" href="https://betterdaysrecovery.biz/detox-program" />
</Helmet>

<div className='detox-hero main-menu'>
            <div className="detox-hero-content">
                <div className="detox-hero-content">
                  <h1>Detox Program</h1>
                </div>
            </div>
     </div>

<DetoxSection />
<Mission />
<ContactForm />
</>

    )
}

export default DetoxProgram
