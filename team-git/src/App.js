import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import UseGeoLocation from './geolocation/UseGeoLocation';
import GetEvents from './apis/Events';
// const cors = require('cors');

// App.use(cors({
//   origin: '*'
// })); 

function App() {
 
  
  return (
    <div>
      <GetEvents />
    </div>
  );
}

export default App;
