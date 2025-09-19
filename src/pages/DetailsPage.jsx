import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CountriesContext } from '../context/CountriesContext';

const DetailsPage = () => {
  const { countryName } = useParams(); 
  const { saveCountry } = useContext(CountriesContext);
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  const fetchCountry = async () => {
    setLoading(true);

    const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    if (!res.ok) {
      setCountry(null);
      setLoading(false);
      return;
    }

    const data = await res.json();
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

const currencyName = country.currencies
  ? Object.values(country.currencies)[0].name : 'N/A';

  return (
    <div className="details-container">
      <h2>{country.name.common}</h2>
      <img src={country.flags.svg} alt={`Flagga av ${country.name.common}`} className="details-flag" />
      <p><strong>Valuta:</strong> {currencyName}</p>
      <p><strong>Befolkning:</strong> {country.population.toLocaleString()}</p>
      <p>
      <strong>Google Maps:</strong>{' '}
        <a href={country.maps.googleMaps} target="_blank" rel="noopener noreferrer">
          Visa på karta
        </a>
      </p>
      <button onClick={() => saveCountry(country)}>Spara landet</button>
    </div>
  );
};

export default DetailsPage;


