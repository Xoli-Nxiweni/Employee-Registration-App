import './Landing.css';

// eslint-disable-next-line react/prop-types
const Landing = ({ onLogout, showLogout, onNavClick, activeLink }) => {

  const logo = `https://car-brand-names.com/wp-content/uploads/2016/01/Volkswagen-Logo-1948.png`;
  return (
    <div className='NavBar'>
      <div className="logo">
        <img src={logo} alt="" />
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
            Active Employees
          </a>
        </li>
        <li>
          <a  
            className={activeLink === 'viewDeletedEmployees' ? 'active' : ''} 
            onClick={() => onNavClick('viewDeletedEmployees')}
          >
            Removed Employees
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
