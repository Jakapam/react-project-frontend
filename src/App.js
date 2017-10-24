import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { Image } from 'semantic-ui-react'
import MapContainer from './components/MapContainer'
import DataMapContainer from './components/DataMapComponent'
import GAPIKEY from './private'
import './App.css';

class App extends Component {


  render() {

    return (

      <div>
        <div>
          <Image src={require('./img/wifilogo.png')} size='large' centered/>
        </div>
        <div>
          <Route exact path="/" render={(props)=> <MapContainer apiKey={GAPIKEY} {...props}/>}/>
          <Route path="/data" render={(props)=><DataMapContainer apiKey={GAPIKEY} {...props}/>}/>
        </div>
      </div>


    );
  }
}

export default App;
