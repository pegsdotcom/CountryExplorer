import { createContext, useState, useEffect } from 'react';

export const CountriesContext = createContext();
export const CountriesProvider = ({ children }) => {
  const [region, setRegion] = useState(null);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [savedCountries, setSavedCountries] = useState(() => {
    const saved = localStorage.getItem('savedCountries');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('savedCountries', JSON.stringify(savedCountries));
  }, [savedCountries]);

  useEffect(() => {
    if (!region) return;
    const fetchRegion = async () => {
      setLoading(true);

      const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
      if (!res.ok) {
        setCountries([]);
        setLoading(false);
        return;
      }
      const data = await res.json();
      setCountries(data);
      setLoading(false);
    };

    fetchRegion().catch(() => {
      setCountries([]);
      setLoading(false);
    });
  }, [region]);

  const saveCountry = (country) => {
    const alreadySaved = savedCountries.some(c => c.name.common === country.name.common);
    if (alreadySaved) {
      alert(`${country.name.common} finns redan sparat.`);
      return;
    }
    setSavedCountries(prev => [...prev, country]);
    alert(`${country.name.common} sparades!`);
  };

  return (
    <CountriesContext.Provider
      value={{ region, setRegion, countries, loading, savedCountries, saveCountry }} >
      {children}
    </CountriesContext.Provider>
  );
};





