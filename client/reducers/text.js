function textReducer (state={}, action) {
  switch (action.type) {
    case 'RECEIVE_TEXT':
      return action.text
    default:
      return state
  }
}

export default textReducer
