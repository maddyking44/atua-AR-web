import React from 'react'
import { connect } from 'react-redux'

import { clearText } from '../actions/text'

class Text extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      index: 0,
      par: {},
      textLength: this.props.text.paragraphs.length
    }
    this.next = this.next.bind(this)
    this.prev = this.prev.bind(this)
  }
    next() {
      this.setState({
	index: index += 1
      })
    }

    prev() {
      this.setState({
	index: index -= 1
      })
    }

  componentWillMount(){
    this.setState({
      par: this.props.text.paragraphs[this.state.index]
    })
  }
    

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
      {(this.state.index > 0) && <div>prev</div>} 
      {(this.state.index < this.state.textLength) && <div>next</div>} 
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
