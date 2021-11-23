import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";

const Weather = (props) => {
  const [currentWeather, setCurrentWeather] = useState([]); // variable
//   const [icon, setIcon ] = useState([]);
  const [temp, setTemp] = useState("");
  const [displayTemp, setDisplayTemp] = useState("");

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

  const weatherData = async () => {
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=3ceae6fb2d4de00771fc5d875ad44c15`
    )
      .then((res) => res.json())
      .then((logWeatherData) => {
        
        const Temp = Math.floor((logWeatherData.main.temp - 273.15) * 1.8 + 32);
        setTemp(Temp);
        setDisplayTemp({
          measure: "f",
          num: Temp,
        });
        setCurrentWeather(logWeatherData.weather); //function
      });
  };

  const tempConversion = () => {
    if (displayTemp?.measure === "f") {
      const newTemp = Math.floor((temp - 32) / 1.8);
      setTemp(newTemp);
      setDisplayTemp({
        measure: "c",
        num: newTemp,
      });
    } else {
      const newTemp = Math.floor(temp * 1.8) + 32;
      setTemp(newTemp);
      setDisplayTemp({
        measure: "f",
        num: newTemp,
      });
    }
  };



  const weatherDescription = currentWeather.map((wthD) => {
    
    return (
      <div key={wthD.description} style={{ textTransform: "capitalize" }}>
        {wthD.description}
      </div>
    );
  });

  useEffect(() => {
    if (currentWeather.length < 1 && lat && lng) {
      weatherData();
    
    }
  }, [currentWeather, lat, lng]);

  return (
    <>
      <div className="weatherDiv">
        <h1>Current Weather</h1>
        <div className="mainWeather">
          <p>{weatherDescription}</p>
          <p>
            {temp} {displayTemp?.measure?.toUpperCase()}
          </p>
        </div>
        <div className="weatherBtn">
          <Button className="btn btn-success" onClick={tempConversion} disabled={temp === ""}>
            Temp Conversion
          </Button>
        </div>
      </div>
    </>
  );
};

export default Weather;
