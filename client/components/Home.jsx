import React from 'react'
import { connect } from 'react-redux'

const Home = ({weather}) => (
    <div>
    {weather}
    </div>
  )

const mapStateToProps = (state) => {
  return {
    weather: state.weather
  }
}

export default connect(mapStateToProps)(Home)
