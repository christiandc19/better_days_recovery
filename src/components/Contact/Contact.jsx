import React from "react";
import {Helmet} from "react-helmet";

import './Contact.css'
import ContactForm from "../LandingPage/ContactForm";
import Services from "../LandingPage/Services";
import Insurance from "../LandingPage/Insurance";


const Contact = () => {

    return (
      <>

      <Helmet>
            <meta charSet="utf-8" />
            <title>CONTACT - Better Days Recovery</title>
            <link rel="canonical" href="https://betterdaysrecovery.biz/contact" />
        </Helmet>

<div className='contact-hero main-menu'>
            <div className="contact-hero-content">
                <div className="contact-hero-content">
                  <h1>Contact Us</h1>
                  <h2>Reach out to us for any inquiries, appointments, or assistance. </h2>
                  <p><a href="tel:(323) 287-3458"> +1 (323) 287-3458</a></p>
                </div>
            </div>
     </div>
     <ContactForm />
     <Insurance />
     <Services />
 
      </>
    )
}

export default Contact