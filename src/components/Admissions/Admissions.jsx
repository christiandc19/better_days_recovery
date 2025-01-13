import React from 'react'
import AdmissionsSection from './AdmissionsSection'
import './Admissions.css'
import Fade from "react-reveal/Fade";
import {Helmet} from "react-helmet";

const Admissions = () => {
return (

<>        

        <Helmet>
            <meta charSet="utf-8" />
            <title>ADMISSIONS - Better Days Recovery</title>
            <link rel="canonical" href="https://betterdaysrecovery.biz/admissions" />
        </Helmet>

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
