//Our starting component that sprouts inside the index.html div and which all other branches of
//components form.

import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import {getTexts} from '../actions/texts'
import Home from './Home'
import Translation from './Translation'
import {getWeather} from '../actions/weather'


class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(getWeather())
    this.props.dispatch(getTexts())
  }

  render() {
    return (

      <Router>
      <div className='app-container section'>
      <Route exact path="/" component={Home} />
      <Route exact path="/translation" component={Translation} />
      </div>
      </Router>
    )
  }
}


export default connect()(App)
