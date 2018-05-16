import React from 'react'
import { connect } from 'react-redux'
import {getTextByURL} from '../actions/text'
import {Link} from 'react-router-dom'


// needs to be de-bugged. Something to do with the async call potentially?
class About extends React.Component {
  componentWillMount(props){
    this.props.dispatch(getTextByURL('about'))
    console.log({props})
  }
  render() {
    return (
      <div className="about-page-row">
        <div className="about-page-column-eight">
          <div className="aboutcontainer">
            <div className="abouttext">
              <div className="about-main-title">
                <h1>About</h1>
              </div>
              <div className="text-main-section">
                <div className="about-secondary-title">
                  <h2>Who are we?</h2>
                </div>
                <div className="who-are-we-body">
                  <img className="about-page-image" src="https://images-na.ssl-images-amazon.com/images/I/C1e1hX5I44S._SL1000_.png"/>
                  <p>We are Ben Tairea, Laura Suzuki, Anthony Gordon, Zach Mandeville and Maddy King. Ben came up with the vision to use Augmented Reality across Aotearoa to reveal the history and stories of this land.</p>
                  <p> We’re a team of developers studying at Enspiral Dev Academy, a web development school based in Wellington and Auckland that is committed to a mission of social good. We have had help and support from a large range of people, who you can read about here.</p>
                  <br/>
                </div>
              </div>
              <div className="about-secondary-title">
                <h2>What is this?</h2>
              </div>
              <div className="who-are-we-body">
                <img className="about-page-image" src="https://cheapflights.wpengine.com/wp-content/uploads/2014/07/holiday-spots-from-maori-legends-01.jpg"/>
                <p>Our intentions are to create a tool to educate and inspire people about the deeper aspects of living in Aotearoa, the realms that exist just below the surface or behind the veil of everyday life. Augmented Reality (or AR) is a powerful, almost magical tool for revealing unseen elements. We saw in AR a way to connect the past with the future, to connect the physical world with the spiritual world, and for connecting different facets of Aotearoa. AR_ATUA sees digital technology as a powerful platform for learning about and creating engagement with te ao Māori.</p>
                <p>Our larger vision is to develop tools to help educate people about the rich history, legends and stories of the land through accessible and inspired augmented reality. Currently this idea is in the prototype stage, so we are seeing what we can technically achieve as a learning project, in order to engage in larger discussion and consultation before taking it further.</p>
                <p>Our first project is inspired by the legend of Tāwhirimātea. </p>
                <br/>
              </div>
                
                <div className="about-secondary-title">
                  <h2>Te reo First.</h2>
                </div>
                <div className="who-are-we-body">
                  <img className="about-page-image" src="https://www.tpk.govt.nz/images/constrain/images-28738/768x1024"/>
                  <p>The connection between language and culture is inherent. Words are a method of creating and recording meaning. In this way, language serves as a means of both documentation and living cultural expression. If our aim is to inspire learning and engagement with te ao Māori, we believe that relationship should be grounded in the use of te reo Māori, the first language of Aotearoa.</p>
                  <br/>
                </div>
                
                <div className="about-secondary-title">
                  <h2>Augmented Reality App.</h2>
                </div>
                <div className="who-are-we-body">
                  <img className="about-page-image" src="https://cdn-images-1.medium.com/max/1600/1*F2SJzQidSaPL7dXly_5jmg.jpeg"/>
                  <p>The idea of the AR app is to place a representation of Tāwhirimātea on top of Tangi-te-keo (Mount Victoria), Wellington, the windiest place in our world. Tāwhirimātea’s behaviours will respond to the wind, so that people can look up to the atua on Mount Vic to see what the weather is doing. In our work towards this goal, we are testing and pushing very new AR technologies to the limit of what they are currently capable of, so the AR app is a continual work in progress, driven by a powerful vision.</p>
                  <br/>
                </div>
                
                <div className="about-secondary-title">
                  <h2>The Web App.</h2>
                </div>
                <div className="who-are-we-body">
                  <img className="about-page-image" src="http://papasemar.com/wp-content/uploads/2017/04/1-4.jpg"/>
                  <p>This web app provides a blueprint for what we are aiming to achieve in the realm of augmented reality. Here you can access our research, view a visualisation of what we are working towards, and find ways to contribute to the project or connect with our team.</p>
                  <br/>
                </div>
                
                <div className="about-secondary-title">
                  <h2>Free and Open Source.</h2>
                </div>
                <div className="who-are-we-body">
                  <img className="about-page-image" src="https://thumbs.dreamstime.com/b/happy-group-people-arms-up-isolated-26045167.jpg"/>
                  <p>AR_ATUA upholds a free/libre and open source ethos, which means the resources should be freely available to those interested in them, and that people can adjust and build upon the work we’ve done. We create things with the intention that they can and will be useful to others, by design. This means we write tools  that are reusable beyond this app, and code that is easy to read. It means we are committed to accessible technology. We welcome feedback and contributions.</p>
                  <br/>
                </div>
            </div>
            <Link to = '/' className="returnbutton">
              <a><h2>Return</h2></a>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    text: state.current_text
  }
}

///
// <h1 className='text'><span className='te-reo'>{text.title.tereo}</span><span className='english'>{text.title.english}</span></h1>
  //    <section id='content'>
   //     {text.paragraphs.map(paragraph => {
    //      return <p className='text'><span className='te-reo'>{paragraph.tereo}</span><span className='english'>{paragraph.english}</span></p>
     //   })}
      //  </section>
//
export default connect(mapStateToProps)(About)
