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
      <div className='head-banner'>
        <div>
          <div>AR_ATUA</div>
          <div>Wind Direction: {weather.wind_dir}</div>
          <div>Wind Speed in kph: {weather.wind_kph}</div>
        </div>
      </div>
      <div className='animation'>
        <P5Wrapper wind={wind} velocity={velocity} sketch={sketch}/>
      </div>
      <div className="navbar" id="myNavbar">
          <a href="#home">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <a href="javascript:void(0);" class="icon">&#9776;</a>
      </div>
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
