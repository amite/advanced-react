import React, { Component } from 'react'
import PropTypes from 'prop-types'
import pickBy from 'lodash.pickby'

import Timestamp from './Timestamp'
import SearchBar from './SearchBar'
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

  onStoreChange = () => {
    this.setState(this.props.store.getState())
  }

  componentDidMount () {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange)
  }

  componentWillUnmount () {
    this.props.store.unsubscribe(this.subscriptionId)
  }

  render() {
    let { articles, searchTerm } = this.state

    const searchRE = new RegExp(searchTerm, 'i')
    if (searchTerm) {
      articles = pickBy(articles, (value) => {
        return value.title.match(searchRE)
          || value.body.match(searchRE)
      })
    }

    return (
      <div>
        <Timestamp />
        <SearchBar doSearch={this.props.store.setSearchTerm} />
        <ArticleList
          articles={articles}
        />
      </div>
    )
  }
}

export default App