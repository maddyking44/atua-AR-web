import React from 'react'
import { connect } from 'react-redux'

const Text = ({text}) => {
  return (
    <div className='text-box'>
      <div className='text-box_content'>
        <p className='text-box_close'>X</p>
	<h1 className='text'><span className='te-reo'>{text.title.tereo}</span><span className='english'>{text.title.english}</span></h1>
      {text.paragraphs.map(paragraph => {
	return <p className='text'><span className='te-reo'>{paragraph.tereo}</span><span className='english'>{paragraph.english}</span></p>
      })
      }
	<div className='byline'>
	  <p className='text'>
	    <span className='te-reo'>written by {text.author}</span>
	    <span className='english'>written by {text.author}</span>
	  </p>
	  <p>~*~</p>
	  <p className='text'>
	    <span className='te-reo'>translated by {text.translator}</span>
	    <span className='english'>translated by {text.translator}</span>
	  </p>
	</div>
      </div>
    </div>
  )
}

var mapStateToProps= (state) => {
  return {
    text: state.current_text
  }
}

export default connect(mapStateToProps)(Text)
