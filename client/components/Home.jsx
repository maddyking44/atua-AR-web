import React from 'react'
import { connect } from 'react-redux'
import { CSSTransitionGroup } from 'react-transition-group'

import Nav from './Nav'
import WindInfo from './WindInfo'
import Atua from './Atua'
import Text from './Text'
import {openNav, closeNav} from '../actions/nav'


const Home = (props) => {
  return (
    <div className='home'>
    <div className='head-banner fade-in'>
    <WindInfo />
    </div>
    {props.current_text.name && <Text />}
    <div className='container'>
    <Atua />
    </div>

    <div className='open fade-in' onClick={() => props.dispatch(openNav())}>﹖</div>
    <CSSTransitionGroup transitionName='nav' transitionEnterTimeout={500} transitionLeaveTimeout={300}>
    {props.menuVisible &&
      <div className="navbar" id="myNavbar" >
      <Nav closeNav={() => props.dispatch(closeNav())}/>
      </div>
    }
    </CSSTransitionGroup>
    </div>
  )
}

var mapStateToProps = (state) => {
  return {
    navVisible: state.navVisible,
    menuVisible: state.menuVisible,
    current_text: state.current_text
  }
}

export default connect(mapStateToProps)(Home)
