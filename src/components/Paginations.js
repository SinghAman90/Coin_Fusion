import React, { useState } from "react";
import paginationArror from "../assets/pagination-arrow.svg";
import { useContext } from "react";
import { CryptoContext } from "../context/CryptoContext";
const Paginations = () => {
  let { currentPage, setCurrentPage } = useContext(CryptoContext);
  const TotalNumber = 25;
  const next = () => {
    if (currentPage === TotalNumber) return null;
    else setCurrentPage(currentPage + 1);
  };
  const prev = () => {
    if (currentPage === 1) return setCurrentPage(0);
    else setCurrentPage(currentPage - 1);
  };
  const multiStepNext = () => {
    if (currentPage + 3 >= TotalNumber) setCurrentPage(TotalNumber - 1);
    else setCurrentPage(currentPage + 3);
  };
  const multiStepPrev = () => {
    if (currentPage - 3 <= 1) setCurrentPage(currentPage + 1);
    else setCurrentPage(currentPage - 2);
  };
  return (
    <div className="flex items-center">
      <ul className="flex items-center justify-end text-sm">
        <li className="flex items-center">
          <button className="outline-0 hover:text-cyan w-8">
            <img
              className="w-full h-auto rotate-180"
              src={paginationArror}
              onClick={prev}
              alt="left"
            />
          </button>
        </li>
        {currentPage >= 1 ? (
          <li>
            <button
              onClick={prev}
              className="outline-0  rounded-full w-8 h-8 flex items-center justify-center bg-gray-200 mx-1.5"
            >
              {currentPage - 1}
            </button>
          </li>
        ) : null}
        <li>
          <button className="outline-0  rounded-full w-8 h-8 flex items-center justify-center bg-cyan text-gray-200 mx-1.5">
            {currentPage}
          </button>
        </li>
        <li>
          <button
            onClick={next}
            className="outline-0  rounded-full w-8 h-8 flex items-center justify-center bg-gray-200 mx-1.5"
          >
            {currentPage + 1}
          </button>
        </li>
        <li>
          <button className="outline-0  rounded-full w-8 h-8 flex items-center justify-center  bg-gray-200 mx-1.5">
            {TotalNumber}
          </button>
        </li>
        <img
          onClick={next}
          className="w-full h-auto"
          src={paginationArror}
          alt="right"
        />
      </ul>
    </div>
  );
};

export default Paginations;
