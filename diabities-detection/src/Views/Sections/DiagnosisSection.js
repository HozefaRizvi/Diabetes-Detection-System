import React from 'react';
import { Link } from 'react-router-dom';

const DiagnoseSection = () => {
  return (
    <section className="vh-100 bg-dark d-flex align-items-center justify-content-center text-white">
      <div className="text-center container">
        <h2 className="display-4 mb-4">Diagnose Diabetes</h2>
        <p className="lead mb-5">Perform early prediction of Diabetes using various Machine Learning Techniques.</p>
        <Link to="/diagnose" className="btn btn-lg btn-light mt-1">Let's Diagnose</Link>
      </div>
    </section>
  );
};

export default DiagnoseSection;
