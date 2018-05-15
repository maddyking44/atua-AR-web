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
      {this.state.isVisible.find(text => text=='ancient' || text=='technology') && <div className='ancient fade-in' onClick={()=>this.makeVisible('technology')}>culture</div>}
      {this.state.isVisible.find(text => text =='technology') && <div className='spiritual fade-in' onClick={()=>this.makeVisible('past')}>technology</div>}
      {this.state.isVisible.find(text => text== 'past' || text == 'future') && <div className='contemporary fade-in'onClick={()=>this.makeVisible('future')}>past</div>}
      {this.state.isVisible.find(text => text == 'future') && <div className='physical fade-in' onClick={()=>this.makeVisible('wairoa')}>future</div>}
      {this.state.isVisible.find(text => text == 'wairoa' ||text == 'marama') && <div className='physical fade-in' onClick={()=>this.makeVisible('marama')}>Te Ao Wairoa</div>}
      {this.state.isVisible.find(text => text == 'marama') && <div className='physical fade-in' onClick={this.revealAll}>Te Ao Marama</div>}
        {this.state.isVisible.find(text => text == 'enter') && <a className='enter-site fade-in' onClick={()=>this.props.dispatch(navigate('home'))}>enter</a>}
    {this.state.unified && <div className='together fade-in' onClick={()=>this.makeVisible('enter')}>
      <div>culture</div>
      <div>technology</div>
      <div>past</div>
      <div>future</div>
      <div>Te Ao Wairoa</div>
      <div>Te Ao Marama</div>
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
