//Our starting component that sprouts inside the index.html div and which all other branches of
//components form.

import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import {getTexts} from '../actions/texts'
import {getWeather} from '../actions/weather'

import Home from './Home'
import Home2 from './Home2'
import Translation from './Translation'
import {getWeather} from '../actions/weather'
import About from './About'
import Opening from './Opening'

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(getWeather())
    this.props.dispatch(getTexts())
  }

  render() {
    return (

      <Router>
      <div className='app-container section'>
      {this.props.destination == 'opening' && <Route exact path="/" component={Opening}/>}
      {this.props.destination == 'home' && <Route exact path="/" component={Home} />}
      <Route exact path="/" component={Home} />
      <Route exact path="/home2" component={Home2} />
      <Route exact path="/translation" component={Translation} />
      <Route exact path="/about" component={About}/>
      </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    destination: state.destination
  }
}


export default connect(mapStateToProps)(App)
