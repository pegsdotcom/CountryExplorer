const Header = () => {
    return ( 
        <header className="hero">
            <div className="title-section">
                <h1 className="header-title">Explore the World</h1>
                <p className="header-paragraph">Learn about countries, test your knowledge and build your collection.</p>
            </div>  
            <div className="button-bar">
            <div className="hero-buttons">
                <button className="nav-button">Study countries</button>
                <button className="nav-button">Collection</button>
                <button className="nav-button">Quiz</button>
                <button className="nav-button">Leaderboard</button>
            </div>
            </div>
        </header>
     );
}
 
export default Header;