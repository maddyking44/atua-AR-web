import React from 'react'
import { connect } from 'react-redux'

const Text = ({text}) => {
  return (
    <div className='text-box'>
      <h1>Hello this is a text box</h1>
    </div>
  )
}

var mapStateToProps= (state) => {
  return {
    text: state.current_text
  }
}

export default connect(mapStateToProps)(Text)
