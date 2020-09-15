import React, { useState, useEffect } from "react";
import "./App.css";
import WeatherData from "./WeatherData/WeatherData";
import Zomato from './ZomatoAPI/Zomato';
import NasaAPI from "../src/Nasa/NasaAPI";
import { Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
function App() {
  const classes = useStyles();
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const nasaUrl = `https://api.nasa.gov/planetary/earth/imagery?lon=${longitude}&lat=${latitude}&date=2020-06-06&&dim=0.15&api_key=e4nE0ZmWOYdjGYysdCAvpCTn4ZBQWj34uqUca3Nc`;
  const RestaurantURL = `https://developers.zomato.com/api/v2.1/geocode?lat=${latitude}&lon=${longitude}`;
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=c4666520e6ebbb97283cb6150b8260fa`;
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(location);
  }, []);
  function location(position: any) {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
    //     console.log("Lat: " + latitude);
    //     console.log("Lon: " + longitude);
  }
  return (
    <div style={{ textAlign: "center" }} className={classes.root}>
      You are located at: Longitude: {longitude.toFixed(3)},
      Latitude: {latitude.toFixed(3)}
      <hr />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <NasaAPI url={nasaUrl} />
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <Zomato URL={RestaurantURL} />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <WeatherData weatherURL={weatherURL} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
export default App;