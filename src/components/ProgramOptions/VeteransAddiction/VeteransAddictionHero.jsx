import React from 'react'
import './VeteransAddictionHero.css'
import ContactForm from '../../LandingPage/ContactForm'
import VeteransAddictionSection from './VeteransAddictionSection'
import Mission from '../../LandingPage/Mission'
import {Helmet} from "react-helmet";

const VeteransAddictionHero = () => {
    return (
        <>   

        <Helmet>
            <meta charSet="utf-8" />
            <title>VETERANS ADDICTION PROGRAM - Better Days Recovery</title>
            <link rel="canonical" href="https://betterdaysrecovery.biz/veterans-addiction-treatment-program" />
        </Helmet>

        <div className='veterans-hero main-menu'>
                <div className="veterans-hero-content">
                    <div className="veterans-hero-content">
                    <h1>Veterans Addiction Treatment</h1>
                    </div>
                </div>
        </div>

<VeteransAddictionSection />
<Mission />
<ContactForm />
</>


    )
}

export default VeteransAddictionHero
