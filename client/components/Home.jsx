import React from 'react'
import { connect } from 'react-redux'
import P5Wrapper from 'react-p5-wrapper'
import sketch from '../sketches/sketch'

class Home extends React.Component {

  render() {
    let wind = this.props.weather.wind_dir
    let velocity = this.props.weather.wind_kph
    let weather = this.props.weather
    return (
    <div>
    <P5Wrapper wind={wind} velocity={velocity} sketch={sketch}/>
      <div>Current Weather status: {weather.weather}</div>
      <div>Wind Direction: {weather.wind_dir}</div>
      <div>Wind Speed in kph: {weather.wind_kph}</div>
      <img src={weather.icon_url}/>
    </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    weather: state.weather
  }
}

export default connect(mapStateToProps)(Home)
