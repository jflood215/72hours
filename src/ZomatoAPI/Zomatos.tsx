import { Restaurant } from '@material-ui/icons';
import React from 'react';
import {NearbyRestaurant} from './ZomatoInterface';

export interface ZomatosProps {
  location: NearbyRestaurant,
  key: number
}
 
const Zomatos: React.SFC<ZomatosProps> = () => {
  return ( 
    <div>
     
    </div>
   );
}
 
export default Zomatos;