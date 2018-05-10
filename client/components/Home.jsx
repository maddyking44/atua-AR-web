import React from 'react'
import { connect } from 'react-redux'

class Home extends React.Component {

  render() {
    return (
    <div>
      <div>Current Weather status: {this.props.weather.weather}</div>
      <div>Wind Direction: {this.props.weather.wind_dir}</div>
      <div>Wind Speed in kph: {this.props.weather.wind_kph}</div>
      <img src={this.props.weather.icon_url}/>
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
