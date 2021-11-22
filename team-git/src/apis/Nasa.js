// import React, {useState, useEffect} from 'react';
// import "bootstrap/dist/css/bootstrap.css";
// import GetEvents from './Events';

// const key = "9fbI0rsExRez2kUjVcHVN5jgc07rDhig4o95gfKJ";

// const Nasa = () => {
//     const [ lng, setLng ] = useState('')
//     const [ lat, setLat ] = useState('')
//     const [ results, setResults ] = useState([])

//     useEffect(() => {
//         if (lat === "" && lng === "") {
//           const getLat = (pos) => setLat(pos.coords.latitude);
//           const latitude = navigator.geolocation.getCurrentPosition(getLat);
//           const getLng = (pos) => setLng(pos.coords.longitude);
//           const longitude = navigator.geolocation.getCurrentPosition(getLng);
//         }
//       }, [lat, lng]);

//     const fetchResults = async () => {
//         let url = `https://api.nasa.gov/planetary/earth/imagery?lon=${lng}&lat=${lat}&date=2014-01-01&dim=0.25&api_key=${key}`;
        
//         const response = await fetch(url)
//         .then((res) => {
//             console.log("response", res)
//             const body = res.json();
//             return body;
//         })
//         .then((data) => setResults(data));
//         console.log("results", results)

//         return response;
//     }

//     useEffect(async () => {
//         if(results && lat && lng) {
//             const myResults = await fetchResults();
//             console.log(myResults);
//         }
//     }, [results, lat, lng])

// //    const content = results ? <div><img src={results}></img></div> : null;

//     return (
//         results
//     );
// }

// export default Nasa;