import React from 'react'

import ContactForm from '../../LandingPage/ContactForm'
import OutpatientRehabSection from './OutpatientRehabSection'
import './OutpatientRehab.css'
import Mission from '../../LandingPage/Mission'

const OutpatientRehab = () => {
    return (

        <>        
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
