import {getTextByURL, receiveText} from '../../../client/actions/text'
import nock from 'nock'

test('getText will dispatch an action on success', () => {
  const fakeText = [
    'hello'
  ]

  const scope = nock('http://localhost:80')
    .get('/api/v1/text/hello')
    .reply(200, fakeText);

  const expectedAction = {
    type: 'RECEIVE_TEXT',
    text: fakeText
  }

  const dispatch = jest.fn()
    .mockImplementationOnce(action => {
      expect(action).toEqual(expectedAction)
      scope.done()
    })

  getTextByURL()(dispatch)

})
