import { useState, useEffect } from 'react';
import './SignIn.css';

// eslint-disable-next-line react/prop-types
const SignIn = ({ onSignIn, onRegisterClick }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Check if the user is already signed in
    const isSignedIn = localStorage.getItem('isSignedIn');
    if (isSignedIn === 'true') {
      onSignIn();
    }
  }, [onSignIn]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formData;

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Directly compare the formData with the hardcoded credentials
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('isSignedIn', 'true'); // Persist sign-in status
      onSignIn();
    } else {
      alert('Invalid username or password');
    }
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.username) formErrors.username = 'Username is required****';
    if (!formData.password) formErrors.password = 'Password is required****';
    return formErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className='signInComp'>
      <div className="signIn">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit} className='signInForm'>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder='Username'
          />
          {errors.username && <p className='error'>{errors.username}</p>}
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder='Password'
          />
          {errors.password && <p className='error'>{errors.password}</p>}
          <button type="submit">Sign In</button>
          <p>No Account? Register <span onClick={onRegisterClick}>Here</span></p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
