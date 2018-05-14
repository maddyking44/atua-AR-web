import request from 'superagent'


export function getTextByURL (url) {
  return dispatch => {
    request
      .get('/api/v1/texts'+'/'+url)
      .then(res => {
	dispatch(receiveText(res.body))
      })
  }
}

//action
export function receiveText (text) {
  return {
      type: 'RECEIVE_TEXT',
      text
  }
}
