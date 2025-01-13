import React from 'react'
import {Helmet} from "react-helmet";

import ContactForm from '../../LandingPage/ContactForm'
import AddictionRehabSection from './AddictionRehabSection'

import './AddictionProgram.css'
import Mission from '../../LandingPage/Mission'

const Addiction = () => {
return (

<>

        <Helmet>
            <meta charSet="utf-8" />
            <title>ADDICTION PROGRAM - Better Days Recovery</title>
            <link rel="canonical" href="https://betterdaysrecovery.biz/addiction-program" />
        </Helmet>

<div className='addiction-hero main-menu'>
            <div className="addiction-hero-content">
                <div className="addiction-hero-content">
                  <h1>Addiction Program</h1>
                </div>
            </div>
     </div>
<AddictionRehabSection />
<Mission />
<ContactForm />
</>

    )
}

export default Addiction
