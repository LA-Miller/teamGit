import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";

const baseURL = "https://app.ticketmaster.com/discovery/v2/";
const key = "ns2SCrqXEt8N2ap6PDw1zFO935bspXaH";

const GetEvents = (props) => {
  const [data, setData] = useState([]);
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  // fills state variables of lat and lng by using geolocation to find the user's coordinates. This is in a useEffect to prevent the app from trying to find the location over and over again
  useEffect(() => {
    if (lat === "") {
      const getLat = (pos) => setLat(pos.coords.latitude);
      const latitude = navigator.geolocation.getCurrentPosition(getLat);
    }
    if (lng === "") {
      const getLng = (pos) => setLng(pos.coords.longitude);
      const longitude = navigator.geolocation.getCurrentPosition(getLng);
    }
  }, [lat, lng]);
  // Looks for changes in lat and lng before firing

  const fetchResults = async () => {
    let url = `${baseURL}events.json?&latlong=${lat},${lng}&apikey=${key}`;

    const response = await fetch(url)
      .then((res) => {
        const body = res.json();
        return body;
      })
      .then((data) => setData(data._embedded.events)); /* sets data variable to data._embedded.events */

    return response;
  };

  // fetchResults is in a useEffect to prevent the fetch from running before we have the latitude and longitude of the user
  useEffect(async () => {
    if (data.length < 1 && lat && lng) {
      const myResults = await fetchResults();
    }
  }, [data, lat, lng]);


  // .map functions to access the array of data, and return whatever information I want to display
  const nameRenderer = data.map((myData) => {
    return <div>{myData.name}</div>; /* return the name of the event*/
  });

  const dateRenderer = data.map((myData) => {
    return (
      myData.dates.start.localDate         /* return the date of the event*/
      )
  })

  const urlRenderer = data.map((myData) => {
    return(
      myData.url                  /* return the url where the user can buy tickets*/
    )
  })

  // content is where I built out how I wanted to display my data
  const content =
    data.length < 1 ? (               /* if data is empty, displays Loading..., otherwise displays my list */
      <div>Loading...</div>
    ) : (
      <ul>
        <li><a href={urlRenderer[0]}>{nameRenderer[0]}</a> {dateRenderer[0]}</li>
        <br />
        <li><a href={urlRenderer[1]}>{nameRenderer[1]}</a> {dateRenderer[1]}</li>
        <br />
        <li><a href={urlRenderer[2]}>{nameRenderer[2]}</a> {dateRenderer[2]}</li>
      </ul>
    );

  return (
    <Container>
      <Row>
        <Col md="12">
          {content}
        </Col>
      </Row>
    </Container>
  );
};

export default GetEvents;
