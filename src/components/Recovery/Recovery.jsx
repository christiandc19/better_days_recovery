import React from 'react'
import ContactForm from '../LandingPage/ContactForm'
import './Recovery.css'
import Fade from "react-reveal/Fade";
import RecoverySection from './RecoverySection';
import {Helmet} from "react-helmet";

const Recovery = () => {
return (

<>     

        <Helmet>
            <meta charSet="utf-8" />
            <title>RECOVERY - Better Days Recovery</title>
            <link rel="canonical" href="https://betterdaysrecovery.biz/recovery" />
        </Helmet>

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
