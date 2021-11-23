import React, { useState, useEffect } from "react";

const apiUrl = "https://api.nasa.gov/planetary/earth/imagery";
const key = "ZX7HZcHK3wF9DUsCJ68GAcCP4qoAzGBSDicNbVK3";

//data we will need to pull from the api for the user to get an image of their location
// The stellite passes over each point on earth roughly once every sixteen days.

const Nasa = (props) => {
  const [results, setResults] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

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

  const fetchResults = () => {
    let url = `${apiUrl}?lon=${lng}&lat=${lat}&date=2018-01-01&api_key=${key}`;

    fetch(url)
      .then((res) => res)
      .then((res) => {
        console.log(res);
        setResults(res.url);
      })

      .catch((err) => console.log(err));
  };

  useEffect(async () => {
    if (results.length < 1 && lat && lng) {
      const myResults = await fetchResults();
    }
  }, [results, lat, lng]);

  return (
    <div className="nasa-photo">
      <img src={results} className="photo"></img>
    </div>
  );
};

export default Nasa;
