import React from "react";
import { WeatherDataResponse } from "./WeatherDataInterface";
import { withStyles } from "@material-ui/core/styles";
import {Button, Typography} from "@material-ui/core";
import { TimePicker } from "material-ui";

const styles = ({
  root: {
    flex: 1,
    textAlign: 'left',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export interface WeatherDataProps {
  weatherURL: string;
}

export interface WeatherDataState {
  weatherInformation: WeatherDataResponse;
}

class WeatherData extends React.Component<WeatherDataProps, WeatherDataState> {
  constructor(props: WeatherDataProps) {
    super(props);
    this.state = { weatherInformation: {} };
  }
  
  componentDidUpdate(prevProps: WeatherDataProps) {
    if (this.props.weatherURL !== prevProps.weatherURL) {
      fetch(this.props.weatherURL)
      .then((res) => res.json())
      .then((json: WeatherDataResponse) => {
        console.log(json);
        this.setState({ 
          weatherInformation: json
        })
      });
    }
  }  

  render(){
    return (
      <div>
        <h2>Today's weather:</h2>
        <Typography variant='h4'>{this.state.weatherInformation.main?.temp}</Typography>
        <Typography variant='h5'>{this.state.weatherInformation.weather?.[0].main}</Typography>
      </div>
    );
  }
}

export default WeatherData;
