import React from 'react'
import { connect } from 'react-redux'
import {flipNav, closeNav} from '../actions/nav'
import {getTextByURL} from '../actions/text'


const Nav = (props)=> {
  return (
    <div>
      <a href="javascript:void(0);" className='close' onClick={props.closeNav}>&times;</a>
    {props.navVisible != true &&
      <div className='explanation'>
        <p className='text'>
          <span className='english'>This visualisation is inspired by the legend of Tawhirimatea. Its form changes depending on the wind speed and direction in Te Whanganui-a-Tara Wellington.</span>
          <span className='te-reo'>TE REO NEEDED FOR EXPLANATION</span>
        </p>
        <a href="javascript:void(0);" className='learn-more fade-in' onClick={()=>props.dispatch(flipNav(true))}>Learn More</a>
      </div> }
    {props.navVisible && <ul id='navItems'>
       {props.texts.map(text => {
      return (
	  <li key={text.id}>
	       <a className='text' title={`link to ${text.url}`} href='#' onClick={() => {props.dispatch(getTextByURL(text.url))}}>
		 <span className='te-reo'>{text.short_title.tereo}</span>
		 <span className='english'>{text.short_title.english}</span>
	       </a>
	     </li>
      )
    })
    }
    </ul>
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
