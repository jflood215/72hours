import { CardContent } from '@material-ui/core';
import React from 'react';
import {RootObject, NearbyRestaurant} from './ZomatoInterface';
// import Zomatos from './Zomatos';

export interface ZomatoProps {
    URL: string;
    // latitude: number;
    // longitude: number;
}
 
export interface ZomatoState {
    NearbyRestaurant: RootObject;
    // latitude: number,
    // longitude: number
}
 
class Zomato extends React.Component<ZomatoProps, ZomatoState> {
    constructor(props: ZomatoProps) {
        super(props);
        this.state = {NearbyRestaurant: {}
            // latitude: 0,
            // longitude: 0,
        
        };
    }
    
    componentDidUpdate(prevProps:ZomatoProps) {
        console.log(this.props.URL);
        // Typical usage (don't forget to compare props):
        if (this.props.URL !== prevProps.URL) {
            fetch(this.props.URL,
                {headers: new Headers ({
                    "Content-Type": "application/json",
                    "user-key": "ab5a8065f81b4a3a13a4aaae19187904",
                  })})
                
                .then((res) => res.json())
                .then((json:RootObject) => {
                    console.log(json)
                    // console.log(URL)
                    this.setState({NearbyRestaurant:json})
                }
                );
        }
      }
    

  
    render() { 
        return (   
            <CardContent>
                <h1>NearbyRestaurants:</h1>
                {this.state.NearbyRestaurant !=undefined ?
                (this.state.NearbyRestaurant.nearby_restaurants?.map(
                    (nearby_restaurants: NearbyRestaurant, index:number) => (
                    <p>{nearby_restaurants.restaurant.name}</p>
                    )
                )
                ) : (
                    <></>
                )}
         </CardContent>
         );
    }
}
 
export default Zomato;