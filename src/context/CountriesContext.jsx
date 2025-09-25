import { createContext, useState, useEffect } from 'react';

export const CountriesContext = createContext();
export const CountriesProvider = ({ children }) => {
  const [region, setRegion] = useState(null);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

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

  const response = await fetch(`https://restcountries.com/v3.1/region/${region}`);
    if (!response.ok) {
      setCountries([]);
      setLoading(false);
      return;
    }

    const data = await response.json();
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
    setModalMessage(`${country.name.common} finns redan sparat.`);
    return;
  }
  setSavedCountries(prev => [...prev, country]);
  setModalMessage(`${country.name.common} sparades!`);
};


  return (
    <CountriesContext.Provider
      value={{ region, setRegion, countries, loading, savedCountries, saveCountry, modalMessage, setModalMessage }} >
      {children}
    </CountriesContext.Provider>
  );
};





