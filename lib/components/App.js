import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ArticleList from './ArticleList'

class App extends Component {
  static childContextTypes = {
    store: PropTypes.object,
  }

  getChildContext() {
    return {
      store: this.props.store
    }
  }

  state = this.props.store.getState()

  render() {
    return (
      <ArticleList
        articles={this.state.articles}
      />
    )
  }
}

export default App