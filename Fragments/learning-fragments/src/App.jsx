import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cell from "./components/Cell";
import Header from "./components/Header";
function App() {
  let admin=["Account Management", "Dealer Shipping", "Penalty", "Performance Results", "Personal Data"];
  let supplier=["My Account","Products","Product Life","Savings"];
  return (
    <>
      < Header header="Admin"/>
      < Cell data={admin}/>
      < Header header="Supplier"/>
      < Cell data={supplier} />
    </>
  );
}

export default App;
