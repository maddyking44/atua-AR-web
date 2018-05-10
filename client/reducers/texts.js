var initialState = require('../texts.json')

function textsReducer (state=initialState, action) {
  switch (action.type) {
    case 'GET_TEXTS':
      return action.texts
    default:
      return state
  }
}

export default textsReducer
