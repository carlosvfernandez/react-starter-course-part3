import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import FilmDetails from '../pages/FilmDetails'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/details" component={FilmDetails}></Route>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;