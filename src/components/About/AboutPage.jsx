import React from 'react'
import './AboutPage.css'

import ContactForm from '../LandingPage/ContactForm'
import OurValues from '../About/OurValues'
import Accordion from '../LandingPage/AccordionProps'


const AboutPage = () => {
    return (
<>        
<div className='about-hero main-menu'>
            <div className="about-hero-content">
                <div className="about-hero-content">
                  <h1>About Us</h1>
                </div>
            </div>
     </div>
<OurValues />
<Accordion />
<ContactForm />
</>


    )
}

export default AboutPage
