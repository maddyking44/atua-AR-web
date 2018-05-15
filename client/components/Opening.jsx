import React from 'react'
import { connect } from 'react-redux'
import { CSSTransitionGroup } from 'react-transition-group'
import {navigate} from '../actions/opening'

class Opening extends React.Component {
    constructor(props) {
      super(props)
        this.state = {
            isVisible: ['ancient'],
            unified: false
            }
            this.makeVisible = this.makeVisible.bind(this)
            this.revealAll = this.revealAll.bind(this)
  }

makeVisible(text) {
    this.setState({
      isVisible: [text]
    })
}

revealAll() {
    this.setState({
      isVisible: [],
      unified:true
    })
}


render(){
  return (
    <div className='opening'>
      {this.state.isVisible.find(text => text=='ancient') && <div className='ancient fade-in' onClick={()=>this.makeVisible('contemporary')}>ancient</div>}
      {this.state.isVisible.find(text => text =='contemporary') && <div className='spiritual fade-in' onClick={()=>this.makeVisible('spiritual')}>contemporary</div>}
      {this.state.isVisible.find(text => text== 'spiritual') && <div className='contemporary fade-in'onClick={()=>this.makeVisible('physical')}>spiritual</div>}
      {this.state.isVisible.find(text => text == 'physical') && <div className='physical fade-in' onClick={this.revealAll}>physical</div>}
        {this.state.isVisible.find(text => text == 'enter') && <a className='enter-site fade-in' onClick={()=>this.props.dispatch(navigate('home'))}>enter</a>}
    {this.state.unified && <div className='together fade-in' onClick={()=>this.makeVisible('enter')}>
      <div>ancient</div>
      <div>contemporary</div>
      <div>spiritual</div>
      <div>physical</div>
    </div>}
    </div>

  )
}

}

const mapStateToProps = (state) => {
  return {
    destination: state.destination
  }
}


export default connect(mapStateToProps)(Opening)
