import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Home from './Home'
import { connect } from 'react-redux'

import {getPosts} from '../actions/posts'

class App extends React.Component {
  componentWillMount() {
    this.props.dispatch(getPosts())
  }

  render() {
    return (
      <Router>
      <div className='app-container section'>
      <h1>Dog</h1>
      <Route exact path="/" component={Home} />
      </div>
      </Router>
    )
  }
}

export default connect()(App)
