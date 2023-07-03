import React from 'react'
import { useState } from 'react';
import ExchangeComponent from '../components/ExchangeComponent';
const Exchanges = () => {
    const [ExchangeData, setExchangeData] = useState();
    const getExchangeData = async () => {
        try {
            var data = await fetch(
                `https://api.coingecko.com/api/v3/exchanges?per_page=10`
            )
            .then((res) => res.json())
            .then((json) => json);
            
        } catch (error) {
            console.log(error);
        }
        console.log(data);
        setExchangeData(data);
    }
    getExchangeData();
  return (
    <section
    className='w-[80%] h-full flex flex-col mt-25 mb-24 relative'
    >
      <div className="grid grid-cols-2 gap-10 mt-9 border border-gray-100 rounded px-20 py-10">
      {
        ExchangeData ? 
          (
            ExchangeData.map((data) => {
              return (
              <ExchangeComponent data = {data}/>
              );
            })
          )
          : null
      }
      </div>
    </section>
  )
}

export default Exchanges
