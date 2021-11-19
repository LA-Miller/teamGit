import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import UseGeoLocation from './geolocation/UseGeoLocation';

function App() {
  const location =  UseGeoLocation();

  // const storeLocation = () => {
  //   const {lat, long} = this.state;
  //   localStorage.setItem('latitude', location.loaded ? JSON.stringify(location.coordinates.latitude) : "Location data not available");
  //   localStorage.setItem

    
  // }
 
  
  return (
    <div className="App">
      {
        location.loaded ? JSON.stringify(location) : "Location data not available"
      }
    </div>
  );
}

export default App;
