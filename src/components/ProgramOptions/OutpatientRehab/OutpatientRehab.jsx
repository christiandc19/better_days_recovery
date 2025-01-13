import React from 'react'
import {Helmet} from "react-helmet";

import ContactForm from '../../LandingPage/ContactForm'
import OutpatientRehabSection from './OutpatientRehabSection'
import './OutpatientRehab.css'
import Mission from '../../LandingPage/Mission'

const OutpatientRehab = () => {
    return (

        <>  

        <Helmet>
            <meta charSet="utf-8" />
            <title>OUTPATIENT PROGRAM - Better Days Recovery</title>
            <link rel="canonical" href="https://betterdaysrecovery.biz/outpatient-rehab" />
        </Helmet>

        <div className='outpatient-hero main-menu'>
            <div className="outpatient-hero-content">
                <div className="outpatient-hero-content">
                  <h1>Outpatient Program</h1>
                </div>
            </div>
        </div>
        
        <OutpatientRehabSection />
        <Mission />
        <ContactForm />
        </>
        
            )
        
        }

export default OutpatientRehab
