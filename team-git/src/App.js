import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Container, Row, Col } from "reactstrap";
import GetEvents from "./apis/Events";
import Weather from "./apis/Weather";

const App = () => {

  return (
    <Container className="form">
      <Row>
        <Col className="weather" md="6" >
        <Weather />
        </Col>
        <Col className="nasa" md="6">
          Image
        </Col>
      </Row>
      <Row>
        <Col className="events" md="12">
          <h1 className="events-nearby">Events Near You!</h1>
        <GetEvents />
        </Col>
      </Row>
    </Container>    
  );
};

export default App;
