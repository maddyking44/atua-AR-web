import React from 'react'
import { connect } from 'react-redux'

class Home extends React.Component {

  render() {
    return (
    <div>
      {this.props.weather.wind_dir}
    </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    weather: state.weather
  }
}

export default connect(mapStateToProps)(Home)
