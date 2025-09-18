import Navbar from './Navbar'; 

const Header = () => {
    return ( 

    <section className="hero-section">
      <video autoPlay loop muted playsInline className="hero-video">
      <source src="/images/videos/hero.mp4" />
      </video>
        <Navbar />
      <div className="hero-content">
        <h1>Discover the World, One Country at a Time</h1>
        <p>
          Explore detailed insights about countries across the globe — from geography and culture to population and history.
        </p>
      </div>
    </section>
  );
};

 
            {/* <div className="button-bar">
            <div className="hero-buttons">
                <button className="nav-button" onClick={() => navigate('/Countries')}>Study countries</button>
                <button className="nav-button" onClick={() => navigate('/Collection')}>Collection</button>
                <button className="nav-button" onClick={() => navigate('/Quiz')}>Quiz</button>
                <button className="nav-button" onClick={() => navigate('/Leaderboard')}>Leaderboard</button>
            </div>
            </div>  */}

 
export default Header;