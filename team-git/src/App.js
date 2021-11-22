import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import Footer from './site/Footer';
import Headers from './site/Header';
import Nasa from './apis/Nasa'
import { useEffect, useState } from 'react';

function App() {
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  // const [imgurl, setImgurl] = useState();
  // let imgurl='';
  // const [status, setStatus] = useState();

  const getLocation = () => {
    if (!navigator.geolocation) {
      // console.log('no')
      // setStatus('Geolocation is not supported by your browser');
    } else {
      // console.log('see')
      // setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        // console.log('position');
        // setStatus('mira');
        console.log(position.coords.latitude);
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
       
        // setImgurl(Nasa(position.coords.longitude,position.coords.latitude));
        // console.log('url', imgurl);
      }, () => {
        // setStatus('Unable to retrieve your location');
      });
    }
  }

  // getLocation(imgurl);
  useEffect(() => {
    getLocation();
  }, [lat, lon]);
  // console.log(lat, lon);

  return (

    <div className="App">
      <Headers />
      <hr />
      <div className="App">
      {/* <p>{status}</p>
      {lat && <p>Latitude: {lat}</p>}
      {lon && <p>Longitude: {lon}</p>} */}
      <hr />
      </div>
      <Container>
        <Row>
          <Col>
            <h2><Nasa lat={lat} lon={lon} /></h2>
            {/* <Nasa lat={lat} lon={lon} /> */}
            {/* {Nasa(lon, lat)} */}
            {/* <Nasa lat={lat} lon={lon} /> */}
            
          </Col>

        </Row>
      </Container>
      <hr />
      <Footer />

    </div>
  );

}

export default App;
