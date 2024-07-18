// import './SignIn.css';
// import SignUp from './SignUp';

// let SignIn = () =>{
// let buttonText = `Sign In`

//     return (
//         <div className='signInComp'>
//             <div className="signIn">
//                 <h1>Sign In</h1>
//                 <form action="POST" className='signInForm'>
//                     <input type="text" placeholder='username' required />
//                     <input type="password" placeholder='password' required />
//                     <button type="submit">{buttonText}</button>
//                     <p>No Account? Register <span>Here</span></p>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default SignIn;

import './SignIn.css';

const SignIn = ({ onSignIn }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add actual authentication logic here
    onSignIn();
  };

  let buttonText = `Sign In`;

  return (
    <div className='signInComp'>
      <div className="signIn">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit} className='signInForm'>
          <input type="text" placeholder='username' required />
          <input type="password" placeholder='password' required />
          <button type="submit">{buttonText}</button>
          <p>No Account? Register <span>Here</span></p>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
