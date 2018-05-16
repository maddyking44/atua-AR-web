import React from 'react'
import { connect } from 'react-redux'
import {getTextByURL} from '../actions/text'
import {Link} from 'react-router-dom'
import {clearText} from '../actions/text'

function About ({weather
  , dispatch
}) {
  
  function findBackgroundImg(){
    if (weather) {
      var hour = (new Date(Date.parse(weather.local_time_rfc822))).getHours()
      console.log(hour)
      if (hour < 6) {
        return '/assets/images/background-evening-01.svg'
      } 
      else if (hour == 6){
        return '/assets/images/background-about-sunrise-01.svg'
      }
      else if (hour >= 7 && hour <= 16) {
        return '/assets/images/background-about-daytime-01.svg'
        
      }
      else if (hour == 17) {
        return '/assets/images/background-about-sunrise-01.svg'
      }
      else if (hour >= 18) {return '/assets/images/background-evening-01.svg'}
      }   
  }

  var divStyle = {
    backgroundImage: 'url(' + findBackgroundImg() + ')'
  }
  
  console.log(typeof weather.local_time_rfc822)  
  return (
      <div 
      style={divStyle} className="about-page-row"
      >
      <a className='text about-back' href='#' onClick={()=>dispatch(clearText())}><span className='te-reo'>Whakahoki</span><span className='english'>return home</span></a>
        <div className="about-page-column-eight">
          <div className="aboutcontainer">
            <div className="abouttext">
              <div className="about-main-title">
                  <h1 className="text"><span className="english">About</span><span className="te-reo">Mō</span></h1> 
              </div>
              <div className="text-main-section">
                <div className="about-secondary-title">
                  <h2 className="text"><span className="english">Who are we?</span><span className="te-reo">Ko wai tatou?</span></h2>
                </div>
                <div className="who-are-we-body">
                  <img className="about-page-image" src="https://images-na.ssl-images-amazon.com/images/I/C1e1hX5I44S._SL1000_.png"/>
                  <p className="text"><span className="english">We are Ben Tairea, Laura Suzuki, Anthony Gordon, Zach Mandeville and Maddy King. Ben came up with the vision to use Augmented Reality across Aotearoa to reveal the history and stories of this land.</span><span className="te-reo">Ko Ben Tairea, ko Laura Suzuki, ko Anthony Gordon, ko Zach Mandeville me Maddy King. I puta mai a Pene ki te kite ki te whakamahi i te Whakaari Pupuri puta noa i Aotearoa hei whakaatu i te hitori me nga korero o tenei whenua.</span>
                  </p>
                  <p className="text"><span className="english">We’re a team of developers studying at Enspiral Dev Academy, a web development school based in Wellington and Auckland that is committed to a mission of social good. We have had help and support from a large range of people, who you can read about here.</span><span className="te-reo">He rōpū tatou o nga kaiwhakaako e ako ana i te Enspiral Dev Academy, he kura whakawhanaketanga tukutuku e pa ana ki Poneke me Akarana e tuku ana ki te mahi miihana. He awhina, he tautoko hoki matou i te tini o nga tangata, ka taea e koe te korero mo konei.</span>
                  </p>
                  <br/>
                </div>
              </div>
              <div className="about-secondary-title">
              <h2 className="text"><span className="english">What is this?</span><span className="te-reo">He aha tenei?</span></h2>
              </div>
              <div className="who-are-we-body">
                <img className="about-page-image" src="https://cheapflights.wpengine.com/wp-content/uploads/2014/07/holiday-spots-from-maori-legends-01.jpg"/>
                <p className="text"><span className="english">Our intentions are to create a tool to educate and inspire people about the deeper aspects of living in Aotearoa, the realms that exist just below the surface or behind the veil of everyday life. Augmented Reality (or AR) is a powerful, almost magical tool for revealing unseen elements. We saw in AR a way to connect the past with the future, to connect the physical world with the spiritual world, and for connecting different facets of Aotearoa. AR_ATUA sees digital technology as a powerful platform for learning about and creating engagement with te ao Māori.</span><span className="te-reo">Ko ta tatou whaainga ko te hanga i tetahi taputapu hei ako me te whakatenatena i nga tangata mo nga waahanga hohonu atu o te noho ki Aotearoa, nga whenua e noho ana i raro iho o te mata o muri ranei o te arai o te ao. Ko te Reality Reality (ranei AR) he mea kaha, tino taputapu maatau mo te whakaatu i nga huinga e kitea. I kite matou i te Ara hei huarahi ki te hono i nga wa o muri, ki te hono i te ao taiao me te ao wairua, me te hono atu i nga waahanga rereke o Aotearoa. E kite ana a AR_ATUA i te hangarau ahumahi hei turanga kaha mo te ako me te hanga hononga ki te ao Māori.</span>
                  </p>
                  <p className="text"><span className="english">Our larger vision is to develop tools to help educate people about the rich history, legends and stories of the land through accessible and inspired augmented reality. Currently this idea is in the prototype stage, so we are seeing what we can technically achieve as a learning project, in order to engage in larger discussion and consultation before taking it further.</span><span className="te-reo">Ko ta tatou tirohanga nui ko te whakawhanake i nga taputapu hei awhina i te ako i te iwi mo te hitori, nga korero tuku iho, me nga korero o te whenua na roto i nga waahanga ka taea te whakauru me te whakatairanga. I tenei wa kei roto i tenei waahanga tauira, na, kei te kite tatou i nga mea ka taea e tatou te whakatutuki hangarau hei kaupapa ako, kia uru atu ai ki nga whakawhitinga korero me nga whakawhitinga korero i mua i te tango.</span>
                  </p>
                  <p className="text"><span className="english">Our first project is inspired by the legend of Tāwhirimātea.</span><span className="te-reo">Ko ta tatou kaupapa tuatahi e whakaohohia ana e te korero a Tāwhirimātea.</span>
                  </p>
                <br/>
              </div>
                
                <div className="about-secondary-title">
                <h2 className="text"><span className="english">Te Reo first.</span><span className="te-reo">Te reo tuatahi.</span></h2>
                </div>
                <div className="who-are-we-body">
                  <img className="about-page-image" src="https://www.tpk.govt.nz/images/constrain/images-28738/768x1024"/>
                  <p className="text"><span className="english">The connection between language and culture is inherent. Words are a method of creating and recording meaning. In this way, language serves as a means of both documentation and living cultural expression. If our aim is to inspire learning and engagement with te ao Māori, we believe that relationship should be grounded in the use of te reo Māori, the first language of Aotearoa.</span><span className="te-reo">Ko ta tatou tirohanga nui ko te whakawhanake i nga taputapu hei awhina i te ako i te iwi mo te hitori, nga korero tuku iho, me nga korero o te whenua na roto i nga waahanga ka taea te whakauru me te whakatairanga. I tenei wa kei roto i tenei waahanga tauira, na, kei te kite tatou i nga mea ka taea e tatou te whakatutuki hangarau hei kaupapa ako, kia uru atu ai ki nga whakawhitinga korero me nga whakawhitinga korero i mua i te tango.</span>
                  </p>
                  <br/>
                </div>
                
                <div className="about-secondary-title">
                <h2 className="text"><span className="english">Augmented Reality App.</span><span className="te-reo">Te Whakanuia o te Aapiri Moni.</span></h2>
            
                </div>
                <div className="who-are-we-body">
                  <img className="about-page-image" src="https://cdn-images-1.medium.com/max/1600/1*F2SJzQidSaPL7dXly_5jmg.jpeg"/>
                  <p className="text"><span className="english">The idea of the AR app is to place a representation of Tāwhirimātea on top of Tangi-te-keo (Mount Victoria), Wellington, the windiest place in our world. Tāwhirimātea’s behaviours will respond to the wind, so that people can look up to the atua on Mount Vic to see what the weather is doing. In our work towards this goal, we are testing and pushing very new AR technologies to the limit of what they are currently capable of, so the AR app is a continual work in progress, driven by a powerful vision.</span><span className="te-reo">Ko ta tatou tirohanga nui ko te whakawhanake i nga taputapu hei awhina i te ako i te iwi mo te hitori, nga korero tuku iho, me nga korero o te whenua na roto i nga waahanga ka taea te whakauru me te whakatairanga. I tenei wa kei roto i tenei waahanga tauira, na, kei te kite tatou i nga mea ka taea e tatou te whakatutuki hangarau hei kaupapa ako, kia uru atu ai ki nga whakawhitinga korero me nga whakawhitinga korero i mua i te tango.</span>
                  </p>
           
                  <br/>
                </div>
                
                <div className="about-secondary-title">
                <h2 className="text"><span className="english">The web app.</span><span className="te-reo">Ko te taupānga tukutuku.</span></h2>
                </div>
                <div className="who-are-we-body">
                  <img className="about-page-image" src="http://papasemar.com/wp-content/uploads/2017/04/1-4.jpg"/>
                  <p className="text"><span className="english">This web app provides a blueprint for what we are aiming to achieve in the realm of augmented reality. Here you can access our research, view a visualisation of what we are working towards, and find ways to contribute to the project or connect with our team.</span><span className="te-reo">Ko ta tatou tirohanga nui ko te whakawhanake i nga taputapu hei awhina i te ako i te iwi mo te hitori, nga korero tuku iho, me nga korero o te whenua na roto i nga waahanga ka taea te whakauru me te whakatairanga. I tenei wa kei roto i tenei waahanga tauira, na, kei te kite tatou i nga mea ka taea e tatou te whakatutuki hangarau hei kaupapa ako, kia uru atu ai ki nga whakawhitinga korero me nga whakawhitinga korero i mua i te tango.</span>
                  </p>
                  <br/>
                </div>
                
                <div className="about-secondary-title">
                <h2 className="text"><span className="english">Free and open source.</span><span className="te-reo">
Te puna tuwhera me te tuwhera.</span></h2>
                </div>
                <div className="who-are-we-body">
                  <img className="about-page-image" src="https://thumbs.dreamstime.com/b/happy-group-people-arms-up-isolated-26045167.jpg"/>
                  <p className="text"><span className="english">AR_ATUA upholds a free/libre and open source ethos, which means the resources should be freely available to those interested in them, and that people can adjust and build upon the work we’ve done. We create things with the intention that they can and will be useful to others, by design. This means we write tools  that are reusable beyond this app, and code that is easy to read. It means we are committed to accessible technology. We welcome feedback and contributions.</span><span className="te-reo">Ko ta tatou tirohanga nui ko te whakawhanake i nga taputapu hei awhina i te ako i te iwi mo te hitori, nga korero tuku iho, me nga korero o te whenua na roto i nga waahanga ka taea te whakauru me te whakatairanga. I tenei wa kei roto i tenei waahanga tauira, na, kei te kite tatou i nga mea ka taea e tatou te whakatutuki hangarau hei kaupapa ako, kia uru atu ai ki nga whakawhitinga korero me nga whakawhitinga korero i mua i te tango.</span>
                  </p>
                
                  <br/>
                </div>
            </div>
            <Link to = '/' className="returnbutton">
              <a><h2 className="text"><span className="english">Return</span><span className="te-reo">Hoki mai</span></h2></a>
            </Link>
          </div>
        </div>
      </div>
    )
}

const mapStateToProps = ({weather
  , dispatch
}) => ({weather
  , dispatch
})

export default connect(mapStateToProps)(About)