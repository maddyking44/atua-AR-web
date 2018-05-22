import textsReducer from '../../client/reducers/texts'
import {navMenuReducer, navFlipReducer} from '../../client/reducers/nav'
import openingReducer from '../../client/reducers/opening'

test ('ENTER_SITE works', () => {
  const expected = 'home'
  const destination = 'home'
  const initialState = 'opening'
  const action = {
      type: 'ENTER_SITE',
      destination
  }

  const actual = openingReducer(initialState, action)

  expect(actual).toEqual(expected)
})

test('initial state set to opening', () => {
  const expected = 'opening'
  const action = {}
  const actual = openingReducer(undefined, action)

  expect(actual).toEqual(expected)
})

test('initial state for navMenuReducer', () => {
  const expected = false
  const action = {}
  const actual = navMenuReducer(undefined, action)

  expect(actual).toBe(expected)
})

test('OPEN_NAV works', () => {

  const expected = true
  const navOpen = true
  const initialState = false
  const action = {
      type: 'OPEN_NAV',
      navOpen
  }

  const actual = navMenuReducer(initialState, action)

  expect(actual).toBe(expected)
})

test('CLOSE_NAV works', () => {

  const expected = false
  const navOpen = false
  const initialState = true
  const action = {
      type: 'CLOSE_NAV',
      navOpen
  }

  const actual = navMenuReducer(initialState, action)

  expect(actual).toBe(expected)
})

test('navFlipReducer initial state', ()=> {
    const expected = false
    const action = {}
    const actual = navFlipReducer(undefined, action)

    expect(actual).toBe(expected)
})

test('FLIP_NAV works', () => {
    const expected = true
    const navVisible = true
    const initialState = false
    const action = {
      type: 'FLIP_NAV',
      navVisible
    }

    const actual = navFlipReducer(initialState, action)

    expect(actual).toBe(expected)
})

test('texts Reducer Initial State', () => {
  const expected = []

  const actual = textsReducer(undefined, {})

  expect(actual).toEqual(expected)
})

test('RECEIVE_TEXTS', () => {
  const fakeTexts = [
    'Hello',
    'Howdy'
  ]
  const expected = [...fakeTexts]

  const action = {
    type: 'RECEIVE_TEXTS',
    texts: fakeTexts
  }

  const actual = textsReducer(undefined, action)

  expect(actual).toEqual(expected)
})
