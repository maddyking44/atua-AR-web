import React from 'react'
import { connect } from 'react-redux'
import {getTextByURL} from '../actions/text'


// needs to be de-bugged. Something to do with the async call potentially?
class About extends React.Component {
  componentDidMount(){
    this.props.dispatch(getTextByURL('about'))
  }
  render() {
console.log(this.props.text)
    return (
      <div>
      <h1 className='text'><span className='te-reo'>{text.title.tereo}</span><span className='english'>{text.title.english}</span></h1>
      <section id='content'>
        {text.paragraphs.map(paragraph => {
          return <p className='text'><span className='te-reo'>{paragraph.tereo}</span><span className='english'>{paragraph.english}</span></p>
        })}
        </section>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    text: state.current_text
  }
}


export default connect(mapStateToProps)(About)
