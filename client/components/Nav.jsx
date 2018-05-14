import React from 'react'
import { connect } from 'react-redux'
import {flipNav} from '../actions/nav'

const Nav = (props)=> {
  console.log({props})
  console.log({nav: props.navVisible})
  var newTexts = props.texts.map(text => {
    text.short_title = JSON.parse(text.short_title)
    console.log(text)
    return text
  })
  console.log({new: newTexts})
  return (
    <div>
    <a href="javascript:void(0);" className='close' onClick={props.closeNav}>&times;</a>

    {props.navVisible != true && <a href="javascript:void(0);" className='learn-more fade-in' onClick={()=>props.dispatch(flipNav(true))}>Learn More</a>}

    {props.navVisible && props.texts.map(text => {
      <p>{text.name}</p>
    })
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    texts: state.texts,
    navVisible: state.navVisible
  }
}

export default connect(mapStateToProps)(Nav)
