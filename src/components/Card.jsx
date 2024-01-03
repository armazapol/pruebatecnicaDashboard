import React from "react";
import arrow from "../assets/arrow.svg";

const Card = ({ title, valor, porcentaje, transcurso, img }) => {
  return (
    <div className="rounded-xl shadow-md p-5 flex flex-col gap-3 bg-white">
      <div className="flex gap-3">
        <img src={img} alt="" />
        <p className="uppercase">{title}</p>
      </div>
      <p className="text-5xl font-bold">{valor} </p>
      <div className="flex gap-2">
        {porcentaje > 0 ? (
          <>
            {" "}
            <img src={arrow} alt="arrow" />
            <p className="text-green-400">{porcentaje}%</p>
            <p>{transcurso}</p>
          </>
        ) : (
          <>
         
            <p className="ml-5 text-red-500">{porcentaje}%</p>
            <p>{transcurso}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
