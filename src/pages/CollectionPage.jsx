import { useContext } from 'react';
import { CountriesContext } from '../context/CountriesContext';
import { Link } from 'react-router-dom';

const CollectionPage = () => {
  const { savedCountries } = useContext(CountriesContext);

  if (savedCountries.length === 0) return <p>Du har inga sparade länder.</p>;

  return (
    <div className="collection-grid">
      {savedCountries.map(country => (
        <Link key={country.cca3} to={`/countries/${country.name.common}`} className="country-card">
        <img src={country.flags.svg} alt={`Flagga för ${country.name.common}`} />
        <p>{country.name.common}</p>
        </Link>
      ))}
    </div>
  );
};

export default CollectionPage;

