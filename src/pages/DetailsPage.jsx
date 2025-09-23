import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CountriesContext } from '../context/CountriesContext';
import '../styles/Countrypage.css';


const DetailsPage = () => {
  const { countryName } = useParams();
  const { saveCountry } = useContext(CountriesContext);
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  const fetchCountry = async () => {
    setLoading(true);

    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    if (!response.ok) {
      setCountry(null);
      setLoading(false);
      return;
    }

    const data = await response.json();
    setCountry(data.length > 0 ? data[0] : null);
    setLoading(false);
  };

  fetchCountry().catch(() => {
    setCountry(null);
    setLoading(false);
  });
}, [countryName]);

if (loading) return <p>Laddar landets data...</p>;
if (!country) return <p>Landet hittades inte.</p>;

const currencyName = country.currencies ? Object.values(country.currencies)[0].name : 'N/A';

  return (
    <div className="details-container">
      <h2>{country.name.common}</h2>
      <img src={country.flags.svg} className="details-flag" />
      <p className='detail-p'><strong>Valuta:</strong> {currencyName}</p>
      <p className='detail-p'><strong>Befolkning:</strong> {country.population.toLocaleString()}</p>
      <p>
      <strong className='google'>Google Maps:</strong>{' '}
        <a href={country.maps.googleMaps} target="_blank" rel="noopener noreferrer" className='map-link'>
          Visa på karta
        </a>
      </p>
      <button onClick={() => saveCountry(country)} className='save-btn'>Save to your collection</button>
    </div>
  );
};

export default DetailsPage;


