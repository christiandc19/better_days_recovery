import React from 'react'
import AdmissionsSection from './AdmissionsSection'
import './Admissions.css'
import Fade from "react-reveal/Fade";

const Admissions = () => {
return (

<>        
<div className='admissions-hero main-menu'>
            <Fade bottom duration={3000}>
                <div className="admissions-hero-content">
                  <h1>Admissions Process</h1>
                </div>
            </Fade>
     </div>
<div className='addmission-flex'>

<AdmissionsSection />

</div>

</>

    )
}

export default Admissions
