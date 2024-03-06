import React from "react";

import Header from "./components/Header/Header";
import Converter from "./components/Converter/Converter";
import Info from "./components/Info/Info";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Converter />
      <Info />

      {/* <PublicHolidays /> */}
    </div>
  );
}

export default App;
