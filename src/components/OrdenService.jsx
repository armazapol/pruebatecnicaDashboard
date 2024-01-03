import React from "react";
import ChartComponent from "./ChartComponent";

const OrdenService = () => {
  return (
    <section className="rounded-xl shadow-md p-5 bg-white">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold">Ordenes de Servicio</h2>
        <select className="border rounded-lg px-5 text-gray-500" name="" id="">
          <option value="">Semana</option>
          <option value="">Mes</option>
          <option value="">Año</option>
        </select>
      </div>
<div className="mt-5">
<ChartComponent />
</div>
    
    </section>
  );
};

export default OrdenService;
