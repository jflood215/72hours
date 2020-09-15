import React, { useState, useEffect } from "react";
import "./App.css";
import WeatherData from "./WeatherData/WeatherData";
import Zomato from './Zomato';
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
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=c4666520e6ebbb97283cb6150b8260fa`
  const RestaurantURL = `https://developers.zomato.com/api/v2.1/geocode?lat=${latitude}&lon=${longitude}`
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(location);
    }, []);

   function location(position: any){
    setLatitude(position.coords.latitude)
    setLongitude(position.coords.longitude)
    console.log("Lat: " + latitude);
    console.log("Lon: " + longitude);
   }

  return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>Nasa</Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper className={classes.paper}><Zomato URL={RestaurantURL}  /></Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}><WeatherData weatherURL={weatherURL}/></Paper>
          </Grid>
        </Grid>
      </div>
  );

}

export default App;
