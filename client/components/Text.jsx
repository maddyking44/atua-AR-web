import React from 'react'
import { connect } from 'react-redux'

import { clearText } from '../actions/text'

class Text extends React.Component {

  render(){
    return (
    <div className='text-box'>
      <div className='text-box_content'>
        <p className='text-box_close' onClick={()=> this.props.dispatch(clearText())}>X</p>
	<h1 className='text'><span className='te-reo'>{this.props.text.title.tereo}</span><span className='english'>{this.props.text.title.english}</span></h1>
      {this.props.text.paragraphs.map(paragraph => {
	return <p className='text'><span className='te-reo'>{paragraph.tereo}</span><span className='english'>{paragraph.english}</span></p>
      })
      }
	<div className='byline'>
	  <p className='text'>
	    <span className='te-reo'>written by {this.props.text.author}</span>
	    <span className='english'>written by {this.props.text.author}</span>
	  </p>
	  <p>~*~</p>
	  <p className='text'>
	    <span className='te-reo'>translated by {this.props.text.translator}</span>
	    <span className='english'>translated by {this.props.text.translator}</span>
	  </p>
	</div>
      </div>
    </div>
  )
  }
}

//var mapStateToProps= (state) => {
 // return {
  //  text: state.current_text
  //}
//}

//export default connect(mapStateToProps)(Text)

export default Text
