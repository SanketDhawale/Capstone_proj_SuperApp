import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './FormComponent.css';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    checkbox: false,
  });

  const [formErrors, setFormErrors] = useState({});
  const history = useHistory();

  useEffect(() => {
    // Load form data from local storage on component mount
    const storedFormData = JSON.parse(localStorage.getItem('formData'));
    if (storedFormData) {
      setFormData(storedFormData);
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = () => {
    setFormData({
      ...formData,
      checkbox: !formData.checkbox,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Validate form fields
    const errors = {};
    if (!formData.firstName) {
      errors.firstName = 'First name is required';
    }
    if (!formData.lastName) {
      errors.lastName = 'Last name is required';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    }
    if (!formData.mobileNumber) {
      errors.mobileNumber = 'Mobile number is required';
    }
    if (!formData.checkbox) {
      errors.checkbox = 'You must agree to the terms and conditions';
    }

    // Update errors state and handle form submission
    if (Object.keys(errors).length === 0) {
      localStorage.setItem('formData', JSON.stringify(formData));
      history.push('/category-selection'); // Navigate to category selection page
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-heading">Super App</h1>
      <h4 className="form-subheading">Create Your New Account</h4>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
          {formErrors.firstName && <span className="form-error">{formErrors.firstName}</span>}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
          {formErrors.lastName && <span className="form-error">{formErrors.lastName}</span>}
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          {formErrors.email && <span className="form-error">{formErrors.email}</span>}
        </div>
        <div className="form-group">
          <input
            type="tel"
            name="mobileNumber"
            placeholder="Mobile Number"
            value={formData.mobileNumber}
            onChange={handleInputChange}
            required
          />
          {formErrors.mobileNumber && <span className="form-error">{formErrors.mobileNumber}</span>}
        </div>
        <div className="form-group checkbox">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="checkbox"
              checked={formData.checkbox}
              onChange={handleCheckboxChange}
              required
            />
            <span className="checkmark"></span>
          </label>
          <span className="checkbox-text">I agree to the terms and conditions</span>
          {formErrors.checkbox && <span className="form-error">{formErrors.checkbox}</span>}
        </div>

        <button type="submit" className="form-submit-button">Sign Up</button>
      </form>
    </div>
  );
};

export default FormComponent;
