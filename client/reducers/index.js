//This takes all our reducers and reduces them into a single value (the state) which is then
//exported to be stored(in the store on our index.js page)

//outdoor tools
import {combineReducers} from 'redux'

//indoor tools
import weather from './weather'

export default combineReducers({
  weather
})
