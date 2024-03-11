import React from 'react';

const AboutProjectSection = () => {
  return (
    <section className="vh-100 d-flex align-items-center justify-content-center text-dark" style={{ background: '#A9C9D4' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center">
            <h2 className="display-4 mb-4">About the Project</h2>
            <ul className="list-unstyled text-left">
              <li>
                <strong>Objective:</strong> Diabetes prediction using various Machine Learning Techniques.
              </li>
              <li>
                <strong>Algorithms Used:</strong> K-Nearest Neighbor (KNN), Logistic Regression (LR), Decision Tree (DT), Support Vector Machine (SVM), Naïve Bayes(NB), and Random Forest (RF).
              </li>
              <li>
                <strong>Choice of Algorithm:</strong> SVM achieved higher accuracy, making it the primary algorithm for predictions in the web application.
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Main_symptoms_of_diabetes.svg/330px-Main_symptoms_of_diabetes.svg.png" alt="Image 1" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProjectSection;
