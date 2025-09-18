import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/collection" className="nav-link">Collection</Link>
        <Link to="/om-oss" className="nav-link">Om oss</Link>
      </div>

        <div className="nav-center">
        <div className="logo-wrapper">
          <Link to="/" className="logo">
            <i className="fa-solid fa-globe"></i>
          </Link>
        </div>
        <span className="logo-text">Country Explorer</span>
      </div>

      <div className="nav-right">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
      </div>
    </nav>
    
  );
};

export default Navbar;