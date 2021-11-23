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
  
  // console.log('Nasa');
  // console.log(props);
  const fetchResults = () => {
    let url = `${apiUrl}?lon=${lng}&lat=${lat}&date=2018-01-01&api_key=${key}`;
    // console.log(url);

    fetch(url)
      .then((res) => res)
      .then((res) => {
        console.log(res);
        setResults(res.url);
      })
      // .then(data => setResults(data.response.img))
      .catch((err) => console.log(err));
  };
  // const [lon, setLon] = useState('');
  // const [lat, setLat] = useState('');
  // const handleSubmit = (event) => {
  //     event.preventDefault();
  //     fetchResults();
  useEffect(() => {
    fetchResults();
  });

  // const fetchApiResults = () => {
  // let url = `${apiUrl}?lon=${props.lon}&lat=${props.lat}&date=2018-01-01&api_key=${key}`;
  // console.log(url);

  // https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&api_key=DEMO_KEY
  // https://api.nasa.gov/planetary/earth/imagery?lon=-86.2494744&lat=39.869297&date=2018-01-01&api_key=ZX7HZcHK3wF9DUsCJ68GAcCP4qoAzGBSDicNbVK3
  // const finalUrl= () =>{
  // const urlimg = fetch(url)
  // fetch = (url) => {
  //     .then(res => res.json())
  //     .then(data => {
  //         console.log(data)
  //         setResults(data.url);
  //         // })

  //         // useEffect(() => {
  //         //     results();
  //         // })
  //         return (

  //             data.url
  //             // <>

  //             //     <h2>Image</h2>
  //             //     <img src="{res.url}"></img>
  //             //     {/* <div><pre>{JSON.stringify(results, null, 2)}</pre></div> */}
  //             //     {/* {results} */}
  //             // </>

  //         )
  //     })
  //     .catch((err) => console.log(err))
  // return urlimg;
  // );
  // }

  // useEffect(() => {
  //     finalUrl();
  // }, [results]);
  return (
    <div className="nasa-photo">
      {/* <h2>Image</h2>
        <hr /> */}
      <img src={results} className="photo"></img>
      {/* <button className="submit">Submit search</button> */}
      {/* <img alt="imagen" src={results}></img> */}
    </div>
  );
};

export default Nasa;
