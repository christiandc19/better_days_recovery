import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import AboutPage from './components/About/AboutPage';
import ContactPage from './components/Contact/Contact';

import TreatmentPage from './components/Treatment/Treatment';
import AdmissionsPage from './components/Admissions/Admissions';
import RecoveryPage from './components/Recovery/Recovery';

import Footer from './components/Footer';
import AddictionProgram from './components/ProgramOptions/Addiction/AddictionProgram';
import DetoxProgram from './components/ProgramOptions/DetoxProgram/DetoxProgram';
import OutpatientRehab from './components/ProgramOptions/OutpatientRehab/OutpatientRehab';
import InpatientRehab from './components/ProgramOptions/InpatientRehab/InpatientRehab';
import DualDiagnosisProgram from './components/ProgramOptions/DualDiagnosis/DualDiagnosis';
import MATProgram from './components/ProgramOptions/MATProgram/MAT';
import VeteransAddiction from './components/ProgramOptions/VeteransAddiction/VeteransAddictionHero';

import DrugAddictionTreatment from './components/Addiction/DrugRehab/DrugAddiction';
import HeroinProgram from './components/Addiction/HeroinProgram/HeroinProgram';
import XanaxRehab from './components/Addiction/XanaxRehab/XanaxRehab';
import AtivanRehab from './components/Addiction/AtivanRehab/AtivanRehab';


import Alcoholism from './components/WhatWeTreat/Alcoholism'
import CocaineAddictionTreatment from './components/WhatWeTreat/CocaineAddiction'
import FentanylAddictionTreatment from './components/WhatWeTreat/FentanylAddiction'
import MethAddictionTreatment from './components/WhatWeTreat/MethAddiction'
import PrescriptionAddictionTreatment from './components/WhatWeTreat/PrescriptionAddiction'
import KratomAddictionTreatment from './components/WhatWeTreat/KratomAddiction'
import CannabisAddictionTreatment from './components/WhatWeTreat/CannabisAddiction'
import BenzoAddictionTreatment from './components/WhatWeTreat/BenzoAddiction'
import PainkillerAddictionTreatment from './components/WhatWeTreat/PainkillerAddiction'
import InhalantAddictionTreatment from './components/WhatWeTreat/InhalantAddiction'
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import Topbar from './components/Topbar/Topbar';


const App = () => {
  return (
    <Router>
      <Topbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/treatment" element={<TreatmentPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/addiction-program" element={<AddictionProgram />} />
        <Route path="/detox-program" element={<DetoxProgram />} />
        <Route path="/outpatient-rehab" element={<OutpatientRehab />} />
        <Route path="/inpatient-rehab" element={<InpatientRehab />} />
        <Route path="/dual-diagnosis-program" element={<DualDiagnosisProgram />} />
        <Route path="/medication-assisted-program" element={<MATProgram />} />
        <Route path="/veterans-addiction-treatment-program" element={<VeteransAddiction />} />
        <Route path="/drug-addiction-treatment" element={<DrugAddictionTreatment />} />
        <Route path="/heroin-program" element={<HeroinProgram />} />
        <Route path="/xanax-rehab" element={<XanaxRehab />} />
        <Route path="/ativan-rehab" element={<AtivanRehab />} />

        <Route path="/alcoholism" element={<Alcoholism />} />
        <Route path="/cocaine-addiction-treatment" element={<CocaineAddictionTreatment />} />
        <Route path="/fentanyl-addiction-treatment" element={<FentanylAddictionTreatment />} />
        <Route path="/meth-addiction-treatment" element={<MethAddictionTreatment />} />
        <Route path="/prescription-addiction-treatment" element={<PrescriptionAddictionTreatment />} />
        <Route path="/kratom-addiction-treatment" element={<KratomAddictionTreatment />} />
        <Route path="/cannabis-addiction-treatment" element={<CannabisAddictionTreatment />} />
        <Route path="/benzo-addiction-treatment" element={<BenzoAddictionTreatment />} />
        <Route path="/painkiller-addiction-treatment" element={<PainkillerAddictionTreatment />} />
        <Route path="/inhalant-addiction-treatment" element={<InhalantAddictionTreatment />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        {/* Admissions */}
        <Route path="/admissions" element={<AdmissionsPage />} />
        {/* Recovery */}
        <Route path="/recovery" element={<RecoveryPage />} />


      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
