import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PaymentResult.css';

const PaymentResult = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Hook to navigate to different pages
  const { isSuccess, method, userInfo } = location.state;

  const handleGoHome = () => {
    navigate('/'); // Redirect to the home page
  };

  return (
    <div className="payment-result-container">
      {isSuccess ? (
        <h2 className="payment-success">Payment Successful! Thank you, {userInfo.name}.</h2>
      ) : (
        <h2 className="payment-failure">Payment Failed. Please try again.</h2>
      )}
      <p>{`Payment Method: ${method}`}</p>
      <button className="payment-result-button" onClick={handleGoHome}>
        Go to Home
      </button>
    </div>
  );
};

export default PaymentResult;
