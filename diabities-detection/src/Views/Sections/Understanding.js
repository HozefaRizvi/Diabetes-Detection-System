// UnderstandingDiabetesSection.js
import React from 'react';
import { Link } from 'react-router-dom';

const UnderstandingDiabetesSection = () => {
  return (
    <section className="vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="text-center container">
        <h2 className="display-4 mb-4">Understanding Diabetes</h2>
        <p className="lead mb-5">
          Diabetes is a chronic condition that affects the way your body processes blood sugar (glucose). There are different types of diabetes, including Type 1, Type 2, and gestational diabetes. It's crucial to understand the impact of diabetes on your health and lifestyle.
        </p>
        <p className="mb-5">
          DiabEaseDetect provides valuable insights into your diabetes risk, empowering you to make informed decisions about your health. Whether you're new to diabetes or managing it for a while, our platform is designed to assist you at every step.
        </p>
        <Link to="https://www.niddk.nih.gov/health-information/diabetes/overview/what-is-diabetes" className="btn btn-lg btn-info mt-1">Learn More</Link>
      </div>
    </section>
  );
};

export default UnderstandingDiabetesSection;
