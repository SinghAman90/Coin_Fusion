import React from "react";

const ExchangeComponent = ({ data }) => {
  const handleOpen = (url) => {
    window.open(`${url}`, "_blank");
  };
  return (
    <div
      className="flex flex-row justify-between px-3 py-3 w-full h-full border-gray-100 rounded  bg-gray-200 mx-2 cursor-pointer"
      onClick={() => {
        handleOpen(data.url);
      }}
    >
      <div>
        <div className="mx-2 flex flex-row justify-evenely">
          <span className="text-gray-100 mx-2">Name: </span>
          <span className="text-cyan text-sm">{data.name}</span>
          <span>
            <img
              className="w-[1.5rem] h-[1.5rem] mx-2 border-gray rounded-xl"
              src={data.image}
              alt=""
            />
          </span>
        </div>
        <div className="mx-2">
          <span className="text-gray-100 mx-2">Trading Incentive: </span>
          <span className="text-cyan">
            {data.has_trading_incentive === "true" ? "Yes" : "NO"}
          </span>
        </div>
        <div className="mx-2">
          <span className="text-gray-100 mx-2">Country : </span>
          <span className="text-cyan text-sm">{data.country}</span>
        </div>
        <div className="mx-2">
          <span className="text-gray-100 mx-2">Trust Score Rank : </span>
          <span className="text-cyan">{data.trust_score_rank}</span>
        </div>
      </div>
      <div>
        <img
          src={data.image}
          className="w-[5rem] h-[5rem] rounded-full"
          alt=""
        />
      </div>
    </div>
  );
};

export default ExchangeComponent;
