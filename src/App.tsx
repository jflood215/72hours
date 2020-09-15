import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import NasaAPI from "../src/Nasa/NasaAPI";

function App() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const nasaUrl = `https://api.nasa.gov/planetary/earth/imagery?lon=${longitude}&lat=${latitude}&date=2020-06-06&&dim=0.15&api_key=e4nE0ZmWOYdjGYysdCAvpCTn4ZBQWj34uqUca3Nc`;
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(location);
  }, []);

  function location(position: any) {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  }

  return (
    <div>
      You are located at: Longitude: {Math.round(longitude).toFixed(3)},
      Latitude: {Math.round(latitude).toFixed(3)}
      <hr />
      <NasaAPI url={nasaUrl} />
    </div>
  );
}

export default App;
