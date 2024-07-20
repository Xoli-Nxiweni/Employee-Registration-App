import './Landing.css';

const Landing = ({ onLogout, showLogout }) => {
  return (
    <div className='NavBar'>
      <div className="logo">
        <img src="https://online.fliphtml5.com/cloph/booklogo.png?1697539965" alt="Logo" />
      </div>
      <ul className='Links'>
        <li><a href="#">Add Employee</a></li>
        <li><a href="#">View Employees</a></li>
        <li><a href="#">View Deleted Employees</a></li>
      </ul>
      <div className="navBtn">
        {showLogout && onLogout && <button onClick={onLogout}>Logout</button>}
      </div>
    </div>
  );
};

export default Landing;
