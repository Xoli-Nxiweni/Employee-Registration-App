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


// import { useState } from 'react';
// import './App.css';
// import ViewUser from './Components/View Component/ViewUser';
// import Landing from './Components/Landing Component/Landing';
// import SignUp from './Components/AuthComponent/SignUp';
// import SignIn from './Components/AuthComponent/SignIn';
// import AddUser from './Components/Adding Component/AddUser';

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
//         {/* {Auth} */}
//         <ViewUser />
//         <AddUser />
//       </main>
//     </>
//   );
// }

// export default App;

// import { useState } from 'react';
// import './App.css';
// import ViewUser from './Components/View Component/ViewUser';
// import Landing from './Components/Landing Component/Landing';
// import SignUp from './Components/AuthComponent/SignUp';
// import SignIn from './Components/AuthComponent/SignIn';
// import AddUser from './Components/Adding Component/AddUser';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [showAddUser, setShowAddUser] = useState(false);

//   const LoggingIn = () => {
//     // Placeholder condition for logging in
//     // You can replace this with actual authentication logic
//     setIsLoggedIn(true);
//   };

//   const handleAddUserClick = () => {
//     setShowAddUser(true);
//   };

//   const handleBackToViewUser = () => {
//     setShowAddUser(false);
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
//         {isLoggedIn &&(
//           <div>
//             {showAddUser ? (
//               <AddUser onBack={handleBackToViewUser} />
//             ) : (
//               <ViewUser onAddUserClick={handleAddUserClick} />
//             )}
//           </div>
//         )}
//       </main>
//     </>
//   );
// }

// export default App;

// import { useState, useEffect } from 'react';
// import './App.css';
// import ViewUser from './Components/View Component/ViewUser';
// import Landing from './Components/Landing Component/Landing';
// import SignUp from './Components/AuthComponent/SignUp';
// import SignIn from './Components/AuthComponent/SignIn';
// import AddUser from './Components/Adding Component/AddUser';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [showAddUser, setShowAddUser] = useState(false);

//   useEffect(() => {
//     // Check localStorage for login status on component mount
//     const userCredentials = localStorage.getItem('userCredentials');
//     setIsLoggedIn(userCredentials ? true : false);
//   }, []);

//   const LoggingIn = () => {
//     setIsLoggedIn(true);
//   };

//   const handleAddUserClick = () => {
//     setShowAddUser(true);
//   };

//   const handleBackToViewUser = () => {
//     setShowAddUser(false);
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     localStorage.removeItem('userCredentials'); // Remove user credentials on logout
//   };

//   return (
//     <>
//       <nav>
//         <Landing />
//         {isLoggedIn && <button onClick={handleLogout}>Logout</button>}
//       </nav>
//       <main>
//         {!isLoggedIn ? (
//           <>
//             <SignIn onSignIn={LoggingIn} />
//             <SignUp />
//           </>
//         ) : (
//           <div>
//             {showAddUser ? (
//               <AddUser onBack={handleBackToViewUser} />
//             ) : (
//               <ViewUser onAddUserClick={handleAddUserClick} />
//             )}
//           </div>
//         )}
//       </main>
//     </>
//   );
// }

// export default App;

// import { useState, useEffect } from 'react';
// import './App.css';
// import ViewUser from './Components/View Component/ViewUser';
// import Landing from './Components/Landing Component/Landing';
// import SignUp from './Components/AuthComponent/SignUp';
// import SignIn from './Components/AuthComponent/SignIn';
// import AddUser from './Components/Adding Component/AddUser';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [showSignUp, setShowSignUp] = useState(false);
//   const [showAddUser, setShowAddUser] = useState(false);

//   useEffect(() => {
//     // Check localStorage for login status on component mount
//     const userCredentials = localStorage.getItem('userCredentials');
//     setIsLoggedIn(userCredentials ? true : false);
//   }, []);

//   const LoggingIn = () => {
//     setIsLoggedIn(true);
//   };

//   const handleAddUserClick = () => {
//     setShowAddUser(true);
//   };

//   const handleBackToViewUser = () => {
//     setShowAddUser(false);
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     localStorage.removeItem('userCredentials'); // Remove user credentials on logout
//   };

//   const handleRegisterClick = () => {
//     setShowSignUp(true);
//   };

//   const handleSignInClick = () => {
//     setShowSignUp(false);
//   };

//   return (
//     <>
//       <nav>
//         <Landing />
//         {isLoggedIn && <button onClick={handleLogout}>Logout</button>}
//       </nav>
//       <main>
//         {!isLoggedIn ? (
//           showSignUp ? (
//             <SignUp onSignInClick={handleSignInClick} />
//           ) : (
//             <SignIn onSignIn={LoggingIn} onRegisterClick={handleRegisterClick} />
//           )
//         ) : (
//           <div>
//             {showAddUser ? (
//               <AddUser onBack={handleBackToViewUser} />
//             ) : (
//               <ViewUser onAddUserClick={handleAddUserClick} />
//             )}
//           </div>
//         )}
//       </main>
//     </>
//   );
// }

// export default App;

// import { useState, useEffect } from 'react';
// import './App.css';
// import ViewUser from './Components/View Component/ViewUser';
// import Landing from './Components/Landing Component/Landing';
// import SignUp from './Components/AuthComponent/SignUp';
// import SignIn from './Components/AuthComponent/SignIn';
// import AddUser from './Components/Adding Component/AddUser';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [showSignUp, setShowSignUp] = useState(false);
//   const [showAddUser, setShowAddUser] = useState(false);

//   useEffect(() => {
//     // Check localStorage for login status on component mount
//     const userCredentials = localStorage.getItem('userCredentials');
//     setIsLoggedIn(userCredentials ? true : false);
//   }, []);

//   const LoggingIn = () => {
//     setIsLoggedIn(true);
//   };

//   const handleAddUserClick = () => {
//     setShowAddUser(true);
//   };

//   const handleBackToViewUser = () => {
//     setShowAddUser(false);
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     localStorage.removeItem('userCredentials'); // Remove user credentials on logout
//   };

//   const handleRegisterClick = () => {
//     setShowSignUp(true);
//   };

//   const handleSignInClick = () => {
//     setShowSignUp(false);
//   };

//   return (
//     <>
//       <nav>
//         <Landing />
//         {isLoggedIn && <button onClick={handleLogout}>Logout</button>}
//       </nav>
//       <main>
//         {!isLoggedIn ? (
//           showSignUp ? (
//             <SignUp onSignInClick={handleSignInClick} />
//           ) : (
//             <SignIn onSignIn={LoggingIn} onRegisterClick={handleRegisterClick} />
//           )
//         ) : (
//           <div>
//             {showAddUser ? (
//               <AddUser onBack={handleBackToViewUser} />
//             ) : (
//               <ViewUser onAddUserClick={handleAddUserClick} />
//             )}
//           </div>
//         )}
//       </main>
//     </>
//   );
// }

// export default App;


// import { useState, useEffect } from 'react';
// import './App.css';
// import ViewUser from './Components/View Component/ViewUser';
// import Landing from './Components/Landing Component/Landing';
// import SignUp from './Components/AuthComponent/SignUp';
// import SignIn from './Components/AuthComponent/SignIn';
// import AddUser from './Components/Adding Component/AddUser';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [showSignUp, setShowSignUp] = useState(false);
//   const [showAddUser, setShowAddUser] = useState(false);

//   useEffect(() => {
//     // Check localStorage for login status on component mount
//     const userCredentials = localStorage.getItem('userCredentials');
//     setIsLoggedIn(userCredentials ? true : false);
//   }, []);

//   const LoggingIn = () => {
//     setIsLoggedIn(true);
//   };

//   const handleAddUserClick = () => {
//     setShowAddUser(true);
//   };

//   const handleBackToViewUser = () => {
//     setShowAddUser(false);
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     localStorage.removeItem('userCredentials'); // Remove user credentials on logout
//   };

//   const handleRegisterClick = () => {
//     setShowSignUp(true);
//   };

//   const handleSignInClick = () => {
//     setShowSignUp(false);
//   };

//   return (
//     <>
//       <nav>
//         <Landing />
//         {isLoggedIn && <button onClick={handleLogout}>Logout</button>}
//       </nav>
//       <main>
//         {!isLoggedIn ? (
//           showSignUp ? (
//             <SignUp onSignInClick={handleSignInClick} />
//           ) : (
//             <SignIn onSignIn={LoggingIn} onRegisterClick={handleRegisterClick} />
//           )
//         ) : (
//           <div>
//             {showAddUser ? (
//               <AddUser onBack={handleBackToViewUser} />
//             ) : (
//               <ViewUser onAddUserClick={handleAddUserClick} />
//             )}
//           </div>
//         )}
//       </main>
//     </>
//   );
// }

// export default App;


// import { useState, useEffect } from 'react';
// import './App.css';
// import ViewUser from './Components/View Component/ViewUser';
// import Landing from './Components/Landing Component/Landing';
// import SignUp from './Components/AuthComponent/SignUp';
// import SignIn from './Components/AuthComponent/SignIn';
// import AddUser from './Components/Adding Component/AddUser';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [showSignUp, setShowSignUp] = useState(false);
//   const [showAddUser, setShowAddUser] = useState(false);

//   useEffect(() => {
//     // Check localStorage for login status on component mount
//     const userCredentials = localStorage.getItem('userCredentials');
//     setIsLoggedIn(userCredentials ? true : false);
//   }, []);

//   const LoggingIn = () => {
//     setIsLoggedIn(true);
//   };

//   const handleAddUserClick = () => {
//     setShowAddUser(true);
//   };

//   const handleBackToViewUser = () => {
//     setShowAddUser(false);
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     // Credentials remain in localStorage
//   };

//   const handleRegisterClick = () => {
//     setShowSignUp(true);
//   };

//   const handleSignInClick = () => {
//     setShowSignUp(false);
//   };

//   return (
//     <>
//       <nav>
//         <Landing onLogout={handleLogout} />
//       </nav>
//       <main>
//         {!isLoggedIn ? (
//           showSignUp ? (
//             <SignUp onSignInClick={handleSignInClick} />
//           ) : (
//             <SignIn onSignIn={LoggingIn} onRegisterClick={handleRegisterClick} />
//           )
//         ) : (
//           <div>
//             {showAddUser ? (
//               <AddUser onBack={handleBackToViewUser} />
//             ) : (
//               <ViewUser onAddUserClick={handleAddUserClick} />
//             )}
//           </div>
//         )}
//       </main>
//     </>
//   );
// }

// export default App;


// import { useState, useEffect } from 'react';
// import './App.css';
// import ViewUser from './Components/View Component/ViewUser';
// import Landing from './Components/Landing Component/Landing';
// import SignUp from './Components/AuthComponent/SignUp';
// import SignIn from './Components/AuthComponent/SignIn';
// import AddUser from './Components/Adding Component/AddUser';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [showSignUp, setShowSignUp] = useState(false);
//   const [showAddUser, setShowAddUser] = useState(false);

//   useEffect(() => {
//     const userCredentials = localStorage.getItem('userCredentials');
//     setIsLoggedIn(userCredentials ? true : false);
//   }, []);

//   const LoggingIn = () => {
//     setIsLoggedIn(true);
//   };

//   const handleAddUserClick = () => {
//     setShowAddUser(true);
//   };

//   const handleBackToViewUser = () => {
//     setShowAddUser(false);
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//   };

//   const handleRegisterClick = () => {
//     setShowSignUp(true);
//   };

//   const handleSignInClick = () => {
//     setShowSignUp(false);
//   };

//   return (
//     <>
//       <nav>
//         <Landing onLogout={handleLogout} showLogout={isLoggedIn && !showSignUp} />
//       </nav>
//       <main>
//         {!isLoggedIn ? (
//           showSignUp ? (
//             <SignUp onSignInClick={handleSignInClick} />
//           ) : (
//             <SignIn onSignIn={LoggingIn} onRegisterClick={handleRegisterClick} />
//           )
//         ) : (
//           <div>
//             {showAddUser ? (
//               <AddUser onBack={handleBackToViewUser} />
//             ) : (
//               <ViewUser onAddUserClick={handleAddUserClick} />
//             )}
//           </div>
//         )}
//       </main>
//     </>
//   );
// }

// export default App;

// import { useState, useEffect } from 'react';
// import './App.css';
// import ViewUser from './Components/View Component/ViewUser';
// import Landing from './Components/Landing Component/Landing';
// import SignUp from './Components/AuthComponent/SignUp';
// import SignIn from './Components/AuthComponent/SignIn';
// import AddUser from './Components/Adding Component/AddUser';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [showSignUp, setShowSignUp] = useState(false);
//   const [showAddUser, setShowAddUser] = useState(false);

//   useEffect(() => {
//     const userCredentials = localStorage.getItem('userCredentials');
//     setIsLoggedIn(userCredentials ? true : false);
//   }, []);

//   const LoggingIn = () => {
//     setIsLoggedIn(true);
//   };

//   const handleAddUserClick = () => {
//     setShowAddUser(true);
//   };

//   const handleBackToViewUser = () => {
//     setShowAddUser(false);
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//   };

//   const handleRegisterClick = () => {
//     setShowSignUp(true);
//   };

//   const handleSignInClick = () => {
//     setShowSignUp(false);
//   };

//   return (
//     <>
//       <nav>
//         <Landing onLogout={handleLogout} showLogout={isLoggedIn && !showSignUp} />
//       </nav>
//       <main>
//         {!isLoggedIn ? (
//           showSignUp ? (
//             <SignUp onSignInClick={handleSignInClick} />
//           ) : (
//             <SignIn onSignIn={LoggingIn} onRegisterClick={handleRegisterClick} />
//           )
//         ) : (
//           <div>
//             {showAddUser ? (
//               <AddUser onBack={handleBackToViewUser} />
//             ) : (
//               <ViewUser onAddUserClick={handleAddUserClick} />
//             )}
//           </div>
//         )}
//       </main>
//     </>
//   );
// }

// export default App;

import { useState, useEffect } from 'react';
import './App.css';
import ViewUser from './Components/View Component/ViewUser';
import Landing from './Components/Landing Component/Landing';
import SignUp from './Components/AuthComponent/SignUp';
import SignIn from './Components/AuthComponent/SignIn';
import AddUser from './Components/Adding Component/AddUser';
// import DeletedUser from './Components/Deleted Users Component/DeletedUsers';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showAddUser, setShowAddUser] = useState(false);

  useEffect(() => {
    const userCredentials = localStorage.getItem('userCredentials');
    setIsLoggedIn(userCredentials ? true : false);
  }, []);

  const LoggingIn = () => {
    setIsLoggedIn(true);
  };

  const handleAddUserClick = () => {
    setShowAddUser(true);
  };

  const handleBackToViewUser = () => {
    setShowAddUser(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleRegisterClick = () => {
    setShowSignUp(true);
  };

  const handleSignInClick = () => {
    setShowSignUp(false);
  };

  return (
    <>
      <nav>
        <Landing onLogout={handleLogout} showLogout={isLoggedIn && !showSignUp} />
      </nav>
      <main>
        {!isLoggedIn ? (
          showSignUp ? (
            <SignUp onSignInClick={handleSignInClick} />
          ) : (
            <SignIn onSignIn={LoggingIn} onRegisterClick={handleRegisterClick} />
          )
        ) : (
          <div>
            {showAddUser ? (
              <AddUser onBack={handleBackToViewUser} />
            ) : (
              <ViewUser onAddUserClick={handleAddUserClick} />
            )}
            
          </div>
        )}
      </main>
    </>
  );
}

export default App;
