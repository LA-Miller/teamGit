import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Container, Row, Col } from "reactstrap";
import GetEvents from "./apis/Events";
import Weather from "./apis/Weather";
import Footer from "./site/Footer";
import Headers from "./site/Header";
import Nasa from "./apis/Nasa";

const App = () => {
  return (
    <div className="page">
      <div className="navbar">
      <Headers />
      </div>
      <Container className="form">
        <Row>
          <Col className="weather" md="6">
            <Weather />
          </Col>
          <Col className="nasa" md="6">
            <h2>
              <Nasa />
            </h2>
          </Col>
        </Row>
        <Row>
          <Col className="events" md="12">
            <h1 className="events-nearby">Events Near You!</h1>
            <GetEvents />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
