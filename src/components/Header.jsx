const Header = () => {
    return ( 
    <>
    <section className="hero-section">
      <video autoPlay loop muted playsInline className="hero-video">
        <source src="/images/videos/hero.mp4" />
      </video>
      <div className="hero-content">
        <h1>Discover the World, One Country at a Time</h1>
        <p>Explore detailed insights about countries across the globe — from geography and culture to population and history.</p>
      </div>
    </section>
    </>
  );
};

export default Header;