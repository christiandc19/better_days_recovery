import React from 'react'
import './MAT.css'
import {Helmet} from "react-helmet";

import ContactForm from '../../LandingPage/ContactForm'
import DualDiagnosisProgram from './MATProgram'
import Mission from '../../LandingPage/Mission'


const Mat = () => {
    return (
        <>  

        <Helmet>
            <meta charSet="utf-8" />
            <title>MEDICATION ASSISTED PROGRAM - Better Days Recovery</title>
            <link rel="canonical" href="https://betterdaysrecovery.biz/medication-assisted-program" />
        </Helmet>

        <div className='mat-hero main-menu'>
                <div className="mat-hero-content">
                    <div className="mat-hero-content">
                    <h1>Medication Assisted Program</h1>
                    </div>
                </div>
        </div>

<DualDiagnosisProgram />
<Mission />
<ContactForm />
</>



    )
}

export default Mat
