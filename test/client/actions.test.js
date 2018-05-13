import {getTexts, receiveTexts} from '../../client/actions/texts'
import nock from 'nock'

test('Receive Texts action creator', () => {
  const fakeTexts = [
    'Hello',
    'Howdy'
  ]

  const expected = {
    type: 'RECEIVE_TEXTS',
    texts: fakeTexts
  }

  const actual = receiveTexts(fakeTexts)

  expect(actual).toEqual(expected)
})

test('getTexts will dispatch an action on success', () => {
  const fakeTexts = [
    'Hello',
    'Texts'
  ]

  const scope = nock('http://localhost:80')
    .get('/api/v1/texts')
    .reply(200, fakeTexts);

  const expectedAction = {
    type: 'RECEIVE_TEXTS',
    texts: fakeTexts
  }

  const dispatch = jest.fn()
    .mockImplementationOnce(action => {
      expect(action).toEqual(expectedAction)
      scope.done()
    })

  getTexts()(dispatch)

})

test('getTexts error', () => {
  const scope = nock('http://localhost:80')
    .get('/api/v1/texts')
    .reply(404);

  const actual = getTexts()()
  expect(actual).toBe(undefined)
})
