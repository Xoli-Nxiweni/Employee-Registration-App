import { useState, useEffect } from 'react';
import './App.css';
import ViewUser from './Components/View Component/ViewEmployee';
import Landing from './Components/Landing Component/Landing';
import SignUp from './Components/AuthComponent/SignUp';
import SignIn from './Components/AuthComponent/SignIn';
import AddUser from './Components/Adding Component/AddEmployee';
import ViewDeletedUsers from './Components/Deleted Users Component/DeletedEmployee';

let App = () =>{
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [activeComponent, setActiveComponent] = useState('viewEmployees');

  useEffect(() => {
    const userCredentials = localStorage.getItem('userCredentials');
    setIsLoggedIn(userCredentials ? true : false);
  }, []);

  const LoggingIn = () => {
    setIsLoggedIn(true);
  };

  const handleNavClick = (component) => {
    setActiveComponent(component);
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveComponent('viewEmployees');
  };

  const handleRegisterClick = () => {
    setShowSignUp(true);
  };

  const handleSignInClick = () => {
    setShowSignUp(false);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'addEmployee':
        return <AddUser onBack={() => setActiveComponent('viewEmployees')} />;
      case 'viewEmployees':
        return <ViewUser onAddUserClick={() => setActiveComponent('addEmployee')} />;
      case 'viewDeletedEmployees':
        return <ViewDeletedUsers />;
      default:
        return <ViewUser onAddUserClick={() => setActiveComponent('addEmployee')} />;
    }
  };

  return (
    <>
      <nav>
        <Landing 
          onLogout={handleLogout} 
          showLogout={isLoggedIn && !showSignUp} 
          onNavClick={handleNavClick} 
          activeLink={activeComponent}
        />
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
            {isLoggedIn && renderComponent()}
          </div>
        )}
      </main>
    </>
  );
}

export default App;
