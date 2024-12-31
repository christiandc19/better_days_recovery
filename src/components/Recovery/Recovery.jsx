import React from 'react'
import ContactForm from '../LandingPage/ContactForm'
import './Recovery.css'
import Fade from "react-reveal/Fade";
import RecoverySection from './RecoverySection';

const Recovery = () => {
return (

<>        
<div className='recovery-hero main-menu'>
            <Fade bottom duration={3000}>
                <div className="recovery-hero-content">
                  <h1>Addiction Recovery Services</h1>
                </div>
            </Fade>
     </div>
<RecoverySection />
<ContactForm />
</>

    )
}

export default Recovery
