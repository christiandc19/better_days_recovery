import React from 'react'
import './DualDiagnosis.css'
import {Helmet} from "react-helmet";

import ContactForm from '../../LandingPage/ContactForm'
import DualDiagnosisProgram from './DualDiagnosisProgram'
import Mission from '../../LandingPage/Mission'


const DualDiagnosis = () => {
    return (
        <> 
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>DUAL DIAGNOSIS - Better Days Recovery</title>
                    <link rel="canonical" href="https://betterdaysrecovery.biz/dual-diagnosis-program" />
                </Helmet>

                <div className='dual-diagnosis-hero main-menu'>
                        <div className="dual-diagnosis-hero-content">
                            <div className="dual-diagnosis-hero-content">
                            <h1>Dual Diagnosis</h1>
                            </div>
                        </div>
                </div>

<DualDiagnosisProgram />
<Mission />
<ContactForm />
</>


    )
}

export default DualDiagnosis
