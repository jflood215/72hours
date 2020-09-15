import React, {useState, useEffect} from "react";
import "./App.css";
import Zomato from './Zomato';



function App() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const RestaurantURL = `https://developers.zomato.com/api/v2.1/geocode?lat=${latitude}&lon=${longitude}`
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(location);
  }, []);
  function location(position: any) {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
    // console.log("Lat: " + latitude);
    // console.log("Lon: " + longitude);
  }
  
  return (
    <div>
      <Zomato URL={RestaurantURL}  />
    </div>
  )
}


export default App;