import React from 'react'

import ContactForm from '../../LandingPage/ContactForm'
import Insurance from '../../LandingPage/Insurance'
import DrugAddictionTreatment from './DrugAddictionTreatment'
import './DrugAddictionTreatmentHero.css'

const DrugAddictionTreatmentHero = () => {
    return (
<>        
<div className='addictionProgramOptions'>
    <div className="addictionProgramOptionsContainer">

        <div className="addictionProgramOptionsContent">
            <div>
                <h1>Drug Addiction and Treatment</h1>
                <h2>Creating stability in recovery.</h2>
            </div>
        </div>

    </div>
</div>
<DrugAddictionTreatment />
<Insurance />  
<ContactForm />
</>


    )
}

export default DrugAddictionTreatmentHero
