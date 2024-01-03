import { useState } from "react";
import Header from "./components/Header";
import ListCards from "./components/ListCards";
import OrdenService from "./components/OrdenService";

function App() {
  return (
    <main className="bg-gray-200 p-5 flex flex-col gap-5 min-h-screen">
      <Header />
      <ListCards />
      <OrdenService />
    </main>
  );
}

export default App;
