import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PaymentGateway.css';

const PaymentGateway = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userInfo = location.state?.userInfo;
  const [selectedPayment] = useState(null);

  const handlePayment = (method) => {
    const isSuccess = Math.random() > 0.5; // Mock success/failure
    navigate('/payment-result', { state: { isSuccess, method, userInfo } });
  };

  const handleCreditCardPayment = () => {
    // Mock credit card processing logic
    handlePayment('Credit Card');
  };

  const handleUPIPayment = () => {
    // Mock UPI processing logic
    handlePayment('UPI');
  };

  const handleQRCodePayment = () => {
    // Mock QR Code processing logic
    handlePayment('QR Code');
  };

  return (
    <div className="payment-gateway">
      <h2>Select Payment Method</h2>
      <div className="payment-options">
        <button onClick={() => handlePayment('Cash')}>Cash</button>
        <button onClick={() => handlePayment('Card')}>Debit/Credit Card</button>
        <button onClick={() => handleUPIPayment()}>UPI</button>
        <button onClick={() => handleQRCodePayment()}>QR Code</button>
      </div>

      {/* Conditionally Render Payment Forms */}
      {selectedPayment === 'Card' && (
        <div className="payment-form">
          <h3>Enter Card Details</h3>
          <input type="text" placeholder="Card Number" required />
          <input type="text" placeholder="Expiry Date (MM/YY)" required />
          <input type="text" placeholder="CVV" required />
          <button onClick={handleCreditCardPayment}>Pay Now</button>
        </div>
      )}

      {selectedPayment === 'UPI' && (
        <div className="payment-form">
          <h3>Enter UPI ID</h3>
          <input type="text" placeholder="UPI ID" required />
          <button onClick={handleUPIPayment}>Pay Now</button>
        </div>
      )}

      {selectedPayment === 'QR Code' && (
        <div className="payment-form">
          <h3>Scan QR Code</h3>
          <div className="qr-code-placeholder">
            <img src="path/to/qr-code.png" alt="Scan this QR code" />
          </div>
          <button onClick={handleQRCodePayment}>Confirm Payment</button>
        </div>
      )}
    </div>
  );
};

export default PaymentGateway;
