import './Landing.css';

// eslint-disable-next-line react/prop-types
const Landing = ({ onLogout, showLogout, onNavClick, activeLink }) => {

  const logo = `< X O_ / >`;
  return (
    <div className='NavBar'>
      <div className="logo">
        <h1>{logo}</h1>
      </div>
      <ul className='Links'>
        <li>
          <a  
            className={activeLink === 'addEmployee' ? 'active' : ''} 
            onClick={() => onNavClick('addEmployee')}
          >
            Add Employee
          </a>
        </li>
        <li>
          <a
            className={activeLink === 'viewEmployees' ? 'active' : ''} 
            onClick={() => onNavClick('viewEmployees')}
          >
            View Active Employees
          </a>
        </li>
        <li>
          <a  
            className={activeLink === 'viewDeletedEmployees' ? 'active' : ''} 
            onClick={() => onNavClick('viewDeletedEmployees')}
          >
            View Removed Employees
          </a>
        </li>
      </ul>
      <div className="navBtn">
        {showLogout && onLogout && <button onClick={onLogout}>Logout</button>}
      </div>
    </div>
  );
};

export default Landing;
