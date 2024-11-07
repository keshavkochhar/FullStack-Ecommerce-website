import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserInfoForm.css';
const UserInfoForm = () => {
  const [userInfo, setUserInfo] = useState({ name: '', contact: '', email: '' });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/payment', { state: { userInfo } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Enter Your Information</h2>
      <input name="name" placeholder="Name" onChange={handleInputChange} required />
      <input name="contact" placeholder="Contact Number" onChange={handleInputChange} required />
      <input name="email" placeholder="Email" type="email" onChange={handleInputChange} required />
      <button type="submit">Proceed to Payment</button>
    </form>
  );
};

export default UserInfoForm;
