import React from 'react'
import { connect as buildWifiContainer } from 'react-redux'

const Home = ({posts}) => (
  <div>
  <ul>
  {posts.map(({id, title})  => (
    <li key={id}>{title}</li>
  ))}
  </ul>
    </div>
  )

const mapStateToProps = ({posts}) => ({posts})

const wifiContainer = buildWifiContainer(mapStateToProps)
const wifiComponent = wifiContainer(Home)
export default wifiComponent
