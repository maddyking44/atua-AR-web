function textsReducer (state=[], action) {
  switch (action.type) {
    case 'RECEIVE_TEXTS':
      console.log({reducerTexts: action.texts})
      return action.texts
    default:
      return state
  }
}

export default textsReducer
