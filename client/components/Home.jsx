import React from 'react'
import { connect } from 'react-redux'

class Home extends React.Component {

  render() {
    let weather = this.props.weather
    return (
    <div>
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
