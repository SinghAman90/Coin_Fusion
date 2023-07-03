import React, { useContext } from 'react'
import { TrendingContext } from '../context/TrendingContext'
import TrendingComponent from '../components/TrendingComponent';
import { Outlet } from 'react-router-dom';
const Tranding = () => {
  const {TrendData} = useContext(TrendingContext);
  return (
    <section
    className='w-[80%] h-full flex flex-col mt-25 mb-24 relative'
    >
      <div className="grid grid-cols-2 gap-10 mt-9 border border-gray-100 rounded px-20 py-10">
      {
        TrendData ? 
          (
            TrendData.coins.map((data) => {
              return (
              <TrendingComponent data = {data}/>
              );
            })
          )
          : null
      }
      </div>
    <Outlet></Outlet>
    </section>
  )
}

export default Tranding
