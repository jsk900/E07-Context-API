import { useState, useEffect } from 'react';

import MyContext from './MyContext';

const MyProvider = ({ children }) => {
  const [data, setData] = useState({
    results: null,
    loading: true,
    error: null,
  });

  const [extra, setExtra] = useState(false);
  const headerText = 'This is my Header';
  const footerText = '© Joseph Urbina 2022';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users`
        );
        const results = await response.json();
        setData({ results, loading: false, error: null });
      } catch (error) {
        setData({ results: null, loading: false, error });
      }
    };
    fetchData();
  }, []);

  return (
    <MyContext.Provider
      value={{ extra, setExtra, data, headerText, footerText }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
