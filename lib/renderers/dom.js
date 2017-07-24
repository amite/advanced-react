import React from 'react'
import ReactDom from 'react-dom'

import StateApi from 'state-api'
import App from 'components/App'

const store = new StateApi(window.initialData)

ReactDom.render(
  <App store={store} />, 
  document.getElementById('root')
)