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
      <div className='container'>
      {!props.current_text.name && <Atua />}
      </div>
      <div className='head-banner fade-in'>
      <CSSTransitionGroup transitionName='nav' transitionEnterTimeout={500} transitionLeaveTimeout={300}>
        {!props.current_text.name && <WindInfo />}
        </CSSTransitionGroup>
      </div>
      <CSSTransitionGroup transitionName='nav' transitionEnterTimeout={600} transitionLeaveTimeout={300}>
      {props.current_text.name && <Text text={props.current_text} index={props.current_index} dispatch={props.dispatch}/>}
    </CSSTransitionGroup>
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
    current_text: state.current_text,
    current_index: state.current_index
  }
}

export default connect(mapStateToProps)(Home)
