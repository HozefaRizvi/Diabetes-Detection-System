// Home.js
import React from 'react';
import { Element } from 'react-scroll';
import Navbar from './NavBar/nav';
import WelcomeSection from './Sections/WelcomeSection';
import DiagnoseSection from './Sections/DiagnosisSection';
import UnderstandingDiabetesSection from './Sections/Understanding';
import CausesSection from './Sections/Causes';
import SymptomsSection from './Sections/symptoms';
import TreatmentSection from './Sections/Treatment';
import AboutProjectSection from './Sections/About';

const Home = () => {
  return (
    <div className="container-fluid px-0 bg-light text-dark">
      {/* Navigation Bar */}
      <Navbar />

      {/* Sections */}
      <Element name="welcome">
        <WelcomeSection />
      </Element>
      <Element name="diagnose">
        <DiagnoseSection />
      </Element>
      <Element name="understanding">
        <UnderstandingDiabetesSection />
      </Element>
      <Element name="causes">
        <CausesSection />
      </Element>
      <Element name="symptoms">
        <SymptomsSection />
      </Element>
      <Element name="treatment">
        <TreatmentSection />
      </Element>
      <Element name="about">
        <AboutProjectSection />
      </Element>
    </div>
  );
};

export default Home;
