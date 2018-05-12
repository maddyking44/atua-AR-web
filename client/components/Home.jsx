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
    }
    this.openNav = this.openNav.bind(this)
    this.closeNav = this.closeNav.bind(this)
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
      <div className='open' onClick={this.openNav}>﹖</div>
      <CSSTransitionGroup transitionName='nav' transitionEnterTimeout={500} transitionLeaveTimeOut={300}>
      {this.state.menuVisible && <div className="navbar" id="myNavbar" >
          <a href="javascript:void(0);" onClick={this.closeNav}  >&times;</a>
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
