import textsReducer from '../../client/reducers/texts'
import {navMenuReducer, navFlipReducer}from '../../client/reducers/nav'

test('Reducer Initial State', () => {
  const expected = []

  const actual = textsReducer(undefined, {})

  expect(actual).toEqual(expected)
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
