import React from 'react'
import { connect } from 'react-redux'

var Translation = (props) => (
  <section id='article'>
  {console.log({props})}
  <h2><span className='sentence'><span className='te-reo'>{props.texts.title.tereo}</span><span className='english'>{texts.title.english}</span></span></h2>
  {texts.paragraphs.map(paragraph => {
    return (
      <p>
      {paragraph.sentences.map(sentence => {
	return (
	  <span className='sentence'>
	  <span className='te-reo'>{sentence.tereo}</span>
	  <span className='english'>{sentence.english}</span>
	  </span>
	)})
      }
      </p>
      )})
  }
  </section>

)

const mapStateToProps = (state) => {
  console.log({state: state})
  return {
    poop: state.texts
  }
}
export default connect(mapStateToProps)(Translation)

{/*
  <p className='paragraph'>
  <span className='sentence'>
  <span className='te-reo'>kia ora!</span>
  <span className='english'>hello!</span>
  </span>
  <span className='sentence'>
  <span className='te-reo'>Mā te whakaaro nui e hanga te whare; mā te mātauranga e whakaū</span>
  <span className='english'>Big ideas create the house; knowledge maintains it.</span>
  </span>
  </p>
*/}


