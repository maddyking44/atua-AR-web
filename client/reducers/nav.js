function navReducer (state = false, action) {
  switch (action.type) {
    case 'FLIP_NAV':
      return action.navVisible
    default:
      return state
  }
}

export default navReducer
