import './SignUp.css';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const SignUp = ({ onSignInClick }) => {
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    const repeatPassword = e.target.repeatPassword.value;

    if (password === repeatPassword) {
      // Store user credentials in localStorage
      localStorage.setItem('userCredentials', JSON.stringify({ username, password }));
      setIsSignedUp(true);
      setTimeout(() => {
        onSignInClick(); // Navigate to SignIn after a short delay
      }, 2000); // 2 seconds delay to show success message
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <div className="wrapper">
      <div className='signUp'>
        <h1>Sign up</h1>
        <form onSubmit={handleSignUp} className='signUpForm'>
          <input type="text" name="username" placeholder='username' required />
          <input type="password" name="password" placeholder='password' required />
          <input type="password" name="repeatPassword" placeholder='repeat password' required />
          <button type="submit">SIGN UP</button>
          {isSignedUp && <p>Registration successful! You can now sign in.</p>}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
