import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { updateDate } from '../redux/actions/testActions'
import { connect } from 'react-redux'
import HomePage from '../pages/HomePage'
import FilmDetails from '../pages/FilmDetails'
import { createGlobalStyle } from 'styled-components'
import Header from './Header'
import Footer from './Footer'


const GlobalStyle = createGlobalStyle`
    body{
        margin: 0px;
        @import url('https://fonts.googleapis.com/css?family=Amatic+SC|Anton');
        @import url('https://fonts.googleapis.com/css?family=Rock+Salt');
        @import url('https://fonts.googleapis.com/css?family=Cinzel');
    }
`
class App extends Component {

  componentDidMount() {
    setInterval(this.props.updateDate, 1000)
  }


  render() {
    return (
      <div>
        <GlobalStyle></GlobalStyle>
        <BrowserRouter>
          <div>
            <Header date={this.props.test.date}></Header>
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/details/:filmId" component={FilmDetails}></Route>
            <Footer></Footer>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps({ test }) {
  return { test };
}

export default connect(mapStateToProps, {
  updateDate
})(App);