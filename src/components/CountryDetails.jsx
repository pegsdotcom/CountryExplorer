import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { saveCountry } from '../redux/countriesSlice';

const CountryDetails = () => {
  const { countryName } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const countries = useSelector(state => state.countries.countries);
  const country = countries.find(c => c.name.common.toLowerCase() === countryName.toLowerCase());

  if (!country) {
    return <p className="not-found">Country not found</p>;
  }
  const flag = country.flags.svg || country.flags.png;
  const name = country.name.common;
  const population = country.population.toLocaleString();
  const currencies = country.currencies;
  const currencyName = currencies ? Object.values(currencies)[0].name : 'Unknown';
  const googleMapsLink = country.maps?.googleMaps;

  const handleSave = () => {
    dispatch(saveCountry(country));
    alert(`${name} saved!`);
  };

  return (
    <div className="country-details">
      <h1 className="country-name">{name}</h1>
      <img src={flag} alt={`Flag of ${name}`} className="country-flag" />
      <p className="country-info"><strong>Population:</strong> {population}</p>
      <p className="country-info"><strong>Currency:</strong> {currencyName}</p>
      {googleMapsLink && (
        <p className="country-info">
          <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" className="map-link">
            View on Google Maps
          </a>
        </p>
      )}
      <div className="button-group">
        <button onClick={handleSave} className="btn save-btn">Save Country</button>
        <button onClick={() => navigate(-1)} className="btn back-btn">Go Back</button>
      </div>
    </div>
  );
};

export default CountryDetails;
