import React, { useState } from 'react';
import CustomDiabitiesModal from './Modal/CustomDiabiteisModal';
const DiabetesPredictionForm = () => {
  const [prediction, setPrediction] = useState(-1);
  const [showModal, setShowModal] = useState(false);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonData),
    };

    try {
      const response = await fetch('http://127.0.0.1:5000/predict', requestOptions);
      const data = await response.json();
      setPrediction(data.prediction[0]);
      setShowModal(true);
      // Log the response to the console
      console.log('Response from server:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };


  return (
    <div className="container mt-5">
      <form onSubmit={handleFormSubmit}>
        <fieldset className="p-4 shadow rounded bg-light">
          <legend className="text-center text-uppercase font-weight-bold mb-4">Diabetes Prediction Form</legend>

          {['pregs', 'gluc', 'bp', 'skin', 'insulin', 'bmi', 'func', 'age'].map((fieldName) => (
            <div key={fieldName} className="form-group row mb-3">
              <label htmlFor={fieldName} className="col-sm-3 col-form-label text-end">
                {fieldName.charAt(0).toUpperCase() + fieldName.slice(1).replace('_', ' ')}
              </label>
              <div className="col-sm-9">
                <input
                  type="number"
                  step={fieldName === 'age' ? 1 : 0.1}
                  min={fieldName === 'age' ? 21 : 0}
                  max={fieldName === 'pregs' ? 10 : undefined}
                  className="form-control"
                  name={fieldName}
                  id={fieldName}
                  required
                  placeholder={`${fieldName.charAt(0).toUpperCase() + fieldName.slice(1).replace('_', ' ')} (${fieldName === 'age' ? 'in yrs' : fieldName === 'pregs' ? '0-10' : 'in mg/dL'})`}
                />
              </div>
            </div>
          ))}

          <div className="form-group row justify-content-center">
            <div className="col-sm-9 text-center">
              <button type="submit" className="btn btn-primary btn-lg">
                Predict
              </button>
            </div>
          </div>
        </fieldset>
      </form>
      
      {showModal && <CustomDiabitiesModal prediction={prediction} onClose={handleCloseModal} />}
    </div>
  );
};
export default DiabetesPredictionForm;
