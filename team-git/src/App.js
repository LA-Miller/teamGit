import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
// import UseGeoLocation from './geolocation/UseGeoLocation';
import GetEvents from './apis/Events';

const App = () => {
  const [data, setData] = useState('');

  return (
    <div className="main">
      <div className="mainDiv">
      </div>
      <GetEvents />
    </div>
  );
}

export default App;
