import React, { createContext, useState, useEffect } from 'react';

export const CountriesContext = createContext();

export const CountriesProvider = ({ children }) => {
  const [region, setRegion] = useState(null);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!region) return;

    setLoading(true);

    const fetchRegion = async () => {
      const response = await fetch(`https://restcountries.com/v3.1/region/${region}`);
      const data = await response.json();

      setCountries(data);
      setLoading(false);
    };

    fetchRegion();
  }, [region]);

  return (
    <CountriesContext.Provider value={{ region, setRegion, countries, loading }}>
      {children}
    </CountriesContext.Provider>
  );
};



