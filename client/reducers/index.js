//This takes all our reducers and reduces them into a single value (the state) which is then
//exported to be stored(in the store on our index.js page)

//outdoor tools
import {combineReducers} from 'redux'

//indoor tools
import weather from './weather'
import texts from './texts'
import {navFlipReducer as navVisible, navMenuReducer as menuVisible} from './nav'
import navVisible from './nav'
import current_text from './text'
import destination from './opening'

export default combineReducers({
  weather,
  texts,
  navVisible,
  menuVisible,
  current_text
  current_text,
  destination
})
