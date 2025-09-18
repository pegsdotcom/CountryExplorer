import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Collection = () => {
  const savedCountries = useSelector((state) => state.countries.savedCountries);
  const navigate = useNavigate();

  const handleCountryClick = (countryName) => {
    navigate(`/countries/${countryName}`);
  };

  return (
    <div className="collection-container">
      <h1>Sparade Länder</h1>
      {savedCountries.length === 0 ? (
        <p>Du har inte sparat några länder ännu.</p>
      ) : (
        <div className="country-grid">
          {savedCountries.map((country) => (
            <div
              key={country.name.common}
              className="country-card"
              onClick={() => handleCountryClick(country.name.common)}
            >
              <img
                src={country.flags.svg || country.flags.png}
                alt={`Flagga för ${country.name.common}`}
                className="flag-img"
              />
              <p>{country.name.common}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Collection;
