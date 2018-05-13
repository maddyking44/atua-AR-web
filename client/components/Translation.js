import React from 'react'
import { connect } from 'react-redux'
import {getTexts} from '../actions/texts'

const Translation = ({texts}) => {
      return (
        
        <section id='article'>
        <h2><span className='sentence'><span className='te-reo'>{texts.length > 0 && texts[0].name}</span><span className='english'>{texts.length > 0 && texts[0].title.english}</span></span></h2>
        </section>

    )
}


const mapStateToProps = (state) => {
  return {
    texts: state.texts
  }
}

export default connect(mapStateToProps)(Translation)

/*

{this.props.texts.length > 0 && this.props.texts[0].paragraphs.map(paragraph => {
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
*/
