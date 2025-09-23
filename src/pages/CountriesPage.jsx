import { useContext } from 'react';
import { CountriesContext } from '../context/CountriesContext';
import { useNavigate } from 'react-router-dom';
import '../styles/Countrypage.css';

const regions = [
  { name: 'Europe', image: '/images/Europe.png' },
  { name: 'Africa', image: '/images/Africa.png' },
  { name: 'Americas', image: '/images/America.png' },
  { name: 'Asia', image: '/images/Asien.png' },
  { name: 'Oceania', image: '/images/Oceania.png' },
];

const CountriesPage = () => {
  const navigate = useNavigate();
  const { region, setRegion, countries, loading } = useContext(CountriesContext);

  return (
    <div className="region-container">
      <h2 className="region-title">Choose Your Region</h2>

      <div className="region-cards">
        {regions.map(({ name, image }) => (
          <button key={name} onClick={() => setRegion(name)} className="region-buttons">
            <img src={image}/>
            <p>{name}</p>
          </button>
        ))}
      </div>

    {region && (
      <>
        <h3 className="flags-title">Countries in {region}</h3>
          {loading ? (
            <p className="loading-text">Loading countries...</p>
          ) : (
        <div className="flags-container">
          {countries.map(({ flags, name }) => (
            <div key={name.common} className="flag-card" onClick={() => navigate(`/countries/${name.common}`)} >
              <img src={flags.svg}/>
              <p>{name.common}</p>
            </div>
            ))}
        </div>
          )}
        </>
      )}
    </div>
  );
};

export default CountriesPage;
