import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import UseGeoLocation from './geolocation/UseGeoLocation';

function App() {
  const location =  UseGeoLocation();
  
  return (
    <div className="App">
      {
        location.loaded ? JSON.stringify(location) : "Location data not available"
      }
    </div>
  );
}

export default App;
