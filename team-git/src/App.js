import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import GetEvents from "./apis/Events";
import Weather from "./apis/Weather";

const App = () => {
  const [data, setData] = useState("");

  return (
    <div className="main">
      <div className="mainDiv"></div>
      <GetEvents />
      <Weather />
    </div>
  );
};

export default App;
