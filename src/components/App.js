import React, { Component } from 'react';
import { Searchbar } from './searchbar/Searchbar';

class App extends Component {
  state = {};

  componentDidMount() {
    fetch(
      'https://pixabay.com/api/?q=cat&page=1&key=38222866-76ec0a8e3ce90551c34c0756b&image_type=photo&orientation=horizontal&per_page=12'
    )
      .then(res => res.json())
      .then(console.log);
  }

  render() {
    return <Searchbar />;
  }
}

export default App;
