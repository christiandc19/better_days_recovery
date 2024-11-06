import React from 'react'
import './MAT.css'

import ContactForm from '../../LandingPage/ContactForm'
import DualDiagnosisProgram from './MATProgram'
import Mission from '../../LandingPage/Mission'


const Mat = () => {
    return (
        <>        
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
