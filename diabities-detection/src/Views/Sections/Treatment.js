// TreatmentSection.js
import React from 'react';
import { Link } from 'react-router-dom';

const TreatmentSection = () => {
  return (
    <section className="vh-100 d-flex align-items-center justify-content-center " style={{background:'#5D83B1'}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-lg-last" >
            <img src="https://media.springernature.com/m685/springer-static/image/art%3A10.1038%2Fs41366-023-01369-3/MediaObjects/41366_2023_1369_Fig1_HTML.png" alt="Diabetes Treatment" className="img-fluid"  style={{ borderRadius: '15px'}}/>
          </div>
          <div className="col-lg-6 text-center">
            <h2 className="display-4 mb-4">Treatment of Diabetes</h2>
            <p className="lead mb-5">
              Managing diabetes involves a combination of lifestyle modifications, medication, and regular monitoring. Discover effective treatment options to maintain blood sugar levels and improve overall well-being.
            </p>
            <Link to="https://www.mayoclinic.org/diseases-conditions/diabetes/diagnosis-treatment/drc-20371451" className="btn btn-lg btn-success mt-1">Learn More</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentSection;
