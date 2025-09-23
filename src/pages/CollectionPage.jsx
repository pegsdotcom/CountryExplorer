import { useContext } from 'react';
import { CountriesContext } from '../context/CountriesContext';
import { Link } from 'react-router-dom';
import '../styles/Countrypage.css';

const CollectionPage = () => {
  const { savedCountries } = useContext(CountriesContext);

  if (savedCountries.length === 0) return <p>Du har inga sparade länder.</p>;

  return (
    <>
      <h1 className='collection-title'>Your Collection</h1>
      <div className="collection-grid">
        {savedCountries.map(country => (
          <Link key={country.cca3} to={`/countries/${country.name.common}`} className="country-card">
            <img src={country.flags.svg}/>
            <p>{country.name.common}</p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default CollectionPage;


