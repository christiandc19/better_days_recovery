import React from 'react'
import './AboutPage.css'

import ContactForm from '../LandingPage/ContactForm'
import OurValues from '../About/OurValues'
import Accordion from '../LandingPage/AccordionProps'
import {Helmet} from "react-helmet";


const AboutPage = () => {
    return (
<>   

        <Helmet>
            <meta charSet="utf-8" />
            <title>ABOUT US - Better Days Recovery</title>
            <link rel="canonical" href="https://betterdaysrecovery.biz/about" />
        </Helmet>

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
