import React from 'react'
import { connect } from 'react-redux'
import {flipNav} from '../actions/nav'

const Nav = (props)=> {
  return (
    <div>
    <a href="javascript:void(0);" className='close' onClick={props.closeNav}>&times;</a>
    {props.navVisible != true && <a href="javascript:void(0);" className='learn-more fade-in' onClick={()=>props.dispatch(flipNav(true))}>Learn More</a>}
    {props.navVisible && <ul id='navItems'>
       {props.texts.map(text => {
	 console.log(text)
      return (
	  <li key={text.id}>
	       <a className='text' title='link to thing fix later' href={`#/${text.url}`}>
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
