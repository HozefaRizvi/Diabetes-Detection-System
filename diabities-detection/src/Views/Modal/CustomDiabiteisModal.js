import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const CustomDiabitiesModal = ({ prediction, onClose }) => {
  const isPositive = prediction === 1;

  const positiveRecommendations = [
    "Consult with a healthcare professional for a thorough examination.",
    "Discuss your lifestyle, diet, and family medical history with the healthcare provider.",
    "Consider additional diagnostic tests recommended by the healthcare professional.",
  ];

  const notPositiveRecommendations = [
    "Maintain a healthy lifestyle with regular exercise and a balanced diet.",
    "Monitor your blood sugar levels periodically as a preventive measure.",
    "Continue to stay informed about diabetes prevention strategies.",
  ];

  const recommendations = isPositive ? positiveRecommendations : notPositiveRecommendations;

  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Diabetes Prediction Result</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {isPositive ? (
          <p>You are predicted to have high chances of diabetes. {recommendations[0]}</p>
        ) : (
          <p>You are predicted to have low chances of diabetes. {recommendations[0]}</p>
        )}
        <ul>
          {recommendations.slice(1).map((recommendation, index) => (
            <li key={index}>{recommendation}</li>
          ))}
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomDiabitiesModal;
