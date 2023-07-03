import { createContext, useLayoutEffect, useState } from "react";

export const CryptoContext = createContext({});

export const CryptoProvider = ({ children }) => {
  const [cryptoData, setCryptoData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [coinSearch, setCoinSearch] = useState("");
  const [currency, setCurrency] = useState("usd");
  const [sortBy, setSortBy] = useState("market_cap_desc");
  const [currentPage, setCurrentPage] = useState(0);
  
  const [coinData, setCoinData] = useState();

  const getCoinData = async (coinId) => {
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=true&sparkline=false`
      )
        .then((res) => res.json())
        .then((json) => json);
      setCoinData(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getCryptoData = async () => {
    try {
      var data = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coinSearch}&order=${sortBy}&per_page=2500&page=1&sparkline=false&locale=en`
      )
        .then((res) => res.json())
        .then((json) => json);
      
    } catch (error) {
      console.log(error);
    }
    while(Number(data.length) <= currentPage*10){
      setCurrentPage(currentPage-1);
    }
    console.log(data.length);
    let i = currentPage * 10;
    const Data = [];
    for(let j = i ; j < i + 10 && Number(j) < data.length; j++){
      Data.push(data[j]);
    }
    setCryptoData(Data);
  };
  const getSearchResult = async (query) => {
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/search?query=${query}`
      )
        .then((res) => res.json())
        .then((json) => json);
      // console.log(data.coins);
      setSearchData(data.coins);
    } catch (error) {
      console.log(error);
    }
  };
  useLayoutEffect(() => {
    getCryptoData();
  }, [coinSearch, currency, sortBy, currentPage]);
  return (
    <CryptoContext.Provider
      value={{
        cryptoData,
        searchData,
        currency,
        getSearchResult,
        setCoinSearch,
        setSearchData,
        setCurrency,
        sortBy, setSortBy,
        currentPage, setCurrentPage,
        getCoinData, coinData
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
};
