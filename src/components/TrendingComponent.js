import React from "react";
import { useNavigate } from "react-router-dom";

const TrendingComponent = ({data}) => {
 const navigate = useNavigate();
 const navigate_to = (id) => {
    navigate(`${id}`);
 }
  return (
    <div
      className="flex flex-row justify-between px-3 py-3 w-full h-full border-gray-100 rounded  bg-gray-200 mx-2 cursor-pointer"
      onClick={() => navigate_to(data.item.id)}
    >
      <div>
        <div className="mx-2 flex flex-row justify-evenely">
          <span className="text-gray-100 mx-2">Name: </span>
          <span className="text-cyan text-sm">{data.item.name}</span>
          <span>
            <img
              className="w-[1.5rem] h-[1.5rem] mx-2 border-gray rounded-xl"
              src={data.item.small}
              alt=""
            />
          </span>
        </div>
        <div className="mx-2">
          <span className="text-gray-100 mx-2">Market Cap rank: </span>
          <span className="text-cyan">{data.item.market_cap_rank}</span>
        </div>
        <div className="mx-2">
          <span className="text-gray-100 mx-2">Price in BTC : </span>
          <span className="text-cyan text-sm">
            {Number(data.item.price_btc).toFixed(14)}
          </span>
        </div>
        <div className="mx-2">
          <span className="text-gray-100 mx-2">Score : </span>
          <span className="text-cyan">{data.item.score}</span>
        </div>
      </div>
      <div>
        <img
          src={data.item.large}
          className="w-[5rem] h-[5rem] rounded-full"
          alt=""
        />
      </div>
    </div>
  );
};

export default TrendingComponent;
