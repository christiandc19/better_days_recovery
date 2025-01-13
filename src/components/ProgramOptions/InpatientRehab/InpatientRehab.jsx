import React from 'react'
import './InpatientRehab.css'
import ContactForm from '../../LandingPage/ContactForm'
import InpatientRehabSection from './InpatientRehabSection'
import Mission from '../../LandingPage/Mission'
import {Helmet} from "react-helmet";


const InpatientRehab = () => {
    return (

        <>        

        <Helmet>
            <meta charSet="utf-8" />
            <title>INPATIENT PROGRAM - Better Days Recovery</title>
            <link rel="canonical" href="https://betterdaysrecovery.biz/inpatient-rehab" />
        </Helmet>

        <div className='inpatient-hero main-menu'>
                <div className="inpatient-hero-content">
                    <div className="inpatient-hero-content">
                    <h1>Inpatient Program</h1>
                    </div>
                </div>
        </div>
        
        <InpatientRehabSection />
        <Mission />
        <ContactForm />
        </>
        
            )

}

export default InpatientRehab
