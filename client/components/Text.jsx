import React from 'react'
import { connect } from 'react-redux'

import { clearText } from '../actions/text'

class Text extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      index: this.props.index,
      textLength: this.props.text.paragraphs.length
    }
    this.next = this.next.bind(this)
    this.prev = this.prev.bind(this)
  }
  next() {
    this.setState({
      index: this.state.index += 1,
      par: this.props.text.paragraphs[this.state.index]
    })
  }
  prev() {
    this.setState({
      index: this.state.index -= 1,
      par: this.props.text.paragraphs[this.state.index]
    })
  }

  render(){
    return (
      <div className='text-box'>
	<div className='text-box_content'>
	  <p className='text-box_close' onClick={()=> this.props.dispatch(clearText())}>X</p>
	  <h1 className='text'><span className='te-reo'>{this.props.text.title.tereo}</span><span className='english'>{this.props.text.title.english}</span></h1>
	  <p className='text'><span className='te-reo'>{this.props.text.paragraphs[this.state.index].tereo}</span><span className='english'>{this.props.text.paragraphs[this.state.index].english}</span></p>
	  <div>
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
	    <div className='par-nav'>
	      {(this.state.index > 0) && <p onClick={()=>this.prev()}>prev</p>} 
	      {(this.state.index < (this.state.textLength - 1)) && <p onClick={()=>this.next()}>next</p>} 
	    </div>
	  </div>
	</div>
      </div>
    )
  }
}

export default Text
