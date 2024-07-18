// import { useState } from 'react'
// import './App.css'
// import Landing from './Components/Landing Component/Landing'
// import SignUp from './Components/AuthComponent/SignUp'
// import SignIn from './Components/AuthComponent/SignIn'

// function App() {

//   let username = `MyEmployeeApp@mLab.com`;
//   let password = `PassW0rd123`;


//   const [isLoggedIn, setIsLoggedIn] = useState(false)

//     const LoggingIn = () => {
//       if(1 !== 1){
//         setIsLoggedIn(true);
//       }
//     }
//     let Auth = (!isLoggedIn) ? <SignIn /> : <SignUp/>;

//   return (
//     <>
//       <nav>
//         <Landing />
//       </nav>

//       <main>
//         {Auth}
//       </main>
//     </>
//   )
// }

// export default App


// import { useState } from 'react';
// import './App.css';
// import Landing from './Components/Landing Component/Landing';
// import SignUp from './Components/AuthComponent/SignUp';
// import SignIn from './Components/AuthComponent/SignIn';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const LoggingIn = () => {
//     // Placeholder condition for logging in
//     // You can replace this with actual authentication logic
//     setIsLoggedIn(true);
//   };

//   // Show SignIn if not logged in, otherwise show SignUp
//   let Auth = !isLoggedIn ? <SignIn onSignIn={LoggingIn} /> : <SignUp />;

//   return (
//     <>
//       <nav>
//         <Landing />
//       </nav>
//       <main>
//         {Auth}
//       </main>
//     </>
//   );
// }

// export default App;


import { useState } from 'react';
import './App.css';
import ViewUser from './Components/View Component/ViewUser';
import Landing from './Components/Landing Component/Landing';
import SignUp from './Components/AuthComponent/SignUp';
import SignIn from './Components/AuthComponent/SignIn';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const LoggingIn = () => {
    // Placeholder condition for logging in
    // You can replace this with actual authentication logic
    setIsLoggedIn(true);
  };

  // Show SignIn if not logged in, otherwise show SignUp
  let Auth = !isLoggedIn ? <SignIn onSignIn={LoggingIn} /> : <SignUp />;

  return (
    <>
      <nav>
        <Landing />
      </nav>
      <main>
        {/* {Auth} */}
        <ViewUser />
      </main>
    </>
  );
}

export default App;
