import React, { useContext } from "react";
import Search from "./Search";
import submitIcon from "../assets/submit-icon.svg"
import selectIcon from "../assets/select-icon.svg"
import { CryptoContext } from "../context/CryptoContext";
import { useRef } from "react";
const Filter = () => {
  let {setCurrency, setSortBy} = useContext(CryptoContext);
  const currencyRef = useRef(null);
  const handleCurrencySubmit = (e) => {
    e.preventDefault();
    let val = currencyRef.current.value;
    setCurrency(val);
    currencyRef.current.value = "";
  }
  const handelSort = (e) => {
    e.preventDefault();
    let val = e.target.value;
    setSortBy(val);
  }
  return (
    <div className="w-full h-12 mt-12 border-2 border-gray-100 rounded-lg flex items-center justify-between relative">
        <Search></Search>
        <div className="flex mr-7">
          <form action="" className="relative flex items-center font-nunito mr-12" onSubmit={handleCurrencySubmit}>
            <label htmlFor="currency" className="relative flex justify-center items-center mr-2 font-bold">currency</label>
            <input type="text" name="currency" ref = {currencyRef} placeholder="usd" className="w-16 rounded bg-gray-200 placeholder:text-gray-100 pl-2 required: ouline-0 border border-transparent  focus:border-cyan leading-4"/>
            <button type = "submit" className="ml-1 cursor-pointer"><img src={submitIcon} className = "w-full h-auto"alt="submit" /></button>
          </form>
          <label htmlFor="" className="relative flex justify-center items-center">
            <span className="font-bold mr-2">sort by: </span>
            <select name="sortby" className="rounded bg-gray-200 text-base pl-2 pr-10 py-0.5 leading-4 capitalize " onClick={handelSort}>
              <option value=" market_cap_asc"> market_cap_asc</option>
              <option value="market_cap_desc">market_cap_desc</option>
              <option value="volume_asc">volume_asc</option>
              <option value="volume_desc">volume_desc</option>
              <option value="id_asc">id_asc</option>
              <option value="id_desc">id_desc</option>
            </select>
          </label>
          
        </div>
    </div>
  );
};

export default Filter;
