import './SignIn.css';

// eslint-disable-next-line react/prop-types
const SignIn = ({ onSignIn, onRegisterClick }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    // Retrieve stored credentials from localStorage
    const storedCredentials = JSON.parse(localStorage.getItem('userCredentials'));

    if (storedCredentials && storedCredentials.username === username && storedCredentials.password === password) {
      onSignIn();
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className='signInComp'>
      <div className="signIn">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit} className='signInForm'>
          <input type="text" name="username" placeholder='username' required />
          <input type="password" name="password" placeholder='password' required />
          <button type="submit">Sign In</button>
          <p>No Account? Register <span onClick={onRegisterClick}>Here</span></p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

