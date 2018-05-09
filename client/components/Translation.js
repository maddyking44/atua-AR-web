import React from 'react'
import { connect as buildWifiContainer } from 'react-redux'

var Translation = ({posts}) => (
  <div>
  <h2>Congratulations, you have made it to the Translations Component!</h2>
  <ul>
  {posts.map(({id, title}) => (
    <li key={id}>{title}</li>
  )
  )}
  </ul>
  </div>
)

const mapStateToProps = ({posts}) => ({posts})

const wifiContainer = buildWifiContainer(mapStateToProps)
const wifiComponent = wifiContainer(Translation)

export default wifiComponent
