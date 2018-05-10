import React from 'react'
import { connect } from 'react-redux'

var Translation = ({posts}) => (
  <div>
    <h2>Congratulations, you have made it to the Translations Component!</h2>
    <p className='paragraph'>
      <span className='sentence'>
	<span className='te-reo'>kia ora </span>
	<span className='english'>hello </span>
      </span>
      <span className='sentence'>
      <span className='te-reo'>Mā te whakaaro nui e hanga te whare; mā te mātauranga e whakaū</span>
      <span className='english'>Big ideas create the house; knowledge maintains it.</span>
      </span>
    </p>
  </div>

  /*  <ul>
  {posts.map(({id, title}) => (
    <li key={id}>{title}</li>
  )
  )}
  </ul> */
)

const mapStateToProps = ({posts}) => ({posts})

export default connect(mapStateToProps)(Translation)
