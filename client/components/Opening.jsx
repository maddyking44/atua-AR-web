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
      isVisible: [text],
      unified: false
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
      {this.state.isVisible.find(text => text=='ancient' || text=='technology') && <div className='left-things fade-in' onClick={()=>this.makeVisible('technology')}>culture</div>}
      {this.state.isVisible.find(text => text =='technology') && <div className='right-things fade-in' onClick={()=>this.makeVisible('past')}>technology</div>}
      {this.state.isVisible.find(text => text== 'past' || text == 'future') && <div className='left-things fade-in'onClick={()=>this.makeVisible('future')}>past</div>}
      {this.state.isVisible.find(text => text == 'future') && <div className='right-things fade-in' onClick={()=>this.makeVisible('wairoa')}>future</div>}
      {this.state.isVisible.find(text => text == 'wairoa' ||text == 'marama') && <div className='left-things fade-in' onClick={()=>this.makeVisible('marama')}>Te Ao Wairoa</div>}
      {this.state.isVisible.find(text => text == 'marama') && <div className='right-things fade-in' onClick={this.revealAll}>Te Ao Marama</div>}
        {this.state.isVisible.find(text => text == 'enter') && <a className='enter-site fade-in' onClick={()=>this.props.dispatch(navigate('home'))}>enter</a>}
    {this.state.unified && <div className='together fade-in' onClick={()=>this.makeVisible('enter')}>
      <div className='tog-thin'>culture</div>
      <div className='tog-fat'>technology</div>
      <div className='tog-thin'>past</div>
      <div className='tog-fat'>future</div>
      <div className='tog-thin'>Te Ao Wairoa</div>
      <div className='tog-fat'>Te Ao Marama</div>
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
