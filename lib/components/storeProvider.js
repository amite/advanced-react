import React from 'react'
import PropTypes from 'prop-types'

const storeProvider = (extraProps = () => ({})) => (Component) => {
  return class extends React.Component {
    static displayName = `${Component.name}Container`;
    static contextTypes = {
      store: PropTypes.object,
    }

    usedState = () => {
      return extraProps(this.context.store, this.props)
    }

    render() {
      return <Component
        {...this.props}
        {...this.usedState()}
        store={this.context.store} />
    }
  }
}

export default storeProvider