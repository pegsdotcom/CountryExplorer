import { Link, NavLink } from 'react-router-dom';



const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/" className="logo-link">
            <i className="fa-solid fa-globe"></i>
          </Link>
          <span className="logo-text">Country Explorer</span>
        </div>

    <div className="buttons-bar">
      <NavLink to="/" className="nav-btn">Home</NavLink>
      <NavLink to="/Countries" className="nav-btn">Study Countries</NavLink>
      <NavLink to="/Collection" className="nav-btn">Your Collection</NavLink>
      <NavLink to="/Quiz" className="nav-btn">Quiz</NavLink>
      <NavLink to="/Leaderboard" className="nav-btn">Leaderboard</NavLink>
        </div>
      </div>
    </nav>
  );
};
    
export default Navbar;