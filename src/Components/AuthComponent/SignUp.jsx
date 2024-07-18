// import './SignUp.css'
// import { useState } from 'react';

// let SignUp = () =>{

//     const [isSignedUp, setIsSignedUp] = useState(false);
    
//     let buttonText = `SIGN UP`;

//     return(
//         <div className="wrapper">
//             <div className='signUp'>
//             <h1>Sign up</h1>
//             <form action="POST" className='signUpForm'>
//                 <input type="text" placeholder='username' required />
//                 <input type="password" placeholder='password' required />
//                 <input type="password" placeholder='repeat password' required />
//                 <button type="submit">{buttonText}</button>
//             </form>
            
//         </div>
//         </div>
//     )
// }

// export default SignUp;

import './SignUp.css';
import { useState } from 'react';

const SignUp = () => {
  const [isSignedUp, setIsSignedUp] = useState(false);
  
  let buttonText = `SIGN UP`;

  return (
    <div className="wrapper">
      <div className='signUp'>
        <h1>Sign up</h1>
        <form action="POST" className='signUpForm'>
          <input type="text" placeholder='username' required />
          <input type="password" placeholder='password' required />
          <input type="password" placeholder='repeat password' required />
          <button type="submit">{buttonText}</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
