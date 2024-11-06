import React from 'react'
import './DualDiagnosis.css'

import ContactForm from '../../LandingPage/ContactForm'
import DualDiagnosisProgram from './DualDiagnosisProgram'
import Mission from '../../LandingPage/Mission'


const DualDiagnosis = () => {
    return (
        <>        
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
