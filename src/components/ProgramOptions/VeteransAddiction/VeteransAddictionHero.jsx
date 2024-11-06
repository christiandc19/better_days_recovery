import React from 'react'
import './VeteransAddictionHero.css'
import ContactForm from '../../LandingPage/ContactForm'
import VeteransAddictionSection from './VeteransAddictionSection'
import Mission from '../../LandingPage/Mission'

const VeteransAddictionHero = () => {
    return (
        <>        
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
