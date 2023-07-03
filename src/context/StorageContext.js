import { createContext, useContext, useEffect, useLayoutEffect, useState } from "react";
import { json } from "react-router-dom";
import { CryptoContext } from "./CryptoContext";

export const StorageContext = createContext({});

export const StorageProvider = ({ children }) => {
  const [allCoins, setAllCoins] = useState([])
  const [SavedData, setSavedData] = useState();
  let {currency , sortBy} = useContext(CryptoContext)
    const saveCoin = (coinID) => {
        let oldCoins = JSON.parse(localStorage.getItem("coins"))
        if(oldCoins.includes(coinID)){
            return null;
        }else{
            let newCoin = [...oldCoins, coinID]
            setAllCoins(newCoin);
            localStorage.setItem("coins", JSON.stringify(newCoin));
        }
    }
    const removeCoin = (coinID) => {
        let oldCoins = JSON.parse(localStorage.getItem("coins"));
        let newCoin = oldCoins.filter(coin => coin !== coinID);
        setAllCoins(newCoin)
        localStorage.setItem("coins", JSON.stringify(newCoin));
    }
    const getSavedData = async (totalCoins = allCoins) => {
        try {
          var data = await fetch(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${totalCoins.join(",")}&order=${sortBy}&per_page=2500&page=1&sparkline=false&locale=en`
          )
            .then((res) => res.json())
            .then((json) => json);
          
        } catch (error) {
          console.log(error);
        }
        console.log(data);
        setSavedData(data);
      };
    useEffect(()=> {
        if(allCoins.length > 0)
            getSavedData(allCoins);
        else
            setSavedData();
    }, [allCoins])
  useLayoutEffect(() => {
    let isThere = JSON.parse(localStorage.getItem("coins")) || false;
    if(!isThere){
        localStorage.setItem("coins", JSON.stringify([]));
    }else{
        let totalCoins = JSON.parse(localStorage.getItem("coins"))
        setAllCoins(totalCoins);
        if(totalCoins.length > 0){
            getSavedData(totalCoins);
        }
    }
  }, []);
  return (
    <StorageContext.Provider
      value={{
        saveCoin, allCoins, removeCoin, SavedData
      }}
    >
      {children}
    </StorageContext.Provider>
  );
};
