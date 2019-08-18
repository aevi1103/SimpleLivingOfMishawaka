import React from 'react'

import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';


const mapStyles = {
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
    position: 'relative'
  };

class GoogleMap extends React.Component {

    constructor(props) {
        super(props);
        this.setState ={
        }
    }
    

    render() {
        return (
          <Map
            google={this.props.google}
            zoom={15}
            style={mapStyles}
            initialCenter={{ lat: 41.6779132, lng: -86.106784 }}
          >
            <Marker
              position={{ lat: 41.6779132, lng: -86.106784 }}
              animation={this.props.google.maps.Animation.DROP}
            />
          </Map>
        );
        
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCoTBrsNWHOkX6tzJ7cF58V2IJiosshRQM'
})(GoogleMap)

