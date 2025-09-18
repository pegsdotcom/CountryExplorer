import { useContext } from 'react';
import { CountriesContext } from '../context/CountriesContext';

const Countries = () => {
  const { setRegion } = useContext(CountriesContext);
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
      </div>
    </>
  );
};

export default Countries;


