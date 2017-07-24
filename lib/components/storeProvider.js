import React from 'react'
import PropTypes from 'prop-types'

const storeProvider = (Component) => {
  const withStore = (props, { store }) =>
    <Component {...props} store={store} />

  withStore.contextTypes = {
    store: PropTypes.object
  }

  withStore.displayName = `${Component.name}Container`

  return withStore
}

export default storeProvider