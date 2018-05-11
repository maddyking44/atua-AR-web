//Our starting component that sprouts inside the index.html div and which all other branches of
//components form.

import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import { connect } from 'react-redux'

import Home from './Home'
import Translation from './Translation'
import {getPosts} from '../actions/posts'
import {getWeather} from '../actions/weather'
import P5Wrapper from 'react-p5-wrapper'
import sketch from '../sketches/sketch'

class App extends React.Component {
  componentWillMount() {
    this.props.dispatch(getPosts())
    this.props.dispatch(getWeather())
  }

  render() {
          let wind = this.props.weather.wind_dir
          let velocity = this.props.weather.wind_kph
    return (

      <Router>
      <div className='app-container section'>
      <h1>Dog</h1>
      <P5Wrapper wind={wind} velocity={velocity} sketch={sketch}/>
      <Route exact path="/" component={Home} />
      <Route exact path="/translation" component={Translation} />
      </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    weather: state.weather
  }
}
export default connect(mapStateToProps)(App)
