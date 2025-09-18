import { useContext } from 'react';
import { CountriesContext } from '../context/CountriesContext';

const Countries = () => {
const { region, setRegion, countries, loading } = useContext(CountriesContext);

  const regions = [
    { name: 'Europe', image: '/images/europe.jpg' },
    { name: 'Africa', image: '/images/africa.jpg' },
    { name: 'Americas', image: '/images/americas.jpg' },
    { name: 'Asia', image: '/images/asia.jpg' },
    { name: 'Oceania', image: '/images/oceanien.jpg' },
  ];

  return (
    <>
     <div className="region-container">
        <h2 className="region-title">Choose Your Region</h2>
          <div className="region-cards">
        {regions.map(region => (
          <button
            key={region.name}
            onClick={() => setRegion(region.name)}
            className="region-buttons"
          >
            <img src={region.image} alt={region.name} />
            <p>{region.name}</p>
          </button>
        ))}
      </div>

      {region && (
          <>
            <h3 className="flags-title">Countries in {region}</h3>

            {loading && <p className="loading-text">Loading countries...</p>}

            <div className="flags-container">
              {countries.map(country => (
                <div
                  key={country.cca3}
                  className="flag-card"
                  tabIndex={0}
                  role="button"
                >
                  <img
                    src={country.flags.svg}
                    alt={`Flag of ${country.name.common}`}
                  />
                  <p>{country.name.common}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Countries;


