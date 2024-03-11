// SymptomsSection.js
import React from 'react';
import { Link } from 'react-router-dom';

const SymptomsSection = () => {
  return (
    <section className="vh-100 d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img src="https://media.istockphoto.com/id/1250224584/vector/symptoms-of-diabetes.jpg?s=612x612&w=0&k=20&c=0rZR_sLebXfJXln_Yg_r_YH55oFEa_uBIOqGjdWBimE=" alt="Diabetes Symptoms" className="img-fluid" />
          </div>
          <div className="col-lg-6 text-center">
            <h2 className="display-4 mb-4">Symptoms of Diabetes</h2>
            <p className="lead mb-5">
              Recognizing the symptoms of diabetes is essential for early detection and timely intervention. Common symptoms include increased thirst, frequent urination, unexplained weight loss, and more.
            </p>
            <Link to="https://www.mayoclinic.org/diseases-conditions/diabetes/symptoms-causes/syc-20371444" className="btn btn-lg btn-warning mt-1">Learn More</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SymptomsSection;
