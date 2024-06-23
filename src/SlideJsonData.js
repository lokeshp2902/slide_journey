import { createContext, useEffect, useState, useContext } from 'react';

const SlideContext = createContext({});

export const useSlideContext = () => {
  return useContext(SlideContext);
};

function SlideJsonData({ children }) {
  const [initialSlideInput, setInitialSlideInput] = useState({});

  useEffect(() => {
    // Fetch the JSON file
    fetch('/data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then((jsonData) => {
        // Store the JSON data in the state
        setInitialSlideInput(jsonData);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  return (
    <SlideContext.Provider value={initialSlideInput}>
      {children}
    </SlideContext.Provider>
  );
}

export default SlideJsonData;
