import React from 'react'
import { connect } from 'react-redux'
import { CSSTransitionGroup } from 'react-transition-group'

import Nav from './Nav'
import WindInfo from './WindInfo'
import Atua from './Atua'
import Text from './Text'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuVisible: false
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
    return (
    <div>
      <div className='head-banner fade-in'>
        <WindInfo />
      </div>
        <Text />
      <div className='container'>
        <Atua />
      </div>

      <div className='open fade-in' onClick={this.openNav}>﹖</div>
      <CSSTransitionGroup transitionName='nav' transitionEnterTimeout={500} transitionLeaveTimeout={300}>
      {this.state.menuVisible &&
        <div className="navbar" id="myNavbar" >
          <Nav closeNav={this.closeNav}/>
        </div>
      }
      </CSSTransitionGroup>
    </div>
    )
  }
}

var mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps)(Home)
