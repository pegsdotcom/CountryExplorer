import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedRegion, fetchRegions } from '../redux/countriesSlice';
import { useNavigate } from 'react-router-dom';

const regions = ['Europe', 'Asia', 'Oceania', 'Americas', 'Africa'];

const Countries = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { countries, selectedRegion, loading, error } = useSelector(({ countries }) => countries);

  useEffect(() => {
    if (selectedRegion) {
      dispatch(fetchRegions(selectedRegion));
    }
 }, [selectedRegion, dispatch]);

  return (
    <div className="countries-page">
      <h2>Choose a region</h2>
      <div className="region-buttons">
        {regions.map((region) => (
          <button key={region} className={`region-button ${selectedRegion === region ? 'active' : ''}`}
            onClick={() => dispatch(setSelectedRegion(region))}> {region}</button>
        ))}
      </div>

      {loading && <p>Loading countries...</p>}
      {error && <p>Error: {error}</p>}

      <div className="countries-grid">
        {countries.map(({ name: { common }, flags: { svg } }) => (
          <div key={common} className="country-card" onClick={() => navigate(`/countries/${common}`)}>
            <img src={svg} alt={common} />
            <p>{common}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countries;

