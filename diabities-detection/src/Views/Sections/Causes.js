// CausesSection.js
import React from 'react';
import { Link } from 'react-router-dom';

const CausesSection = () => {
  return (
    <section className="vh-100 d-flex align-items-center justify-content-center" style={{background:'#E0FFFF'}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-lg-last">
            <img src="https://careplusvn.com/Uploads/t/fb/fb-nguyen-nhan-dai-thao-duong-giai-doan-dau-en_0007724_710.jpeg" alt="Diabetes Causes"  className="img-fluid rounded-circle"  />
          </div>
          <div className="col-lg-6 text-center">
            <h2 className="display-4 mb-4">Causes of Diabetes</h2>
            <p className="lead mb-5">
              Diabetes can result from various factors such as genetic predisposition, lifestyle choices, and environmental influences. Understanding the causes is crucial for effective prevention and management.
            </p>
            <Link to="https://www.who.int/health-topics/diabetes?gad_source=1&gclid=CjwKCAiArfauBhApEiwAeoB7qH7OvY1dDWcF6Qm8vL5wsc_FjwroDjkqSyAcVvsmOXUFr7qJYO2fwxoCCPwQAvD_BwE#tab=tab_1" className="btn btn-lg btn-info mt-1">Learn More</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CausesSection;
