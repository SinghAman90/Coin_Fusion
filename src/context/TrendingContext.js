import { createContext, useLayoutEffect, useState } from "react";

export const TrendingContext = createContext({});

export const TrendingProvider = ({ children }) => {
  const [TrendData, setTrendData] = useState();
  
  const getTrendData = async () => {
    try {
      var data = await fetch(
        `https://api.coingecko.com/api/v3/search/trending`
      )
        .then((res) => res.json())
        .then((json) => json);
      
    } catch (error) {
      console.log(error);
    }
    console.log(data);
    setTrendData(data);
  };
  const resetTrendingResult = ()=> {
    getTrendData();
  }
  useLayoutEffect(() => {
    getTrendData();
  }, []);
  return (
    <TrendingContext.Provider
      value={{
        TrendData,
        resetTrendingResult
      }}
    >
      {children}
    </TrendingContext.Provider>
  );
};
