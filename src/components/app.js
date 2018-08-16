import React, { Component } from 'react';
import SearchBar from './searchBar';
import WeatherList from "./weather_list";
import Logo from './logo' ;

export default class App extends Component {
  render() {
    return (
      <div>
          <Logo />
          <SearchBar />
          <WeatherList/>
      </div>
    );
  }
}
