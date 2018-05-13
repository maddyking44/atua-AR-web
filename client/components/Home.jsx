import React from 'react'
import { connect } from 'react-redux'
import P5Wrapper from 'react-p5-wrapper'
import sketch from '../sketches/sketch'
import { CSSTransitionGroup } from 'react-transition-group'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuVisible: false,
      menuFlipped: false
    }
    this.openNav = this.openNav.bind(this)
    this.closeNav = this.closeNav.bind(this)
    this.flipNav = this.flipNav.bind(this)
  }
  openNav() {
    this.setState({
      menuVisible: true
    })
  }

  closeNav() {
    this.setState({
      menuVisible: false
    })
  }

  flipNav() {
    this.setState({
      menuFlipped: !this.state.menuFlipped
    })
  }

  render() {
    console.log(this.props.weather)
    let wind = this.props.weather.wind_dir
    let velocity = this.props.weather.wind_kph
    let weather = this.props.weather
    return (
    <div>
      <div className='head-banner fade-in'>
        <div>
          <div>AR_ATUA</div>
          <div>Wind Direction: {weather.wind_dir}</div>
          <div>Wind Speed in kph: {weather.wind_kph}</div>
        </div>
      </div>
      <div className='container'>
        <div className='animation'>
          <P5Wrapper wind={wind} velocity={velocity} sketch={sketch}/>
        </div>
        <div className='weather-text fade-in'>Kei te pēhea te āhua o te rangi?</div>
      </div>
      <div className='open fade-in' onClick={this.openNav}>﹖</div>
      <CSSTransitionGroup transitionName='nav' transitionEnterTimeout={500} transitionLeaveTimeout={300}>
      {this.state.menuVisible && <div className="navbar" id="myNavbar" >
          <a href="javascript:void(0);" className='close' onClick={this.closeNav}  >&times;</a>
          {this.state.menuFlipped != true && <a href="javascript:void(0);" className='learn-more fade-in' onClick={this.flipNav}>Learn More</a>}
          {this.state.menuFlipped && <a href="javascript:void(0);" onClick={this.flipNav} className='learn-more fade-in'>{}</a>}
        </div>}
      </CSSTransitionGroup>
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
